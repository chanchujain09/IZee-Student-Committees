const fs = require('fs');
let content = fs.readFileSync('src/components/HubPage.tsx', 'utf8');

content = content.replace(
  '<div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center text-white shadow-lg overflow-hidden border border-slate-100">',
  '<div className="w-14 h-14 bg-white rounded-xl flex items-center justify-center text-white shadow-lg overflow-hidden border border-slate-100 p-1">'
);

fs.writeFileSync('src/components/HubPage.tsx', content);
