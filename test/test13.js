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
    driver.get('http://localhost/litecart/en/');
});

afterEach(function(){
    console.log('Test is done');
    //  driver.quit();
    
});

it('adding products to cart', async function(){
    // adding first product
    let product1MainPage = await driver.wait(until.elementLocated(By.css('#box-latest-products li:nth-child(2)')),5000).click();
    await driver.wait(until.elementLocated(By.css('button[name=add_cart_product]')),5000);
    let cartState = await driver.findElement(By.css('#cart > a.content > span.quantity'));
    let addToCartBtn = await driver.findElement(By.css('button[name=add_cart_product]'));
    await addToCartBtn.click();
    await driver.wait(until.elementTextIs(cartState,'1'),5000);
    let litecartLogo = await driver.findElement(By.css('#logotype-wrapper'));
    await litecartLogo.click();
    // adding second product
    let product2MainPage = await driver.wait(until.elementLocated(By.css('#box-latest-products li:nth-child(3)')),5000).click();
    await driver.wait(until.elementLocated(By.css('button[name=add_cart_product]')),5000);
    cartState = await driver.findElement(By.css('#cart > a.content > span.quantity'));
    addToCartBtn = await driver.findElement(By.css('button[name=add_cart_product]'));
    await addToCartBtn.click();
    await driver.wait(until.elementTextIs(cartState,'2'),5000);
    litecartLogo = await driver.findElement(By.css('#logotype-wrapper'));
    await litecartLogo.click();
    // adding second product
    let product3MainPage = await driver.wait(until.elementLocated(By.css('#box-latest-products li:nth-child(4)')),5000).click();
    await driver.wait(until.elementLocated(By.css('button[name=add_cart_product]')),5000);
    cartState = await driver.findElement(By.css('#cart > a.content > span.quantity'));
    addToCartBtn = await driver.findElement(By.css('button[name=add_cart_product]'));
    await addToCartBtn.click();
    await driver.wait(until.elementTextIs(cartState,'3'),5000);
    litecartLogo = await driver.findElement(By.css('#logotype-wrapper'));
    await litecartLogo.click();
    // checkout
    let checkoutBtn = await driver.findElement(By.css('#cart > a.link')).click();
    let sum = await driver.findElement(By.css('.footer td:nth-child(2) strong'));
    let removeBtn = await  driver.findElement(By.css('button[name=remove_cart_item]'));
    // remove first item from cart
    await removeBtn.click();
    await driver.wait(until.stalenessOf(sum),5000);
    // remove second item from cart
    sum = await driver.findElement(By.css('.footer td:nth-child(2) strong'));
    removeBtn = await driver.findElement(By.css('button[name=remove_cart_item]'));
    await removeBtn.click();
    await driver.wait(until.stalenessOf(sum),5000);
    // remove third 
    sum = await driver.findElement(By.css('.footer td:nth-child(2) strong'));
    removeBtn = await driver.findElement(By.css('button[name=remove_cart_item]'));
    await removeBtn.click();
    await driver.wait(until.stalenessOf(sum),5000);
    // assertion
    let finalInfo = await driver.findElement(By.css('#checkout-cart-wrapper > p:nth-child(1) > em')).getText();
    await console.log(finalInfo);
    assert.equal(finalInfo,'There are no items in your cart.', "Something went wrong, cart is not empty?")
});

});