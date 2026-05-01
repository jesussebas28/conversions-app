import { useState, useMemo } from "react";
import LayoutApp from "./layouts/LayoutApp";
import { medidas } from "./medidas";
import CalculatorForm from "./components/CalculatorForm";
import ResultDisplay from "./components/ResultDisplay";
import DevInfo from "./components/DevInfo";

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
            <div className="grid grid-cols-1 lg:grid-cols-2 lg:grid-rows-[max-content_1fr] px-6 gap-8 lg:gap-10 w-full items-start">
                <section className="lg:col-start-1 lg:row-start-1 order-1">
                    <header className="mb-2">
                        <h1 className="text-3xl font-bold tracking-tight">
                            Medidor
                        </h1>
                        <p className="text-slate-500">
                            Calcula la distribución de piezas en pliego.
                        </p>
                    </header>

                    <CalculatorForm config={config} onChange={setConfig} />

                    <div className="flex items-center gap-2 p-4 bg-slate-100 rounded-lg m-3">
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
                </section>

                <section className="lg:col-start-2 lg:row-start-1 lg:row-span-2 order-2">
                    <ResultDisplay
                        contenedor={contenedorActivo}
                        anchoImg={config.anchoImg}
                        altoImg={config.altoImg}
                        rotado={forzarRotacion}
                    />
                </section>

                <section className="lg:col-start-1 lg:row-start-2 order-3">
                    <DevInfo />
                </section>
            </div>
        </LayoutApp>
    );
}
