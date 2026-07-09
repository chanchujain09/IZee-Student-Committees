const fs = require('fs');

let content = fs.readFileSync('src/data.ts', 'utf8');

content = content.replace(
  /id: 'ivibe',\n    name: 'iVibe',([\s\S]*?)cardImage: DUMMY_CARD_IMAGE,/,
  "id: 'ivibe',\n    name: 'iVibe',$1cardImage: 'https://izeeinstitutions.com/wp-content/uploads/2025/01/Rectangle-4061-1.webp',"
);

fs.writeFileSync('src/data.ts', content);
console.log('Updated iVibe image');
