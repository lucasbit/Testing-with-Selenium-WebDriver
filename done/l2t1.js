const webdriver = require('selenium-webdriver');
const chrome = require('selenium-webdriver/chrome');
const path = require('chromedriver').path;

const driver = new webdriver.Builder().forBrowser('chrome').build();
driver.get('https://qa-courses.com/');
// driver.quit();
