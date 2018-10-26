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

var products = await driver.findElements(By.css('.product'));
await products.forEach(async function(element) {
   let singleSticker = await element.findElements(By.css('.sticker')).catch(function(error){
       console.log(error);
   });
  console.log(singleSticker.length);
  assert.equal(singleSticker.length, 1, 'There is too many stickers or there is none');
   
});
})

});