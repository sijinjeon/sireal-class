const fs = require('fs');
const path = require('path');

const distDir = path.join(__dirname, '..', 'dist');
const repoRoot = path.join(__dirname, '..', '..', '..');
const docsDir = path.join(repoRoot, 'docs');

const files = ['index.html', 'slides.pdf'];

const targets = [
  { dir: docsDir, label: 'docs/' },
  { dir: repoRoot, label: 'repo root (legacy Pages /)' },
];

for (const { dir, label } of targets) {
  fs.mkdirSync(dir, { recursive: true });

  for (const file of files) {
    const src = path.join(distDir, file);
    const dest = path.join(dir, file);
    if (!fs.existsSync(src)) {
      console.error(`Missing build artifact: ${src}`);
      process.exit(1);
    }
    fs.copyFileSync(src, dest);
    console.log(`Copied ${file} → ${label}`);
  }

  fs.writeFileSync(path.join(dir, '.nojekyll'), '');

  fs.writeFileSync(
    path.join(dir, '404.html'),
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
  console.log(`Updated ${label}404.html`);
}
