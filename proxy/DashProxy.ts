import { proxy } from "valtio";

const initialState = {
    Profile: true,
    Analytics: false
}

const DashProxy = proxy(initialState);

export default DashProxy;