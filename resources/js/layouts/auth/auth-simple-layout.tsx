import { Link } from '@inertiajs/react';
import { home } from '@/routes';
import type { AuthLayoutProps } from '@/types';

export default function AuthSimpleLayout({
    children,
    title,
    description,
}: AuthLayoutProps) {
    return (
        <div className="dark relative flex min-h-svh flex-col items-center justify-center overflow-hidden bg-[#050505] p-6 md:p-10">
            {/* Ambient background glows */}
            <div className="absolute left-1/4 top-1/4 h-96 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-amber-500/10 blur-[120px]" />
            <div className="absolute bottom-1/4 right-1/4 h-96 w-96 translate-x-1/2 translate-y-1/2 rounded-full bg-purple-500/10 blur-[120px]" />

            <div className="relative z-10 w-full max-w-md">
                <div className="flex flex-col gap-8">
                    <div className="flex flex-col items-center gap-4 text-center">
                        <Link
                            href={home()}
                            className="text-2xl font-bold tracking-tighter text-white transition-opacity hover:opacity-80"
                        >
                            VANTAGE
                        </Link>

                        <div className="space-y-2">
                            <h1 className="text-2xl font-semibold tracking-tight text-white">{title}</h1>
                            <p className="text-sm text-gray-400">
                                {description}
                            </p>
                        </div>
                    </div>

                    <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl sm:p-8">
                        {/* Amber accent line at the top of the card */}
                        <div className="absolute left-0 top-0 h-[2px] w-full bg-gradient-to-r from-transparent via-amber-500/50 to-transparent" />
                        
                        {children}
                    </div>
                </div>
            </div>
        </div>
    );
}
