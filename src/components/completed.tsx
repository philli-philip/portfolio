import StatusOpen from "./icons/status-open";
import StatusCompleted from "./icons/status-completed";

type Props = {
    completed?: Date
}

export default function Status(props:Props){
    const done = props.completed && true || false

    const completed = <span className="flex flex-row items-center"><StatusCompleted/>Completed</span>
    const open = <span className="flex flex-row items-center"><StatusOpen/>Open</span>

    return (
        <span className="sm:flex flex-1 text-secondary hidden">
            {done ? completed : open}
        </span>
    )
}