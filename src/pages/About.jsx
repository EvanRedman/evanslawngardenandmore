import heroImage from "../assets/glacier.jpg";
import aboutUs from "../assets/evan.jpg";

import {
    Sprout,
    HeartHandshake,
    MapPin,
} from "lucide-react";

function About() {
    const values = [
        {
            icon: Sprout,
            title: "Sustainability",
            desc: "Commited to sustainable landscaping through electric equipment when possible, reduced chemical use, and native plant selections that support local ecosystems.",
        },
        {
            icon: HeartHandshake,
            title: "Reliability",
            desc: "Dependable service, clear communication, and a commitment to following through on every job.",
        },
        {
            icon: MapPin,
            title: "Personal",
            desc: "As a small, owner-operated business, I believe in keeping things personal. You'll always have direct communication with the owner, attentive service, and someone who genuinely listens to your needs.",
        },
        {
            icon: MapPin,
            title: "Local",
            desc: "Founded by a WWU alumn. We are based right here in Bellingham, Washington.",
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
                            We're a locally owned landscaping business proud to serve the Bellingham community.
                        </p>
                        <p className="text-stone-600 dark:text-stone-400 leading-relaxed mb-4 text-base">
                            We believe in doing good work, treating our customers right, and taking care of the environment around us. From using sustainable materials whenever possible to providing reliable, thoughtful service, our goal is simple: to help our neighbors keep their properties looking great while caring for the place we all call home.
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
                    <div className="grid grid-cols-2 sm:grid-cols-2 gap-4">
                        {values.map(({ icon: Icon, title, desc }) => (
                            <div
                                key={title}
                                className="bg-white dark:bg-[#162010] rounded-2xl p-7 border border-stone-200 dark:border-green-950 text-center"
                            >
                                <div className="text-4xl mb-4 flex items-center justify-center">
                                    <Icon className="w-7 h-7 text-green-800 dark:text-green-400" />
                                </div>
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
