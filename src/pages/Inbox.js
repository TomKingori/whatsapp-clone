import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Chat from '../images/chat.svg'
import More from '../images/more_vert.svg'

function Inbox(props) {
    return (
        <div className={`inbox rel`}>
            {/* Header */}
            <div className={`userbox flex`}>
                <div className={`you rel flex aic`}>
                    <Link to={``} className={`user`}>
                        <img src={`https://placeimg.com/50/50/people`} alt="profile"/>
                    </Link>
                </div>
                <div className={`actions rel flex aic`}>
                    <button><img src={Chat} className={`s24`} alt="chat"/></button>
                    <button><img src={More} className={`s24`} alt="more"/></button>
                </div>
            </div>
            
        </div>
    );
}

const mapStateToProps = state => {
    return{
        loaded: state.App.loaded
    }
}

const mapDispatchToProps = dispatch => {
    return{
        setState: (loaded) => dispatch({type: "APP_STATE", state: { loaded: loaded} })
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Inbox);