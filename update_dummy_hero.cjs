const fs = require('fs');

let content = fs.readFileSync('src/data.ts', 'utf8');

content = content.replace(
  /const DUMMY_HERO_1 = '.*';/,
  "const DUMMY_HERO_1 = 'https://izeeinstitutions.com/wp-content/uploads/2025/01/Rectangle-4059-2.webp';"
);

content = content.replace(
  /const DUMMY_HERO_2 = '.*';/,
  "const DUMMY_HERO_2 = 'https://izeeinstitutions.com/wp-content/uploads/2025/01/Rectangle-4059-2.webp';"
);

fs.writeFileSync('src/data.ts', content);
console.log('Updated DUMMY_HERO variables');
