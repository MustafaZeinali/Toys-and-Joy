import styled from "styled-components"
import SearchItems from "./InputSearching"
const List = styled.ul`
    text-decoration: none;
    display : flex ;
    flex-direction : row;
    justify-content : flex-end;
`
const Item = styled.li`
    margin : 2rem;

    
`

const Header = () => {

    return(
        <section> 
         <nav> 
            <List> 
                <Item> SHOP </Item>
                <Item> SORT </Item>
                <Item> LOG IN </Item>
            </List>
         </nav>
            <SearchItems/>
        </section>
    )

}

export default Header