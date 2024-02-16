
import { createContext , useState } from "react";

export const ToyContext = createContext();

const ContextRoot = ({children}) => {
    const [order , setOrder] = useState([]);
    const [ allProducts ,setAllProducts ] = useState([]);
    const [ isLogined ,setIsLogined ] = useState(false);
    const [ isInvisible ,setIsInvisible ] = useState(true); 

    return(
        <ToyContext.Provider value={{order,setOrder,allProducts,setAllProducts,isLogined,setIsLogined, isInvisible,setIsInvisible}}> 
            {children}
        </ToyContext.Provider> 
    )
}
export default ContextRoot;