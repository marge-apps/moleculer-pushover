const Push = require('pushover-notifications');

module.exports = {
	name: 'pushover',
	settings: {
		user: 'a',
		token: 'b'
	},
	actions: {
		send: {
			params: {
				message: {type: 'string'},
				title: {optional: true, type: 'string'},
				sound: {optional: true, type: 'string'},
				device: {optional: true, type: 'string'},
				priority: {optional: true, type: 'number'},
				url: {optional: true, type: 'string'},
				url_title: {optional: true, type: 'string'}, // eslint-disable-line camelcase
				timestamp: {optional: true, type: 'number'}
			},
			handler(ctx) {
				const {params} = ctx;
				const {pushover} = this;

				return new Promise((resolve, reject) => {
					pushover.send(params, (err, res) =>
						err ? reject(err) : resolve(res)
					);
				});
			}
		}
	},
	created() {
		const {settings} = this;

		const pushover = new Push({
			user: settings.user,
			token: settings.token
		});

		this.pushover = pushover;
	}
};
