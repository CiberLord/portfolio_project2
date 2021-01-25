import react from 'react';
import ReactDOM from 'react-dom';
import Content from './Content';
import Menu from './Menu';
import Scroll from './Scroll';



function About(props) {

    return (
        <div className="about">
            <div className="container">
                <Menu />
                <Content title="about me" imgPath=""/>
                <Scroll value="keep scrolling, there still more to come"/>
            </div>
        </div>
    )
}
export default About;