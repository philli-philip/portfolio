import {
  ProjectContainer,
  ProjectDescription,
  ProjectImage,
  ProjectTitle,
} from "./project";

export type Category = "code" | "product" | "industrial";

function show(category: Category, filter: string | "") {
  if (filter === "" || filter === null) {
    return true;
  }
  if (filter === category) {
    return true;
  }
  return false;
}

export const Planner = ({ active }: { active: string }) => (
  <ProjectContainer
    className=" bg-gray-100 dark:bg-gray-600"
    show={show("code", active)}
  >
    <ProjectImage
      className="absolute left-24 top-16 w-[600px] scale-125 rounded-lg shadow-xl dark:opacity-80"
      lightImage={"img/projects/financial-planning-tool.png"}
    />
    <ProjectTitle>
      <div className="flex-col gap-2">
        <h2 className="text-lg font-semibold dark:text-gray-200">
          Financial planning tool
        </h2>
        <span className="text-sm text-gray-600 dark:text-gray-300">2025</span>
      </div>
    </ProjectTitle>
    <ProjectDescription className="dark:bg-gray-600/70">
      <div className="flex-col gap-2 ">
        <h2 className="text-lg font-semibold dark:text-gray-200">
          Financial planning tool
        </h2>
        <span className="block pb-6 text-sm text-gray-600 dark:text-gray-300">
          2025
        </span>
      </div>
      <p className="dark:text-gray-200">
        A financial planning tool that allows you to plan your budget and track
        your expenses. It is local only and will not sync with any cloud
        service.
      </p>
    </ProjectDescription>
  </ProjectContainer>
);

export const TradingApp = ({ active }: { active: string }) => (
  <ProjectContainer className="bg-gray-800" show={show("code", active)}>
    <ProjectImage
      className="absolute left-10 top-10 w-[600px] scale-110 shadow-2xl"
      lightImage={"img/projects/tradepost-tool.png"}
    />
    <ProjectTitle>
      <div className="flex-col gap-2 text-[gold]">
        <h2 className="text-lg font-semibold">Trading tool</h2>
        <span className="block text-sm font-light opacity-85">2024</span>
      </div>
    </ProjectTitle>
    <ProjectDescription>
      <div className="flex-col gap-2 text-[gold]">
        <h2 className="text-lg font-semibold">Trading tool</h2>
        <span className="block pb-6 text-sm font-light opacity-85">2024</span>
      </div>
      <p className="font-light text-[gold] opacity-85">
        A trading tool that allows you track the prices and volume for the game
        IdleClan. It used AI to give the trading advisor character and a basic
        intelligence.
      </p>
    </ProjectDescription>
  </ProjectContainer>
);

export const Bergaffe = ({ active }: { active: string }) => (
  <ProjectContainer
    className="bg-red-600 md:col-span-2 md:aspect-[2/1]"
    show={show("industrial", active)}
  >
    <ProjectImage
      className="m-3 mb-0 h-[calc(100%-12px)] w-[calc(100%-24px)] overflow-hidden rounded-xl object-cover"
      lightImage={"img/projects/bergaffe-bench.png"}
    />
    <ProjectTitle>
      <div className="flex-col gap-2 text-white">
        <h2 className="text-lg font-bold uppercase italic">Bergaffe</h2>
        <span className="block text-sm">2013</span>
      </div>
    </ProjectTitle>
    <ProjectDescription className="bg-red-600">
      <div className="flex-col gap-2 text-white">
        <h2 className="text-lg font-bold uppercase italic">Bergaffe</h2>
        <span className="block pb-6 text-sm">2013</span>
      </div>
      <p className="text-white">
        A financial planning tool that allows you to plan your budget and track
        your expenses.
      </p>
    </ProjectDescription>
  </ProjectContainer>
);

export const PlasticWaste = ({ active }: { active: string }) => (
  <ProjectContainer
    className="bg-gray-100 dark:bg-gray-500"
    show={show("industrial", active)}
  >
    <ProjectImage
      className="m-3 mb-0 h-[calc(100%-12px)] w-[calc(100%-24px)] overflow-hidden rounded-xl object-cover dark:opacity-80 "
      lightImage={"img/projects/plastic-waste-management.png"}
    />
    <ProjectTitle>
      <div className="flex-col gap-2 text-gray-800">
        <h2 className="text-lg font-medium">Plastic waste management</h2>
        <span className="block text-sm text-gray-600">2014</span>
      </div>
    </ProjectTitle>
    <ProjectDescription className="bg-gray-50/30 backdrop-blur dark:bg-gray-500/60">
      <div className="flex-col gap-2 text-gray-800 dark:text-gray-200">
        <h2 className="text-lg font-medium">Plastic waste management</h2>
        <span className="block pb-6 text-sm text-gray-600 dark:text-gray-300">
          2014
        </span>
      </div>
      <p className="text-gray-800 dark:text-gray-200  ">
        A financial planning tool that allows you to plan your budget and track
        your expenses.
      </p>
    </ProjectDescription>
  </ProjectContainer>
);

export const Grip = ({ active }: { active: string }) => (
  <ProjectContainer className=" bg-gray-950" show={show("industrial", active)}>
    <ProjectImage
      className="h-[calc(100%-0px)] w-[calc(100%-0px)] overflow-hidden rounded-xl object-cover"
      lightImage={"img/projects/grip.png"}
    />
    <ProjectTitle>
      <div className="flex-col gap-2">
        <h2 className="text-lg font-semibold text-white">Grip</h2>
        <span className="block text-sm text-gray-400">2013</span>
      </div>
    </ProjectTitle>
    <ProjectDescription className="bg-black/60">
      <div className="flex-col gap-2">
        <h2 className="text-lg font-semibold text-white">Grip</h2>
        <span className="block pb-6 text-sm text-gray-400">2013</span>
      </div>
      <p className="text-white">
        A financial planning tool that allows you to plan your budget and track
        your expenses.
      </p>
    </ProjectDescription>
  </ProjectContainer>
);

export const ThreeJS = ({ active }: { active: string }) => (
  <ProjectContainer
    className="bg-blue-600 dark:bg-blue-800"
    show={show("code", active)}
  >
    <ProjectImage
      className="mx-auto mt-16 w-[80%] shadow-xl shadow-blue-900/80"
      lightImage={"img/projects/three-js.png"}
    />
    <ProjectTitle>
      <div className="flex-col gap-2">
        <h2 className="text-lg font-semibold text-white">Three.js</h2>
        <span className="block text-sm text-gray-400">2024</span>
      </div>
    </ProjectTitle>
    <ProjectDescription className="bg-blue-600/60">
      <div className="flex-col gap-2">
        <h2 className="text-lg font-semibold text-white">Three.js</h2>
        <span className="block pb-6 text-sm text-gray-400">2024</span>
      </div>
      <p className="text-white">
        A financial planning tool that allows you to plan your budget and track
        your expenses.
      </p>
    </ProjectDescription>
  </ProjectContainer>
);
