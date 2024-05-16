import { useEffect, useState } from "react";
import "./assets/css/style.css";
import "./assets/css/app.css";
import "./App.css";
import { Steps } from "./Components/Steps.jsx";
import UniformList from "./Components/UniformList";
import CustomizeUniform from "./Components/CustomizeUniform.jsx";
function App() {
  const [stepIdData, SetStepIdData] = useState(1);

  function StepData(stepId) {
    SetStepIdData(stepId);
  }

  return (
    <>
      <section className="custom-uniform">
        <div className="uniform-wrapper">
          <div className="container">
            <div className="uniform-inner">
              <div className="uniform-tabs">
                <Steps gettingdata={StepData} />
                {stepIdData === 1 && <UniformList />}
                {stepIdData === 2 && <CustomizeUniform />}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default App;
