import react from 'react';
import    "../../css/components/Header/Header.css"
import {words} from "../../words";
function Header() {
    return(
        <header>
            {words.headerTitle}
        </header>
    )
}
export default Header;
