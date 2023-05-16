import { useEffect, useRef, useState } from 'react';

export const useDelayedValue = <T>(value: T, delay: number) => {
    const timer = useRef<NodeJS.Timeout>();
    const [returnValue, setReturnValue] = useState(value);

    useEffect(() => {
        clearTimeout(timer.current);
        timer.current = setTimeout(() => setReturnValue(value), delay);

        return () => {
            clearTimeout(timer.current);
        };
    }, [delay, value]);

    return returnValue;
};
