const send = jest.fn().mockImplementation((_, cb) => {
	cb();
});

module.exports = function() {
	return {send};
};
