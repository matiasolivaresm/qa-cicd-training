const { test, expect } = require('@playwright/test');

// Test básico: valida que la home cargue y el título sea el esperado
test('La página principal carga correctamente', async ({ page }) => {
  await page.goto('http://automationpractice.com/index.php');
  await expect(page).toHaveTitle(/My Store/);
});
