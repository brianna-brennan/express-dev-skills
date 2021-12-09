const skills = [
	{ id: 12345, skill: 'Write functions in JavaScript', can: true },
	{ id: 67891, skill: 'Write functions using Recursion', cant: true },
	{ id: 23456, skill: 'Style with CSS', can: true },
];

module.exports = {
	getAll,
	getOne,
	create,
	deleteOne,
};

function getAll() {
	return skills;
}

function getOne(id) {
	// URL params are strings - convert to a number
	id = parseInt(id);
	return skills.find((skill) => skill.id === id);
}

function create(skill) {
	skill.id = Math.floor(Math.random() * 1000000);
	skill.can = false;
	skills.push(skill);
}

function deleteOne(id) {
	const idx = skills.findIndex((skill) => skill.id === parseInt(id));
	skills.splice(idx, 1);
}
