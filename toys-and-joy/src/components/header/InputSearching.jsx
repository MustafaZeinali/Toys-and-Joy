import { useState } from "react"


const SearchItems = () => {
    const [ name , setName] = useState("");

    let handleSearch = (event)=>{
        
            
        
        setName(event.target.value)
    }
    return(
        <section>
            <input value={name} type="text"  onChange={ handleSearch} />
        </section>
    )
}

export default SearchItems