
import { useState } from "react";


export function ShowHide() {
    const start_title = "Curso ReactJS";
    const end_title = "";

    const start_button_text = "Mostrar";
    const end_button_text = "Ocultar";

    const [_title, setTitle] = useState(start_title);
    const [button_text, setButtonText] = useState(end_button_text);

    const handleContent = () => {
        if (_title) {
            setTitle(end_title);
            setButtonText(start_button_text);
        }
        else {
            setTitle(start_title);
            setButtonText(end_button_text);
        }
    };

    return (
        <div>
            <h1>
                1 - Alternar Visibilidade
            </h1>

            <h2>
                {_title}
            </h2>

            <button onClick={handleContent}>
                {button_text}
            </button>
        </div>
    );
};