import { useEffect, useRef } from 'react';
import { Head, Link, usePage } from '@inertiajs/react';
import { login, dashboard, register } from '@/routes';
import {
    Image as ImageIcon,
    CalendarCheck,
    MessageSquare,
    CalendarDays,
    ShieldCheck,
    BarChart3,
    UserCircle,
    LayoutTemplate,
    CheckCircle
} from 'lucide-react';

export default function Welcome() {
    const { auth } = usePage().props;
    const observerRef = useRef<IntersectionObserver | null>(null);

    useEffect(() => {
        observerRef.current = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('is-visible');
                }
            });
        }, { threshold: 0.1, rootMargin: "0px 0px -50px 0px" });

        document.querySelectorAll('.scroll-reveal').forEach((el) => {
            observerRef.current?.observe(el);
        });

        return () => observerRef.current?.disconnect();
    }, []);

    const scrollToFeatures = (e: React.MouseEvent) => {
        e.preventDefault();
        const el = document.getElementById('features');
        if (el) {
            el.scrollIntoView({ behavior: 'smooth' });
        }
    };

    const scrollToHowItWorks = (e: React.MouseEvent) => {
        e.preventDefault();
        const el = document.getElementById('how-it-works');
        if (el) {
            el.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <div className="min-h-screen bg-[#050505] text-white selection:bg-amber-500/30 font-sans overflow-x-hidden">
            <Head title="Vantage — Portfolio & Booking for Creatives" />

            {/* Navigation */}
            <nav className="fixed top-0 w-full z-50 bg-[#050505]/80 backdrop-blur-md border-b border-white/10 transition-all duration-300">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-center h-20">
                        <div className="flex items-center">
                            <Link href="/" className="text-2xl font-bold tracking-tighter">
                                VANTAGE
                            </Link>
                        </div>
                        <div className="hidden md:flex space-x-8">
                            <a href="#features" onClick={scrollToFeatures} className="text-sm text-gray-300 hover:text-white transition-colors cursor-pointer">Features</a>
                            <a href="#how-it-works" onClick={scrollToHowItWorks} className="text-sm text-gray-300 hover:text-white transition-colors cursor-pointer">How It Works</a>
                        </div>
                        <div className="flex items-center space-x-4">
                            {auth?.user ? (
                                <Link
                                    href={dashboard()}
                                    className="text-sm font-medium px-4 py-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
                                >
                                    Dashboard
                                </Link>
                            ) : (
                                <>
                                    <Link
                                        href={login()}
                                        className="text-sm font-medium text-gray-300 hover:text-white transition-colors hidden sm:block"
                                    >
                                        Log in
                                    </Link>
                                    <Link
                                        href={register()}
                                        className="text-sm font-medium px-5 py-2.5 rounded-full bg-gradient-to-r from-amber-600 to-amber-500 hover:from-amber-500 hover:to-amber-400 text-white shadow-[0_0_15px_rgba(217,119,6,0.5)] transition-all hover:scale-105"
                                    >
                                        Register
                                    </Link>
                                </>
                            )}
                        </div>
                    </div>
                </div>
            </nav>

            {/* Hero Section */}
            <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
                {/* Decorative background shapes */}
                <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-amber-600/20 rounded-full blur-[120px] animate-pulse-glow" />
                <div className="absolute bottom-1/4 right-1/4 w-[30rem] h-[30rem] bg-amber-900/20 rounded-full blur-[150px] animate-pulse-glow delay-300" />
                
                <div className="absolute top-1/3 left-1/5 w-16 h-16 rounded-full border border-amber-500/20 animate-float-slow" />
                <div className="absolute bottom-1/3 right-1/4 w-24 h-24 rounded-full border border-white/5 animate-float-slower delay-200" />

                <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h1 className="text-6xl md:text-8xl font-black tracking-tighter mb-6 scroll-reveal animate-fade-in-up">
                        <span className="block text-white">Your Vision.</span>
                        <span className="block gradient-text bg-gradient-to-r from-amber-200 via-amber-500 to-amber-700 animate-gradient-shift">Your Stage.</span>
                    </h1>
                    <p className="mt-6 text-xl md:text-2xl text-gray-400 max-w-3xl mx-auto font-light scroll-reveal animate-fade-in-up delay-100">
                        The premium portfolio and booking management platform designed exclusively for visual media professionals.
                    </p>
                    <div className="mt-10 flex flex-col sm:flex-row justify-center items-center gap-4 scroll-reveal animate-fade-in-up delay-200">
                        <Link
                            href={register()}
                            className="w-full sm:w-auto px-8 py-4 rounded-full bg-white text-black font-semibold text-lg hover:bg-gray-100 transition-all hover:scale-105 shadow-[0_0_20px_rgba(255,255,255,0.2)]"
                        >
                            Get Started
                        </Link>
                        <a
                            href="#features"
                            onClick={scrollToFeatures}
                            className="w-full sm:w-auto px-8 py-4 rounded-full bg-white/5 text-white font-semibold text-lg border border-white/10 hover:bg-white/10 transition-all backdrop-blur-sm cursor-pointer"
                        >
                            Explore Features
                        </a>
                    </div>
                </div>
            </section>

            {/* Features Section */}
            <section id="features" className="py-24 relative">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16 scroll-reveal">
                        <h2 className="text-3xl md:text-5xl font-bold mb-4">Elevate Your Business</h2>
                        <p className="text-gray-400 text-lg max-w-2xl mx-auto">Everything you need to showcase your work, manage clients, and grow your creative enterprise.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {[
                            { icon: ImageIcon, title: "Portfolio Showcase", desc: "Stunning, customizable galleries that put your visual work front and center." },
                            { icon: CalendarCheck, title: "Smart Booking", desc: "Frictionless booking flows for clients with automated confirmations." },
                            { icon: MessageSquare, title: "Client Hub", desc: "Centralized communication, contracts, and deliverable handoffs." },
                            { icon: CalendarDays, title: "Calendar Management", desc: "Sync your availability and never double-book a session again." },
                            { icon: ShieldCheck, title: "Secure Payments", desc: "Accept deposits and final payments safely through our integrated gateway." },
                            { icon: BarChart3, title: "Analytics", desc: "Insights into your views, booking conversion rates, and revenue." },
                        ].map((feature, idx) => (
                            <div key={idx} className="glass-card p-8 rounded-2xl scroll-reveal" style={{ animationDelay: `${(idx % 3 + 1) * 100}ms` }}>
                                <div className="w-12 h-12 rounded-full bg-amber-500/10 flex items-center justify-center mb-6 border border-amber-500/20">
                                    <feature.icon className="w-6 h-6 text-amber-500" />
                                </div>
                                <h3 className="text-xl font-semibold mb-3 text-white">{feature.title}</h3>
                                <p className="text-gray-400 leading-relaxed">{feature.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* How It Works */}
            <section id="how-it-works" className="py-24 bg-[#0a0a0a] relative border-y border-white/5">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16 scroll-reveal">
                        <h2 className="text-3xl md:text-5xl font-bold mb-4">How It Works</h2>
                        <p className="text-gray-400 text-lg max-w-2xl mx-auto">From setup to your first booking in three simple steps.</p>
                    </div>

                    <div className="relative">
                        {/* Connecting line for desktop */}
                        <div className="hidden md:block absolute top-12 left-[10%] right-[10%] h-[2px] bg-gradient-to-r from-transparent via-amber-500/30 to-transparent" />
                        
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative z-10">
                            {[
                                { step: "01", icon: UserCircle, title: "Create Profile", desc: "Sign up and set your creative role, location, and availability." },
                                { step: "02", icon: LayoutTemplate, title: "Build Portfolio", desc: "Upload your best work and customize your personalized storefront." },
                                { step: "03", icon: CheckCircle, title: "Accept Bookings", desc: "Share your link and start receiving booking requests and payments." }
                            ].map((item, idx) => (
                                <div key={idx} className="flex flex-col items-center text-center scroll-reveal" style={{ animationDelay: `${(idx + 1) * 100}ms` }}>
                                    <div className="w-24 h-24 rounded-full bg-[#111] border-2 border-amber-500/30 flex items-center justify-center mb-6 relative group hover:border-amber-500 transition-colors shadow-[0_0_30px_rgba(0,0,0,0.5)]">
                                        <div className="absolute inset-0 rounded-full bg-amber-500/5 group-hover:bg-amber-500/10 transition-colors" />
                                        <item.icon className="w-10 h-10 text-amber-400" />
                                        <div className="absolute -top-3 -right-3 w-8 h-8 rounded-full bg-amber-600 text-white font-bold text-sm flex items-center justify-center">
                                            {item.step}
                                        </div>
                                    </div>
                                    <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                                    <p className="text-gray-400">{item.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-32 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-b from-[#050505] to-[#0a0a0a]" />
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-64 bg-amber-600/10 blur-[100px] rounded-full" />
                
                <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center scroll-reveal">
                    <h2 className="text-4xl md:text-6xl font-black mb-6">Start Your Journey</h2>
                    <p className="text-xl text-gray-400 mb-10 max-w-2xl mx-auto">Join the exclusive network of creative professionals streamlining their business with Vantage.</p>
                    <Link
                        href={register()}
                        className="inline-block px-10 py-5 rounded-full bg-gradient-to-r from-amber-600 to-amber-500 hover:from-amber-500 hover:to-amber-400 text-white font-bold text-xl shadow-[0_0_30px_rgba(217,119,6,0.4)] transition-all hover:scale-105 hover:shadow-[0_0_40px_rgba(217,119,6,0.6)]"
                    >
                        Create Your Account
                    </Link>
                </div>
            </section>

            {/* Footer */}
            <footer className="border-t border-white/10 bg-[#020202] py-12 relative z-10">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center">
                    <div className="mb-4 md:mb-0">
                        <span className="text-xl font-bold tracking-tighter">VANTAGE</span>
                        <p className="text-gray-500 text-sm mt-1">© {new Date().getFullYear()} Vantage Platform. All rights reserved.</p>
                    </div>
                    <div className="flex space-x-6 text-sm text-gray-400">
                        <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
                        <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
                        <a href="#" className="hover:text-white transition-colors">Contact</a>
                    </div>
                </div>
            </footer>
        </div>
    );
}
