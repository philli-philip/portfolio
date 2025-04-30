import { Block } from "../components/ExampleComponents";
import { ExampleType } from "./data";

export const simpleDetailPageTopNavigation: ExampleType = {
  title: "Simple detail page",
  description:
    "This is the super simple starter. It can then later be extended by adding multiple columns or tabs as you see in other examples.",
  layout: (
    <div className="mx-auto flex flex-col ">
      <Block
        color="green"
        name="Navigation"
        className="f-full h-12 border-b border-gray-200 dark:border-gray-600"
      />
      <Block
        color="yellow"
        name="Title"
        className="f-full h-10 border-b border-gray-200 dark:border-gray-600"
      />
      <Block
        color="blue"
        name="Main content"
        className="h-96 w-full max-w-4xl grow self-center"
      />
    </div>
  ),
};
