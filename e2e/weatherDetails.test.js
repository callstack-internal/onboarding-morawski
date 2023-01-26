describe('Check weather for a specific city flow', () => {
  beforeAll(async () => {
    await device.launchApp();
  });

  beforeEach(async () => {
    await device.reloadReactNative();
  });

  it('should redirect to weather details screen', async () => {
    await element(by.text('New York')).tap();
    await expect(element(by.text('New York'))).toBeVisible();
    await expect(element(by.text('Details'))).toBeVisible();
    await expect(element(by.text('Humidity'))).toBeVisible();
  });
});
