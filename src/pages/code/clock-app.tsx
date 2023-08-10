import type { Task } from ".";
import { useEffect, useState, useTransition } from "react";
import format from "date-fns/format";
import { formatInTimeZone } from "date-fns-tz";
import ChevronDown from "../../components/icons/chevron-down";
import RefreshCCW from "../../components/icons/refresh-ccw";
import Head from "next/head";

type GeoInformation = {
  ip: string;
  continent_code: string;
  continent_name: string;
  country_code2: string;
  country_code3: string;
  country_name: string;
  country_capital: string;
  state_prov?: string;
  state_code: string;
  district?: string;
  city?: string;
  zipcode?: string;
  lititde: number;
  longitude: number;
  is_eu: boolean;
  calling_code: string;
  country_ltd: string;
  languages: string;
  contry_flag: string;
  geoname_id: number;
  isp: string;
  connection_type?: string;
  organisation?: string;
  asn?: string;
  currency: {
    code: string;
    name: string;
    symbol: string;
  };
  time_zone: {
    name: string;
    offset: number;
    current_time: string;
    current_time_unix: number;
    ist_dst: boolean;
    dst_saving: number;
  };
};

type Quote = {
  _id: string;
  content: string;
  author: string;
  tags: string[];
  authorSlug: string;
  length: number;
  dateAdded: string;
};

type Detailprops = {
  time_zone: string;
};

const Details = (props: Detailprops): React.JSX.Element => (
  <div className="bg-white py-8 duration-300 dark:bg-slate-800 block h-full">
    <div className="mx-8 md:mx-20 grid md:grid-cols-2">
      <div className="my-4 grid flex-row items-baseline justify-between md:flex-col">
        <span className="text-xs font-semibold uppercase tracking-widest text-slate-600">
          Current Timezone
        </span>
        <span className="text-xl font-bold text-slate-900 md:pt-4 md:text-3xl">
          {props.time_zone}
        </span>
      </div>
      <div className="my-4 flex flex-row items-baseline justify-between md:flex-col">
        <span className="text-xs font-semibold uppercase tracking-widest text-slate-600">
          Day of the Year
        </span>
        <span className="text-xl font-bold text-slate-900 md:pt-4 md:text-3xl">
          {format(new Date(Date.now()), "D", {
            useAdditionalDayOfYearTokens: true,
          })}
        </span>
      </div>
      <div className="my-4 flex flex-row items-baseline justify-between md:flex-col">
        <span className="text-xs font-semibold uppercase tracking-widest text-slate-600">
          Day of the week
        </span>
        <span className="text-xl font-bold text-slate-900 md:pt-4 md:text-3xl">
          {format(new Date(Date.now()), "i")}
        </span>
      </div>
      <div className="my-4 flex flex-row items-baseline justify-between md:flex-col">
        <span className="text-xs font-semibold uppercase tracking-widest text-slate-600">
          Week number
        </span>
        <span className="text-xl font-bold text-slate-900 md:pt-4 md:text-3xl">
          {format(new Date(Date.now()), "I")}
        </span>
      </div>
    </div>
  </div>
);

function QuoteBlock(): React.JSX.Element {
  const [quote, setQuote] = useState<Quote | null>();
  const [loading, setLoading] = useState(true);

  const loadQuote = () => {
    setLoading(true);
    fetch("https://api.quotable.io/random/")
      .then((response) => response.json())
      .then((data: Quote) => setQuote(data))
      .finally(() => setLoading(false));
  };

  useEffect(() => loadQuote(), []);

  const QuoteSkeleton = (
    <>
      <div className="mb-4 h-3 w-48 animate-pulse rounded bg-slate-300"></div>
      <div className="mb-6 h-3 w-32 animate-pulse rounded bg-slate-300"></div>
      <div className="h-4 w-16 animate-pulse rounded bg-slate-300"></div>
    </>
  );

  const QuoteContent = (
    <>
      <div>
        <p className="text-lg leading-8 text-slate-200">
        `&quot;`{quote && quote?.content}`&quot;`
        </p>
        <span className="block pt-4 font-bold text-slate-200">
          {quote && quote?.author}
        </span>
      </div>

      <button
        className="m-2 rotate-0 self-start text-slate-200 duration-300 hover:rotate-180"
        aria-label="Load new Quote"
        onClick={() => loadQuote()}
      >
        <RefreshCCW width={32} height={32} />
      </button>
    </>
  );

  return <div className="flex flex-row lg:max-w-7xl pt-10 lg:pt-20"> {loading ? QuoteSkeleton : QuoteContent}</div>;
}

