
import { useRef, type FormEvent } from "react";
import { toast } from "react-toastify";
import "./styles.css";


export function UncontrolledForm() {
    const input_name_ref = useRef<HTMLInputElement>(null);
    const input_email_ref = useRef<HTMLInputElement>(null);
    let data_is_valid = false;

    const funcHandleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        const name = (
            input_name_ref.current
                ? input_name_ref.current.value
                : ""
        );

        const email = (
            input_email_ref.current
                ? input_email_ref.current.value
                : ""
        );

        if (!name || !email) {
            toast.error("Preencha todos os campos!");
            data_is_valid = false;
            return;
        }

        data_is_valid = true;

        if (data_is_valid) {
            toast.success("Dados enviados com sucesso!");

            console.log("--- Dados do Formulário Não Controlado ---");
            console.log("Nome:", name.length);
            console.log("Email:", email);


            if (input_name_ref.current) {
                input_name_ref.current.value = "";
            }

            if (input_email_ref.current) {
                input_email_ref.current.value = "";
            }
        }
    };

    return (
        <div className="c_container">
            <div className="c_container__content">
                <h1 className="c_content__title">
                    Formulário Não Controlado
                </h1>

                <form className="c_content__form" onSubmit={funcHandleSubmit}>
                    <div className="c_form__container_input_name">
                        <label htmlFor="id_name" className="c_form__label_input_name">
                            Nome:
                        </label>

                        <input
                            className="c_form__input_name"
                            ref={input_name_ref}
                            id="id_name"
                            type="text"
                        />
                    </div>

                    <div className="c_form__container_input_email">
                        <label htmlFor="id_email" className="c_form__label_input_email">
                            Email:
                        </label>


                        <input
                            className="c_form__input_email"
                            ref={input_email_ref}
                            type="email"
                            id="id_email"
                        />
                    </div>

                    <button className="c_form__submit_button" type="submit">
                        Enviar
                    </button>
                </form>
            </div>
        </div>
    );
};