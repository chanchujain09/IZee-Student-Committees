const fs = require('fs');

// 1. Update types.ts
let typesContent = fs.readFileSync('src/types.ts', 'utf8');
if (!typesContent.includes('cardImage?: string;')) {
  typesContent = typesContent.replace('heroImage: string;', 'heroImage: string;\n  cardImage?: string;');
  fs.writeFileSync('src/types.ts', typesContent);
}

// 2. Update data.ts
let dataContent = fs.readFileSync('src/data.ts', 'utf8');

dataContent = dataContent.replace(
  /const DUMMY_HERO_1 = '.*';/,
  "const DUMMY_HERO_1 = 'https://izeeinstitutions.com/wp-content/uploads/2025/01/Rectangle-4072-1.webp';"
);

dataContent = dataContent.replace(
  /const DUMMY_HERO_2 = '.*';/,
  "const DUMMY_HERO_2 = 'https://izeeinstitutions.com/wp-content/uploads/2025/01/Rectangle-4072-1.webp';"
);

if (!dataContent.includes('DUMMY_CARD_IMAGE')) {
  dataContent = dataContent.replace(
    /const DUMMY_HERO_2 = '.*';/,
    "const DUMMY_HERO_2 = 'https://izeeinstitutions.com/wp-content/uploads/2025/01/Rectangle-4072-1.webp';\nconst DUMMY_CARD_IMAGE = 'https://izeeinstitutions.com/wp-content/uploads/2025/01/Rectangle-4059-2.webp';"
  );
  
  dataContent = dataContent.replace(/heroImage: DUMMY_HERO_1,/g, "heroImage: DUMMY_HERO_1,\n    cardImage: DUMMY_CARD_IMAGE,");
  dataContent = dataContent.replace(/heroImage: DUMMY_HERO_2,/g, "heroImage: DUMMY_HERO_2,\n    cardImage: DUMMY_CARD_IMAGE,");
}

fs.writeFileSync('src/data.ts', dataContent);

// 3. Update HubPage.tsx
let hubContent = fs.readFileSync('src/components/HubPage.tsx', 'utf8');
hubContent = hubContent.replace(/src=\{committee\.heroImage\}/g, "src={committee.cardImage || committee.heroImage}");
fs.writeFileSync('src/components/HubPage.tsx', hubContent);

console.log('Fixed images');
