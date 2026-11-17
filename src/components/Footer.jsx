import {
    SiInstagram,
} from "@icons-pack/react-simple-icons";
import { Mail } from "lucide-react";

function Footer() {
    const linkClass =
        "flex items-center gap-2.5 text-stone-400 hover:text-white transition-colors text-sm";

    return (
        <footer className="bg-[var(--maingreen)] text-white px-4 sm:px-6 py-10">
            <div className="max-w-6xl mx-auto">
                <a
                    className="inline-block text-2xl sm:text-3xl font-bold tracking-tight transition-colors"
                    style={{ fontFamily: "'Fraunces', serif" }}
                >
                    Evan's Lawn, Garden, and More
                </a>

                <div className="flex flex-col items-start gap-4 mt-6">
                    <a
                        href="https://instagram.com/evanslawngardenandmore"
                        target="_blank"
                        rel="noopener noreferrer"
                        className={linkClass}
                    >
                        <SiInstagram size={19} />
                        <span>@evanslawngardenandmore</span>
                    </a>

                    <a
                        href="mailto:evanslawnandgardens@gmail.com"
                        className={linkClass}
                    >
                        <Mail size={19} />
                        <span>evanslawnandgardens@gmail.com</span>
                    </a>
                </div>

                <div className="border-t border-white/10 mt-8" />
            </div>
        </footer>
    );
}

export default Footer;
