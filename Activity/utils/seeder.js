// set up a temporary (in memory) database
const Datastore = require('nedb')
const LOG = require('../utils/logger.js')

// require each data file

const customers = require('../data/customers.json')
const user = require('../data/user.json')
const account = require('../data/account.json')
const category = require('../data/category.json')
const transaction = require('../data/transaction.json')
const products = require('../data/products.json')
const orders = require('../data/orders.json')
const orderLineItems = require('../data/orderLineItems.json')
const puppies = require('../data/puppies.json')

// inject the app to seed the data

module.exports = (app) => {
  LOG.info('START seeder.')
  const db = {}

  // Customers don't depend on anything else...................

  db.customers = new Datastore()
  db.customers.loadDatabase()

  // insert the sample data into our data store
  db.customers.insert(customers)

  // initialize app.locals (these objects will be available to our controllers)
  app.locals.customers = db.customers.find(customers)
  LOG.debug(`${app.locals.customers.query.length} customers seeded`)

  db.account = new Datastore()
  db.account.loadDatabase()

  // insert the sample data into our data store
  db.account.insert(account)

  // initialize app.locals (these objects will be available to our controllers)
  app.locals.account = db.account.find(account)
  LOG.debug(`${app.locals.account.query.length} account seeded`)


  db.user = new Datastore()
  db.user.loadDatabase()

  // insert the sample data into our data store
  db.user.insert(user)

  // initialize app.locals (these objects will be available to our controllers)
  app.locals.user = db.user.find(user)
  LOG.debug(`${app.locals.user.query.length} user seeded`)

  db.category = new Datastore()
  db.category.loadDatabase()

  // insert the sample data into our data store
  db.category.insert(category)

  // initialize app.locals (these objects will be available to our controllers)
  app.locals.category = db.category.find(category)
  LOG.debug(`${app.locals.category.query.length} category seeded`)

  db.transaction = new Datastore()
  db.transaction.loadDatabase()

  // insert the sample data into our data store
  db.transaction.insert(transaction)

  // initialize app.locals (these objects will be available to our controllers)
  app.locals.transaction = db.transaction.find(transaction)
  LOG.debug(`${app.locals.transaction.query.length} category seeded`)


  // Products don't depend on anything else .....................

  db.products = new Datastore()
  db.products.loadDatabase()

  // insert the sample data into our data store
  db.products.insert(products)

  // initialize app.locals (these objects will be available to our controllers)
  app.locals.products = db.products.find(products)
  LOG.debug(`${app.locals.products.query.length} products seeded`)

  // Orders need a customer beforehand .................................

  db.orders = new Datastore()
  db.orders.loadDatabase()

  // insert the sample data into our data store
  db.orders.insert(orders)

  // initialize app.locals (these objects will be available to our controllers)
  app.locals.orders = db.orders.find(orders)
  LOG.debug(`${app.locals.orders.query.length} orders seeded`)

  // Each Order Line Item needs a product and an order beforehand ...................

  db.orderLineItems = new Datastore()
  db.orderLineItems.loadDatabase()

  // insert the sample data into our data store
  db.orderLineItems.insert(orderLineItems)

  // initialize app.locals (these objects will be available to our controllers)
  app.locals.orderLineItems = db.orderLineItems.find(orderLineItems)
  LOG.debug(`${app.locals.orderLineItems.query.length} orderLineItems seeded`)

  // extra...

  db.puppies = new Datastore()
  db.puppies.loadDatabase()

  // insert the sample data into our data store
  db.puppies.insert(puppies)

  // initialize app.locals (these objects will be available to our controllers)
  app.locals.puppies = db.puppies.find(puppies)
  LOG.debug(`${app.locals.puppies.query.length} puppies seeded`)

  LOG.info('END Seeder. Sample data read and verified.')
}
