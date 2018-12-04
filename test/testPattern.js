// import {bla} from '../lib/base-page'
import {adminMainPage} from '../lib/locators';
import BasePage from '../lib/base-page';
import AdminMainPage from '../lib/admin-main-page';
const {Builder, By, Key, until} = require('selenium-webdriver');
const path = require('chromedriver').path;
const chrome = require('selenium-webdriver/chrome');
const webdriver = require('selenium-webdriver');
const assert = require('chai').assert;
// var faker = require('faker');
import faker from '../node_modules/faker';
import {fake} from '../lib/utils';
let driver;

describe('Testing 11', function(){
this.timeout(500000);

beforeEach(async function(){
    driver = await new Builder().forBrowser('chrome').build();
    await AdminMainPage.Visit(driver,adminMainPage);
    let signInBtn = await AdminMainPage.Find(driver,adminMainPage.signInBtn);
    await signInBtn.click();   
});

afterEach(function(){
    console.log('Test is done');
    //  driver.quit();
    
});

it('user registration form', async function(){
    const firstName = await faker.name.firstName();
    const email = await faker.internet.email();

    // tax input
    let taxInput = await AdminMainPage.Find(driver,adminMainPage.taxInput);
    await taxInput.sendKeys(fake.number10);
    // // company input
    
    // let companyInput = await driver.findElement(By.css('input[name=company]'));
    // await companyInput.sendKeys(faker.company.companyName(0)); 
    // //login=firstName
    // let fistnameInput = await driver.findElement(By.css('input[name=firstname]'));
    // await fistnameInput.sendKeys(firstName);
    // //country selection
    // let countryList = await driver.findElement(By.css('#create-account > div > form > table > tbody > tr:nth-child(5) > td:nth-child(1)'))
    // .click();
    //  await driver.wait(until.elementLocated(By.css('body > span > span > span.select2-search.select2-search--dropdown > input')),5000);
    // let country = await driver.findElement(By.css('body > span > span > span.select2-search.select2-search--dropdown > input'))
    // await country.sendKeys("United States");
    // await country.sendKeys(Key.ENTER);
    // //last name
    // let lastnameInput = await driver.findElement(By.css('input[name=lastname]'));
    // await lastnameInput.sendKeys(faker.name.lastName());
    // // adres
    // let adres1Input = await driver.findElement(By.css('input[name=address1]'));
    // await adres1Input.sendKeys(faker.address.streetName());
    // let adres2Input = await driver.findElement(By.css('input[name=address2]'));
    // await adres2Input.sendKeys(faker.random.number(100));
    // // postal code
    // let postalCodeInput = await driver.findElement(By.css('input[name=postcode]'));
    // await postalCodeInput.sendKeys(faker.address.zipCode());
    // // city
    // let cityInput = await driver.findElement(By.css('input[name=city]'));
    // await cityInput.sendKeys(faker.address.city(3));
    // // email
    // let emailInput = await driver.findElement(By.css('#create-account > div > form > table > tbody > tr:nth-child(6) > td:nth-child(1) > input[type="email"]'));
    // await emailInput.sendKeys(email);
    // // Phone number
    // let phoneNumber = await driver.findElement(By.css('input[name=phone]'));
    // await phoneNumber.sendKeys(`+1 ${faker.random.number(10000000000)}`);
    // // password
    // let password1 = await driver.findElement(By.css('#create-account > div > form > table > tbody > tr:nth-child(8) > td:nth-child(1) > input[type="password"]'));
    // await password1.sendKeys('23styczen');
    // let password2 = await driver.findElement(By.css('#create-account > div > form > table > tbody > tr:nth-child(8) > td:nth-child(2) > input[type="password"]'));
    // await password2.sendKeys('23styczen');
    // // create account button
    // let createAccountBtn = await driver.findElement(By.css('#create-account > div > form > table > tbody > tr:nth-child(9) > td > button')).click();
    // // logout btn
    // let logOut = await driver.findElement(By.css("#box-account > div > ul > li:nth-child(4) > a")).click();
    
    // // login again
    // let emailInput2 = await driver.findElement(By.css('#box-account-login > div > form > table > tbody > tr:nth-child(1) > td > input[type="text"]'));
    // await emailInput2.sendKeys(email);
    // let password = await driver.findElement(By.css('#box-account-login > div > form > table > tbody > tr:nth-child(2) > td > input[type="password"]'));
    // await password.sendKeys('23styczen');
    // await driver.findElement(By.css("#box-account-login > div > form > table > tbody > tr:nth-child(4) > td > span > button:nth-child(1)")).click();

    // //assertion at corntrol panel have buttton "logout", that means user have logged in second time
    // let loginInfo= await driver.findElement(By.css("#box-account > div > ul > li:nth-child(4) > a")).getText();

    
    // assert.equal(loginInfo,'Logout', "user name is wrong, or is not logged")
    
});

});
