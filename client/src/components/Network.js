import React from 'react';
import { dummyUsers } from './Users.js';
import Talk from 'talkjs';

class Network extends React.Component{
    constructor(props){
        super(props);
        
        /* Retrieve user login data from Local Storage */
        let currentUser;
        const currentStoredUser = localStorage.getItem("currentStoredUser");
        if (currentStoredUser) {
            currentUser = JSON.parse(currentStoredUser)
        }

        this.state = {
            currentUser

        }
    }

    handleClick(userId) {

        /* Get both users */
        const { currentUser } = this.state;
        const user = dummyUsers.find(user => user.id === userId);

        console.log(currentUser);
        console.log(user);

        /* Create talk session */
        Talk.ready.then(() => {
            const me = new Talk.User(currentUser);
            const other = new Talk.User(user);

            console.log(me);
            console.log(other);

            if(!window.talkSession) {
                window.talkSession = new Talk.Session({
                    appId: "twBRxQzL",
                    me: me
                });
            }

            /* Create talk session ID to be used for current conversation, also used to reteieve prior conversations */
            var conversation = window.talkSession.getOrCreateConversation(Talk.oneOnOneId(me, other))

            /* Set conversation participants */
            conversation.setParticipant(me);
            conversation.setParticipant(other);

            /* Create and mount inbox */
            this.chatbox = window.talkSession.createChatbox(conversation);
            this.chatbox.mount(this.container);

        })
        .catch(e => console.error(e));
        

    }

    render(){

        const { currentUser } = this.state;

        return(
            <div>
            <div className="list-group w-25">
                {dummyUsers.map(user => {
                    return(
                        <button onClick={(userId) => this.handleClick(user.id)} className="list-group-item list-group-item-action flex-column align-items-start ">
                            <div className="d-flex w-100 justify-content-between">
                            <img src={user.photoUrl} alt="User" height="42" width ="42"/>
                                <h5 className="mb-1">{user.name}</h5>                                
                            </div>
                            <p className="mb-1">{user.email}</p>
                            <p className="mb-1">{user.description}</p>
                        </button>
                    )
                })}
            </div> 
            <div className="chatbox-container" ref={c => this.container = c}>
                <div id="talkjs-container" style={{height: "300px"}}><i></i></div>
            </div>
            </div>
        )
    }
}
export default Network;