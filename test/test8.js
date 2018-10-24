const {Builder, By, Key, until} = require('selenium-webdriver');
const path = require('chromedriver').path;
const chrome = require('selenium-webdriver/chrome');
const webdriver = require('selenium-webdriver');
const assert = require('chai').assert;

describe('Testing 7', function(){
this.timeout(500000);

beforeEach(async function(){
    driver = await new Builder().forBrowser('chrome').build();
    driver.get('http://localhost/litecart/');
});

afterEach(function(){
    console.log('Test is done');
     driver.quit();
    
});

it('Check Campaign Products stickers', async function(){
    var product = await driver.findElements(By.css('#box-campaign-products > div > div > div'));
    var sticker = await driver.findElements(By.css('#box-campaign-products > div > div > div > a > div.image-wrapper > div'))
    assert.equal(product.length , sticker.length , 'There is no sticker, or there are to many'); 
})
it('Check Popular Products stickers', async function(){
    var products = await driver.findElements(By.css('#box-popular-products .link'));
    var stickers = await driver.findElements(By.css('#box-popular-products .sticker'));
    console.log(products.length);
    console.log(stickers.length);
    assert.equal(products.length , stickers.length , 'There is no sticker, or there are to many');  
})
it('Check Popular Products stickers', async function(){
    var products = await driver.findElements(By.css('#latest-products .link'));
    var stickers = await driver.findElements(By.css('#latest-products .sticker'));
    console.log(products.length);
    console.log(stickers.length);
    assert.equal(products.length , stickers.length , 'There is no sticker, or there are to many');  
})

});