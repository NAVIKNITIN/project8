import React, { Component } from 'react';
import Songslist from './songslist';
import Selecteds1 from "./selectedsong";


class App extends Component{

    render(){
        return (
            <React.Fragment>
                <div className="ui container">
                    <div className="ui row">
                        <div className="col-md-8">
                            <Songslist/>
                        </div>
                        <div className="col-md-4">
                            <Selecteds1/>
                            
                        </div>

                    </div>
                </div>
            </React.Fragment>
        )
    }
};
export default App;
