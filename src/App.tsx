import Input from "./components/ui/Input";
import Label from "./components/ui/Label";
import LayoutApp from "./layouts/LayoutApp";

export default function App() {
    const handleSubmit = (e: React.SubmitEvent<HTMLFormElement>) => {
        e.preventDefault();
    };

    return (
        <LayoutApp>
            <section className="">
                <div>
                    <h1 className="text-4xl">Conversions App</h1>
                    <p>
                        Ingrese las medidas que necesita convertir y vea cuánto
                        cabe.
                    </p>
                </div>

                <h2 className="">Medidas del contenedor</h2>
                <form onSubmit={handleSubmit} className="">
                    <div className="">
                        <Label htmlFor="width" label="ancho" />
                        <Input type="number" />
                    </div>

                    <div className="">
                        <Label htmlFor="height" label="alto" />
                        <Input type="number" />
                    </div>

                    <button type="submit" className="px-4 py-2 rounded border">
                        Calcular
                    </button>
                </form>

                <div className="row-span-2">
                    <div>Resultado aquí</div>
                </div>
            </section>
        </LayoutApp>
    );
}
