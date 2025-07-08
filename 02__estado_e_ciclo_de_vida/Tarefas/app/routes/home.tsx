
import { SimpleMessage } from "~/components/tarefa_03/SimpleMessage";
import { TimeCounter } from "~/components/Tarefa_06/TimeCounter";
import { InputName } from "~/components/tarefa_02/InputName";
import { ShowHide } from "~/components/tarefa_01/ShowHide";
import { Counter2 } from "~/components/tarefa_05/Counter2";
import { Counter } from "~/components/Tarefa_04/Counter";
import type { Route } from "./+types/home";


export function meta({ }: Route.MetaArgs) {
    return [
        { title: "New React Router App" },
        { name: "description", content: "Welcome to React Router!" },
    ];
}

export default function Home() {
    return (
        <>
            <section>
                <ShowHide />
                <br />
                <hr />
                <br />
            </section>

            <section>
                <InputName />
                <br />
                <hr />
                <br />
            </section>

            <section>
                <SimpleMessage />
                <br />
                <hr />
                <br />
            </section>

            <section>
                <Counter />
                <br />
                <hr />
                <br />
            </section>

            <section>
                <TimeCounter />
                <br />
                <hr />
                <br />
            </section>

            <section>
                <Counter2 />
                <br />
                <hr />
                <br />
            </section>
        </>
    );
}

