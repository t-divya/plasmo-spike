import styled from 'styled-components';
import { Link } from "react-router-dom";


const Container = styled.div`
display:flex;
flex-flow: row nowrap;
padding:20px;
border: 1px solid pink;
margin:7px;
cursor:pointer;

`
const MenuItemStyledLink = styled(Link)`


`


export default function MenuItem({ textSettings, messageOverview, to }) {
    return (
        <MenuItemStyledLink to={to}>
            <Container >
                <div><img />hellohello</div>
                <div>{textSettings}</div>

                <div>{messageOverview}</div>

                <div><img />hello</div>

            </Container>
        </MenuItemStyledLink>

    )



}