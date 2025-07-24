'use client';

import { useEffect, useState } from "react";

export function Clock({ className }: { className?: string }) {

    const translateMap = [
        'translate-0',
        'translate-2',
        'translate-4',
        '-translate-2',
        '-translate-4',
        'translate-x-0 translate-y-4',
        'translate-x-0 -translate-y-4',
        'translate-y-0 -translate-x-4',
        'translate-y-0 -translate-x-8',
        '-translate-y-24 translate-x-8',
        'translate-y-24 -translate-x-8',
    ];

    const translateValue = translateMap[Math.floor(Math.random() * translateMap.length)];

    const [time, setTime] = useState<Date>(new Date());

    useEffect(() => {
        const interval = setInterval(() => setTime(new Date()), 1000);
        return () => clearInterval(interval);
    }, [time]);

    return (
        <span suppressHydrationWarning className={`${className} ${translateValue}`}>{time?.toTimeString().split(" ")[0]}</span>
    );
}