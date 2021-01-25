import react from 'react';
import ReactDOM from 'react-dom';
import Menu from './Menu';
import Scroll from './Scroll';



function Header(props) {

    return (
        <header className="header">
            <div className="container">
                <Menu />
                <Scroll value="scroll down to see more"/>
            </div>
        </header>
    )
}
export default Header;