import ResultsType from "./ResultsType";
import data from "../assets/data.json";

export default function ResultsSummaryTypes() {
  return (
    <div className="results-summary__types mx-auto max-w-80 md:grid md:max-w-180 md:grid-cols-2 md:gap-x-6 xl:block xl:flex-[1.2] xl:px-8 xl:pt-6 xl:pr-8 xl:pb-8">
      <h2 className="results-summary__sub-heading my-6 text-lg text-[var(--Dark-gray-blue)] md:col-span-2 md:text-center xl:mt-0 xl:text-start">
        Summary
      </h2>

      {data.map((item) => (
        <ResultsType
          key={item.category}
          icon={item.icon}
          label={item.category}
          score={item.score}
          colorClass={item.colorClass}
        />
      ))}

      <button className="results__continue-btn mt-2 inline-block w-full cursor-pointer rounded-[100px] border-none bg-[var(--Dark-gray-blue)] py-4 font-medium text-white hover:bg-[linear-gradient(to_bottom,var(--Light-slate-blue-background),var(--Light-royal-blue-background))] focus:bg-[linear-gradient(to_bottom,var(--Light-slate-blue-background),var(--Light-royal-blue-background))] md:col-span-2 xl:mx-0 xl:mt-6 xl:mb-3">
        Continue
      </button>
    </div>
  );
}
