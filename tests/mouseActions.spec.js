import { test } from '@playwright/test';

test.describe('Test Group', () => {

    // create before each method to navigate ot: https://practice.cydeo.com/.
    test.beforeEach(async ({ page }) => {
      await page.goto('https://practice.cydeo.com/');
      await page.waitForTimeout(3000);
    });

  test('Left click', async ({ page }) => {
    await page.click("text='A/B Testing'");
    await page.waitForTimeout(3000);
  });

  test('Right click', async ({ page }) => {
    await page.click("text='A/B Testing'", {button: 'right'});
    await page.waitForTimeout(3000);
  });

  test('Hover', async ({ page }) => {
    await page.click("text='Hovers'");

   // await page.waitForTimeout(3000);
  //  await page.hover("//img[@alt='User Avatar']");

    let userProfiles = await page.locator("//img[@alt='User Avatar']").all();

    for(let profile of userProfiles){
        await profile.hover();
    }
    
  });
  
  test('Drag and Drop', async ({ page }) => {
    await page.click("text='Drag and Drop'");
    await page.waitForTimeout(3000);

    await page.dragAndDrop("//div[@id='column-a']", "//div[@id='column-b']");
    await page.waitForTimeout(3000);

  });

  test('Double click', async ({ page }) => {
    await page.dblclick("text='Drag and Drop'");
    await page.waitForTimeout(3000);
  });

  test('Scrolling', async ({ page }) => {
    
   // await page.mouse.wheel(0, 1000);
   // await page.waitForTimeout(3000);

   let element = page.locator("text='Inputs'");
   await element.scrollIntoViewIfNeeded();

   await page.waitForTimeout(3000);

  });

});