import React from 'react';
import {connect} from "react-redux";

const Selecteds1 =(props)=>{
    if(!props.s5) {return null}
    return(
        <React.Fragment>
            <div className="card">
                <div className="card-body">
                    <h4 className="card-title">
                        {props.s5.title}
                    </h4>
                    <p className="card-text">
                        {props.s5.duration}
                    </p>
                </div>
            </div>
        </React.Fragment>
    )
};
const mapStateToProps=(state)=>{
    // console.log(state);
    // console.log(state.selectsong);
    return {s5:state.selectsong}


};

export default connect(mapStateToProps)(Selecteds1);