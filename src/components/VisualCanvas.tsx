import { useState, useEffect } from "react";

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
    const [escala, setEscala] = useState(12);

    useEffect(() => {
        const adaptarEscala = () => {
            if (window.innerWidth < 768) {
                setEscala(8);
            } else {
                setEscala(12);
            }
        };

        adaptarEscala();

        window.addEventListener("resize", adaptarEscala);

        return () => window.removeEventListener("resize", adaptarEscala);
    }, []);

    return (
        <div className="w-full overflow-x-auto  bg-slate-50 p-4 md:p-8 rounded-xl">
            <div className="w-max mx-auto">
                <div
                    className="relative bg-white border-2 border-slate-400 transition-all duration-300"
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
        </div>
    );
}
