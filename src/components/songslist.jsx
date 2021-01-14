import React, { Component } from 'react';
import {connect} from "react-redux";
import selectSong from "../actions/index";


class Songslist extends Component{
    
    render(){
        return(
            
            <div className="container">
                <h1>Song List</h1>
                <div className="row">

                    {
                        
                        this.props.s1.map((data)=>(
                                

                            <div className="col-md-12" key={data.title}
                            onClick={()=>this.props.selectSong(data)}
                            >
                                    
                                    <div className="card" >
                                        <div className="card-body">
                                            <h4 className="card-title">{data.title}</h4>
                                            <p className="card-text">{data.duration}</p>
                                        </div>
                                    </div>
                            </div>
                        ))
                    }
                    
                </div>
            </div>
        )
    }
};

const mapStateToProps = (state) => {
    // console.log(state);
    // return state;
    return{s1:state.songs}
}
export default connect(mapStateToProps,{selectSong})(Songslist);
 