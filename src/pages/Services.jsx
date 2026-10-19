import maintananceImage from "../assets/mowing.jpg";
import pruningImage from "../assets/tree_pruning.jpg";
import makeoverImage from "../assets/makeover.jpg";
import fallImage from "../assets/fall.jpg";

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

function Services() {
    const SERVICES = [
    {
        icon: Leaf,
        title: "Lawn Care",
        summary:
        "Regular mowing, trimming, and seasonal care to keep your yard looking sharp week after week.",
        img: maintananceImage,
        alt: "Formal landscaped garden with sculpted hedges, stone urn, and flower beds",
    },
    {
        icon: Shovel,
        title: "Seasonal Cleanups",
        summary:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras efficitur viverra risus in maximus.",
        img: fallImage,
        alt: "Landscaper hauling yard debris in a wheelbarrow during a yard makeover",
    },
    {
        icon: Scissors,
        title: "Wall, Windows, and Roof",
        summary:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras efficitur viverra risus in maximus.",
        img: pruningImage,
        alt: "Manicured lawn with tidy flower beds and mature trees",
    },
    {
        icon: Scissors,
        title: "Hauling and Removal",
        summary:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras efficitur viverra risus in maximus.",
        img: pruningImage,
        alt: "Manicured lawn with tidy flower beds and mature trees",
    },

    ];

  return (
    <section className="py-20 sm:py-24 bg-[#f8f5f0] dark:bg-[#0f1a14]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="mb-14 text-center">
          <h2
            className="text-4xl sm:text-5xl font-bold text-stone-900 dark:text-stone-50 mt-2"
            style={{ fontFamily: "'Fraunces', serif" }}
          >
            Click to learn about our services
          </h2>
          {/*<p className="text-stone-500 dark:text-stone-400 mt-3 max-w-md mx-auto text-base">
            See the services that we offer.
          </p>*/}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-4 gap-5">
          {SERVICES.map(({ icon: Icon, title, summary, img, alt }) => (
            <div
              key={title}
              className="group bg-white dark:bg-[#162010] rounded-2xl overflow-hidden border border-stone-200 dark:border-green-950 hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
            >
              <div className="relative h-48 bg-green-100 dark:bg-green-950 overflow-hidden">
                <img
                  src={img}
                  alt={alt}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                <div className="absolute top-3 left-3 w-9 h-9 bg-white dark:bg-[#0f1a14] rounded-lg flex items-center justify-center shadow-sm">
                  <Icon className="w-4 h-4 text-green-700 dark:text-green-400" />
                </div>
              </div>
              <div className="p-6">
                <h3
                  className="text-xl font-bold text-stone-900 dark:text-stone-50 mb-2"
                  style={{ fontFamily: "'Fraunces', serif" }}
                >
                  {title}
                </h3>
                <p className="text-stone-500 dark:text-stone-400 text-sm leading-relaxed">{summary}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;
