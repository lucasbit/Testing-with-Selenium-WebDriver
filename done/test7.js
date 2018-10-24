
const {Builder, By, Key, until} = require('selenium-webdriver');
const path = require('chromedriver').path;
const chrome = require('selenium-webdriver/chrome');
const webdriver = require('selenium-webdriver');

describe('Testing 7', function(){
this.timeout(500000);

beforeEach(async function(){
    driver = await new Builder().forBrowser('chrome').build();
    driver.get('http://localhost/litecart/admin/login.php');
});

afterEach(function(){
    // driver.quit();
    console.log('ssss');
});

it('login', async function(){

    //log to admin panel
   await driver.findElement(By.css('#box-login > form > div.content > div:nth-child(2) > div > input')).sendKeys('admin');
   await driver.findElement(By.css('#box-login > form > div.content > div:nth-child(3) > div > input')).sendKeys('admin');
   await driver.findElement(By.css('#box-login > form > div.footer > button')).click();
    await driver.wait(until.urlIs('http://localhost/litecart/admin/'), 5000).catch(function(error){
        console.log(error);
    });
    //check option Apperance and its children
    await driver.findElement(By.css('#app-appearance > a > span.name')).click();
    await driver.wait(until.urlIs('http://localhost/litecart/admin/?app=appearance&doc=template'), 3000).catch(function(error){
        console.log(error);
    });
    await driver.findElement(By.css('#doc-template')).click();
    await driver.findElement(By.css('#doc-logotype')).click();
    await driver.findElement(By.css('h1')).getText().then(function(text){
        console.log("Text from main page is" + text)
    });

    //check option Catalog and its children
    await driver.findElement(By.css('#app-catalog > a > span.name')).click();
    await driver.wait(until.urlIs('http://localhost/litecart/admin/?app=catalog&doc=catalog'), 3000).catch(function(error){
        console.log(error);
    });
    await driver.findElement(By.css('#doc-product_groups')).click();
    await driver.findElement(By.css('#doc-option_groups')).click();
    await driver.findElement(By.css('#doc-manufacturers')).click();
    await driver.findElement(By.css('#doc-suppliers')).click();
    await driver.findElement(By.css('#doc-delivery_statuses')).click();
    await driver.findElement(By.css('#doc-sold_out_statuses')).click();
    await driver.findElement(By.css('#doc-quantity_units')).click();
    await driver.findElement(By.css('#doc-csv')).click();
   //check Countries and its children
    await driver.findElement(By.css('#app-countries')).click();
    //check Countries and its children
    await driver.findElement(By.css('#app-currencies')).click();
    //check Coustomers and its children
    await driver.findElement(By.css('#app-customers')).click();
    await driver.wait(until.urlIs('http://localhost/litecart/admin/?app=customers&doc=customers'), 3000).catch(function(error){
        console.log(error);
    });
    await driver.findElement(By.css('#doc-customers')).click();
    await driver.findElement(By.css('#doc-csv')).click();
    await driver.findElement(By.css('#doc-newsletter')).click();
    //check GeoZones and its children
    await driver.findElement(By.css('#app-geo_zones')).click();
    //check Languages and its children
    await driver.findElement(By.css('#app-languages')).click();
    await driver.wait(until.urlIs('http://localhost/litecart/admin/?app=languages&doc=languages'), 3000).catch(function(error){
        console.log(error);
    });
    await driver.findElement(By.css('#doc-languages')).click();
    await driver.findElement(By.css('#doc-storage_encoding')).click();
    //check Modules and its children
    await driver.findElement(By.css('#app-modules')).click();
    await driver.wait(until.urlIs('http://localhost/litecart/admin/?app=modules&doc=customer'), 3000).catch(function(error){
        console.log(error);
    });
    await driver.findElement(By.css('#doc-customer')).click();
    await driver.findElement(By.css('#doc-shipping')).click();
    await driver.findElement(By.css('#doc-payment')).click();
    await driver.findElement(By.css('#doc-order')).click();
    await driver.findElement(By.css('#doc-order_total')).click();
    await driver.findElement(By.css('#doc-jobs')).click();
    //check Orders and its children
    await driver.findElement(By.css('#app-orders')).click();
    await driver.wait(until.urlIs('http://localhost/litecart/admin/?app=orders&doc=orders'), 3000).catch(function(error){
        console.log(error);
    });
    await driver.findElement(By.css('#doc-orders')).click();
    await driver.findElement(By.css('#doc-order_statuses')).click();
     //check Pages and its children
     await driver.findElement(By.css('#app-pages')).click();
     await driver.wait(until.urlIs('http://localhost/litecart/admin/?app=pages&doc=pages'), 3000).catch(function(error){
         console.log(error);
     });
     await driver.findElement(By.css('#doc-pages')).click();
     await driver.findElement(By.css('#doc-csv')).click();
      //check Reports and its children
      await driver.findElement(By.css('#app-reports')).click();
      await driver.wait(until.urlIs('http://localhost/litecart/admin/?app=reports&doc=monthly_sales'), 3000).catch(function(error){
          console.log(error);
      });
      await driver.findElement(By.css('#doc-monthly_sales')).click();
      await driver.findElement(By.css('#doc-most_sold_products')).click();
      await driver.findElement(By.css('#doc-most_shopping_customers')).click();
      //check Settings and its children
      await driver.findElement(By.css('#app-settings')).click();
      await driver.wait(until.urlIs('http://localhost/litecart/admin/?app=settings&doc=store_info'), 3000).catch(function(error){
          console.log(error);
      });
      await driver.findElement(By.css('#doc-store_info')).click();
      await driver.findElement(By.css('#doc-defaults')).click();
      await driver.findElement(By.css('#doc-email')).click();
      await driver.findElement(By.css('#doc-images')).click();
      await driver.findElement(By.css('#doc-advanced')).click();
      await driver.findElement(By.css('#doc-security')).click();
      //check Settings and its children
      await driver.findElement(By.css('#app-slides')).click();
      //check Tax and its children
      await driver.findElement(By.css('#app-tax')).click();
      await driver.wait(until.urlIs('http://localhost/litecart/admin/?app=tax&doc=tax_rates'), 3000).catch(function(error){
          console.log(error);
      });
      await driver.findElement(By.css('#doc-tax_rates')).click();
      await driver.findElement(By.css('#doc-tax_classes')).click();
       //check Translations and its children
       await driver.findElement(By.css('#app-translations')).click();
       await driver.wait(until.urlIs('http://localhost/litecart/admin/?app=translations&doc=search'), 3000).catch(function(error){
           console.log(error);
       });
       await driver.findElement(By.css('#app-users')).click();
       await driver.findElement(By.css('#app-vqmods')).click();
      
})

});