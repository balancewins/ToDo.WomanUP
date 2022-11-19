import { Fragment } from "react";
import Services from "../../services/Services";

const Deadline = ({deadline}) => {
    const services = new Services()

    return (
        <Fragment>
            <span data-toogle="time">{deadline[0]}</span>
            <span data-toogle="date">{services.reverseDate(deadline[1])}</span>
        </Fragment>
    );
}

export default Deadline;