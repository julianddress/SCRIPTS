// Generated by Selenium IDE
const { Builder, By, Key, until } = require('selenium-webdriver')
const assert = require('assert')

describe('CP004 - CREAR TWEET', function() {
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
  it('CP004 - CREAR TWEET', async function() {
    // Test name: CP004 - CREAR TWEET
    // Step # | name | target | value
    // 1 | open | /home.php | 
    await driver.get("https://tucan.toolsincloud.net/home.php")
    // 2 | setWindowSize | 697x720 | 
    await driver.manage().window().setRect({ width: 697, height: 720 })
    // 3 | click | name=status | 
    await driver.findElement(By.name("status")).click()
    // 4 | type | name=status | HOLA  PRUEBA USUARIO 1 PABLO
    // MESSAGE
    await driver.findElement(By.name("status")).sendKeys("HOLA  PRUEBA USUARIO 1 PABLO")
    // 5 | click | id=tweet-input | 
    // SQUAWK
    await driver.findElement(By.id("tweet-input")).click()
  })
})
