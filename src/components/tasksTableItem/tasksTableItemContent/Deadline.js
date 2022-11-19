import Services from "../../services/Services";

const Deadline = ({deadline}) => {
    const services = new Services()

    return (
        <div>
            <span data-toogle="time">{deadline[0]}</span>
            <span data-toogle="date">{services.reverseDate(deadline[1])}</span>
        </div>
    );
}

export default Deadline;