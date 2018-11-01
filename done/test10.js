const {Builder, By, Key, until} = require('selenium-webdriver');
const path = require('geckodriver').path;
const chrome = require('selenium-webdriver/chrome');
const webdriver = require('selenium-webdriver');
const assert = require('chai').assert;

describe('Testing 10', function(){
this.timeout(500000);

beforeEach(async function(){
    driver = await new Builder().forBrowser('firefox').build();
    driver.get('http://localhost/litecart/en/');
    await driver.wait(until.urlIs('http://localhost/litecart/en/'), 5000).catch(function(error){
        console.log(error);
    });
    
});

afterEach(function(){
    console.log('Test is done');
     driver.quit();
    
});

it('Testing if product page is correct', async function(){
    var productItem = await driver.findElement(By.css("#box-campaigns > div > ul > li > a.link"));
    await productItem.click();
    var correctAdress = 'http://localhost/litecart/en/rubber-ducks-c-1/subcategory-c-2/yellow-duck-p-1';
    var currentAdress = await driver.getCurrentUrl();
    
    assert.equal(correctAdress, currentAdress, 'Url is wrong');
});

it('Testing if product name text is correct', async function(){
    var productItem = await driver.findElement(By.css("#box-campaigns > div > ul > li > a.link"));
    await productItem.click();
    var correctName = 'Yellow Duck'
    var currentName = await driver.findElement(By.css("#box-product > div:nth-child(1) > h1")).getText();
    assert.equal(correctName, currentName, 'Text is different');
});

it('Testing if product price is even on main page and product page.Campaign', async function(){
    await driver.wait(until.elementLocated(By.css('#box-campaigns > div > ul > li > a.link > div.price-wrapper > strong')),5000);
    var mainPagePriceCampaign = await driver.findElement(By.css("#box-campaigns > div > ul > li > a.link > div.price-wrapper > strong")).getText();
    var productItem = await driver.findElement(By.css("#box-campaigns > div > ul > li > a.link"));
    await productItem.click()
    await driver.wait(until.elementLocated(By.css('#box-product > div.content > div.information > div.price-wrapper > strong')),5000);
    var productPagePriceCampaign = await driver.findElement(By.css("#box-product > div.content > div.information > div.price-wrapper > strong")).getText();
    assert.equal(mainPagePriceCampaign,productPagePriceCampaign,"Prices are not equal")
});

it('Testing if product price is even on main page and product page.Regular', async function(){
    await driver.wait(until.elementLocated(By.css('#box-campaigns > div > ul > li > a.link > div.price-wrapper > s')),5000);
    var mainPagePriceRegular = await driver.findElement(By.css("#box-campaigns > div > ul > li > a.link > div.price-wrapper > s")).getText();
    var productItem = await driver.findElement(By.css("#box-campaigns > div > ul > li > a.link"));
    await productItem.click()
    await driver.wait(until.elementLocated(By.css('#box-product > div.content > div.information > div.price-wrapper > s')),5000);
    var productPagePriceProductRegular = await driver.findElement(By.css("#box-product > div.content > div.information > div.price-wrapper > s")).getText();
    assert.equal(mainPagePriceRegular,productPagePriceProductRegular,"Prices are not equal")
});

it('Testing product price styles main page text-decoration and color, regular price', async function(){
    var grayColor = 'rgb(119, 119, 119)';
    var textDecoration = "line-through";
    await driver.wait(until.elementLocated(By.css('#box-campaigns > div > ul > li > a.link > div.price-wrapper > s')),5000);
    var mainPagePriceRegular = await driver.findElement(By.css("#box-campaigns > div > ul > li > a.link > div.price-wrapper > s")).getCssValue('color');
    var mainPagePriceRegularTextDec= await driver.findElement(By.css("#box-campaigns > div > ul > li > a.link > div.price-wrapper > s")).getCssValue('text-decoration')
     assert.equal(grayColor,mainPagePriceRegular,"Colors are not right")
     assert.equal(textDecoration,mainPagePriceRegularTextDec,"Decoration is wrong")
});

it('Testing product price styles main page text-decoration and color, campaign price', async function(){
    var corectColor = 'rgb(204, 0, 0)';
    var fontWeight = "900";
    await driver.wait(until.elementLocated(By.css('#box-campaigns > div > ul > li > a.link > div.price-wrapper > strong')),5000);
    var actualPriceColor = await driver.findElement(By.css("#box-campaigns > div > ul > li > a.link > div.price-wrapper > strong")).getCssValue('color');
    var actualPriceFontWeight= await driver.findElement(By.css("#box-campaigns > div > ul > li > a.link > div.price-wrapper > strong")).getCssValue('font-weight');
     assert.equal(corectColor,actualPriceColor,"Colors are not right");
     assert.equal(fontWeight,actualPriceFontWeight,"Font weight is wrong");
});

});