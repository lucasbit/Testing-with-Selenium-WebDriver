// lounching selelium trough Firefox browser

// const webdriver = require('selenium-webdriver');
// const firefox = require('selenium-webdriver/firefox');
// const path = require('geckodriver').path;

// const driver = new webdriver.Builder().forBrowser('firefox').build();
// driver.get('https://qa-courses.com');

// lounching selelium trough Edge browser

var edge = require('selenium-webdriver/edge');
const path = require('edgedriver').path;
var service = new edge.ServiceBuilder()
    .setPort(55555)
    .build();

var options = new edge.Options();
var driver = edge.Driver.createSession(options, service);

driver.get('http://www.google.com/ncr')