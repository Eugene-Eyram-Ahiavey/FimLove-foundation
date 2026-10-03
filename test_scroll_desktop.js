import puppeteer from 'puppeteer';

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.setViewport({ width: 1440, height: 900 });
  
  page.on('console', msg => console.log('PAGE LOG:', msg.text()));
  
  await page.goto('http://localhost:5173/about');
  
  // Scroll down by 500px increments and log opacity
  for (let i = 0; i < 10; i++) {
    await page.evaluate(() => window.scrollBy(0, 500));
    await page.waitForTimeout(500);
    const textOpacity = await page.evaluate(() => {
      const h2 = document.querySelector('h2.text-\\[2\\.2rem\\]');
      if (h2) {
         return window.getComputedStyle(h2.parentElement).opacity;
      }
      return null;
    });
    console.log(`Scroll ${i*500}: Opacity = ${textOpacity}`);
  }
  
  await browser.close();
})();
