const fs = require('fs');
let typesContent = fs.readFileSync('src/types.ts', 'utf8');
typesContent = typesContent.replace('icon: string; // mapped to LucideIcon in components', 'icon: string;\n  logo?: string;');
fs.writeFileSync('src/types.ts', typesContent);

let dataContent = fs.readFileSync('src/data.ts', 'utf8');
const images = [
  'https://i.postimg.cc/f3xkx5hX/img1.png',
  'https://i.postimg.cc/GBk9kz1G/img2.png',
  'https://i.postimg.cc/GBk9kz1v/img3.png',
  'https://i.postimg.cc/wth3hFdN/img4.png',
  'https://i.postimg.cc/tsnsgpSM/img5.png'
];
let heroIndex = 0;
dataContent = dataContent.replace(/heroImage: 'https:\/\/i\.postimg\.cc\/[A-Za-z0-9]+\/img\d\.png'/g, () => {
  const result = `heroImage: DUMMY_HERO_${heroIndex % 2 === 0 ? '1' : '2'},\n    logo: '${images[heroIndex]}'`;
  heroIndex++;
  return result;
});
fs.writeFileSync('src/data.ts', dataContent);
console.log('Updated types and data');
