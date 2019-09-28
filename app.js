var i = 1;
var t = Flik('.flik', {
	click: i
});

t.element.onclick = function (e) {

	if (i === 10) {
		i = 0;
	}

	t.update({
		click: ++i
	});

};

var data = {
	employees: [{
			name: 'Gabriel',
			email: 'gabriel@mail.com'
		},
		{
			name: 'Bob',
			email: 'bob32gmail.com'
		},
		{
			name: 'Jai',
			email: 'jai87gmail.com'
		}
	]
};

var employees = Flik('.employees', data.employees);