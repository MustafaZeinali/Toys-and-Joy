import { useContext, useState } from "react"
import BringData from "../getProduct/GetProduct";
import { ToyContext } from "../../routes/ContextRoot";
const SearchItems = () => {
    const { allProducts , setAllProducts } = useContext(ToyContext)
    

    
    
    return(
        <section>
             <div className="search-item">
          <input type="text" value={searchItem} onChange={ filterProduct}  className="search-input" placeholder="Sök" />
          <IoSearchOutline className="search-icon" onClick={serachClick} />
        </div>
        {serachClick.map(item => (
            <li>
                <p>{item.name}</p>
            </li>
        ))}
        </section>
    )
}

export default SearchItems