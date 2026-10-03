import puppeteer from 'puppeteer';

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto('https://orenda.framer.website/about', { waitUntil: 'networkidle0' });
  
  // We want to find the section at the bottom with the images
  const data = await page.evaluate(() => {
    // Collect all images in the document to find the cluster
    const imgs = Array.from(document.querySelectorAll('img'));
    
    // Find a sticky container near the bottom
    const stickyContainers = Array.from(document.querySelectorAll('*')).filter(el => {
      const style = window.getComputedStyle(el);
      return style.position === 'sticky' || style.position === '-webkit-sticky';
    });
    
    return stickyContainers.map(el => {
       const rect = el.getBoundingClientRect();
       const childrenImgs = el.querySelectorAll('img').length;
       return { 
           y: rect.y, 
           height: rect.height,
           childrenImgs,
           html: childrenImgs > 3 ? el.innerHTML.substring(0, 500) : ''
       };
    });
  });
  console.log(JSON.stringify(data, null, 2));
  await browser.close();
})();
