import react from 'react';
import reactDOM from 'react-dom';
import image from '../img/jason-wood.png';


function Content(props) {
    return (
        <div className="content">
            <div className="row jc-center a-start">
                <img className="content__img" src={image} alt="df" />
                <div className="content__text">
                    <h2>{props.title}</h2>
                    <p>
                        Nemo enim ipsam voluptatem, quia voluptas sit, aspernatur
                        aut odit aut fugit, sed quia consequuntur magni dolores
                        eos, qui ratione voluptatem sequi nesciunt, neque porro
                        quisquam est, qui dolorem ipsum, quia dolor sit, amet,
                        consectetur, adipisci velit, sed quia non numquam eius
                        modi tempora incidunt, ut labore et dolore magnam aliquam
                        quaerat voluptatem.
                    </p>
                    <h3>Jasoon Wood</h3>
                </div>
            </div>
        </div>
    )
}
export default Content;