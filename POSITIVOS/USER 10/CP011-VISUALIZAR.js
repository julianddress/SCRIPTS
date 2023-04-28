// Generated by Selenium IDE
const { Builder, By, Key, until } = require('selenium-webdriver')
const assert = require('assert')

describe('CP011 - VISUALIZAR', function() {
  this.timeout(30000)
  let driver
  let vars
  beforeEach(async function() {
    driver = await new Builder().forBrowser('chrome').build()
    vars = {}
  })
  afterEach(async function() {
    await driver.quit();
  })
  it('CP011 - VISUALIZAR', async function() {
    // Test name: CP011 - VISUALIZAR
    // Step # | name | target | value
    // 1 | open | /home.php | 
    await driver.get("https://tucan.toolsincloud.net/home.php")
    // 2 | setWindowSize | 697x720 | 
    await driver.manage().window().setRect({ width: 697, height: 720 })
    // 3 | click | css=.wrapper-left-active > strong | 
    // HOME TAB
    await driver.findElement(By.css(".wrapper-left-active > strong")).click()
    // 4 | click | css=.form-control | 
    // SEARCH
    await driver.findElement(By.css(".form-control")).click()
    // 5 | type | css=.form-control | sebastian
    await driver.findElement(By.css(".form-control")).sendKeys("sebastian")
    // 6 | click | css=.grid-sidebar:nth-child(5) strong | 
    // NOTIFICATION TAB
    await driver.findElement(By.css(".grid-sidebar:nth-child(5) strong")).click()
    // 7 | click | css=.form-control | 
    // SEARCH
    await driver.findElement(By.css(".form-control")).click()
    // 8 | type | css=.form-control | sebastian
    await driver.findElement(By.css(".form-control")).sendKeys("sebastian")
    // 9 | click | css=.grid-sidebar:nth-child(7) strong | 
    // PROFILE TAB
    await driver.findElement(By.css(".grid-sidebar:nth-child(7) strong")).click()
    // 10 | click | css=.search-input | 
    // SEARCH
    await driver.findElement(By.css(".search-input")).click()
    // 11 | type | css=.search-input | sebastian
    await driver.findElement(By.css(".search-input")).sendKeys("sebastian")
    // 12 | click | css=.grid-sidebar:nth-child(9) strong | 
    // SETTINGS TAB
    await driver.findElement(By.css(".grid-sidebar:nth-child(9) strong")).click()
    // 13 | click | css=.search-input | 
    // SEARCH
    await driver.findElement(By.css(".search-input")).click()
    // 14 | type | css=.search-input | sebastian
    await driver.findElement(By.css(".search-input")).sendKeys("sebastian")
  })
})
