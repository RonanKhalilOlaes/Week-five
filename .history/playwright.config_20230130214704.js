const { devices } = require('@playwright/test');

/**@type {import { '@playwright/test' }. PlayqwrightTestConfig} */
const config = {
    //Option shared fro all projects.
    timeout: 30000,
    use: {
        ignoreHTTPSErrors: true,
    }, 
}