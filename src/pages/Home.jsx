
import { useNavigate } from "react-router-dom";

import heroImage from "../assets/hero_home.jpg";

import beforeImage1 from "../assets/before_steps.jpg";
import afterImage1 from "../assets/after_steps.jpg";

import beforeImage2 from "../assets/before_path_stone.jpg";
import afterImage2 from "../assets/after_path_stone.jpg";

import beforeImage3 from "../assets/before_mulch.jpg";
import afterImage3 from "../assets/after_mulch.jpg";

import beforeImage4 from "../assets/before_house_side.jpg";
import afterImage4 from "../assets/after_house_side.jpg";

import {
    ChevronRight,
    ChevronDown,
} from "lucide-react";

const GALLERY_PAIRS = [
    {
        before: beforeImage1,
        after: afterImage1,
        label: "Steps",
    },
    {
        before: beforeImage2,
        after: afterImage2,
        label: "Stone Path",
    },
    {
        before: beforeImage3,
        after: afterImage3,
        label: "Mulch",
    },
    {
        before: beforeImage4,
        after: afterImage4,
        label: "House Side",
    },
];

function Home() {
    const navigate = useNavigate();

    const scrollToGallery = () => {
        document.getElementById("gallery")?.scrollIntoView({
            behavior: "smooth",
            block: "start",
        });
    };

    return (
        <>
            {/* HERO SECTION */}
            <section className="relative w-full min-h-[calc(100svh-80px)] flex items-center overflow-hidden bg-green-950">

                {/* Background image */}
                <img
                    src={heroImage}
                    alt="Lawn and garden landscaping"
                    className="absolute inset-0 w-full h-full object-cover opacity-100"
                />

                {/* Background gradients */}
                <div className="absolute inset-0 bg-gradient-to-r from-stone-950/85 via-stone-950/25 to-transparent" />
                <div className="absolute inset-0 bg-gradient-to-t from-stone-950/40 via-transparent to-transparent" />

                {/* Hero content */}
                <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 py-24 w-full">
                    <div className="max-w-2xl">

                        <h1
                            className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white leading-[1.08] mb-6"
                            style={{
                                fontFamily: "'var(--heading)', serif",
                                fontOpticalSizing: "auto",
                            }}
                        >
                            Evan's Lawn, Garden, and More
                        </h1>

                        <p
                            className="text-stone-300 text-lg sm:text-xl mb-9 leading-relaxed max-w-lg"
                            style={{
                                fontFamily: "'var(--sans)', sans-serif",
                            }}
                        >
                            Sustainable and Local Property Care
                            for outdoor spaces across the community.
                        </p>

                        <div className="flex flex-wrap gap-3">
                            <button
                                onClick={() => navigate("/contact")}
                                className="inline-flex items-center gap-2 bg-[var(--secondarygreen)] hover:bg-[var(--hovergreen)] text-white font-semibold px-6 py-3.5 rounded-xl transition-colors text-sm"
                                style={{
                                    fontFamily: "'var(--sans)', sans-serif",
                                }}
                            >
                                Contact us
                                <ChevronRight className="w-4 h-4" />
                            </button>
                        </div>

                    </div>
                </div>

                {/* SCROLL INDICATOR */}
                <button
                    type="button"
                    onClick={scrollToGallery}
                    aria-label="Scroll down to see our work"
                    className="
                        absolute bottom-6 sm:bottom-9
                        left-1/2 -translate-x-1/2
                        z-20
                        flex flex-col items-center gap-2
                        text-white/80 hover:text-white
                        transition-colors duration-300
                        cursor-pointer group
                    "
                >
                    <span
                        className="
                            text-xs sm:text-sm
                            font-semibold
                            tracking-[0.18em]
                            uppercase
                            whitespace-nowrap
                        "
                        style={{
                            fontFamily: "'var(--sans)', sans-serif",
                        }}
                    >
                        See Our Work
                    </span>

                    <ChevronDown
                        className="
                            w-6 h-6
                            motion-safe:animate-bounce
                            group-hover:text-white
                        "
                        strokeWidth={1.8}
                    />
                </button>

            </section>

            {/* BEFORE AND AFTER GALLERY */}
            <section
                id="gallery"
                className="py-20 sm:py-24 bg-white dark:bg-[#0a1209] scroll-mt-0"
            >
                <div className="max-w-6xl mx-auto px-4 sm:px-6">

                    {/* Gallery heading */}
                    <div className="mb-14 text-center">
                        <h2
                            className="text-4xl sm:text-5xl font-bold text-black dark:text-stone-50 mt-2"
                            style={{
                                fontFamily: "'var(--heading)', serif",
                            }}
                        >
                            Before and After
                        </h2>

                        <p className="text-stone-500 dark:text-stone-400 mt-3 max-w-md mx-auto text-base">
                            See the quality of our work for yourself.
                        </p>
                    </div>

                    {/* Gallery image pairs */}
                    <div className="flex flex-col gap-10">
                        {GALLERY_PAIRS.map(({ before, after, label }, i) => (
                            <div key={i}>

                                <div className="grid grid-cols-2 gap-3 sm:gap-5">

                                    {/* Before image */}
                                    <div className="relative rounded-2xl overflow-hidden bg-stone-200 dark:bg-stone-800 aspect-[4/3]">
                                        <img
                                            src={before}
                                            alt={`Before: ${label}`}
                                            loading="lazy"
                                            className="w-full h-full object-cover"
                                        />

                                        <span className="absolute top-2.5 left-2.5 bg-stone-900/75 text-white text-xs font-bold px-3 py-1 rounded-lg backdrop-blur-sm tracking-wide">
                                            Before
                                        </span>
                                    </div>

                                    {/* After image */}
                                    <div className="relative rounded-2xl overflow-hidden bg-green-200 dark:bg-green-950 aspect-[4/3]">
                                        <img
                                            src={after}
                                            alt={`After: ${label}`}
                                            loading="lazy"
                                            className="w-full h-full object-cover"
                                        />

                                        <span className="absolute top-2.5 left-2.5 bg-[var(--secondarygreen)] text-white text-xs font-bold px-3 py-1 rounded-lg backdrop-blur-sm tracking-wide">
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
    );
}

export default Home;
