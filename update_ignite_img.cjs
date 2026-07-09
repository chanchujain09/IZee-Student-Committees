const fs = require('fs');

let content = fs.readFileSync('src/data.ts', 'utf8');

content = content.replace(
  /id: 'ignite',\n    name: 'iGnite',([\s\S]*?)cardImage: DUMMY_CARD_IMAGE,/,
  "id: 'ignite',\n    name: 'iGnite',$1cardImage: 'https://izeeinstitutions.com/wp-content/uploads/2025/01/Rectangle-4058.webp',"
);

fs.writeFileSync('src/data.ts', content);
console.log('Updated iGnite image');
