import { Outlet } from "react-router-dom";
import Header from "../components/header/Header";


const Root = () => (
    <>
    <Header/>
    <Outlet/>
    </>
)
export default Root;