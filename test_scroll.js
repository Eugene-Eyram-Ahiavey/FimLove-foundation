const fs = require('fs');
const code = fs.readFileSync('/Users/kobe/Documents/MODE/FirmLove/src/pages/About.tsx', 'utf8');
console.log(code.includes("textOpacity"));
