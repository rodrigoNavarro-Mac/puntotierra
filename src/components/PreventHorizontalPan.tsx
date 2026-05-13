"use client";

import { useEffect } from "react";

/**
 * iOS Safari can leave a non-zero window scrollX after pinch-zoom even when
 * the document has no real horizontal overflow. Resetting keeps the layout
 * anchored instead of drifting to the left.
 */
export default function PreventHorizontalPan() {
    useEffect(() => {
        const snapX = () => {
            const x = window.scrollX;
            if (x === 0) return;
            window.scrollTo(0, window.scrollY);
            document.documentElement.scrollLeft = 0;
            document.body.scrollLeft = 0;
        };

        window.addEventListener("scroll", snapX, { passive: true });
        const vv = window.visualViewport;
        vv?.addEventListener("resize", snapX);
        vv?.addEventListener("scroll", snapX);

        return () => {
            window.removeEventListener("scroll", snapX);
            vv?.removeEventListener("resize", snapX);
            vv?.removeEventListener("scroll", snapX);
        };
    }, []);

    return null;
}
