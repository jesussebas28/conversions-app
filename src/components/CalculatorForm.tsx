import type { ConfigMedidas } from "../App";
import { medidas } from "../medidas";
import Input from "./ui/Input";
import Label from "./ui/Label";

type Props = {
    config: ConfigMedidas;
    onChange: (config: ConfigMedidas) => void;
};

export default function CalculatorForm({ config, onChange }: Props) {
    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
    ) => {
        const { name, value } = e.target;

        onChange({
            ...config,
            [name]: Number(value),
        });
    };

    return (
        <div className="space-y-4 border border-slate-200 p-6 rounded-lg bg-white shadow-sm">
            <div className="flex flex-col">
                <Label
                    htmlFor="contenedorId"
                    label="Tamaño del Contenedor"
                    className="mb-1 font-semibold text-slate-700"
                />
                <select
                    id="contenedorId"
                    name="contenedorId"
                    value={config.contenedorId}
                    onChange={handleChange}
                    className="border border-gray-300 rounded px-4 py-2 focus:outline-none focus:border-blue-500"
                >
                    {medidas.map((m) => (
                        <option key={m.id} value={m.id}>
                            {m.name} ({m.width}x{m.height})
                        </option>
                    ))}
                </select>
            </div>

            <div className="grid grid-cols-2 gap-4">
                <div className="flex flex-col">
                    <Label
                        htmlFor="anchoImg"
                        label="Ancho imagen"
                        className="mb-1 font-semibold text-slate-700"
                    />
                    <Input
                        type="number"
                        id="anchoImg"
                        name="anchoImg"
                        min="0.1"
                        step="0.1"
                        value={config.anchoImg || ""}
                        onChange={handleChange}
                    />
                </div>

                <div className="flex flex-col">
                    <Label
                        htmlFor="altoImg"
                        label="Alto imagen"
                        className="mb-1 font-semibold text-slate-700"
                    />
                    <Input
                        type="number"
                        id="altoImg"
                        name="altoImg"
                        min="0.1"
                        step="0.1"
                        value={config.altoImg || ""}
                        onChange={handleChange}
                    />
                </div>
            </div>
        </div>
    );
}
