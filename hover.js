const playwright = require('playwright');

(async () => {

    const browser = await playwright["chromium"].launch({
        headless: false,
        slowMo: 10
    });

    const context = await browser.newContext();
    const page = await context.newPage();
    await page.setViewport({
        width:1440,
        height: 9000
    })

    await page.goto('http://executeautomation.com/demosite/Login.html');
    await page.type('[name=UserName]', 'executeautomation');
    await page.type('[name=Password]', 'admin');
    await page.keyboard.press('Enter', {delay:2000});

    await page.waitForSelector("input[id=Initial]");

    //hover
    await page.hover("[id='Automation Tools']");
    //await browser.close();
})();