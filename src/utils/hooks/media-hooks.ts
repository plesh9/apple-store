"use client"
import { useState, useEffect } from 'react';

export const useMediaQuery = (query: string): boolean => {
    const [matches, setMatches] = useState(window.matchMedia(query).matches);

    useEffect(() => {
        const mediaQuery = window.matchMedia(query);

        const listener = (e: MediaQueryListEvent) => {
            setMatches(e.matches);
        };

        mediaQuery.addEventListener("change", listener);
        return () => {
            mediaQuery.removeEventListener("change", listener);
        };
    }, [query]);

    return matches;
}

export const useTabletQuery = (): boolean => {
    return useMediaQuery("(max-width: 61.99875em)")
}

export const useMobileQuery = (): boolean => {
    return useMediaQuery("(max-width: 47.99875em)")
}

export const useSmallMobileQuery = (): boolean => {
    return useMediaQuery("(max-width: 29.99875em)")
}
