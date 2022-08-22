import { timelineData } from "data/timelineData";

import Link from "next/link";

import { FiArrowUpRight } from "react-icons/fi";

type Props = {};

const Timeline = (props: Props) => {
  return (
    <div>
      {timelineData?.map((item) => (
        <div
          key={item.title}
          className="group py-8 md:hover:bg-zinc-800/50 relative border-l-2 border-zinc-600 md:hover:border-zinc-400 pl-8 md:hover:pr-4  duration-300 easae-out"
      >
          <div className="absolute -left-[11px] h-5 w-5 border-2 bg-zinc-900 border-zinc-500 md:group-hover:border-zinc-300 rounded-full "></div>
          <div className="flex flex-col gap-2 sm:flex-row md:items-center font-sora text-base justify-between">
            <Link
              target={"_blank"}
              rel="noreferrer"
              href={item?.href ? item.href : "#"}
            >
              <a className="inline-flex flex-wrap underline  sm:no-underline  text-zinc-300 hover:text-white hover:underline underline-offset-4 duration-300 ease-out font-medium items-center">
                  {item.title}
                <span>
                  <FiArrowUpRight className="h-5 w-5 ml-1 hidden sm:block" />
                </span>
              </a>
            </Link>
            <p className="col-span-1 text-sm">
              {item.from} {item.to && `— ${item.to}`}
            </p>
          </div>
          <div className="flex mb-1.5 flex-wrap gap-2">
            {item?.tags.map((item, index) => (
              <p
                key={item}
                className=" bg-zinc-800 max-w-fit px-2 mt-2 text-sm rounded py-0.5 text-zinc-400 group-hover:bg-zinc-700/50 group-hover:text-zinc-300"
              >
                {item}
              </p>
            ))}
          </div>
          <p className="mb-2">{item.description}</p>
          {item.additionalInfo && (
            <ul className="list-disc pl-4 list-inside space-y-2">
              {item.additionalInfo.map((info, i) => (
                <li key={i}>{info}</li>
              ))}
            </ul>
          )}
        </div>
      ))}
    </div>
  );
};

export default Timeline;
