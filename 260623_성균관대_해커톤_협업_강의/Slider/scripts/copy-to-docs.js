const fs = require('fs');
const path = require('path');

const distDir = path.join(__dirname, '..', 'dist');
const docsDir = path.join(__dirname, '..', '..', '..', 'docs');

const files = ['index.html', 'slides.pdf', '.nojekyll'];

fs.mkdirSync(docsDir, { recursive: true });

for (const file of files) {
  const src = path.join(distDir, file);
  const dest = path.join(docsDir, file);
  if (!fs.existsSync(src) && file !== '.nojekyll') {
    console.error(`Missing build artifact: ${src}`);
    process.exit(1);
  }
  if (fs.existsSync(src)) {
    fs.copyFileSync(src, dest);
    console.log(`Copied ${file} → docs/`);
  }
}

// GitHub Pages 404 → 슬라이드 홈으로
fs.writeFileSync(
  path.join(docsDir, '404.html'),
  `<!DOCTYPE html>
<html lang="ko">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>해커톤 협업 강의</title>
  <script>
    const base = '/sireal-class/';
    location.replace(base + location.search + location.hash);
  </script>
</head>
<body><p><a href="/sireal-class/">해커톤 협업 강의 슬라이드로 이동</a></p></body>
</html>
`
);

console.log('Updated docs/404.html');
