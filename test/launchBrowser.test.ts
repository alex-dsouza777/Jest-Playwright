import { chromium } from "playwright";
const timeout = 250000;
const newTimeout = 250000;
jest.setTimeout(newTimeout)
describe('Launch',() => {

    test('Open DataCamp', async ()=>{
        jest.setTimeout(timeout);
        const browser = await chromium.launch({ headless: false, slowMo: 2000 });
        const context = await browser.newContext();
        const page = await context.newPage();
        await page.goto("https://www.datacamp.com/");
        await browser.close()
    });
})