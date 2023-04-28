// Generated by Selenium IDE
const { Builder, By, Key, until } = require('selenium-webdriver')
const assert = require('assert')

describe('CP008 - CONFIGURACIONES', function() {
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
  it('CP008 - CONFIGURACIONES', async function() {
    // Test name: CP008 - CONFIGURACIONES
    // Step # | name | target | value
    // 1 | open | /home.php | 
    await driver.get("https://tucan.toolsincloud.net/home.php")
    // 2 | setWindowSize | 697x720 | 
    await driver.manage().window().setRect({ width: 697, height: 720 })
    // 3 | click | css=.grid-sidebar:nth-child(9) strong | 
    await driver.findElement(By.css(".grid-sidebar:nth-child(9) strong")).click()
    // 4 | click | id=v-pills-profile-tab | 
    // OPTION CHANGE PASSWORD
    await driver.findElement(By.id("v-pills-profile-tab")).click()
    // 5 | click | name=old_password | rey12345
    // OLD PASSWORD
    await driver.findElement(By.name("old_password")).click()
    // 6 | click | name=new_password | rey123456
    // NEW PASSWORD
    await driver.findElement(By.name("new_password")).click()
    // 7 | click | name=ver_password | rey123456
    // REPEAT - NEW PASSWORD
    await driver.findElement(By.name("ver_password")).click()
    // 8 | assertElementPresent | css=.text-center:nth-child(5) > .btn | Save Changes
    // GUARDAR LOS DATOS DE CHANGE PASSWORD
    {
      const elements = await driver.findElements(By.css(".text-center:nth-child(5) > .btn"))
      assert(elements.length)
    }
    // 9 | click | id=v-pills-home-tab | 
    // OPTION EMAIL OR USERNAME
    await driver.findElement(By.id("v-pills-home-tab")).click()
    // 10 | click | id=exampleInputEmail1 | 
    // ACTUALIZAR EMAIL
    await driver.findElement(By.id("exampleInputEmail1")).click()
    // 11 | click | id=exampleInputPassword1 | 
    // ACTUALIZAR USERNAME
    await driver.findElement(By.id("exampleInputPassword1")).click()
    // 12 | assertElementPresent | name=submit | Save Changes
    // GUARDAR LOS DATOS DE EMAIL OR USERNAME
    {
      const elements = await driver.findElements(By.name("submit"))
      assert(elements.length)
    }
  })
})
