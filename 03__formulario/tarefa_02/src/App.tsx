
import { RegistrationForm } from "./components/RegistrationForm/RegistrationForm";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";

export default function App() {
    return (
        <>
            <RegistrationForm />
            <ToastContainer position="top-center" autoClose={3000} />
        </>
    );
};