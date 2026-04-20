const fs = require('fs');
const path = require('path');

const srcDir = 'd:/web-dev/guru/silver idols';
const destDir = 'd:/web-dev/guru/public/products/silver';

if (!fs.existsSync(destDir)) {
  fs.mkdirSync(destDir, { recursive: true });
}

const files = fs.readdirSync(srcDir).filter(f => f.endsWith('.jpeg') || f.endsWith('.jpg'));

files.forEach((file, index) => {
  const srcFile = path.join(srcDir, file);
  const destFile = path.join(destDir, `silver-idol-${index + 1}.jpeg`);
  fs.copyFileSync(srcFile, destFile);
});

console.log('Images copied successfully.');
