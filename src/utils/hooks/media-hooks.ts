"use client"
import { useState, useEffect } from 'react';

export const useMediaQuery = (query: string): boolean => {
    if (typeof window === "undefined") return false
    
    const [matches, setMatches] = useState(window ? window.matchMedia(query).matches : false);

    useEffect(() => {
        const mediaQuery = window ? window.matchMedia(query) : false;

        const listener = (e: MediaQueryListEvent) => {
            setMatches(e.matches);
        };

        mediaQuery && mediaQuery.addEventListener("change", listener);
        return () => {
            mediaQuery && mediaQuery.removeEventListener("change", listener);
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
