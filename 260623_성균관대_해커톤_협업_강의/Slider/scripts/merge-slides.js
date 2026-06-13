const fs = require('fs');
const path = require('path');

const slidesDir = path.join(__dirname, '..', 'slides');
const outFile = path.join(__dirname, '..', 'dist', 'deck.md');

const files = fs
  .readdirSync(slidesDir)
  .filter((f) => f.endsWith('.md'))
  .sort();

const merged = files
  .map((file, index) => {
    let content = fs.readFileSync(path.join(slidesDir, file), 'utf8');
    if (index > 0) {
      content = content.replace(/^---[\s\S]*?---\n*/m, '');
    }
    return content.trim();
  })
  .join('\n\n');

fs.mkdirSync(path.dirname(outFile), { recursive: true });
fs.writeFileSync(outFile, merged + '\n');

console.log(`Merged ${files.length} files → dist/deck.md`);
