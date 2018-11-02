const {Builder, By, Key, until} = require('selenium-webdriver');
const path = require('chromedriver').path;
const chrome = require('selenium-webdriver/chrome');
const webdriver = require('selenium-webdriver');
const assert = require('chai').assert;
var faker = require('faker');

describe('Testing 12', function(){
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

it('user registration form', async function(){
    let catalogBtn = await driver.wait(until.elementLocated(By.css('#box-apps-menu li:nth-child(2) > a')),5000).click();
    await driver.wait(until.elementLocated(By.css('.dataTable tr')),5000);
    let listLengthBeforeTestAdding = await driver.findElements(By.css('.dataTable tr'));
    let addNewProductBtn = await driver.wait(until.elementLocated(By.css('#content .button:nth-child(2)')),5000).click();
    // product general 
    let checkBox = await driver.wait(until.elementLocated(By.css('#tab-general input:first-of-type')),5000).click();
    let productName = await driver.findElement(By.css('#tab-general  input[type=text]')).sendKeys(faker.commerce.productName());
    let productCode = await driver.findElement(By.css('#tab-general  input[name=code]')).sendKeys(faker.random.number(10000));
    let productGender = await driver.findElement(By.xpath('//*[@id="tab-general"]/table/tbody/tr[7]/td/div/table/tbody/tr[3]/td[1]/input')).click();
    let productQuantity = await driver.findElement(By.css('#tab-general  input[name=quantity]')).sendKeys(faker.random.number(100));
    let productValidFrom = await driver.findElement(By.css('#tab-general  input[name=date_valid_from]')).sendKeys('10032018');
    let productValidTo = await driver.findElement(By.css('#tab-general  input[name=date_valid_to]')).sendKeys('10032019');
    // product information
    let productInformationBtn = await driver.findElement(By.css('.index li:nth-child(2)')).click();
    let manufacturer = await driver.findElement(By.css('#tab-information select[name=manufacturer_id]')).click();
    let manufacturerOption = await driver.findElement(By.css('#tab-information select[name=manufacturer_id] option:nth-child(2)')).click();
    let keywords = await driver.findElement(By.css('#tab-information input[name=keywords]')).sendKeys(`${faker.commerce.productAdjective()} ${faker.commerce.productAdjective()} ${faker.commerce.productAdjective()}`);
    let shortdescription = await driver.findElement(By.css('#tab-information tr:nth-child(4) input')).sendKeys(faker.lorem.sentence());
    let description = await driver.findElement(By.css('#tab-information .trumbowyg-editor')).sendKeys(faker.lorem.paragraph());
    let headTitle = await driver.findElement(By.css('#tab-information tr:nth-child(6) input')).sendKeys(faker.commerce.productName());
    // product prices
    let productPricesBtn = await driver.findElement(By.css('.index li:nth-child(4)')).click();
    await driver.wait(until.elementLocated(By.css('#tab-prices input[name=purchase_price]')),5000).clear();
    let purchasePrice= await driver.findElement(By.css('#tab-prices input[name=purchase_price]')).sendKeys(faker.random.number(100));
    let valutaSelect = await driver.findElement(By.css('#tab-prices select[name=purchase_price_currency_code]')).click();
    let valutaSelectOption = await driver.findElement(By.css('#tab-prices select[name=purchase_price_currency_code] option:nth-child(3)')).click();
    let priceInEuro = await driver.findElement(By.css('#tab-prices tr:nth-child(3) input')).sendKeys(faker.random.number(1000));
    // save product
    let saveProductBtn = await driver.findElement(By.css('button[name=save]')).click();
    await driver.wait(until.elementLocated(By.css('.dataTable tr')),5000);
    let listLengthAffterTestAdding = await driver.findElements(By.css('.dataTable tr'));
    assert.equal(listLengthAffterTestAdding.length,listLengthBeforeTestAdding.length + 1, "Something went wrong, product list length is not right")
});

});