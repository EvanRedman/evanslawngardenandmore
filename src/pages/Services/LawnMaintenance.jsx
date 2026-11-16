import { Link } from "react-router-dom";
import {
  ArrowLeft,
  ArrowRight,
  Check,
  Leaf,
  CalendarDays,
  ClipboardCheck,
  Mountain,
  Sprout,
} from "lucide-react";

const PLANS = [
  {
    number: "01",
    name: "Chuckanut",
    subtitle: "Essential Lawn Care",
    description:
      "The essentials for a consistently clean, well-kept lawn and property.",
    features: [
      "Lawn mowing",
      "Weed whacking and edging",
      "Blowing off hard surfaces",
      "General property walkthrough",
    ],
    color: "#577c58",
  },
  {
    number: "02",
    name: "Shuksan",
    subtitle: "Enhanced Landscape Care",
    description:
      "More detailed attention to the landscaping that surrounds your lawn.",
    features: [
      "Garden bed weeding",
      "Light shrub and ornamental pruning",
      "Detailed edging and garden tidying",
      "Routine landscape health monitoring",
      "Priority scheduling",
    ],
    color: "#426c51",
  },
  {
    number: "03",
    name: "Kulshan",
    subtitle: "Complete Landscape Care",
    description:
      "A proactive approach to keeping your lawn, plants, and landscape healthy.",
    features: [
      "More extensive pruning and shrub care",
      "Mulch installation and touch-ups",
      "Moss management",
      "Fertilization as needed",
    ],
    color: "#305846",
  },
  {
    number: "04",
    name: "Tahoma",
    subtitle: "Full Property Maintenance",
    description:
      "Our most comprehensive plan, caring for your landscape and property throughout the seasons.",
    features: [
      "Comprehensive property maintenance",
      "Gutter cleaning and pressure washing",
      "Storm debris and seasonal cleanups",
      "Annual maintenance planning",
      "Property inspections",
    ],
    color: "#1d4034",
  },
];

function MountainBackdrop() {
  return (
    <svg
      viewBox="0 0 1200 450"
      preserveAspectRatio="xMidYMax slice"
      className="absolute inset-0 w-full h-full"
      aria-hidden="true"
    >
      <path
        d="M0 400 L180 280 L250 320 L470 110 L570 235 L720 75 L850 235 L1010 20 L1200 225 L1200 450 L0 450 Z"
        fill="#dce9dd"
      />
      <path
        d="M0 435 L160 340 L280 385 L510 190 L650 330 L830 125 L970 275 L1100 155 L1200 240 L1200 450 L0 450 Z"
        fill="#b9d0bd"
      />
      <path
        d="M0 450 L180 410 L380 290 L540 390 L740 260 L900 375 L1090 265 L1200 335 L1200 450 Z"
        fill="#8faf96"
      />
    </svg>
  );
}

