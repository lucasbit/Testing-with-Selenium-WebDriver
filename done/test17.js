const {Builder, By, Key, until} = require('selenium-webdriver');
const path = require('chromedriver').path;
const chrome = require('selenium-webdriver/chrome');
const webdriver = require('selenium-webdriver');
const assert = require('chai').assert;
var faker = require('faker');

describe('Testing 13', function(){
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
    await driver.wait(until.elementLocated(By.css('.dataTable tr:nth-child(4) a')),5000).click();
});

afterEach(function(){
    console.log('Test is done');
     driver.quit();  
});

it('Testing product carts in admin panel - loop', async function(){
    let products = await driver.findElements(By.css('.dataTable tr:nth-child(n + 4) td:nth-child(3) > a'));
    for (let i = 0; i < products.length;i++) {
        products = await driver.findElements(By.css('.dataTable tr:nth-child(n + 4) td:nth-child(3) > a'));
        await products[i].click();
        await driver.wait(until.elementLocated(By.css('h1')),5000);
        await driver.wait(until.elementLocated(By.css('button[name=cancel]')),5000).click();
        driver.manage().logs().get("browser").then(function(logsEntries) {
            logsEntries.forEach(function(l) {
                console.log(l)
            });
        });
    }
    });


});