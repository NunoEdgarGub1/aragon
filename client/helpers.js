const helpers = {}

helpers.now = () => moment()
helpers.timeRange = (a, b) => moment(a).twix(b).humanizeLength()
helpers.session = name => Session.get(name)
helpers.plus = (a, b) => a + b
helpers.greaterThan = (a, b) => a > b
helpers.equals = (a, b) => a === b
helpers.percentFormat = x => `${Math.round(10000 * (x || 0)) / 100}%`
helpers.arrayAccess = (array, index) => array[index]
helpers.isNull = (x) => helpers.equals(x, null)
helpers.isNotNull = (x) => !helpers.isNull(x)
helpers.count = (x) => x.count()

helpers.unhandledNotifications = () => Notifications.find({ handled: false }).count()

Object.keys(helpers).forEach(k => Template.registerHelper(k, helpers[k]))

export default helpers
