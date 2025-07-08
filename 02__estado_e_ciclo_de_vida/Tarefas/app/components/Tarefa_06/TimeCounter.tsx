
import { useEffect, useState } from "react";


export function TimeCounter() {
    const [timer, setTimer] = useState(0);

    const handleTimer = () => {
        setTimer(timer + 1);
    };

    useEffect(
        () => {
            const interval_id = setInterval(
                () => {
                    handleTimer();
                }, 1000
            );

            return () => {
                clearInterval(interval_id);
            };
        }, [timer]
    );

    return (
        <div>
            <h1>
                5 - Contador com Temporizador
            </h1>

            <h2>
                Temporizador: {timer}
            </h2>
        </div>
    );
};