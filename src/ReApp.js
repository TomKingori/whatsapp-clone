import React from 'react';
import { connect } from 'react-redux';

import './css/App.scss';
// Pages
import Splash from './pages/Splash';

function ReApp(props) {

    const { loaded } = props;

    return (
        loaded ? <div>App is loaded</div>: <Splash />
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

export default connect(mapStateToProps, mapDispatchToProps)(ReApp);