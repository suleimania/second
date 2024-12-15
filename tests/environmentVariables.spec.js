import { expect, test } from '@playwright/test';

test('Evnvironment variable practice @test01', async ({ page }) => {
  
    console.log(`Username is: ${process.env.PRACTICE_USERNAME}`);
    console.log(`Password is: ${process.env.PRACTICE_PASSWORD}`);

});


test('Bypass authetication by encoding the credentials base64 format @sep_login', async ({ page }) => {
    
    // 1. encoding the credential in base64 format
    let encodedCredential = Buffer.from(`${process.env.PRACTICE_USERNAME}:${process.env.PRACTICE_PASSWORD}`).toString("base64");
  
    //2. Add the credentials to the HTTP header
    await page.setExtraHTTPHeaders({Authorization: `Basic ${encodedCredential}`});
  
    await page.goto("https://practice.cydeo.com/basic_auth")
  
    await page.waitForTimeout(3000);
  
    await expect(page.locator("//p[contains(text(),'Congratulations!')]")).toBeVisible();
  
  });