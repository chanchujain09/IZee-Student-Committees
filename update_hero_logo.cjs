const fs = require('fs');
let content = fs.readFileSync('src/components/CommitteeTemplate.tsx', 'utf8');

const regex = /<div className="mb-8">\s*<h1 className=" text-4xl sm:text-5xl md:text-6xl font-bold text-white tracking-tight uppercase drop-shadow-md">\{committee\.name\}<\/h1>\s*<p className="text-sm sm:text-base font-bold mt-2 uppercase tracking-widest text-slate-300">\s*\{committee\.fullName\}\s*<\/p>\s*<\/div>/g;

const replacement = `<div className="mb-8 flex items-center gap-6 lg:gap-8">
                {committee.logo && (
                  <div className="w-20 h-20 sm:w-24 sm:h-24 bg-white rounded-2xl flex items-center justify-center p-2 shadow-xl shadow-black/20 flex-shrink-0 hidden sm:flex">
                    <img src={committee.logo} alt={committee.name} className="w-full h-full object-contain" />
                  </div>
                )}
                <div className="flex flex-col">
                  <div className="flex items-center gap-4 sm:hidden mb-4">
                    {committee.logo && (
                      <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center p-2 shadow-xl shadow-black/20 flex-shrink-0">
                        <img src={committee.logo} alt={committee.name} className="w-full h-full object-contain" />
                      </div>
                    )}
                  </div>
                  <h1 className=" text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white tracking-tight uppercase drop-shadow-md">{committee.name}</h1>
                  <p className="text-sm sm:text-base font-bold mt-2 uppercase tracking-widest text-slate-300">
                    {committee.fullName}
                  </p>
                </div>
              </div>`;

content = content.replace(regex, replacement);
fs.writeFileSync('src/components/CommitteeTemplate.tsx', content);
console.log('Added logo to hero');
