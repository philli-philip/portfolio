import FilterSentence from "../filterSentence";
import type { Story } from "@ladle/react";

export const simple: Story = () =>(
    <FilterSentence operator={simpleArgs} options={currencies}/>
)


const simpleArgs =  [
    {value:"is", label:"is", order:1},
    {value:"isNot", label:"is not", order:2}
]

const currencies = [
    {value:"usd", label:"USD", order:"USD"},
    {value:"EUR", label:"EUR", order:"EUR"},
    {value:"PLN", label:"PLN", order:"PLN"},
]