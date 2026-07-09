const fs = require('fs');

let content = fs.readFileSync('src/data.ts', 'utf8');

content = content.replace(
  /id: 'icare',\n    name: 'iCare',([\s\S]*?)cardImage: DUMMY_CARD_IMAGE,/,
  "id: 'icare',\n    name: 'iCare',$1cardImage: 'https://izeeinstitutions.com/wp-content/uploads/2025/01/Rectangle-4065.webp',"
);

fs.writeFileSync('src/data.ts', content);
console.log('Updated iCare image');
