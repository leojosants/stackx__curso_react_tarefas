
import { useState } from "react";


export function SimpleMessage() {
    const start_title = "Olá";
    const end_title = "Bem-vindo(a) ao React!";

    const [_title, setTitle] = useState(start_title);

    const handleTitle = () => {
        if (_title === start_title) {
            setTitle(end_title);
        }
        else {
            setTitle(start_title);
        }
    };

    return (
        <div>
            <h1>
                3 - Estado Simples com useState
            </h1>

            <h2>
                {_title}
            </h2>

            <button onClick={handleTitle}>
                Alterar texto
            </button>
        </div>
    );
};