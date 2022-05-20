/* This example requires Tailwind CSS v2.0+ */
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/solid";
import Gallery from "./Gallery";

const months = [
  {
    name: "May",
    days: [
      { date: "2021-12-27" },
      { date: "2021-12-28" },
      { date: "2021-12-29" },
      { date: "2021-12-30" },
      { date: "2021-12-31" },
      { date: "2022-01-01", isCurrentMonth: true },
      { date: "2022-01-02", isCurrentMonth: true },
      { date: "2022-01-03", isCurrentMonth: true },
      { date: "2022-01-04", isCurrentMonth: true },
      { date: "2022-01-05", isCurrentMonth: true },
      { date: "2022-01-06", isCurrentMonth: true },
      { date: "2022-01-07", isCurrentMonth: true },
      { date: "2022-01-08", isCurrentMonth: true },
      { date: "2022-01-09", isCurrentMonth: true },
      { date: "2022-01-10", isCurrentMonth: true },
      { date: "2022-01-11", isCurrentMonth: true },
      { date: "2022-01-12", isCurrentMonth: true },
      { date: "2022-01-13", isCurrentMonth: true },
      { date: "2022-01-14", isCurrentMonth: true },
      { date: "2022-01-15", isCurrentMonth: true },
      { date: "2022-01-16", isCurrentMonth: true },
      { date: "2022-01-17", isCurrentMonth: true },
      { date: "2022-01-18", isCurrentMonth: true },
      { date: "2022-01-19", isCurrentMonth: true },
      { date: "2022-01-20", isCurrentMonth: true },
      { date: "2022-01-21", isCurrentMonth: true },
      { date: "2022-01-22", isCurrentMonth: true },
      { date: "2022-01-23", isCurrentMonth: true },
      { date: "2022-01-24", isCurrentMonth: true },
      { date: "2022-01-25", isCurrentMonth: true },
      { date: "2022-01-26", isCurrentMonth: true },
      { date: "2022-01-27", isCurrentMonth: true },
      { date: "2022-01-28", isCurrentMonth: true },
      { date: "2022-01-29", isCurrentMonth: true },
      { date: "2022-01-30", isCurrentMonth: true },
      { date: "2022-01-31", isCurrentMonth: true },
      { date: "2022-02-01" },
      { date: "2022-02-02" },
      { date: "2022-02-03" },
      { date: "2022-02-04" },
      { date: "2022-02-05" },
      { date: "2022-02-06" },
    ],
  },
  {
    name: "June",
    days: [
      { date: "2022-01-31" },
      { date: "2022-02-01", isCurrentMonth: true },
      { date: "2022-02-02", isCurrentMonth: true },
      { date: "2022-02-03", isCurrentMonth: true },
      { date: "2022-02-04", isCurrentMonth: true },
      { date: "2022-02-05", isCurrentMonth: true },
      { date: "2022-02-06", isCurrentMonth: true },
      { date: "2022-02-07", isCurrentMonth: true },
      { date: "2022-02-08", isCurrentMonth: true },
      { date: "2022-02-09", isCurrentMonth: true },
      { date: "2022-02-10", isCurrentMonth: true },
      { date: "2022-02-11", isCurrentMonth: true },
      { date: "2022-02-12", isCurrentMonth: true, isToday: true },
      { date: "2022-02-13", isCurrentMonth: true },
      { date: "2022-02-14", isCurrentMonth: true },
      { date: "2022-02-15", isCurrentMonth: true },
      { date: "2022-02-16", isCurrentMonth: true },
      { date: "2022-02-17", isCurrentMonth: true },
      { date: "2022-02-18", isCurrentMonth: true },
      { date: "2022-02-19", isCurrentMonth: true },
      { date: "2022-02-20", isCurrentMonth: true },
      { date: "2022-02-21", isCurrentMonth: true },
      { date: "2022-02-22", isCurrentMonth: true },
      { date: "2022-02-23", isCurrentMonth: true },
      { date: "2022-02-24", isCurrentMonth: true },
      { date: "2022-02-25", isCurrentMonth: true },
      { date: "2022-02-26", isCurrentMonth: true },
      { date: "2022-02-27", isCurrentMonth: true },
      { date: "2022-02-28", isCurrentMonth: true },
      { date: "2022-03-01" },
      { date: "2022-03-02" },
      { date: "2022-03-03" },
      { date: "2022-03-04" },
      { date: "2022-03-05" },
      { date: "2022-03-06" },
      { date: "2022-03-07" },
      { date: "2022-03-08" },
      { date: "2022-03-09" },
      { date: "2022-03-10" },
      { date: "2022-03-11" },
      { date: "2022-03-12" },
      { date: "2022-03-13" },
    ],
  },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Events() {
  return (
    <>
      <div className="bg-gray-900">
        <div className="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-base font-semibold text-white tracking-wide uppercase">
              Want to see some b-bodies?
            </h2>
            <p className="mt-1 text-4xl font-extrabold text-white sm:text-5xl sm:tracking-tight lg:text-6xl">
              View Upcoming Events
            </p>
            <p className="max-w-xl mt-5 mx-auto text-xl text-gray-500">2022</p>
          </div>
        </div>
      </div>
      <div className="pt-10 pb-10 sm:pt-16 lg:pt-8 lg:pb-14 lg:overflow-hidden py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
        <div className="relative grid grid-cols-1 gap-x-14 md:grid-cols-2 mx-auto max-w-7xl lg:px-8">
          <button
            type="button"
            className="absolute -top-1 -left-1.5 flex items-center justify-center p-1.5 text-gray-400 hover:text-gray-500"
          >
            <span className="sr-only">Previous month</span>
            <ChevronLeftIcon className="h-5 w-5" aria-hidden="true" />
          </button>
          <button
            type="button"
            className="absolute -top-1 -right-1.5 flex items-center justify-center p-1.5 text-gray-400 hover:text-gray-500"
          >
            <span className="sr-only">Next month</span>
            <ChevronRightIcon className="h-5 w-5" aria-hidden="true" />
          </button>
          {months.map((month, monthIdx) => (
            <section
              key={monthIdx}
              className={classNames(
                monthIdx === months.length - 1 && "hidden md:block",
                "text-center"
              )}
            >
              <h2 className="font-semibold text-gray-900">{month.name}</h2>
              <div className="mt-6 grid grid-cols-7 text-xs leading-6 text-gray-500">
                <div>M</div>
                <div>T</div>
                <div>W</div>
                <div>T</div>
                <div>F</div>
                <div>S</div>
                <div>S</div>
              </div>
              <div className="isolate mt-2 grid grid-cols-7 gap-px rounded-lg bg-gray-200 text-sm shadow ring-1 ring-gray-200">
                {month.days.map((day, dayIdx) => (
                  <button
                    key={day.date}
                    type="button"
                    className={classNames(
                      day.isCurrentMonth
                        ? "bg-white text-gray-900"
                        : "bg-gray-50 text-gray-400",
                      dayIdx === 0 && "rounded-tl-lg",
                      dayIdx === 6 && "rounded-tr-lg",
                      dayIdx === month.days.length - 7 && "rounded-bl-lg",
                      dayIdx === month.days.length - 1 && "rounded-br-lg",
                      "relative py-1.5 hover:bg-gray-100 focus:z-10"
                    )}
                  >
                    <time
                      dateTime={day.date}
                      className={classNames(
                        day.isToday && "bg-indigo-600 font-semibold text-white",
                        "mx-auto flex h-7 w-7 items-center justify-center rounded-full"
                      )}
                    >
                      {day.date.split("-").pop().replace(/^0/, "")}
                    </time>
                  </button>
                ))}
              </div>
            </section>
          ))}
        </div>
        <section className="mt-12 mx-auto max-w-7xl lg:px-8">
          <h2 className="font-semibold text-gray-900">Upcoming events</h2>
          <ol className="mt-2 divide-y divide-gray-200 text-sm leading-6 text-gray-500">
            <li className="py-4 sm:flex">
              <time dateTime="2022-06-22" className="w-28 flex-none">
                May 14th
              </time>
              <p className="mt-2 flex-auto sm:mt-0">Season opener</p>
            </li>
            <li className="py-4 sm:flex">
              <time dateTime="2022-01-19" className="w-28 flex-none">
                June 12th
              </time>
              <p className="mt-2 flex-auto font-semibold text-gray-900 sm:mt-0">
                Sunday meet at APPLEWOOD
              </p>
              <p className="flex-none sm:ml-6">
                <time dateTime="2022-01-13T14:30">11:00 AM</time> -{" "}
                <time dateTime="2022-01-13T16:30">1 PM</time>
              </p>
            </li>
            <li className="py-4 sm:flex">
              <time dateTime="2022-01-20" className="w-28 flex-none">
                July
              </time>
              <p className="mt-2 flex-auto font-semibold text-gray-900 sm:mt-0">
                TBD
              </p>
              <p className="flex-none sm:ml-6">All day</p>
            </li>
            <li className="py-4 sm:flex">
              <time dateTime="2022-01-18" className="w-28 flex-none">
                August
              </time>
              <p className="mt-2 flex-auto font-semibold text-gray-900 sm:mt-0">
                TBD
              </p>
              <p className="flex-none sm:ml-6">
                <p className="flex-none sm:ml-6">All day</p>
              </p>
            </li>
          </ol>
        </section>
      </div>
      <Gallery />
    </>
  );
}
