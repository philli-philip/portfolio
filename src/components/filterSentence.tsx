
import { useState } from "react"
import { Menu } from '@headlessui/react'

const currency = {
    operator : [
        {value:"is", label:"is", order:1},
        {value:"isNot", label:"is not", order:2}
    ]
}
const curOP:Option[] = [
        {value:"usd", label:"USD", order:"USD"},
        {value:"EUR", label:"EUR", order:"EUR"},
        {value:"PLN", label:"PLN", order:"PLN"},
]

type Props = {
    operator: Operator[]
    options: Option[]
}

type Option = {
    value: string,
    label: string,
    order: number | string 
}
type SentenceProps = {
    options: Option[]
}

type Operator= {
    value: string,
    label: string,
    order: number | string
}

function AddFilter({options}: SentenceProps) {
    return(
    <Menu>
      <Menu.Button>Add Filter</Menu.Button>
      <Menu.Items>
        {options.map(option =>(
        <Menu.Item key={option.order}>
         <button>{option.label}</button>
        </Menu.Item>
        ))}
      </Menu.Items>
    </Menu>
    )
}

export default function FilterSentence({operator, options}:Props) {
    const operatorOptions = operator
    const valueOptions = options
    const [currentOperator, setcrrentOperator ] = useState(operator[0] || {value:"is", label:"is", order:1})

    return(
        <div>
            <select>
                <option value="currency">Currency</option>
                <option value="Amount">Amount</option>
            </select>
            <select>
                {operatorOptions.map(option => (
                    <option value={option.value} key={option.order}>{option.label}</option>
                ))}
            </select>
            <select>
                {valueOptions.map(option => (
                    <option value={option.value} key={option.order}>{option.label}</option>
                ))}
            </select>
            <AddFilter options={curOP}/>
        </div>
    )
}