import VisualCanvas from "./VisualCanvas";

type Contenedor = {
    id: number;
    name: string;
    width: number;
    height: number;
};

type Props = {
    contenedor: Contenedor;
    anchoImg: number;
    altoImg: number;
    rotado: boolean;
};

export default function ResultDisplay({
    contenedor,
    anchoImg,
    altoImg,
    rotado,
}: Props) {
    const wFinalImg = rotado ? altoImg : anchoImg;
    const hFinalImg = rotado ? anchoImg : altoImg;

    if (!wFinalImg || !hFinalImg || wFinalImg <= 0 || hFinalImg <= 0) {
        return (
            <div className="p-4 bg-red-50 text-red-600 font-medium border border-red-200 rounded">
                Las medidas de la imagen deben ser válidas y mayores a 0.
            </div>
        );
    }

    const cols = Math.floor(contenedor.width / wFinalImg);
    const rows = Math.floor(contenedor.height / hFinalImg);
    const total = cols * rows;

    return (
        <div className="flex flex-col gap-6">
            <div className="bg-white p-6 rounded-lg border border-slate-200 shadow-sm">
                <h2 className="text-2xl font-bold text-slate-800 mb-2">
                    Resultado
                </h2>
                <div className="text-lg text-slate-700">
                    Caben un total de{" "}
                    <span className="font-extrabold text-blue-600 text-4xl mx-1">
                        {total}
                    </span>{" "}
                    imágenes.
                </div>
                <div className="text-sm text-slate-500 mt-3 p-3 bg-slate-50 rounded">
                    <strong>Distribución de la cuadrícula:</strong> {cols}{" "}
                    columnas × {rows} filas.
                    <br />
                    <strong>Área de papel utilizada:</strong> {cols * wFinalImg}
                    x{rows * hFinalImg} (de un total de {contenedor.width}x
                    {contenedor.height}).
                </div>
            </div>

            <VisualCanvas
                wContenedor={contenedor.width}
                hContenedor={contenedor.height}
                wImg={wFinalImg}
                hImg={hFinalImg}
                cols={cols}
                rows={rows}
            />
        </div>
    );
}
