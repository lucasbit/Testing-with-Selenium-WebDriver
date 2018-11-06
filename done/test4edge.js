var edge = require('selenium-webdriver/edge');
const path = require('edgedriver').path;
var service = new edge.ServiceBuilder()
    .setPort(55555)
    .build();

var options = new edge.Options();
var driver = edge.Driver.createSession(options, service);

driver.get('http://www.google.com/ncr')
driver.quit();