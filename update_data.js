const fs = require('fs');

let content = fs.readFileSync('src/data.ts', 'utf8');

const newTeam = `    team: [
      { name: 'Arockiya Raj', role: 'President', image: 'https://izeeedu.com/wp-content/uploads/2026/02/Profile-Picture.webp' },
      { name: 'Dinesh Kumar R', role: 'Vice President', image: 'https://izeeedu.com/wp-content/uploads/2026/02/Profile-Picture-1.webp' },
      { name: 'Ramba Nishma', role: 'Core Member', image: 'https://izeeedu.com/wp-content/uploads/2026/02/Profile-Picture-6.webp' },
      { name: 'Samadhi Yashwanthi', role: 'Core Member', image: 'https://izeeedu.com/wp-content/uploads/2026/02/Profile-Picture-9-1.webp' },
      { name: 'Sankepalli Manasa', role: 'Core Member', image: 'https://izeeedu.com/wp-content/uploads/2026/02/Profile-Picture-10.png' },
      { name: 'Rakesh Kavali', role: 'Core Member', image: 'https://izeeedu.com/wp-content/uploads/2026/02/Profile-Picture-5.webp' }
    ]`;

content = content.replace(/team:\s*\[[\s\S]*?\]/g, newTeam);

fs.writeFileSync('src/data.ts', content);
console.log('Updated src/data.ts');
