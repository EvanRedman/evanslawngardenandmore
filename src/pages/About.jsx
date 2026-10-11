import heroImage from "../assets/hero_about.jpg";
import aboutUs from "../assets/sunset.jpg";

function About() {
  const team = [
    {
      name: "Random person 1",
      role: "Founder",
      img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&auto=format",
    },
    {
      name: "Random person 2",
      role: "Member",
      img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=300&h=300&fit=crop&auto=format",
    },
    {
      name: "Random person 3",
      role: "Member",
      img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=300&h=300&fit=crop&auto=format",
    },
  ];

  const values = [
    {
      emoji: "🌱",
      title: "Sustainability",
      desc: "We use eco-friendly methods to minimize our environmental footprint.",
    },
    {
      emoji: "🤝",
      title: "Reliability",
      desc: "We show up when we say we will, every single time. Rain or shine, year round.",
    },
    {
      emoji: "💛",
      title: "Affordability",
      desc: "Premium results at a non-premium price. We keep our rates low, fair, and transparent.",
    },
  ];

  return (
    <main>
      {/* Banner */}
      <div className="relative h-64 sm:h-80 bg-green-950 overflow-hidden">
        <img
          src={heroImage}
          alt="Greenshades team members working in a yard"
          className="absolute inset-0 w-full h-full object-cover opacity-45"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-green-950/60 to-green-950/80" />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center px-4">

          <h1
            className="text-4xl sm:text-5xl font-bold"
            style={{ fontFamily: "'Fraunces', serif" }}
          >
            About Redman Landscaping
          </h1>
        </div>
      </div>
      {/* Story */}
      <section className="py-16 sm:py-20 bg-[#f8f5f0] dark:bg-[#0f1a14]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <span className="text-green-700 dark:text-green-400 text-xs tracking-[0.18em] uppercase font-semibold">
              The roots
            </span>
            <h2
              className="text-3xl sm:text-4xl font-bold text-stone-900 dark:text-stone-50 mt-2 mb-5"
              style={{ fontFamily: "'Fraunces', serif" }}
            >
              My story
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

      {/* Team */}
      <section className="py-16 sm:py-20 bg-white dark:bg-[#0a1209]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <span className="text-green-700 dark:text-green-400 text-xs tracking-[0.18em] uppercase font-semibold">
              The People
            </span>
            <h2
              className="text-3xl sm:text-4xl font-bold text-stone-900 dark:text-stone-50 mt-2"
              style={{ fontFamily: "'Fraunces', serif" }}
            >
              Meet the Team
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
            {team.map(({ name, role, img }) => (
              <div key={name} className="text-center">
                <div className="w-32 h-32 rounded-full overflow-hidden bg-stone-200 dark:bg-stone-700 mx-auto mb-4 ring-4 ring-green-100 dark:ring-green-900">
                  <img src={img} alt={name} className="w-full h-full object-cover" />
                </div>
                <h3
                  className="font-bold text-stone-900 dark:text-stone-50 text-xl"
                  style={{ fontFamily: "'Fraunces', serif" }}
                >
                  {name}
                </h3>
                <p className="text-stone-500 dark:text-stone-400 text-sm mt-1">{role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 sm:py-20 bg-[#f8f5f0] dark:bg-[#0f1a14]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <span className="text-green-700 dark:text-green-400 text-xs tracking-[0.18em] uppercase font-semibold">
              What We Stand For
            </span>
            <h2
              className="text-3xl sm:text-4xl font-bold text-stone-900 dark:text-stone-50 mt-2"
              style={{ fontFamily: "'Fraunces', serif" }}
            >
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
