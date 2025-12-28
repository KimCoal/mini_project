import "./App.css";
import { BrowserRouter } from "react-router-dom";
import MainRouter from "./routers/MainRouter";
import AuthRouter from "./routers/AuthRouter";

function App() {
    return (
        <>
            <BrowserRouter>
                <MainRouter />
            </BrowserRouter>
        </>
    );
}

export default App;
