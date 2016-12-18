'use strict';

const User = {
	names: [
	'Dave',
	'Ashok',
	'Pavan',
	'Thirumalesh'],
	getNamesList: function() {
		return this.names.sort();
	}
};

module.exports = User; 