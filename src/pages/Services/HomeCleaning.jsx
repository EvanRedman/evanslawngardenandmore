
import { Link } from "react-router-dom";
import {
  ArrowLeft,
  ArrowRight,
  House,
  Droplets,
  PanelsTopLeft,
  CloudRain,
} from "lucide-react";

const SERVICES = [
  {
    icon: House,
    title: "Exterior Wall Cleaning",
    description:
      "Remove dirt, grime, and buildup from your home's exterior to keep it looking clean and well maintained.",
  },
  {
    icon: PanelsTopLeft,
    title: "Window Cleaning",
    description:
      "Exterior window cleaning to remove dirt, water spots, and seasonal buildup for a clearer view.",
  },
  {
    icon: CloudRain,
    title: "Roof & Gutter Cleaning",
    description:
      "Removal of leaves, moss, and debris from accessible roof surfaces and gutters to help keep water flowing properly.",
  },
  {
    icon: Droplets,
    title: "Pressure Washing",
    description:
      "Cleaning for patios, walkways, driveways, and other suitable hard surfaces to remove accumulated dirt and grime.",
  },
];


function HomeCleaning() {
  return (
   <main className="bg-[#f8f5f0] dark:bg-[#0f1a14] min-h-screen">
      <section className="max-w-6xl mx-auto px-4 sm:px-6 pt-8 pb-20">
        {/* Back link */}
        <Link
          to="/services"
          className="inline-flex items-center gap-2 text-sm font-medium text-green-800 dark:text-green-400 hover:gap-3 transition-all"
        >
          <ArrowLeft className="w-4 h-4" />
          All Services
        </Link>

        {/* Header */}
        <div className="mt-10 mb-12">
          <h1 className="text-4xl sm:text-5xl font-bold text-stone-900 dark:text-stone-50">
            Walls, Windows & Roof
          </h1>

          <p className="text-stone-600 dark:text-stone-400 mt-4 max-w-2xl leading-relaxed">
            Keeping your property looking its best goes beyond
            the lawn. From exterior walls and windows to roofs,
            gutters, and walkways, we help take care of the
            dirt, moss, and debris that builds up throughout
            the year in the Pacific Northwest.
          </p>
        </div>

        {/* Services */}
        <div className="grid sm:grid-cols-2 gap-5">
          {SERVICES.map(({ icon: Icon, title, description }) => (
            <div
              key={title}
              className="bg-white dark:bg-[#16251b] border border-stone-200 dark:border-green-950 rounded-2xl p-7"
            >
              <div className="w-11 h-11 bg-green-100 dark:bg-green-950 rounded-xl flex items-center justify-center mb-5">
                <Icon className="w-5 h-5 text-green-800 dark:text-green-400" />
              </div>

              <h2 className="text-xl font-bold text-stone-900 dark:text-stone-50 mb-2">
                {title}
              </h2>

              <p className="text-sm text-stone-600 dark:text-stone-400 leading-relaxed">
                {description}
              </p>
            </div>
          ))}
        </div>

        {/* Contact */}
        <div className="mt-12 rounded-2xl bg-[#1d4034] p-8 sm:p-10 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-white">
            Ready to freshen up your property?
          </h2>

          <p className="text-green-100/80 mt-3 mb-7">
            Tell us what needs cleaning and we'll provide a free estimate.
          </p>

          <Link
            to="/contact"
            className="inline-flex items-center gap-2 bg-white text-green-900 font-semibold px-6 py-3 rounded-xl hover:bg-green-50 transition-colors"
          >
            Request a Free Estimate
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </main>
  );
}

export default HomeCleaning;
