import React from 'react';
import { Link } from 'react-router-dom';

function InboxItem(props) {
    return (
        <div className={`conversation flex rel aic`}>
            <div className={`you rel flex aic`}>
                <Link to={``} className={`user`}>
                    <img src={`https://placeimg.com/50/50/people?t=${new Date().getTime()}`} alt="profile"/>
                </Link>
            </div>
            <div className={`meta rel flex col`}>
                <h2 className={`name s16 b wordwarp`}>Tom King'ori</h2>
                <h2 className={`last-msg  s15 c777 wordwrap`}>How are you doing today?</h2>
            </div>
            <div className={`extra rel flex col`}>
                <h2 className={`stamp s13 c777`}>Just Now</h2>
                <div className={`badge rel s14 cfff`}>
                    99+
                </div>
            </div>
        </div>
    );
}

export default InboxItem;