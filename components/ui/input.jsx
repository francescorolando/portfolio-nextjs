import * as React from "react";

import { cn } from "@/lib/utils";

function Input({ className, type, ...props }) {
    return (
        <input
            type={type}
            data-slot="input"
            className={cn(
                "flex h-[48px] rounded-md border border-white/10 focus:border-accent font-light bg-primary-light px-4 py-5 text-base placeholder:text-white/60 outline-none",
                // "focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]",
                // "aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
                className
            )}
            {...props}
        />
    );
}

export { Input };
