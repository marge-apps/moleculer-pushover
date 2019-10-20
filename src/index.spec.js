jest.mock('pushover-notifications');
const Push = require('pushover-notifications');
const {ServiceBroker} = require('moleculer');
const pushoverService = require('.');

const pushover = new Push({
	token: 'a',
	user: 'b'
});

describe('Test pushoverService', () => {
	const broker = new ServiceBroker();
	const service = broker.createService(pushoverService);

	beforeAll(() => broker.start());
	afterAll(() => broker.stop());

	it('should be created', () => {
		expect(service).toBeDefined();
	});

	it('will call pushover send', async () => {
		await broker.call('pushover.send', {message: 'Hello!'});
		expect(pushover.send).toHaveBeenCalled();
	});
});
