
import { FruitList } from "~/components/FruitList";
import type { Route } from "./+types/home";


export function meta({ }: Route.MetaArgs) {
    return [
        { title: "New React Router App" },
        { name: "description", content: "Welcome to React Router!" },
    ];
}

export default function Home() {
    const fruit_array = ['Maçã', 'Banana', 'Uva', 'Laranja', 'Abacaxi'];

    return (
        <FruitList
            fruit_array={fruit_array}
        />
    );
}
