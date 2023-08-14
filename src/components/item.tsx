import type { Task } from "../pages/code"
import format from "date-fns-tz/format";
import Status from "./completed";

type Props = {
    task:Task
}

export default function Item(props:Props){
    const {name, difficulty, completed, id, link}  = props.task;
    return(
        <a href={"/code/" + link} key={id} className="flex flex-row border-b border-gray-200 h-12 gap-2 md:gap-4 items-center px-4 md:px-6 justify-between hover:bg-gray-100 text-sm">
            <span className=" text-gray-700 w-8">
                {`P-` + id}
            </span>
            <span className="font-semibold text-gray-800">
                {name}
            </span>
            <Status completed={completed}/>
            <span className="text-gray-700 w-24 text-right flex flex-1 justify-end">
                {completed ? format(completed, "dd MMM YYY") : "--"}
            </span>
        </a>
    )
}