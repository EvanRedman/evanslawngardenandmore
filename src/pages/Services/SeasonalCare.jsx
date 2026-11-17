
import { Link } from "react-router-dom";
import {
    ArrowLeft,
    ArrowRight,
    Leaf,
    Wind,
    CloudRain,
    Sprout,
} from "lucide-react";

const SERVICES = [
    {
        icon: Leaf,
        title: "Fall Cleanups",
        description:
            "Leaf removal, garden bed cleanup, and general yard tidying to get your property ready for winter.",
    },
    {
        icon: Sprout,
        title: "Spring Tidy",
        description:
            "Clear away winter debris, refresh garden beds, and get your landscape ready for the growing season.",
    },
    {
        icon: Wind,
        title: "Storm Debris Removal",
        description:
            "Removal of fallen branches, leaves, and other yard debris after seasonal storms.",
    },
    {
        icon: CloudRain,
        title: "Winter Preparation",
        description:
            "Seasonal maintenance to help keep your landscape tidy and prepared for colder, wetter weather.",
    },
];

function SeasonalCare() {
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
                        Seasonal Cleanups
                    </h1>

                    <p className="text-stone-600 dark:text-stone-400 mt-4 max-w-2xl leading-relaxed">
                        Every season brings new challenges for your landscape.
                        Whether it's clearing away fallen leaves, preparing for
                        spring growth, or cleaning up after a storm, we're here
                        to keep your property looking its best year-round.
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
                        Need a seasonal cleanup?
                    </h2>

                    <p className="text-green-100/80 mt-3 mb-7">
                        Reach out for a free estimate tailored to your property.
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

export default SeasonalCare;
