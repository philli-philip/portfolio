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
      "Design Lead – Creating the Design foundation for REO as a product, establishing an understanding for designs within among leadership, engineering and sales teams. Built additional revenue for REO through creative services for clients.",
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
      <main className="mx-auto mt-20 px-8 text-gray-800 md:container dark:text-gray-200 lg:pl-36 print:mt-8 print:max-w-full">
        <h1 className="mb-4 text-3xl font-bold md:text-4xl lg:text-5xl xl:text-6xl print:mb-2 print:text-4xl">
          Philip Mattha
        </h1>
        <p className="text-gray-600 dark:text-gray-400 print:text-xs">
          Rubensstraße 15, 12150
          <br />
          philip@mattha.net
          <br />
          +49 1590 6800728
        </p>
        <section className="print:columns-2 print:gap-24">
          {Object.keys(grouppedContent).map((sections, index) => (
            <section className="relative">
              <h2
                key={index}
                className="mb-6 mt-8 max-w-2xl text-lg text-gray-500 dark:text-gray-400 lg:absolute lg:right-full lg:mt-0 lg:pr-6 print:absolute print:mt-0 print:mb-1 print:block print:w-[100px] print:translate-y-[50px] print:-translate-x-[70px] print:-rotate-90 print:text-right print:text-sm"
              >
                {sections}
              </h2>
              <ul className="max-w-2xl lg:mt-12 print:mt-12">
                {grouppedContent[sections].map((item: Entry, index: number) => (
                  <li
                    key={index}
                    className="mb-6 print:mb-4 print:break-inside-avoid"
                  >
                    <h3 className="mr-4 inline-block text-lg font-medium text-gray-800 dark:text-gray-200 print:mr-2 print:text-sm">
                      {item.title}
                    </h3>
                    <span className="text-lg text-gray-600 dark:text-gray-400 print:text-sm">
                      {item.timeStart}

                      {item.timeEnd && <span> – {item.timeEnd}</span>}
                    </span>
                    <p className="text-gray-600 dark:text-gray-400 print:text-xs">
                      {item.description}
                    </p>
                  </li>
                ))}
              </ul>
            </section>
          ))}
        </section>
      </main>
      <Footer className="print:hidden" />
    </>
  );
};

export default About;
