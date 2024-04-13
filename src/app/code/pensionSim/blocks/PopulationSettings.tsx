"use client";

import Card from "../components/Card";
import { Input } from "../components/input";
import { toInteger } from "lodash";
import { usePopulationContext } from "../page";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../components/select";

export default function PopulationSettings() {
  const { data, dispatch } = usePopulationContext();

  return (
    <Card className="w-[390px]">
      <h3>Poplation</h3>
      <span className="grid grid-cols-[160px_1fr] gap-y-2">
        <h4 className="col-span-2 mb-2 mt-6">General</h4>
        <label htmlFor="year" className="inline-block">
          Year
        </label>
        <Input
          type="number"
          id="year"
          className="inline-block"
          defaultValue={data.year}
          onBlur={(e) =>
            dispatch({ type: "setYear", value: toInteger(e.target.value) })
          }
        />
        <label htmlFor="population" className="inline-block">
          Population
        </label>
        <Input
          type="number"
          id="population"
          className="inline-block"
          defaultValue={data.startingPopulation}
          onBlur={(e) =>
            dispatch({
              type: "setPopulation",
              value: toInteger(e.target.value),
            })
          }
        />
        <h4 className="col-span-2 mb-2 mt-6">Men</h4>
        <label htmlFor="men-enter-work" className="inline-block">
          Entering work force
        </label>
        <Input
          type="number"
          id="men-enter-work"
          className="inline-block"
          defaultValue={data.menStartingAge}
          onBlur={(e) =>
            dispatch({
              type: "setMenEnterWork",
              value: toInteger(e.target.value),
            })
          }
        />
        <label htmlFor="men-leave-work" className="inline-block">
          Entering work force
        </label>
        <Input
          type="number"
          id="men-leave-work"
          className="inline-block"
          defaultValue={data.menFinishAge}
          onBlur={(e) =>
            dispatch({
              type: "setMenLeaveWork",
              value: toInteger(e.target.value),
            })
          }
        />
        <h4 className="col-span-2 mb-2 mt-6">Women</h4>
        <label htmlFor="women-enter-work" className="inline-block">
          Entering work force
        </label>
        <Input
          type="number"
          id="women-enter-work"
          className="inline-block"
          defaultValue={data.womenStartingAge}
          onBlur={(e) =>
            dispatch({
              type: "setWomenEnterWork",
              value: toInteger(e.target.value),
            })
          }
        />
        <label htmlFor="women-leave-work" className="inline-block">
          Entering work force
        </label>
        <Input
          type="number"
          id="women-leave-work"
          className="inline-block"
          defaultValue={data.womenFinishAge}
          onBlur={(e) =>
            dispatch({
              type: "setWomenLeaveWork",
              value: toInteger(e.target.value),
            })
          }
        />
        <h4 className="col-span-2 mb-2 mt-6">Distribution</h4>
        <Select defaultValue={data.distributionName}>
          <SelectTrigger className="col-span-2 w-full">
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectItem value="de">Germany</SelectItem>
              <SelectItem value="uk">Great Britan</SelectItem>
              <SelectItem value="it">Italy</SelectItem>
              <SelectItem value="custom">Custom</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
      </span>
    </Card>
  );
}
