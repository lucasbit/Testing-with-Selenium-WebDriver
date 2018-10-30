const {Builder, By, Key, until} = require('selenium-webdriver');
const path = require('chromedriver').path;
const chrome = require('selenium-webdriver/chrome');
const webdriver = require('selenium-webdriver');
const assert = require('chai').assert;
var faker = require('faker');

describe('Testing 10', function(){
this.timeout(500000);

beforeEach(async function(){
    driver = await new Builder().forBrowser('chrome').build();
    driver.get('http://localhost/litecart/');
    await driver.wait(until.urlIs('http://localhost/litecart/'), 5000).catch(function(error){
        console.log(error);
    });
    let signInButton = await driver.findElement(By.css("#default-menu li.account")).click();
    let newCoustomerBtn = await driver.findElement(By.css('#default-menu .dropdown-menu li:nth-child(2) > a')).click();
    
});

afterEach(function(){
    console.log('Test is done');
    //  driver.quit();
    
});

it('Testing if product page is correct', async function(){
    const firstName = await faker.name.firstName();
    const email = await faker.internet.email();


    let taxInput = await driver.wait(until.elementLocated(By.css('input[name=tax_id]')),5000);
    await taxInput.sendKeys(faker.random.number(10000000000));
    let companyInput = await driver.findElement(By.css('input[name=company]'));
    await companyInput.sendKeys(faker.company.companyName(0)); 
    //login=firstName
    let fistnameInput = await driver.findElement(By.css('input[name=firstname]'));
    await fistnameInput.sendKeys(firstName);

    let lastnameInput = await driver.findElement(By.css('input[name=lastname]'));
    await lastnameInput.sendKeys(faker.name.lastName());
    let adres1Input = await driver.findElement(By.css('input[name=address1]'));
    await adres1Input.sendKeys(faker.address.streetName());
    let adres2Input = await driver.findElement(By.css('input[name=address2]'));
    await adres2Input.sendKeys(faker.random.number(100));
    let postalCodeInput = await driver.findElement(By.css('input[name=postcode]'));
    
    await postalCodeInput.sendKeys(faker.address.zipCode());
    let cityInput = await driver.findElement(By.css('input[name=city]'));
    await cityInput.sendKeys(faker.address.city(3));
    let emailInput = await driver.findElement(By.css('#box-create-account > form > div:nth-child(7) > div.form-group.col-md-6.required > div > input'));
    await emailInput.sendKeys(email);
    let password1 = await driver.findElement(By.css('#box-create-account > form > div:nth-child(8) > div:nth-child(1) > div > input'));
    await password1.sendKeys('23styczen');
    let password2 = await driver.findElement(By.css('#box-create-account > form > div:nth-child(8) > div:nth-child(2) > div > input'));
    await password2.sendKeys('23styczen');
    let createAccountBtn = await driver.findElement(By.css('button[name=create_account]')).click();
    let signInButton = await driver.findElement(By.css("#default-menu li.account")).click();
    let logOut = await driver.findElement(By.css("#default-menu > ul.nav.navbar-nav.navbar-right > li > ul > li:nth-child(3) > a")).click();
    await driver.findElement(By.css("#default-menu li.account")).click();
    let emailInput2 = await driver.findElement(By.css('#default-menu > ul.nav.navbar-nav.navbar-right > li > ul > li:nth-child(1) > form > div.form-group.required > div > input'));
    await emailInput2.sendKeys(email);
    let password = await driver.findElement(By.css('#default-menu > ul.nav.navbar-nav.navbar-right > li > ul > li:nth-child(1) > form > div:nth-child(4) > div > input'));
    await password.sendKeys('23styczen');
    await driver.findElement(By.css("#default-menu > ul.nav.navbar-nav.navbar-right > li > ul > li:nth-child(1) > form > div.btn-group.btn-block > button")).click();

    //assertion at userName is equal to name from data generator
    let logIcon= await driver.findElement(By.css("#default-menu > ul.nav.navbar-nav.navbar-right > li > a")).getText();
    
    assert.equal(logIcon,firstName, "user name is wrong, or is not logged")
    
});

});