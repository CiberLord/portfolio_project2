import react from 'react';


function Scroll(props){

    return (
        <div className="scroll__box">
            <h4>{props.value}</h4>
            <i class="fas fa-chevron-down"></i>
            <i class="fas fa-chevron-down"></i>
        </div>
    )
}

export default Scroll;