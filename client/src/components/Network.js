import React from 'react';
import User from './Users.js'

class Network extends React.Component{
    constructor(props){
        super(props);
        
        let currentUser;
        const currentStoredUser = localStorage.getItem("currentStoredUser");
        if (currentStoredUser) {
            currentUser = JSON.parse(currentStoredUser)
        }

        this.state = {
            currentUser
        }
    }


    render(){
        return(
            <div className="list-group w-25">
                {Object.keys(User).map(key => {
                    return(
                        <a href="#" className="list-group-item list-group-item-action flex-column align-items-start ">
                            <div className="d-flex w-100 justify-content-between">
                            <img src={User[key].photoUrl} alt="User" height="42" width ="42"/>
                                <h5 className="mb-1">{User[key].name}</h5>                                
                            </div>
                            <p className="mb-1">{User[key].email}</p>
                            <p className="mb-1">{User[key].description}</p>
                        </a>
                    )
                })}
            </div> 
        )
    }
}
export default Network;