(function (global) {
	var Flik = function (selector, content) {
		return new Flik.init(selector, content);
	};

	function getProperty(propertyName, object) {
		var parts = propertyName.split('.'),
			length = parts.length,
			i,
			property = object || this;

		for (i = 0; i < length; i++) {
			property = property[parts[i]];
		}

		return property;
	}

	Flik.prototype = {
		update: function (content) {
			this.content = content;

			let table = this.template.match(/{([^}]*)}/g);
			this.element.innerHTML = '';

			if (!Array.isArray(this.content)) {
				this.content = [this.content];
			}

			for (var i = 0; i < this.content.length; i++) {
				var res = this.template;

				for (var a = 0; a < table.length; a++) {
					let name = table[a].replace('{', '').replace('}', '');
					var property = getProperty(name, this.content[i]);
					if (property !== undefined) {
						res = res.replace(table[a], property);
					}
				}
				this.element.innerHTML += res;
			}

			return this;
		}
	};

	Flik.init = function (selector, content) {
		var self = this;

		self.element = typeof selector === 'string' ? global.document.querySelector(selector) : selector;

		if (!self.element) {
			throw 'Missing element';
		}

		self.selector = selector;
		self.content = content || [];
		self.template = self.element.innerHTML || '';
		self.element.innerHTML = '';
		self.update(self.content);
	};

	Flik.init.prototype = Flik.prototype;

	global.Flik = global._F = Flik;
})(window);