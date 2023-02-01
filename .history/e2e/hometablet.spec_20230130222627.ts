import { test, devices, expect } from '@playwright/test';

test.use({
    browserName: 'chromium',
    ...devices['iPad Air'],
    viewport: {width: 820, height: 1120}
})

test.describe("Testing for home tablet", () => {
    test("Testing for colours", async ({ page }) =>{
        await page.goto('http://localhost:3000/')

        const mainContainer = page.locator('#colouring');

        const checkingkBackgroundColour = await mainContainer.evaluate((ele) => {
            return window.getComputedStyle(ele).getPropertyValue("background-color")
        })

        console.log(checkingBackgroundColour);
        expect(checkingBackgroundColour).toBe("rgb(0, 0, 255)");
    })
})