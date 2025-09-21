export default function ResultsSummaryIntro() {
  return (
    <div className="results-summary__intro grid justify-items-center rounded-br-[2rem] rounded-bl-[2rem] bg-[linear-gradient(to_bottom,var(--Light-slate-blue-background),var(--Light-royal-blue-background))] px-12 pt-6 pb-8 text-center xl:flex-1 xl:items-center xl:rounded-[2rem]">
      <p className="results-summary__main-heading m-0 font-semibold text-[var(--Light-lavender)] xl:self-start">
        Your Result
      </p>

      <p className="results__circle flex aspect-square flex-col justify-center rounded-[50%] bg-[linear-gradient(to_bottom,var(--Violet-blue-circle),var(--Persia-blue-circle))] xl:m-0">
        <span className="results__score font-extrabold text-white">76</span>
        <span className="results__outof mt-0 text-base font-medium text-[var(--Light-lavender)] opacity-50">
          of 100
        </span>
      </p>

      <h2 className="results__description text-white xl:m-0 xl:self-end">
        Great
      </h2>
      <p className="results__full-details text-base font-medium text-[var(--Light-lavender)] xl:m-0">
        You scored higher than 65% of the people who have taken these tests.
      </p>
    </div>
  );
}
