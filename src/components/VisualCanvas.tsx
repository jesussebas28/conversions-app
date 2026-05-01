type Props = {
    wContenedor: number;
    hContenedor: number;
    wImg: number;
    hImg: number;
    cols: number;
    rows: number;
};

export default function VisualCanvas({
    wContenedor,
    hContenedor,
    wImg,
    hImg,
    cols,
    rows,
}: Props) {
    const escala = 12;

    return (
        <div className="overflow-auto border bg-slate-50 p-8 rounded-xl flex justify-center">
            <div
                className="relative bg-white shadow-2xl border-2 border-slate-400 transition-all duration-300"
                style={{
                    width: `${wContenedor * escala}px`,
                    height: `${hContenedor * escala}px`,
                }}
            >
                <div
                    className="grid absolute top-0 left-0"
                    style={{
                        gridTemplateColumns: `repeat(${cols}, ${wImg * escala}px)`,
                        gridTemplateRows: `repeat(${rows}, ${hImg * escala}px)`,
                    }}
                >
                    {Array.from({ length: cols * rows }).map((_, i) => (
                        <div
                            key={i}
                            className="border border-blue-300 bg-blue-100/50 flex items-center justify-center text-[10px] text-blue-600 font-bold"
                            style={{
                                width: `${wImg * escala}px`,
                                height: `${hImg * escala}px`,
                            }}
                        >
                            {i + 1}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
