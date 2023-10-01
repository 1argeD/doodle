import { Children } from "react";
import { reactDOM } from "react-dom";

const ModalPotal = ({}) => {
    const el = document.getElementById('modal');
    return reactDOM.createPotal(Children, el);

};

export default ModalPotal;