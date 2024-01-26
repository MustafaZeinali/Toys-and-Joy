import { Outlet } from "react-router-dom";
import Header from "../components/header/Header";
import "../App.css";

const Root = () => (
    <>
    <Header/>
    <Outlet/>
    </>
)
export default Root;