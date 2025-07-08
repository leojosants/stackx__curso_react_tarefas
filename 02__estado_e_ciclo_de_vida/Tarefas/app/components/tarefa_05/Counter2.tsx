
import { useState } from "react";


export function Counter2() {
    const [start_number, setStartNumber] = useState(0);

    const handleDecrementNumber = () => {
        setStartNumber(start_number - 1);
    };

    const handleResetNumber = () => {
        if (start_number !== 0) {
            setStartNumber(0);
        }
    };

    const handleIncrementNumber = () => {
        setStartNumber(start_number + 1);
    };

    return (
        <div>
            <h1>
                6 - Contador com Botão de Reset
            </h1>

            <h2>
                Contador: {start_number}
            </h2>

            <button onClick={handleDecrementNumber}>
                Decrementar
            </button>

            <button onClick={handleResetNumber}>
                Zerar
            </button>

            <button onClick={handleIncrementNumber}>
                Incrementar
            </button>
        </div>
    );
};