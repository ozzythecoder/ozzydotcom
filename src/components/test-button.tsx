"use client";
import { useState } from "react";

export function TestButton() {
    const [count, setCount] = useState(0);

    return (
        <button className={"border border-amber-100 px-4 py-2 min-w-24"} onClick={() => setCount(count + 1)}>
            {count}
        </button>
    );
}
