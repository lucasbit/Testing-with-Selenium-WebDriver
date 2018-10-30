const {Builder, By, Key, until} = require('selenium-webdriver');
const path = require('geckodriver').path;
const chrome = require('selenium-webdriver/chrome');
const webdriver = require('selenium-webdriver');
const assert = require('chai').assert;

describe('Testing 10', function(){
this.timeout(500000);

beforeEach(async function(){
    driver = await new Builder().forBrowser('firefox').build();
    driver.get('http://localhost/litecart/');
    await driver.wait(until.urlIs('http://localhost/litecart/'), 5000).catch(function(error){
        console.log(error);
    });
    
});

afterEach(function(){
    console.log('Test is done');
     driver.quit();
    
});

it('Testing if product page is correct', async function(){
    var productItem = await driver.findElement(By.css("#campaign-products .link"));
    await productItem.click()
    await driver.wait(until.elementLocated(By.css('#view-full-page > a:nth-child(1)')),5000).click();

    var correctAdress = 'http://localhost/litecart/rubber-ducks-c-1/subcategory-c-2/yellow-duck-p-1';
    var currentAdress = await driver.getCurrentUrl();
    
    assert.equal(correctAdress, currentAdress, 'Url is wrong');
});

it('Testing if product name text is correct', async function(){
    var productItem = await driver.findElement(By.css("#campaign-products .link"));
    await productItem.click()
    await driver.wait(until.elementLocated(By.css('#view-full-page > a:nth-child(1)')),5000).click();
    var correctName = 'Yellow Duck'
    var currentName = await driver.findElement(By.css("#box-product .title")).getText();
    assert.equal(correctName, currentName, 'Text is different');
});

it('Testing if product price is even on main page and product page.Campaign', async function(){
    await driver.wait(until.elementLocated(By.css('#box-campaign-products .campaign-price')),5000);
    var mainPagePriceCampaign = await driver.findElement(By.css("#box-campaign-products .campaign-price")).getText();
    var productItem = await driver.findElement(By.css("#campaign-products .link"));
    await productItem.click()
    await driver.wait(until.elementLocated(By.css('#box-product .campaign-price')),5000);
    var productPagePriceCampaign = await driver.findElement(By.css("#box-product .campaign-price")).getText();
    assert.equal(mainPagePriceCampaign,productPagePriceCampaign,"Prices are not equal")
});

it('Testing if product price is even on main page and product page.Regular', async function(){
    await driver.wait(until.elementLocated(By.css('#box-campaign-products .campaign-price')),5000);
    var mainPagePriceRegular = await driver.findElement(By.css("#box-campaign-products .regular-price")).getText();
    var productItem = await driver.findElement(By.css("#campaign-products .link"));
    await productItem.click()
    await driver.wait(until.elementLocated(By.css('#box-product .campaign-price')),5000);
    var productPagePriceProductRegular = await driver.findElement(By.css("#box-product .regular-price")).getText();
    assert.equal(mainPagePriceRegular,productPagePriceProductRegular,"Prices are not equal")
});

it('Testing product price styles main page text-decoration and color, regular price', async function(){
    var grayColor = 'rgb(51, 51, 51)';
    var textDecoration = "line-through";
    await driver.wait(until.elementLocated(By.css('#box-campaign-products .campaign-price')),5000);
    var mainPagePriceRegular = await driver.findElement(By.css("#box-campaign-products .regular-price")).getCssValue('color');
    var mainPagePriceRegularTextDec= await driver.findElement(By.css("#box-campaign-products .regular-price")).getCssValue('text-decoration')
     assert.equal(grayColor,mainPagePriceRegular,"Colors are not right")
     assert.equal(textDecoration,mainPagePriceRegularTextDec,"Decoration is wrong")
});

it('Testing product price styles main page text-decoration and color, campaign price', async function(){
    var corectColor = 'rgb(204, 0, 0)';
    var fontWeight = "700";
    await driver.wait(until.elementLocated(By.css('#box-campaign-products .regular-price')),5000);
    var actualPriceColor = await driver.findElement(By.css("#box-campaign-products .campaign-price")).getCssValue('color');
    var actualPriceFontWeight= await driver.findElement(By.css("#box-campaign-products .campaign-price")).getCssValue('font-weight');
     assert.equal(corectColor,actualPriceColor,"Colors are not right");
     assert.equal(fontWeight,actualPriceFontWeight,"Font weight is wrong");
});

});