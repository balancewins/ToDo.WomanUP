import { Fragment } from "react";
import Services from "../../services/Services";

const Deadline = ({deadline, WhoAmI}) => {
    const services = new Services()

    return (
        <Fragment>
            <span data-toogle="time">{WhoAmI ? 'И там меняется?' : deadline[0]}</span>
            <span data-toogle="date">{WhoAmI ? 'И даже здесь!' : services.reverseDate(deadline[1])}</span>
        </Fragment>
    );
}

export default Deadline;