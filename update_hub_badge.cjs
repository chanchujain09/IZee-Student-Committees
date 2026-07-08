const fs = require('fs');
let content = fs.readFileSync('src/components/HubPage.tsx', 'utf8');

const regex = /<div className="w-10 h-10 bg-\[#C8102E\] rounded-xl flex flex-col items-center justify-center text-white shadow-lg">[\s\S]*?<\/div>/g;
const replacement = `<div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center text-white shadow-lg overflow-hidden border border-slate-100">
                      {committee.logo ? (
                        <img src={committee.logo} alt={committee.name} className="w-full h-full object-cover" />
                      ) : (
                        <div className="flex flex-col items-center justify-center bg-[#C8102E] w-full h-full">
                          <Icons.Sun className="w-4 h-4 mb-0.5 text-white" strokeWidth={2.5} />
                          <span className="text-[7px] font-bold tracking-[0.2em] leading-none text-white">IZEE</span>
                        </div>
                      )}
                    </div>`;

content = content.replace(regex, replacement);
fs.writeFileSync('src/components/HubPage.tsx', content);
console.log('Updated badge in HubPage.tsx');
