const {Builder, By, Key, until} = require('selenium-webdriver');
const path = require('geckodriver').path;
const chrome = require('selenium-webdriver/chrome');
const webdriver = require('selenium-webdriver');
const assert = require('chai').assert;

describe('Testing 7', function(){
this.timeout(500000);

beforeEach(async function(){
    driver = await new Builder().forBrowser('firefox').build();
    driver.get('http://localhost/litecart/admin/?app=countries&doc=countries');
    await driver.findElement(By.css('#box-login > form > div.content > div:nth-child(2) > div > input')).sendKeys('admin');
   await driver.findElement(By.css('#box-login > form > div.content > div:nth-child(3) > div > input')).sendKeys('admin');
   await driver.findElement(By.css('#box-login > form > div.footer > button')).click();
});

afterEach(function(){
    console.log('Test is done');
     driver.quit();
    
});

it('Testing countries order in Countries', async function(){
await driver.wait(until.urlIs('http://localhost/litecart/admin/?app=countries&doc=countries'), 5000).catch(function(error){
        console.log(error);
    });
var countries = await driver.findElements(By.css("tbody tr > :nth-child(5)"));
var textIn = [];
var country = await countries.forEach((element,index)=> {
 var text = element.getText().then(function(myText){
     textIn.push(myText)
     var textSorted = textIn.sort();
    assert.equal(textIn, textSorted, 'List of countries is not sorted');
 }).catch(function(error) {
     console.log(error);
 });
})
})

// it('Testing countries order in Countries', async function(){
//     await driver.wait(until.urlIs('http://localhost/litecart/admin/?app=countries&doc=countries'), 5000).catch(function(error){
//             console.log(error);
//         });
//         var countries = await driver.findElements(By.css("tbody tr"));
//         var loop = await countries.forEach(async(element,index)=> {
//            var geo= await element.findElement(By.css('.text-center')).getText().catch(function(er){
//                console.log(er);
//            })
//             var text = await element.getText().catch(function(er){
//                 console.log(er);
//             });
//             console.log(geo);
//         })

        // var children = await countries.forEach(async(element,index)=> {
        //     var link = await element.findElement(By.css(':nth-child(5)'))
        //     var zones = await element.findElement(By.css(':nth-child(6)')).getText().then(function(text){
        //         // console.log(text);
        //         if(Number(text) > 0) {
        //             link.click()
        //         }
        //     })
            
            
            
        // })
 
    // })

});