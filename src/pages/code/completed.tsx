
type Props = {
    completed?: Date
}

export default function Status(props:Props){
    const done = props.completed&& true || false

    return (
        <span className="flex flex-1 text-gray-700">
            {done?"Completed":"Open"}
        </span>
    )
}