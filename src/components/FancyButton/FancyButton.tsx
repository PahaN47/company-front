import React, { useCallback, useEffect, useRef, useState } from 'react';

import { PRESS_TRANSITION_TIME } from './FancyButton.const';
import { ContainerStyled, FancyButtonStyled } from './FancyButton.style';
import { FancyButtonProps } from './FancyButton.types';

export const FancyButton = ({ className, style, onMouseDown, onMouseUp, ...props }: FancyButtonProps) => {
    const timer = useRef<NodeJS.Timeout>();
    const [pressed, setPressed] = useState(false);

    const handleMouseDown = useCallback(
        (e: React.MouseEvent<HTMLButtonElement>) => {
            setPressed(true);
            return onMouseDown?.(e);
        },
        [onMouseDown],
    );

    const handleMouseUp = useCallback(
        (e: React.MouseEvent<HTMLButtonElement>) => {
            timer.current = setTimeout(() => setPressed(false), PRESS_TRANSITION_TIME);
            return onMouseUp?.(e);
        },
        [onMouseUp],
    );

    useEffect(() => {
        return () => {
            clearTimeout(timer.current);
        };
    }, []);

    return (
        <ContainerStyled className={className} style={style}>
            <FancyButtonStyled pressed={pressed} onMouseDown={handleMouseDown} onMouseUp={handleMouseUp} {...props} />
        </ContainerStyled>
    );
};
