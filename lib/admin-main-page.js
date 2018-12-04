import webdriver from 'selenium-webdriver';
import BasePage from './base-page'
const until = webdriver.until;

export default class AdminMainPage extends BasePage {
	// constructor( driver, url = null ) {
	// 	this.driver = driver;
	// 	this.expectedElementSelector = expectedElementSelector;
	// 	this.url = url;
	// }

	// static async Visit(driver,some) {
	// 	// const page = new this( driver, url );
	// 	// await driver.get( some.url );
	// 	return driver.get( some.url );
	// }

	// consoleErrors() {
	// 	return this.driver.manage().logs().get( 'browser' ).then( ( logs ) => {
	// 		return map( logs, ( log ) => log.message );
	// 	} );
	// }
}