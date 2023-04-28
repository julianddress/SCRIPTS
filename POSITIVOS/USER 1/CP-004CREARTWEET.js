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
    // 3 | click | name=email | 
    await driver.findElement(By.name("email")).click()
    // 4 | type | name=email | javi@gmail.com
    // EMAIL
    await driver.findElement(By.name("email")).sendKeys("javi@gmail.com")
    // 5 | click | name=password | 
    await driver.findElement(By.name("password")).click()
    // 6 | type | name=password | javier2023
    // PASSWORD
    await driver.findElement(By.name("password")).sendKeys("javier2023")
    // 7 | click | name=login | 
    await driver.findElement(By.name("login")).click()
    // 8 | click | name=status | 
    await driver.findElement(By.name("status")).click()
    // 9 | type | name=status | lets do it men
    // MESSAGE
    await driver.findElement(By.name("status")).sendKeys("lets do it men")
    // 10 | click | id=tweet-input | 
    // SQUAWK
    await driver.findElement(By.id("tweet-input")).click()
  })
})
