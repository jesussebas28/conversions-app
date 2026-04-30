import type { ReactNode } from "react";

type Props = {
    children: ReactNode;
};

export default function LayoutApp({ children }: Props) {
    return (
        <>
            <main className="w-full h-screen flex flex-col justify-center items-center">
                <div className="max-w-5xl">{children}</div>
            </main>
        </>
    );
}
