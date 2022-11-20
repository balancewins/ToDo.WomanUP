import { Fragment } from "react";
import Services from '../../../services/Services';

const DeadlineInput = ({deadline}) => {
    const services = new Services()

    return (
        <Fragment>
            <input type="time" data-toogle="time" defaultValue={deadline[0]} />
            <input type="date" data-toogle="date" defaultValue={services.reverseDate(deadline[1])} />
        </Fragment>
    );
}

export default DeadlineInput;