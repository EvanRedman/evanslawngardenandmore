import { useNavigate } from "react-router-dom";

import heroImage from "../assets/lawnexample.jpg";
import beforeImage from "../assets/before.jpg";
import afterImage from "../assets/after.jpg";
import {
  Phone,
  Mail,
  Sun,
  Moon,
  Menu,
  X,
  Star,
  Leaf,
  Shovel,
  Scissors,
  ChevronRight,
  MapPin,
  Clock,
} from "lucide-react";


const GALLERY_PAIRS = [
  {
    before: beforeImage,
    after: afterImage,
    /*label: "Overgrown Backyard → Private Garden Retreat",*/
  },
  {
    before: beforeImage,
    after: afterImage,
    /*label: "Patchy Front Lawn → Lush Curb Appeal",*/
  },
];

function Home() {
    const navigate = useNavigate()

  return (
  <>
<section className="relative w-full min-h-[88vh] flex items-center overflow-hidden bg-green-950">
      <img
        src={heroImage}
        alt="Lawn"
        className="absolute inset-0 w-full h-full object-cover opacity-100"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-stone-950/85 via-stone-950/25 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-t from-stone-950/25 via-transparent to-transparent" />

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 py-20 w-full">
        <div className="max-w-2xl">
          <span className="inline-flex items-center gap-1.5 text-green-300 text-xs tracking-[0.18em] uppercase font-medium mb-6">
            <Leaf className="w-3.5 h-3.5" /> Evan's Lawn, Garden, and More
          </span>
          <h1
            className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white leading-[1.08] mb-6"
            style={{ fontFamily: "'Fraunces', serif", fontOpticalSizing: "auto" }}
          >
            Affordable Local 
            Care for&nbsp;Yards
          </h1>
          <p
            className="text-stone-300 text-lg sm:text-xl mb-9 leading-relaxed max-w-lg"
            style={{ fontFamily: "'DM Sans', sans-serif" }}
          >
            Avaible to work on outdoor spaces across the community, from weekly trims to yard makeovers.
          </p>
          <div className="flex flex-wrap gap-3">
            <button
              onClick={() => navigate("/contact")}
              className="inline-flex items-center gap-2 bg-green-600 hover:bg-green-500 text-white font-semibold px-6 py-3.5 rounded-xl transition-colors text-sm"
              style={{ fontFamily: "'DM Sans', sans-serif" }}
            >
              Contact us <ChevronRight className="w-4 h-4" />
            </button>
            <a
              href="tel:1234567890"
              className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white font-semibold px-6 py-3.5 rounded-xl border border-white/25 transition-colors text-sm backdrop-blur-sm"
              style={{ fontFamily: "'DM Sans', sans-serif" }}
            >
              <Phone className="w-4 h-4" /> (123) 456-7890
            </a>
          </div>
        </div>
      </div>
    </section>

    <section className="py-20 sm:py-24 bg-white dark:bg-[#0a1209]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="mb-14 text-center">
          <span className="text-green-700 dark:text-green-400 text-xs tracking-[0.18em] uppercase font-semibold">
            Results
          </span>
          <h2
            className="text-4xl sm:text-5xl font-bold text-stone-900 dark:text-stone-50 mt-2"
            style={{ fontFamily: "'Fraunces', serif" }}
          >
            Before and After
          </h2>
          <p className="text-stone-500 dark:text-stone-400 mt-3 max-w-md mx-auto text-base">
            See the quality of our work for yourself.
          </p>
        </div>

        <div className="flex flex-col gap-10">
          {GALLERY_PAIRS.map(({ before, after, label }, i) => (
            <div key={i}>

              <div className="grid grid-cols-2 gap-3 sm:gap-5">
                <div className="relative rounded-2xl overflow-hidden bg-stone-200 dark:bg-stone-800 aspect-[4/3]">
                  <img src={before} alt={`Before: ${label}`} className="w-full h-full object-cover" />
                  <span className="absolute top-2.5 left-2.5 bg-stone-900/75 text-white text-xs font-bold px-3 py-1 rounded-lg backdrop-blur-sm tracking-wide">
                    Before
                  </span>
                </div>
                <div className="relative rounded-2xl overflow-hidden bg-green-200 dark:bg-green-950 aspect-[4/3]">
                  <img src={after} alt={`After: ${label}`} className="w-full h-full object-cover" />
                  <span className="absolute top-2.5 left-2.5 bg-green-700/85 text-white text-xs font-bold px-3 py-1 rounded-lg backdrop-blur-sm tracking-wide">
                    After
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  </>
  )
}

export default Home;
