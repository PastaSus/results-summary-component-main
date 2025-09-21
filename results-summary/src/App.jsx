import { useState } from "react";

import ResultsSummaryIntro from "./components/ResultsSummaryIntro";
import ResultsSummaryTypes from "./components/ResultsSummaryTypes";

function App() {
  return (
    <main>
      <section className="results-summary__component xl:flex xl:max-w-170 xl:justify-center xl:rounded-[2rem] xl:bg-white xl:shadow-[20px_20px_40px_rgba(0_0_0_/_0.1)]">
        <ResultsSummaryIntro></ResultsSummaryIntro>
        <ResultsSummaryTypes></ResultsSummaryTypes>
      </section>
    </main>
  );
}

export default App;
