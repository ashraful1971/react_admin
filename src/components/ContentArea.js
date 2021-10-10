import {
    Switch,
    Route
} from 'react-router-dom'
import Dashboard from "../pages/Dashboard"
import Brand from "../pages/Brand/Brand"
import TopBar from './TopBar';
import AddBrand from '../pages/Brand/AddBrand';

const ContentArea = () => {
    return (
        <div className="flex-grow px-5 pt-3 bg-blue-100">
            <TopBar />
            <Switch>
                <Route path="/brand"><Brand /></Route>
                <Route path="/add_brand"><AddBrand /></Route>
                <Route path="/"><Dashboard /></Route>
            </Switch>
        </div>
    );
}

export default ContentArea;