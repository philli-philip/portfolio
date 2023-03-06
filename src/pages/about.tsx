import Footer from "../components/Footer";
import { groupBy } from "lodash";
import Head from "next/head";

const content = [
  {
    type: "Experience",
    title: "Deutsche Bank",
    timeStart: "2022",
    timeEnd: "",
    description: "VP Design –",
  },
  {
    type: "Experience",
    title: "REO",
    timeStart: "2020",
    timeEnd: "2022",
    description:
      "Design Lead – Creating the Design foundation for REO as a product, establishing an understanding for designs within among leadership, engineering and sales teams. Thanks to design efforts REO can offer creative services to users and creating a new significant revenue stream.",
  },
  {
    type: "Experience",
    title: "Lekka",
    timeStart: "2018",
    timeEnd: "2020",
    description:
      "Founder – Lekka is a new kind of software documentation tools with a focus on structuring a product in a machine readable structure to dynamically create different perspectives on demand.",
  },
  {
    type: "Experience",
    title: "UBS",
    timeStart: "2017",
    timeEnd: "2020",
    description:
      "Digital Art Director – Developing a global design language to unify the digtial user experiece across the global service landscape with a state of the art Design System.",
  },
  {
    type: "Experience",
    title: "N26 Bank",
    timeStart: "2015",
    timeEnd: "2017",
    description:
      "UX/UI Desginer – Developing a global design language to unify the digtial user experiece across the global service landscape with a state of the art Design System.",
  },
  {
    type: "Experience",
    title: "Sea-Sampler",
    timeStart: "2015",
    timeEnd: "2016",
    description:
      "Initiator – Building a service provider for ocean researchers by enabling a network of sailors.",
  },
  {
    type: "Experience",
    title: "DeWhiteSign",
    timeStart: "2011",
    timeEnd: "2014",
    description:
      "Partner – Agency for Developing products, technologies or strategies for companies.",
  },
  {
    type: "Experience",
    title: "BERGAFFE",
    timeStart: "2012",
    timeEnd: "2014",
    description:
      "Co-Founder – Designing the product, creating a brand strategy, organizing the webshop, coordinating production and writing business plans.",
  },
  {
    type: "Education",
    title: "University of Applied Arts Vienna",
    timeStart: "2012",
    timeEnd: "2016",
    description: "Field of study: Industrial Design – Titel: Mag. des. ind.",
  },
  {
    type: "Education",
    title: "HTBLVA Ferlach",
    timeStart: "2006",
    timeEnd: "2011",
    description:
      "Field of education: Maschineningenieurwesen – Specialisation: Industriedesign",
  },
  {
    type: "Exhibition",
    title: "The Essence",
    timeStart: "2016",
    timeEnd: "",
    description: "Plastic Waste Management and Watch Tower",
  },
  {
    type: "Exhibition",
    title: "Blickfang",
    timeStart: "2013",
    timeEnd: "",
    description: "soap bubble | with schultesWien",
  },
  {
    type: "Honors",
    title: "OutofBox Award",
    timeStart: "2014",
    timeEnd: "",
    description: "Nominated | Bergaffe | Team",
  },
  {
    type: "Honors",
    title: "Jugendinnovativ",
    timeStart: "2011",
    timeEnd: "",
    description: "Special Honor | Team",
  },
  {
    type: "Honors",
    title: "Bahnhofstraße",
    timeStart: "2011",
    timeEnd: "",
    description: "1st | Concept",
  },
  {
    type: "Honors",
    title: "MS Maria Wörth",
    timeStart: "2011",
    timeEnd: "",
    description: "1st | Concept",
  },
];

type AboutContent = {
  Dictionary: Entry[];
};

type Entry = {
  type: string;
  title: string;
  timeStart: string;
  timeEnd?: string;
  description: string;
};

const grouppedContent: any = groupBy(content, function (x) {
  return x.type;
});

const groupByCategory = content.reduce((group: any, product) => {
  const { type } = product;
  group[type] = group[type] ?? [];
  group[type].push(product);

  return group;
}, {});

const About = () => {
  return (
    <>
      <Head>
        <title>About Philip</title>
        <meta name="description" content="Philip's CV" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="mx-8 mt-20 text-gray-800 md:container dark:text-gray-200 md:mx-auto">
        <h1 className="mb-4 text-3xl font-bold">Philip Mattha</h1>
        <p className="text-md text-gray-600 dark:text-gray-400">
          Rubensstraße 15, 12150
          <br />
          philip@mattha.net
          <br />
          +49 1590 6800728
        </p>
        {Object.keys(grouppedContent).map((sections, index) => (
          <>
            <h2
              key={index}
              className="mb-6 text-lg text-gray-500 dark:text-gray-400"
            >
              {sections}
            </h2>
            <ul>
              {grouppedContent[sections].map((item: Entry, index: number) => (
                <li key={index} className="mb-6">
                  <h3 className="mr-4 inline-block text-lg font-medium text-gray-800 dark:text-gray-200">
                    {item.title}
                  </h3>
                  <span className="text-lg text-gray-600 dark:text-gray-400">
                    {item.timeStart}

                    {item.timeEnd && <span> – {item.timeEnd}</span>}
                  </span>
                  <p className="text-gray-600 dark:text-gray-400">
                    {item.description}
                  </p>
                </li>
              ))}
            </ul>
          </>
        ))}
      </main>
      <Footer />
    </>
  );
};

export default About;
