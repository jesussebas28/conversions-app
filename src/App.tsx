import { useState, useMemo } from "react";
import LayoutApp from "./layouts/LayoutApp";
import { medidas } from "./medidas";
import CalculatorForm from "./components/CalculatorForm";
import ResultDisplay from "./components/ResultDisplay";

export type ConfigMedidas = {
    contenedorId: number;
    anchoImg: number;
    altoImg: number;
};

export default function App() {
    const [config, setConfig] = useState<ConfigMedidas>({
        contenedorId: 1,
        anchoImg: 10,
        altoImg: 15,
    });

    const [forzarRotacion, setForzarRotacion] = useState(false);

    const contenedorActivo = useMemo(
        () => medidas.find((m) => m.id === config.contenedorId) || medidas[0],
        [config.contenedorId],
    );

    return (
        <LayoutApp>
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 p-6 w-full max-w-7xl">
                <section className="lg:col-span-4 space-y-6">
                    <header>
                        <h1 className="text-3xl font-bold tracking-tight">
                            Medidor
                        </h1>
                        <p className="text-slate-500">
                            Calcula la distribución de piezas en pliego.
                        </p>
                    </header>

                    <CalculatorForm config={config} onChange={setConfig} />

                    <div className="flex items-center gap-2 p-4 bg-slate-100 rounded-lg">
                        <input
                            type="checkbox"
                            id="rotate"
                            checked={forzarRotacion}
                            onChange={(e) =>
                                setForzarRotacion(e.target.checked)
                            }
                            className="w-4 h-4"
                        />
                        <label htmlFor="rotate" className="font-medium">
                            Rotar imágenes 90°
                        </label>
                    </div>
                    <div className="mt-8 border-t border-slate-200 pt-6">
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

                            <div className="flex flex-col gap-2">
                                <a
                                    href="tel:+17542653221"
                                    className="flex items-center gap-2 hover:text-blue-600 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 rounded px-1 -ml-1"
                                    aria-label="Llamar al teléfono de contacto"
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
                                            d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                                        />
                                    </svg>
                                    +1 (754) 265-3221
                                </a>

                                <a
                                    href="mailto:jesuscespedes.dev@gmail.com"
                                    className="flex items-center gap-2 hover:text-blue-600 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 rounded px-1 -ml-1"
                                    aria-label="Enviar correo electrónico"
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
                            </div>
                        </address>

                        <div className="mt-6 text-xs text-slate-400">
                            &copy; {new Date().getFullYear()} Jesús Céspedes.
                        </div>
                    </div>
                </section>

                <section className="lg:col-span-8 min-w-0">
                    <ResultDisplay
                        contenedor={contenedorActivo}
                        anchoImg={config.anchoImg}
                        altoImg={config.altoImg}
                        rotado={forzarRotacion}
                    />
                </section>
            </div>
        </LayoutApp>
    );
}
