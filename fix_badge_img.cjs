const fs = require('fs');
let content = fs.readFileSync('src/components/HubPage.tsx', 'utf8');

content = content.replace(
  '<img src={committee.logo} alt={committee.name} className="w-full h-full object-cover" />',
  '<img src={committee.logo} alt={committee.name} className="w-full h-full object-contain p-1" />'
);

// remove the p-1 from the container to avoid double padding or whatever, actually let's just make it object-contain.
content = content.replace(
  '<div className="w-14 h-14 bg-white rounded-xl flex items-center justify-center text-white shadow-lg overflow-hidden border border-slate-100 p-1">',
  '<div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center text-white shadow-lg overflow-hidden border border-slate-100">'
);

fs.writeFileSync('src/components/HubPage.tsx', content);
