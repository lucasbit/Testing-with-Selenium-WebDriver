const {Builder, By, Key, until} = require('selenium-webdriver');
const path = require('chromedriver').path;
const chrome = require('selenium-webdriver/chrome');
const webdriver = require('selenium-webdriver');
const assert = require('chai').assert;
var faker = require('faker');

describe('Testing 15', function(){
this.timeout(500000);

beforeEach(async function(){
    driver = await new Builder().forBrowser('chrome').build();
    driver.get('http://localhost/litecart/admin/');
    await driver.findElement(By.css('#box-login input[name=username]')).sendKeys('admin');
    await driver.findElement(By.css('#box-login input[name=password]')).sendKeys('admin');
    await driver.findElement(By.css('#box-login button[name=login]')).click();
    await driver.wait(until.elementLocated(By.css('#box-apps-menu li:nth-child(2)')),5000).click();
    await driver.wait(until.elementLocated(By.css('#doc-catalog')),5000).click();
    await driver.wait(until.elementLocated(By.css('.dataTable tr:nth-child(3) a')),5000).click();
});

afterEach(function(){
    console.log('Test is done');
     driver.quit();  
});

it('Testing product carts in admin panel - loop', async function(){
    let products = await driver.findElements(By.css('.dataTable tr:nth-child(n + 5) td:nth-child(3) > a'));
    await products.forEach( async (element)=> {
        //click on the element
        await element.click();
        //get back to previous page
        await driver.wait(until.elementLocated(By.css('button[name=cancel]')),5000).click();
        //wait until previous page is loaded (and it should continue)
        await driver.wait(until.urlIs('http://localhost/litecart/admin/?app=catalog&doc=catalog&category_id=1'),5000);
        // getting logs
        driver.manage().logs().get("browser").then(function(logsEntries) {
            logsEntries.forEach(function(l) {
                console.log(l)
            });
        });
       })
   
});
it('Testing product carts in admin panel - manual duck1', async function(){
    let duck = await driver.findElement(By.css('.dataTable tr:nth-child(5) a'));
    await duck.click();
    await driver.wait(until.elementLocated(By.css('button[name=cancel]')),5000).click();
    await driver.wait(until.urlIs('http://localhost/litecart/admin/?app=catalog&doc=catalog&category_id=1'),5000);
    await driver.manage().logs().get("browser").then(function(logsEntries) {
        logsEntries.forEach(function(el) {
            console.log(el)
        });
    });
});
it('Testing product carts in admin panel - manual duck2', async function(){
    let duck = await driver.findElement(By.css('.dataTable tr:nth-child(6) a'));
    await duck.click();
    await driver.wait(until.elementLocated(By.css('button[name=cancel]')),5000).click();
    await driver.wait(until.urlIs('http://localhost/litecart/admin/?app=catalog&doc=catalog&category_id=1'),5000);
    await driver.manage().logs().get("browser").then(function(logsEntries) {
        logsEntries.forEach(function(el) {
            console.log(el)
        });
    });
});
it('Testing product carts in admin panel - manual duck3', async function(){
    let duck = await driver.findElement(By.css('.dataTable tr:nth-child(7) a'));
    await duck.click();
    await driver.wait(until.elementLocated(By.css('button[name=cancel]')),5000).click();
    await driver.wait(until.urlIs('http://localhost/litecart/admin/?app=catalog&doc=catalog&category_id=1'),5000);
    await driver.manage().logs().get("browser").then(function(logsEntries) {
        logsEntries.forEach(function(el) {
            console.log(el)
        });
    });
});
it('Testing product carts in admin panel - manual duck4', async function(){
    let duck = await driver.findElement(By.css('.dataTable tr:nth-child(8) a'));
    await duck.click();
    await driver.wait(until.elementLocated(By.css('button[name=cancel]')),5000).click();
    await driver.wait(until.urlIs('http://localhost/litecart/admin/?app=catalog&doc=catalog&category_id=1'),5000);
    await driver.manage().logs().get("browser").then(function(logsEntries) {
        logsEntries.forEach(function(el) {
            console.log(el)
        });
    });
});
it('Testing product carts in admin panel - manual duck5', async function(){
    let duck = await driver.findElement(By.css('.dataTable tr:nth-child(9) a'));
    await duck.click();
    await driver.wait(until.elementLocated(By.css('button[name=cancel]')),5000).click();
    await driver.wait(until.urlIs('http://localhost/litecart/admin/?app=catalog&doc=catalog&category_id=1'),5000);
    await driver.manage().logs().get("browser").then(function(logsEntries) {
        logsEntries.forEach(function(el) {
            console.log(el)
        });
    });
});

});