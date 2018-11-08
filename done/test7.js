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
});

afterEach(function(){
    console.log('Test is done');
     driver.quit();  
});

it('Testing product carts in admin panel - loop',async function(){
    let products = await driver.findElements(By.css('#app-'));
        for (let i = 0; i < products.length;i++) {
            products = await driver.findElements(By.css('#app-'));
            await products[i].click();
            await driver.wait(until.elementLocated(By.css('h1')),5000);
            let nestedItems = await driver.findElements(By.css('.docs li'));
            if (nestedItems.length > 0) {
                for(let j = 0; j < nestedItems.length; j++) {
                     nestedItems = await driver.findElements(By.css('.docs li'));
                    await nestedItems[j].click();
                    await driver.wait(until.elementLocated(By.css('h1')),5000);
                }
            }
            await driver.wait(until.elementLocated(By.css('.logotype')),5000).click();
            await driver.wait(until.urlIs('http://localhost/litecart/admin/'),5000);   
        }
    });
});