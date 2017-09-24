'use strict';

const accounts = require('../fixtures/accounts');

module.exports.get = (req, res, next) => {
	res.end(JSON.stringify(accounts));
};
