export default function ResultsType({ icon, label, score, colorClass }) {
  return (
    <div
      className={`results__types mb-4 flex items-center justify-between rounded-[9px] p-4 ${colorClass}`}
    >
      <div className="results-container__type flex gap-3">
        <img src={icon} alt="" className="results-type__icons" />
        <p className="results__type-text m-0">{label}</p>
      </div>
      <div className="result-score__container">
        <p className="results-summary__score m-0 font-medium text-[var(--Dark-gray-blue)]">
          <span className="">{score}</span>
          <span className="opacity-50"> / 100</span>
        </p>
      </div>
    </div>
  );
}
