import Card from "../components/Card";
import { usePopulationContext } from "../page";

export default function Diagram() {
  const { data } = usePopulationContext();

  return (
    <Card className="flex-1">
      <span>Diagram</span>
      <span>{data.menStartingAge}</span>
    </Card>
  );
}
