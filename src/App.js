import { Provider } from "react-redux";
import app from "./redux/reducers/app";
import appstore from "./redux/Store";
import ReApp from "./ReApp";

function App(){
    return(
        <Provider store={appstore}>
            <ReApp />
        </Provider>
    )
}

export default App;