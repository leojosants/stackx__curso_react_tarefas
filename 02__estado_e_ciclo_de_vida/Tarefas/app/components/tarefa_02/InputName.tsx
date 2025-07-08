
import { useState, type ChangeEvent } from "react";


export function InputName() {
    const [input_content, setInputContent] = useState("");

    const handleInputContent = (event: ChangeEvent<HTMLInputElement>) => {
        const input_value = event.target.value;
        setInputContent(input_value);
    };

    return (
        <div>
            <h1>
                2 - Input Controlado
            </h1>

            <h2>
                Texto sendo digitado: {input_content}
            </h2>

            <input
                onChange={handleInputContent}
                value={input_content}
                type="text"
            />
        </div>
    );
};