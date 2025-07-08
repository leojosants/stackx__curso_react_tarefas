
import type { TypeFruitListProps } from "./FruitListProps";


export function FruitList(props: TypeFruitListProps) {
    const { fruit_array } = props;

    return (
        <div>
            <h1>
                Lista de frutas
            </h1>

            <ul>
                {
                    fruit_array.map(
                        (fruit, index) => (
                            <li key={index}>
                                {fruit}
                            </li>
                        )
                    )
                }
            </ul>
        </div>
    );
};