
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
    await driver.wait(until.titleIs('http://localhost/litecart/admin/'), 5000).catch(function(){
        console.log('Loggin message');
    });
    //check option Apperance and its children
    await driver.findElement(By.css('#app-appearance > a > span.name')).click();
    await driver.wait(until.titleIs('http://localhost/litecart/admin/?app=appearance&doc=template'), 3000).catch(function(){
        console.log('Apperance');
    });
    await driver.findElement(By.css('#doc-template')).click();
    await driver.findElement(By.css('#doc-logotype')).click();
    //check option Catalog and its children
    await driver.findElement(By.css('#app-catalog > a > span.name')).click();
    await driver.wait(until.titleContains('catalog'), 3000).catch(function(){
        console.log('Catalog');
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
    await driver.wait(until.titleContains('customers'), 3000).catch(function(){
        console.log('Customers');
    });
    await driver.findElement(By.css('#doc-customers')).click();
    await driver.findElement(By.css('#doc-csv')).click();
    await driver.findElement(By.css('#doc-newsletter')).click();
    //check GeoZones and its children
    await driver.findElement(By.css('#app-geo_zones')).click();
    //check Languages and its children
    await driver.findElement(By.css('#app-languages')).click();
    await driver.wait(until.titleContains('languages'), 3000).catch(function(){
        console.log('Customers');
    });
    await driver.findElement(By.css('#doc-languages')).click();
    await driver.findElement(By.css('#doc-storage_encoding')).click();
    //check Modules and its children
    await driver.findElement(By.css('#app-modules')).click();
    await driver.wait(until.titleContains('modules'), 3000).catch(function(){
        console.log('Modules');
    });
    await driver.findElement(By.css('#doc-customer')).click();
    await driver.findElement(By.css('#doc-shipping')).click();
    await driver.findElement(By.css('#doc-payment')).click();
    await driver.findElement(By.css('#doc-order')).click();
    await driver.findElement(By.css('#doc-order_total')).click();
    await driver.findElement(By.css('#doc-jobs')).click();
    //check Orders and its children
    await driver.findElement(By.css('#app-orders')).click();
    await driver.wait(until.titleContains('orders'), 3000).catch(function(){
        console.log('Orders');
    });
    await driver.findElement(By.css('#doc-orders')).click();
    await driver.findElement(By.css('#doc-order_statuses')).click();
     //check Pages and its children
     await driver.findElement(By.css('#app-pages')).click();
     await driver.wait(until.titleContains('pages'), 3000).catch(function(){
         console.log('Pages');
     });
     await driver.findElement(By.css('#doc-pages')).click();
     await driver.findElement(By.css('#doc-csv')).click();
      //check Reports and its children
      await driver.findElement(By.css('#app-reports')).click();
      await driver.wait(until.titleContains('reports'), 3000).catch(function(){
          console.log('Reports');
      });
      await driver.findElement(By.css('#doc-monthly_sales')).click();
      await driver.findElement(By.css('#doc-most_sold_products')).click();
      await driver.findElement(By.css('#doc-most_shopping_customers')).click();
      //check Settings and its children
      await driver.findElement(By.css('#app-settings')).click();
      await driver.wait(until.titleContains('settings'), 3000).catch(function(){
          console.log('Settings');
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
      await driver.wait(until.titleContains('tax'), 3000).catch(function(){
          console.log('TAX');
      });
      await driver.findElement(By.css('#doc-tax_rates')).click();
      await driver.findElement(By.css('#doc-tax_classes')).click();
       //check Translations and its children
       await driver.findElement(By.css('#app-translations')).click();
       await driver.wait(until.titleContains('translations'), 3000).catch(function(){
           console.log('Translations');
       });
       await driver.findElement(By.css('#app-users')).click();
       await driver.findElement(By.css('#app-vqmods')).click();
      
})

});