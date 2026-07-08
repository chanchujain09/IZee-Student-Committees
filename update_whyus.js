const fs = require('fs');
let content = fs.readFileSync('src/components/CommitteeTemplate.tsx', 'utf8');

const regex = /\{\/\* 5\. What We Do \(Mind Map\) \*\/\}[\s\S]*?(?=\{\/\* 6\. Team \*\/\})/g;

const replacement = `{/* 5. What We Do (Grid matching design aspect) */}
      <section className="py-24 bg-slate-50 relative overflow-hidden border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          <div className="text-center mx-auto mb-20 lg:mb-28">
            <h3 className="text-sm font-bold tracking-widest uppercase text-slate-500 mb-3">Why Us?</h3>
            <h2 className=" text-3xl md:text-4xl font-bold tracking-tight text-slate-900">
              Advantages of Having <span className={committee.color.text}>{committee.name}</span> in Your Life
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 pt-8">
            {committee.whatWeDo.map((item, index) => {
              const rotationClasses = [
                '-rotate-6 translate-x-2 translate-y-2',
                'rotate-6 -translate-x-2 translate-y-2',
                '-rotate-3 translate-x-3 -translate-y-1',
                'rotate-3 -translate-x-3 translate-y-2'
              ];
              const offsetClass = rotationClasses[index % rotationClasses.length];

              return (
                <div key={index} className="relative flex flex-col items-center group mt-10 lg:mt-0">
                  {/* Background offset shape */}
                  <div className={cn("absolute inset-0 rounded-[2rem] transition-transform duration-500 group-hover:scale-105", committee.color.bg, offsetClass)} />
                  
                  {/* Main Card */}
                  <div className="bg-white rounded-[2rem] shadow-xl w-full relative z-10 flex flex-col items-center p-8 pt-14 text-center h-full border border-slate-100 transition-transform duration-500 group-hover:-translate-y-2">
                    
                    {/* Top Circle overlapping */}
                    <div className="absolute -top-10 w-20 h-20 bg-slate-100 rounded-full border-4 border-white shadow-md flex items-center justify-center overflow-hidden">
                       <Icons.CheckCircle className={cn("w-8 h-8", committee.color.text)} />
                    </div>

                    <h3 className="text-xl font-medium text-slate-900 mb-2 mt-2 font-display">{item.title}</h3>
                    <p className="text-sm font-light text-slate-400 italic mb-2">advantage</p>
                    
                    <p className="text-sm text-slate-500 leading-relaxed mt-4">
                      {item.description}
                    </p>

                    {/* Bottom overlapping badge */}
                    <div className="absolute -bottom-5 w-10 h-10 bg-white rounded-full shadow-md flex items-center justify-center border border-slate-100">
                      <Icons.Star className="w-5 h-5 text-amber-400 fill-amber-400" />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      `;

if (content.match(regex)) {
  content = content.replace(regex, replacement);
  fs.writeFileSync('src/components/CommitteeTemplate.tsx', content);
  console.log('Replaced successfully');
} else {
  console.log('Regex did not match');
}
