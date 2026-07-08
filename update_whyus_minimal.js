const fs = require('fs');
let content = fs.readFileSync('src/components/CommitteeTemplate.tsx', 'utf8');

const regex = /\{\/\* 5\. What We Do \(Grid matching design aspect\) \*\/\}[\s\S]*?(?=\{\/\* 6\. Flagship Event \*\/\})/g;

const replacement = `{/* 5. What We Do (Grid matching design aspect) */}
      <section className="py-16 bg-white relative overflow-hidden border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          <div className="text-center mx-auto mb-16 flex flex-col items-center">
            <h3 className="text-xs font-bold tracking-widest uppercase text-slate-500 mb-2">Why Us?</h3>
            <h2 className=" text-2xl md:text-3xl font-bold tracking-tight text-slate-900 mb-4">
              Advantages of Having <span className={committee.color.text}>{committee.name}</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 pt-4 max-w-6xl mx-auto justify-center px-4">
            {committee.whatWeDo.map((item, index) => {
              const rotationClasses = [
                '-rotate-3 translate-x-1 translate-y-1',
                'rotate-3 -translate-x-1 translate-y-1',
                '-rotate-2 translate-x-2 -translate-y-1',
                'rotate-2 -translate-x-1 translate-y-2'
              ];
              const offsetClass = rotationClasses[index % rotationClasses.length];

              return (
                <div key={index} className="relative flex flex-col items-center group mt-4 lg:mt-0">
                  {/* Background offset shape */}
                  <div className={cn("absolute inset-0 rounded-2xl transition-transform duration-500 group-hover:scale-105 opacity-80", committee.color.bg, offsetClass)} />
                  
                  {/* Main Card */}
                  <div className="bg-white rounded-2xl shadow-sm w-full relative z-10 flex flex-col items-center p-6 text-center h-full border border-slate-100 transition-transform duration-500 group-hover:-translate-y-1">
                    
                    <div className="mb-4">
                       <Icons.CheckCircle className={cn("w-6 h-6", committee.color.text)} />
                    </div>

                    <h3 className="text-lg font-semibold text-slate-900 mb-2">{item.title}</h3>
                    
                    <p className="text-sm text-slate-500 leading-relaxed">
                      {item.description}
                    </p>
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
