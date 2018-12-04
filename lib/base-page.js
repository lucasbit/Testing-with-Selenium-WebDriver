import webdriver from 'selenium-webdriver';


//  const bla = "lkjgoaklgjsdaolksdafpgjieapgoiapoegjiapewgjoewapogjaewpogjapoewgj";
//  export {bla};
const {Builder, By, Key, until} = require('selenium-webdriver');


export default class BasePage {
	constructor( driver, url = null ) {
		this.driver = driver;
		this.url = url;
	}

	static async Visit(driver = driver,some) {
		// const page = new this( driver, url );
		// await driver.get( some.url );
		return driver.get( some.url );
	}

	static async Find(driver,selector) {
		await driver.wait(until.elementLocated(By.css(selector)),5000);
		return  driver.findElement(By.css(selector)); 
	}



	// consoleErrors() {
	// 	return this.driver.manage().logs().get( 'browser' ).then( ( logs ) => {
	// 		return map( logs, ( log ) => log.message );
	// 	} );
	// }
}