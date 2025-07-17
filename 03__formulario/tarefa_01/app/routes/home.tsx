
import { UncontrolledForm } from "components/UncontrolledForm";
import type { Route } from "./+types/home";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";


export function meta({ }: Route.MetaArgs) {
    return [
        { title: "New React Router App" },
        { name: "description", content: "Welcome to React Router!" },
    ];
}

export default function Home() {
    return (
        <div>
            <UncontrolledForm />
            <ToastContainer position="top-center" autoClose={3000} />
        </div>
    );
}