export default function ClockAppView(): React.JSX.Element {
  const [time, setTime] = useState<Date | null>(null);
  const [geo, setGeo] = useState<GeoInformation>();
  const [details, setDetails] = useState(false);
  const [night, setNight] = useState(false);

  useEffect(() => {
    fetch(
      `https://api.ipgeolocation.io/ipgeo?apiKey=${process.env.NEXT_PUBLIC_IPGEOLOCATION_API_KEY}`
    )
      .then((res) => res.json())
      .then((data: GeoInformation) => {
        setGeo(data);
      });
  }, []);

  useEffect(() => {
    setTime(new Date());
    setInterval(() => setTime(new Date()), 60000);
  }, []);

  useEffect(() => {
    if (
      (time !== null && parseInt(format(time, "HH")) >= 18) ||
      (time !== null && parseInt(format(time, "HH")) <= 6)
    ) {
      setNight(true);
    } else {
      setNight(false);
    }
  }, [time]);

  const Time = (): React.JSX.Element => {
    return (
      <div className="h-2/3 px-8 w-full lg:px-16 flex flex-col text-slate-200 md:mx-auto md:justify-end md:gap-16 md:pb-20 lg:flex-row lg:items-end lg:justify-between">
        <div>
          <span className="hidden md:block">It&apos;s currently</span>
          <span className="block text-7xl font-bold">
            {time && format(time, "H:mm")}
            <span className="ml-4 text-lg font-normal">
              {time && geo
                ? formatInTimeZone(time, geo?.time_zone.name, "zzz")
                : "not available"}
            </span>
          </span>
          <span className="block font-semibold uppercase tracking-widest md:inline">
            In {geo?.city}, {geo?.country_code2}
          </span>
        </div>
        <div className="">
          <button
            className="flex flex-row items-center gap-2 rounded-full bg-slate-200 py-2 pl-4 pr-2 text-lg font-bold uppercase tracking-widest text-slate-700 hover:bg-slate-300"
            onClick={() => {
                setDetails(!details);
              }
            }
          >
            {details ? "Less" : "More"}
            <div
              className={`text-slate-20 rounded-full bg-slate-800 p-2 text-slate-200 duration-200 ${
                details ? "-scale-y-100" : "scal1-y-100"
              }`}
            >
              <ChevronDown />
            </div>
          </button>
        </div>
      </div>
    );
  };

  return (
    <>
      <Head>
        <title>Code Challenges | Clock App</title>
        <meta
          name="description"
          content="This challenge will have you working with external APIs to set data based on a visitor's location. You'll also be using logic to set content depending on the time of day."
        />
      </Head>
      <div
        style={{
          backgroundImage: night
            ? "url('/img/code-dojo/jackson-hendry-eodA_8CTOFo-unsplash.jpg')"
            : "url('/img/code-dojo/luca-bravo-ESkw2ayO2As-unsplash.jpg')",
        }}
        className="relative flex h-screen w-screen flex-col overflow-hidden bg-cover bg-no-repeat"
      >
        <div
          className={`transition-height duration-200 px-8 lg:px-16 ${
            details ? "h-0 opacity-0" : "h-1/3 opacity-100"
          }`}
        >
          <QuoteBlock />
        </div>
          <Time />
        <div
          className={`transition-height duration-200 ${!details ? "h-0" : "h-1/3"}`}
        >
          <Details time_zone={geo?.time_zone.name || "undefined"} />
        </div>
      </div>
    </>
  );
}

export const ClockApp: Task = {
  name: "Clock App",
  difficulty: "intermediary",
  link: "clock-app",
};
