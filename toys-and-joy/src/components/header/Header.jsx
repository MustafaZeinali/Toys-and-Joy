import styled from "styled-components"

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
        
        <nav> 
            <List> 
                <Item> SHOP </Item>
                <Item> SORT </Item>
                <Item> LOG IN </Item>
            </List>
        </nav>
       
    )

}

export default Header