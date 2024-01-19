import { useState } from "react"
import BringData from "../getProduct/GetProduct";

const SearchItems = () => {
    const [ name , setName] = useState("");

    let handleSearch = (event)=>{
        
        setName(event.target.value).items.filter(item => item.name.includes(name))
    }
    return(
        <section>
            <input value={name} type="text"  onChange={ handleSearch} />
        </section>
    )
}

//export default SearchItems