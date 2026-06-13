const fs = require('fs');
const path = require('path');

const distDir = path.join(__dirname, '..', 'dist');

fs.mkdirSync(distDir, { recursive: true });
fs.writeFileSync(path.join(distDir, '.nojekyll'), '');

fs.writeFileSync(
  path.join(distDir, '404.html'),
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

console.log('Prepared Slider/dist/ for GitHub Pages (.nojekyll, 404.html)');
