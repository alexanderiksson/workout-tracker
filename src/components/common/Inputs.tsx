import { ChangeEvent, ReactNode } from "react";
import { IoIosArrowDown } from "react-icons/io";

interface SelectProps {
    onChange: (e: ChangeEvent<HTMLSelectElement>) => void;
    value: any;
    children: ReactNode;
}

interface TextInputProps {
    placeholder?: string;
    onChange: (e: ChangeEvent<HTMLInputElement>) => void;
    value: any;
}

export function Select({ onChange, value, children }: SelectProps) {
    return (
        <div className="relative mb-4 w-full">
            <select
                className="appearance-none py-3 w-full border-2 border-zinc-500/10 rounded-2xl bg-zinc-900/50 text-sm text-center last"
                onChange={onChange}
                value={value}
                style={{
                    textAlignLast: "center",
                }}
            >
                {children}
            </select>

            <div className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-zinc-400">
                <IoIosArrowDown size={16} />
            </div>
        </div>
    );
}

export function TextInput({ placeholder, value, onChange }: TextInputProps) {
    return (
        <input
            className="bg-zinc-900/50 p-3 rounded-2xl w-full border-2 border-zinc-500/10 shadow placeholder:text-neutral-600"
            type="text"
            placeholder={placeholder}
            value={value}
            onChange={onChange}
        />
    );
}
