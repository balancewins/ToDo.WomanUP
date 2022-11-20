import Services from "../../../services/Services";

const DateSpan = ({date}) => {
    const services = new Services();

    return (
            <span data-toogle="time">{services.reverseDate(date)}</span>
    );
}

export default DateSpan;