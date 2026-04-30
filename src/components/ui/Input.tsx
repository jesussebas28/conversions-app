import React from "react";
type Props = React.InputHTMLAttributes<HTMLInputElement>;

export default function Input({
    type = "text",
    className = "",
    ...props
}: Props) {
    return (
        <input
            type={type}
            className={`border border-gray-300 rounded px-4 py-2 focus:outline-none focus:border-blue-500 transition-colors ${className}`}
            {...props}
        />
    );
}
