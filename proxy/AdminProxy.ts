import { proxy } from "valtio";

const initialState = {
    isAdmin: false
}

const Adminproxy = proxy(
    initialState
);

export default Adminproxy;