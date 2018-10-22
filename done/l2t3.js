const webdriver = require('selenium-webdriver');
const chrome = require('selenium-webdriver/chrome');
const path = require('chromedriver').path;
var By = webdriver.By;
var until = webdriver.until;
var test = require('selenium-webdriver/testing');

const driver = new webdriver.Builder().forBrowser('chrome').build();
driver.get('http://localhost/litecart/admin/login.php');

// user login input
driver.findElement(By.css('#box-login > form > div.content > div:nth-child(2) > div > input')).sendKeys('admin').then(function(el){
    console.log('succes' + el);
});
// password input
driver.findElement(By.css('#box-login > form > div.content > div:nth-child(3) > div > input')).sendKeys('admin').then(function(el){
    console.log('succes' + el);
});
// login button
driver.findElement(By.css('#box-login > form > div.footer > button')).click();



// This code don't work and I dont know why:

// test.describe('Admin login',function() {
//     var driver;


// test.before(function(){
//     const driver = new webdriver.Builder().forBrowser('chrome').build();
//     driver.get('http://localhost/litecart/admin/login.php'); 
// })

// test.it('should login to admin', function(){
//     driver.get('http://localhost/litecart/admin/login.php');
//     driver.findElement(By.css('#box-login > form > div.content > div:nth-child(2) > div > input')).sendKeys('admin').then(function(el){
//         console.log('succes' + el);
//     });
//     driver.findElement(By.css('#box-login > form > div.content > div:nth-child(3) > div > input')).sendKeys('admin').then(function(el){
//         console.log('succes' + el);
//     });
//     driver.findElement(By.css('#box-login > form > div.footer > button')).click();
// });

// test.after(function(){
//     driver.quit();
// })

// });