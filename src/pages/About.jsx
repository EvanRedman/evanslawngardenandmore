import heroImage from "../assets/glacier.jpg";
import aboutUs from "../assets/evan.png";

function About() {
  const values = [
    {
      emoji: "🌱",
      title: "Sustainability",
      desc: "We use eco-friendly materials and methods when we can to minimize our environmental footprint.",
    },
    {
      emoji: "🤝",
      title: "Reliability",
      desc: "We show up when we say we will, every single time.",
    },
    {
      emoji: "📍",
      title: "Local",
      desc: "We are based right here in Bellingham, Washington.",
    },
  ];

  return (
    <main>
      {/* Banner */}
      <div className="relative h-64 sm:h-70 overflow-hidden">
        <img
          src={heroImage}
          alt="Greenshades team members working in a yard"
          className="absolute inset-0 w-full h-full object-cover opacity-45"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-green-950/60 to-green-950/80" />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center px-4">

          <h1 className="text-4xl sm:text-5xl font-bold">
            About Redman Landscaping
          </h1>
        </div>
      </div>
      {/* Story */}
      <section className="py-16 sm:py-20 bg-[#f8f5f0] dark:bg-[#0f1a14]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold text-stone-900 dark:text-stone-50 mt-2 mb-5">
              Our Roots
            </h2>
            <p className="text-stone-600 dark:text-stone-400 leading-relaxed mb-4 text-base">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras efficitur viverra risus in maximus. Etiam in libero feugiat, eleifend justo a, facilisis elit. Praesent elementum orci ut pretium mollis. Praesent semper et quam nec dignissim. Duis lacinia pellentesque turpis ut egestas. Donec id vehicula arcu, at interdum lorem. Praesent quis metus pretium leo porta tincidunt. 
            </p>
            <p className="text-stone-600 dark:text-stone-400 leading-relaxed mb-4 text-base">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras efficitur viverra risus in maximus. 
            </p>
            <p className="text-stone-600 dark:text-stone-400 leading-relaxed text-base">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras efficitur viverra risus in maximus. Etiam in libero feugiat, eleifend justo a, facilisis elit. 
            </p>
          </div>
          <div className="rounded-2xl overflow-hidden bg-green-100 dark:bg-green-950 aspect-square shadow-lg">
            <img
              src={aboutUs}
              alt="Beautiful landscaped garden result"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 sm:py-20 bg-white dark:bg-[#0f1a14]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-stone-900 dark:text-stone-50 mt-2">
              Our Values
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {values.map(({ emoji, title, desc }) => (
              <div
                key={title}
                className="bg-white dark:bg-[#162010] rounded-2xl p-7 border border-stone-200 dark:border-green-950 text-center"
              >
                <div className="text-4xl mb-4">{emoji}</div>
                <h3
                  className="font-bold text-stone-900 dark:text-stone-50 text-xl mb-2"
                  style={{ fontFamily: "'Fraunces', serif" }}
                >
                  {title}
                </h3>
                <p className="text-stone-500 dark:text-stone-400 text-sm leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

export default About;
