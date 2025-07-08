
import { useState } from "react";


export function Counter() {
    const [start_number, setStartNumber] = useState(0);

    const handleDecrementNumber = () => {
        setStartNumber(start_number - 1);
    };

    const handleIncrementNumber = () => {
        setStartNumber(start_number + 1);
    };

    return (
        <div>
            <h1>
                4 - Contador com Incremento e Decremento
            </h1>

            <h2>
                Contador: {start_number}
            </h2>

            <button onClick={handleDecrementNumber}>
                Decrementar
            </button>

            <button onClick={handleIncrementNumber}>
                Incrementar
            </button>
        </div>
    );
};