function PlanCard({ plan, index }) {
  return (
    <div
      className="group relative overflow-hidden rounded-2xl border border-stone-200 dark:border-green-950 bg-white dark:bg-[#16251b] shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
    >
      <div className="grid lg:grid-cols-[280px_1fr]">
        {/* Colored plan heading */}
        <div
          className="relative p-7 sm:p-8 text-white flex flex-col justify-between min-h-[200px]"
          style={{ backgroundColor: plan.color }}
        >
          <div>
            <div className="flex items-center justify-between mb-7">
              <span className="text-xs font-semibold tracking-[0.2em] text-white/70 uppercase">
                Level {plan.number}
              </span>
              <Mountain className="w-6 h-6 text-white/60" />
            </div>

            <h3 className="text-3xl sm:text-4xl font-bold tracking-tight">
              {plan.name}
            </h3>
            <p className="text-white/75 text-sm mt-2">
              {plan.subtitle}
            </p>
          </div>

          {/* Decorative climbing mountain */}
          <svg
            className="absolute right-0 bottom-0 w-40 h-28 opacity-10 pointer-events-none"
            viewBox="0 0 160 110"
            aria-hidden="true"
          >
            <path
              d="M0 110 L80 5 L160 110 Z"
              fill="white"
            />
          </svg>
        </div>

        {/* Plan information */}
        <div className="p-7 sm:p-8 lg:px-10 flex flex-col">
          <div className="mb-6">
            <p className="text-stone-600 dark:text-stone-300 leading-relaxed">
              {plan.description}
            </p>

            {index > 0 && (
              <span className="inline-flex items-center gap-1 text-xs font-semibold uppercase tracking-wider text-green-700 dark:text-green-400">
                <Check className="w-3.5 h-3.5" />
                Everything in {PLANS[index - 1].name}, plus
              </span>
            )}
          </div>

          <div className="grid sm:grid-cols-2 gap-x-6 gap-y-3 mb-7">
            {plan.features.map((feature) => (
              <div
                key={feature}
                className="flex items-start gap-3 text-sm text-stone-700 dark:text-stone-200"
              >
                <div className="w-5 h-5 rounded-full bg-green-100 dark:bg-green-950 flex-shrink-0 flex items-center justify-center mt-0.5">
                  <Check className="w-3 h-3 text-green-700 dark:text-green-400" />
                </div>
                <span className="leading-relaxed">{feature}</span>
              </div>
            ))}
          </div>

          <div className="mt-auto pt-5 border-t border-stone-100 dark:border-green-950">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 text-green-800 dark:text-green-400 font-semibold text-sm hover:gap-3 transition-all"
            >
              Ask about {plan.name}
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

function LawnMaintenance() {
  return (
    <main className="bg-[#f8f5f0] dark:bg-[#0f1a14] min-h-screen">
      {/* Header */}
      <section className="relative overflow-hidden pt-6 pb-10 sm:pt-8 sm:pb-12">
        <div className="absolute inset-x-0 bottom-0 h-full opacity-50 dark:opacity-10 pointer-events-none">
          <MountainBackdrop />
        </div>

        <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
          <Link
            to="/services"
            className="inline-flex items-center gap-2 text-sm font-medium text-green-800 dark:text-green-400 mb-6 hover:gap-3 transition-all"
          >
            <ArrowLeft className="w-4 h-4" />
            All Services
          </Link>

          <div className="mt-6">
            <h1 className="text-3xl sm:text-4xl font-bold text-stone-900 dark:text-stone-50">
              Four levels of lawn care.
            </h1>

            <p className="text-stone-600 dark:text-stone-400 mt-3 max-w-2xl">
              Every plan builds upon the previous one, giving you
              more comprehensive care. All of our plans are maintanence
              agreements that can be cancelled within 30 days.
            </p>
          </div>
        </div>
      </section>

    {/* Maintenance tiers */}
 <section
  id="plans"
  className="relative w-full bg-[#c4d2c3] dark:bg-[#0f1a14] scroll-mt-8"
>
    <div className="relative max-w-6xl mx-auto px-4 sm:px-6 py-12 pb-24">

        {/* Ascending mountain line */}
        <div className="relative">
        <div className="absolute left-5 sm:left-7 top-8 bottom-8 w-px bg-green-300 dark:bg-green-900 hidden lg:block" />

        <div className="space-y-6">
            {PLANS.map((plan, index) => (
            <div
                key={plan.name}
                className="relative lg:pl-14"
            >
                {/* Trail marker */}
                <div className="hidden lg:flex absolute left-0 top-8 w-10 h-10 rounded-full border-4 border-[#b9d0bd] dark:border-[#0f1a14] bg-green-800 text-white items-center justify-center text-xs font-bold z-10">
                {index + 1}
                </div>

                <PlanCard plan={plan} index={index} />
            </div>
            ))}
        </div>
        </div>
    </div>
    </section>

      {/* Flexible maintenance agreement */}
      <section className="bg-white dark:bg-[#16251b] border-y border-stone-200 dark:border-green-950">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-20 sm:py-24">
          <div className="max-w-2xl mb-12">

            <h2 className="text-3xl sm:text-4xl font-bold text-stone-900 dark:text-stone-50 mt-3">
              Dependable care with no lock-in.
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-5">
            {[
              {
                icon: ClipboardCheck,
                title: "No Long-Term Commitment",
                description:
                  "Our maintenance agreements can be ended with just 30 days' notice. No long-term contract lock-in.",
              },
              {
                icon: CalendarDays,
                title: "Flexible Options",
                description:
                  "Choose between year-round property care or growing season only.",
              }
            ].map(({ icon: Icon, title, description }) => (
              <div
                key={title}
                className="rounded-2xl border border-stone-200 dark:border-green-900 bg-[#f8f5f0] dark:bg-[#0f1a14] p-7"
              >
                <div className="w-12 h-12 rounded-xl bg-green-100 dark:bg-green-950 flex items-center justify-center mb-6">
                  <Icon className="w-6 h-6 text-green-800 dark:text-green-400" />
                </div>

                <h3 className="text-lg font-bold text-stone-900 dark:text-stone-50 mb-3">
                  {title}
                </h3>
                <p className="text-sm leading-relaxed text-stone-600 dark:text-stone-400">
                  {description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 py-20 sm:py-24">
        <div className="relative overflow-hidden rounded-3xl bg-[#1d4034] px-7 py-16 sm:px-14 sm:py-20 text-center">
          <div className="absolute inset-0 opacity-10 pointer-events-none">
            <MountainBackdrop />
          </div>

          <div className="relative max-w-2xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold text-white">
              Get in touch with us to elevate your landscape
            </h2>

            <p className="text-green-100/80 mt-5 leading-relaxed">
              Not sure which plan is right for your property?
              Tell us what you're looking for, and we'll help
              you find the perfect level of care.
            </p>

            <Link
              to="/contact"
              className="inline-flex items-center gap-2 mt-8 bg-white text-green-900 font-semibold px-7 py-3.5 rounded-xl hover:bg-green-50 transition-colors"
            >
              Request a Free Estimate
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

export default LawnMaintenance;
