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
                    <h3>Hecho por Jesus Cespedes</h3>

                    <div>
                        <h3>Contacto</h3>
                        <div className="flex flex-col">
                            <span>{"telefono: +1 (754) 265-3221"}</span>
                            <span>{"correo: jesuscespedes.dev@gmail.com"}</span>
                        </div>
                    </div>
                </section>

                <section className="lg:col-span-8">
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
