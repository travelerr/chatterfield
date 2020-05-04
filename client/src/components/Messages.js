import React, {Fragment} from 'react';
import Talk from 'talkjs';

/* Component will be used to render message history between two or more users.
   Component will be displayed in mounted inbox container, and on 'Messages' page 
   accessed on navigation bar
*/

class Messages extends React.Component{

    constructor(props) {
        super(props);

        this.inbox = undefined;
        let currentUser;
        const currentTalkjsUser = localStorage.getItem('currentTalkjsUser');
        if (currentTalkjsUser) {
            currentUser = JSON.parse(currentTalkjsUser)
        }

        this.state = {
            currentUser
        }
    }


    componentDidMount() {
        Talk.ready
            .then(() => {
                const me = new Talk.User(this.state.currentUser);
                
                if (!window.talkSession) {
                    window.talkSession = new Talk.Session({
                        appId: "twBRxQzL",
                        me: me
                    });
                }
            
                this.inbox = window.talkSession.createInbox();
                this.inbox.mount(this.container);

            })
            .catch(e => console.error(e));
    }

    render() {
        return (
            <Fragment>
                <div style={{height: '500px'}} className="inbox-container" ref={c => this.container = c}>Loading...</div>
            </Fragment>
        );
    }
  }
export default Messages;