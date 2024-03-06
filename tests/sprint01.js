import { Builder,By} from 'selenium-webdriver';
import {should} from "chai";
should();

async function successfullLogin() {

    // GIVEN that I open the browser
    let driver = await new Builder().forBrowser('firefox').build();

    // AND I navigate to the site
    await driver.get('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');

    await sleep(1000);

    // AND I type the username
    await driver.findElement(By.xpath("//input[@placeholder='Username']")).sendKeys("Admin");

    await sleep(1000);

    // AND I type the password
    await driver.findElement(By.xpath("//input[@placeholder='Password']")).sendKeys("admin123");

    await sleep(1000);

    // WHEN I click in the "Login" button
    await driver.findElement(By.xpath("//button[normalize-space()='Login']")).click();

    await sleep(1000);

    // THEN I navigate successfully to the dashboard (Assertion)
    driver.get("https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index")
    .then(function() {
        return driver.getCurrentUrl();
    })
    .then(function(currentUrl) {
        // work with the current url of browser
    });
    
    // Function sleep to set a time between steps

    function sleep(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }
    
}

successfullLogin();
