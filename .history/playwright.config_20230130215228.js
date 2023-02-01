const { devices } = require('@playwright/test');

/**@type {import { '@playwright/test' }. PlayqwrightTestConfig} */
const config = {
    //Option shared fro all projects.
    timeout: 30000,
    use: {
        ignoreHTTPSErrors: true,
    },
    
    //Option specific to each project browser size
    projects: [
        {
            name: 'Desktop Cgromium',
            use: {
                browserName: 'chromium',
                viewport: { width: 1280, height: 720},
            },
        },
        
        {
        name: 'Desktop Safari',
        use: {
            browserName: 'webkit',
            viewport: { width: 1280, height: 720},
        }
        }

        {
            name: 'Desktop Firefox',
            use: {
                browserName: 'firefox',
                viewport: { width: 1280, height: 720},
            }
            }
    ]
}