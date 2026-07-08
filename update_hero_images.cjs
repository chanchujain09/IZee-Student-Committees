const fs = require('fs');

let content = fs.readFileSync('src/data.ts', 'utf8');

const images = [
  'https://i.postimg.cc/f3xkx5hX/img1.png',
  'https://i.postimg.cc/GBk9kz1G/img2.png',
  'https://i.postimg.cc/GBk9kz1v/img3.png',
  'https://i.postimg.cc/wth3hFdN/img4.png',
  'https://i.postimg.cc/tsnsgpSM/img5.png'
];

let index = 0;
content = content.replace(/heroImage:\s*DUMMY_HERO_[12]/g, () => {
  const result = `heroImage: '${images[index]}'`;
  index++;
  return result;
});

fs.writeFileSync('src/data.ts', content);
console.log('Updated hero images');
