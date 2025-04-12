import React from "react";

function Header(props){
    return (
        <header>
            <h1 name={props.name}>{props.name}</h1>
        </header>
    );
}

export default Header;