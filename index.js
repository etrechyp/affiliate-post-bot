require("dotenv").config();
const consoleLog = require("./utils/console-log");

const CollectiveBot = require('./classes/collective');
const ImpactBot = require('./classes/impact');
const WalmartBot = require('./classes/walmart');


consoleLog.info('Bot started');

new CollectiveBot();
new ImpactBot();
new WalmartBot();

consoleLog.wait('Waiting for cron job');