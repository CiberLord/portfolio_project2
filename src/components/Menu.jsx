import react from 'react';
import ReactDOM from 'react-dom';



function Menu(props) {

    let open = false;

    function handleclick() {
        if (!open) {
            document.querySelector(".menu ul").style.height = '400px';
        } else {
            document.querySelector(".menu ul").style.height = '0px';
        }
        open = !open;
    }

    return (
        <nav className="menu">
            <div className="container">
                <div className="menu__button" onClick={handleclick}>
                    <i class="fas fa-infinity"></i>Menu
                </div>
                <ul>
                    <li className="menu__item">
                        <a href="#">Home</a>
                    </li>
                    <li className="menu__item">
                        <a href="#">About Me</a>

                    </li>
                    <li className="menu__item">
                        <a href="#">Portfolio</a>

                    </li>
                    <li className="menu__item">
                        <a href="#">Contact</a>
                    </li>
                </ul>
            </div>

        </nav>
    )
}
export default Menu;