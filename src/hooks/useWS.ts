import { useCallback, useEffect, useMemo, useState } from 'react';

import { SOCKET_HOST } from '~/const';

const isBrowser = typeof window !== 'undefined';

export const useWS = <Req, Resp>(room?: string) => {
    const ws = useMemo(() => (isBrowser && room ? new WebSocket(`${SOCKET_HOST}/${room}`) : null), [room]);
    const [data, setData] = useState<Resp | null>(null);
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        if (ws) {
            const connection = ws;
            connection.onopen = () => setIsOpen(true);
            connection.onclose = () => setIsOpen(false);

            connection.onmessage = (e: MessageEvent) => {
                const message = JSON.parse(e.data as string) as Resp;
                setData(message);
            };

            return () => {
                connection.close();
            };
        }
    }, [ws]);

    const sendMessage = useCallback(
        (message: Req) => {
            ws?.send(JSON.stringify(message));
        },
        [ws],
    );

    const returnValues = useMemo(() => ({ data, isOpen }), [data, isOpen]);

    return { sendMessage, ...returnValues };
};
