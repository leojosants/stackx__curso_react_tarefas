
import { toast } from "react-toastify";
import { useState } from "react";
import "../styles/RegistrationForm.scss";


export function RegistrationForm() {
    const [state_emailError, funcSetEmailError] = useState(false);
    const [state_nameError, funcSetNameError] = useState(false);
    const [state_email, funcSetEmail] = useState("");
    const [state_name, funcSetName] = useState("");

    const funcHandleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        const is_name_valid = state_name.trim() !== "";
        const is_email_valid = state_email.trim() !== "";

        funcSetNameError(!is_name_valid);
        funcSetEmailError(!is_email_valid);

        if (is_name_valid && is_email_valid) {
            toast.success("Cadastro realizado com sucesso!");
            funcSetName("");
            funcSetEmail("");
        }
        else {
            toast.error("Preencha todos os campos!");
        }
    };

    return (
        <div className="c_container">
            <h1>Cadastro</h1>

            <form onSubmit={funcHandleSubmit} className="c_container__form">
                <div className="c_form__container_name">
                    <label htmlFor="id_name">Nome</label>

                    <input
                        className={`${state_nameError ? "c_error" : ""}`}
                        onChange={(e) => {
                            funcSetName(e.target.value);
                            if (e.target.value.trim() !== "") funcSetNameError(false);
                        }}
                        value={state_name}
                        type="text"
                        id="id_name"
                    />

                    <div className={`c_error_message ${state_nameError ? "c_visible" : ""}`}>
                        Nome é obrigatório.
                    </div>
                </div>

                <div className="c_form__container_email">
                    <label htmlFor="id_email">Email</label>

                    <input
                        className={`${state_emailError ? "c_error" : ""}`}
                        onChange={(e) => {
                            funcSetEmail(e.target.value);
                            if (e.target.value.trim() !== "") funcSetEmailError(false);
                        }}
                        value={state_email}
                        type="email"
                        id="id_email"
                    />

                    <div className={`c_error_message ${state_emailError ? "c_visible" : ""}`}>
                        Email é obrigatório.
                    </div>
                </div>

                <button type="submit">
                    Cadastrar
                </button>
            </form>
        </div>
    );
}
