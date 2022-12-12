var request = require('request')
const { response } = require('express');
var convert = require('xml-js'); // package documentation: https://www.npmjs.com/package/xml-js
const fs = require('fs'); 

/**
 * Config
 * @param {*} url: url of the xml api
 * @param {*} fileName: file name of the scraped data
 * @param {*} jsonOption: setting of conversting xml to json data 
 */
const jsonOption = {compact: true, spaces: 4 , ignoreDeclaration: true, ignoreInstruction: true}
const targetXML = [{url:"https://www.lcsd.gov.hk/datagovhk/event/events.xml", fileName:"eventData"}, 
					{url: "https://www.lcsd.gov.hk/datagovhk/event/venues.xml", fileName:"venuesData"}]


/**
 * Helper function:
 */
// 1. Scrape the XML and save the json result into ./Output folder
function downloadXML2JSON(url, fileName, jsonOption=jsonOption){
	request(url, (err, response, body) => {
		var jsonResult = convert.xml2json(body, jsonOption);

		var path = `./output/${String(fileName)}.json`;
		save(jsonResult, path)
	});
}

// 2. Save the json variable into ./Output folder
function save(jsonResult, path){
	var stringResult = JSON.stringify(jsonResult);
	fs.writeFile(path, stringResult, 'utf8', function (err) { 
		if (err) { 
			console.log("An error occured while writing JSON Object to File."); 
			console.log(err)
			return false; 
		} 
		else 
			console.log(`Write Json object successful at ${path}`)
			return true
	})
}

// 3. update the data file as well as meta data file at "./output"
function runUpdate(dataXML, dataSourceNum, jsonOption, metaDataFileLocation){
	// Record XML scraper's meta data e.g. last update date
	var currentDate = new Date().toJSON().slice(0, 10);
	var jsonMetaData = {	LastUpdate:currentDate	};
	save(jsonMetaData , metaDataFileLocation);

	// DownloadXML at JSON format 
	for (var idx = 0; idx < dataSourceNum; idx++) {
		downloadXML2JSON(dataXML[idx].url, dataXML[idx].fileName, jsonOption)
	}
}

/**
 * Main class: 
 * Constructor: scrape the XML and store it in local 
 * checkNUpdate(currentDate) Method: 
 * 		Compare the last scraping data with current date
 * 		scrape the XML data again if outdated
 */
class XMLScraper{
	constructor(targetXML, jsonOption=jsonOption){
		console.log("Run initialization")

		this.dataXML = targetXML
		this.dataSourceNum = targetXML.length
		this.jsonOption = jsonOption
		this.metaDataFileLocation =  "./output/scraperMetaData.json"

		runUpdate(this.dataXML,this.dataSourceNum,this.jsonOption,this.metaDataFileLocation)
		console.log("initialization success")
		
	}

	checkNUpdate(currentDate){
		var dataXML = this.dataXML
		var dataSourceNum= this.dataSourceNum
		var jsonOption = this.jsonOption
		var metaDataFileLocation = this.metaDataFileLocation

		fs.readFile(this.metaDataFileLocation, function(err, data){
			console.log()
			var result = JSON.parse(data)
			var lastUpdate = result.LastUpdate
			if (err) { 
				console.log("An error occured while reading JSON Object to File."); 
				console.log(err);
			}
			else if (lastUpdate <= currentDate) {
				console.log("Outdated! Run Update");
				runUpdate(dataXML,dataSourceNum,jsonOption,metaDataFileLocation)
			}
			else 
				console.log(`Last update is : ${lastUpdate}, not need to update`)
		});
		
	}
}


/**
 * Demo: Check the last update, scrape the XML, and save local 
	let scraper = new XMLScraper(targetXML, jsonOption)
	// Keep update 
	scraper.checkNUpdate((new Date().toJSON().slice(0, 10))) 
	// scraper.checkNUpdate("2022-12-12") // or Use tested date
 */



module.exports = {XMLScraper}