export default function DevInfo() {
    return (
        <div className="border-t border-slate-200 pt-6 mb-3">
            <h2 className="text-sm font-bold text-slate-800 uppercase tracking-wider mb-4">
                Acerca del Desarrollador
            </h2>

            <address className="not-italic flex flex-col gap-4 text-sm text-slate-600">
                <div>
                    <span className="block font-medium text-slate-900 mb-1">
                        Jesús Céspedes
                    </span>
                    <p className="text-slate-500 text-xs">
                        Desarrollador de Software
                    </p>
                </div>

                <a
                    href="mailto:jesuscespedes.dev@gmail.com"
                    className="flex items-center gap-2 hover:text-blue-600 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 rounded px-1 -ml-1"
                >
                    <svg
                        className="w-4 h-4"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                        />
                    </svg>
                    jesuscespedes.dev@gmail.com
                </a>
            </address>
            <div className="mt-6 text-xs text-slate-400">
                &copy; {new Date().getFullYear()} Jesús Céspedes.
            </div>
        </div>
    );
}
