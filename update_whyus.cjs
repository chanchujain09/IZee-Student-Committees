const fs = require('fs');
let content = fs.readFileSync('src/components/CommitteeTemplate.tsx', 'utf8');

const regex = /\{\/\* 5\. What We Do \(Mind Map\) \*\/\}[\s\S]*?(?=\{\/\* 6\. Flagship Event \*\/\})/g;

const replacement = `{/* 5. What We Do (Grid matching design aspect) */}
      <section className="py-24 bg-white relative overflow-hidden border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          <div className="text-center mx-auto mb-20 lg:mb-28 flex flex-col items-center">
            <h3 className="text-sm font-bold tracking-widest uppercase text-slate-500 mb-3">Why Us?</h3>
            <h2 className=" text-3xl md:text-4xl font-bold tracking-tight text-slate-900 mb-4">
              Advantages of Having <span className={committee.color.text}>{committee.name}</span> in Your Life
            </h2>
            <div className="w-24 h-1 rounded-full bg-slate-200 flex overflow-hidden">
               <div className={cn("w-12 h-full", committee.color.bg)}></div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-16 gap-x-8 lg:gap-x-12 pt-8 max-w-6xl mx-auto justify-center">
            {committee.whatWeDo.slice(0, 3).map((item, index) => {
              const rotationClasses = [
                '-rotate-6 translate-x-2 translate-y-2',
                'rotate-6 -translate-x-2 translate-y-2',
                '-rotate-3 translate-x-3 -translate-y-1'
              ];
              const offsetClass = rotationClasses[index % rotationClasses.length];

              return (
                <div key={index} className="relative flex flex-col items-center group mt-10 lg:mt-0">
                  {/* Background offset shape */}
                  <div className={cn("absolute inset-0 rounded-[2rem] transition-transform duration-500 group-hover:scale-105", committee.color.bg, offsetClass)} />
                  
                  {/* Main Card */}
                  <div className="bg-white rounded-[2rem] shadow-xl w-full relative z-10 flex flex-col items-center p-8 pt-16 pb-12 text-center h-full border border-slate-100 transition-transform duration-500 group-hover:-translate-y-2">
                    
                    {/* Top Circle overlapping */}
                    <div className="absolute -top-10 w-20 h-20 bg-slate-100 rounded-full border-4 border-white shadow-md flex items-center justify-center overflow-hidden">
                       <Icons.CheckCircle className={cn("w-8 h-8", committee.color.text)} />
                    </div>

                    <h3 className="text-xl font-medium text-slate-900 mb-1 mt-2">{item.title}</h3>
                    <p className="text-sm font-light text-slate-400 italic mb-4">advantage</p>
                    
                    <p className="text-sm text-slate-500 leading-relaxed mt-2">
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
