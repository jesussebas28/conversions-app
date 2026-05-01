import type { ReactNode } from "react";

type Props = {
    children: ReactNode;
};

export default function LayoutApp({ children }: Props) {
    return (
        <>
            <main className="w-full min-h-screen flex flex-col items-center py-10 bg-slate-50">
                <div className="max-w-5xl">{children}</div>
            </main>
        </>
    );
}
