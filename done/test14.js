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
    await driver.wait(until.elementLocated(By.css('#box-apps-menu li:nth-child(3)')),5000).click();
    await driver.wait(until.elementLocated(By.css('.dataTable .row:nth-child(11) td:nth-child(7)')),5000).click();
});

afterEach(function(){
    console.log('Test is done');
     driver.quit();  
});

it('checking and switching between new windows-fist link', async function(){
    let basePageHandle = await driver.getWindowHandle();
    let editCodeBtn = await driver.wait(until.elementLocated(By.css('#content table tr:nth-child(2) a')),5000).click();
    let windowHandles = await driver.getAllWindowHandles();
    let newHandle = await windowHandles.filter((element)=>{
        return element !== basePageHandle
    }); 
    await driver.switchTo().window(newHandle[0]);
    await driver.wait(until.urlIs('https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2'),5000);
    let newWidowUrl = await driver.getCurrentUrl();
    await driver.close();
    await driver.switchTo().window(basePageHandle);
    assert.equal(newWidowUrl,'https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2', "Url of new window was wrong")
});
it('checking and switching between new windows-second link', async function(){
    let basePageHandle = await driver.getWindowHandle();
    let editCodeBtn = await driver.wait(until.elementLocated(By.css('#content table tr:nth-child(3) a')),5000).click();
    let windowHandles = await driver.getAllWindowHandles();
    let newHandle = await windowHandles.filter((element)=>{
        return element !== basePageHandle
    }); 
    await driver.switchTo().window(newHandle[0]);
    await driver.wait(until.urlIs('https://en.wikipedia.org/wiki/ISO_3166-1_alpha-3'),5000);
    let newWidowUrl = await driver.getCurrentUrl();
    await driver.close();
    await driver.switchTo().window(basePageHandle);
    assert.equal(newWidowUrl,'https://en.wikipedia.org/wiki/ISO_3166-1_alpha-3', "Url of new window was wrong")
});
it('checking and switching between new windows-third link', async function(){
    let basePageHandle = await driver.getWindowHandle();
    let editCodeBtn = await driver.wait(until.elementLocated(By.css('#content table tr:nth-child(6) a')),5000).click();
    let windowHandles = await driver.getAllWindowHandles();
    let newHandle = await windowHandles.filter((element)=>{
        return element !== basePageHandle
    }); 
    await driver.switchTo().window(newHandle[0]);
    await driver.wait(until.urlIs('https://en.wikipedia.org/wiki/Regular_expression'),5000);
    let newWidowUrl = await driver.getCurrentUrl();
    await driver.close();
    await driver.switchTo().window(basePageHandle);
    assert.equal(newWidowUrl,'https://en.wikipedia.org/wiki/Regular_expression', "Url of new window was wrong")
});
it('checking and switching between new windows- fourth link', async function(){
    let basePageHandle = await driver.getWindowHandle();
    let editCodeBtn = await driver.wait(until.elementLocated(By.css('#content table tr:nth-child(7) a:nth-child(3)')),5000).click();
    let windowHandles = await driver.getAllWindowHandles();
    let newHandle = await windowHandles.filter((element)=>{
        return element !== basePageHandle
    }); 
    await driver.switchTo().window(newHandle[0]);
    await driver.wait(until.elementLocated(By.css('#cphTopContent_topHeader1_hlLogo > img.default-logo')),5000);
    let logo = await driver.findElement(By.css('#loc_btn')).getText();
    console.log(logo);
    let newWidowUrl = await driver.getCurrentUrl();
    await driver.close();
    await driver.switchTo().window(basePageHandle);
    assert.equal(logo,'United States', "Url of new window was wrong")
});

});