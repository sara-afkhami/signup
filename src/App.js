import React, { useState } from "react";
import './App.css'

function App() {
  const [stepNumber, setStepNumber] = useState(1);

  const nextStageHandler = () => {
    if(stepNumber<3){
      setStepNumber((prev) => prev + 1);
    }
  };

  const previousStageHandler = () =>{
    if(stepNumber>1){
      setStepNumber((prev) => prev - 1);
    }
  }

  const formBodyCreator = (stage) => {
    if (stage === 1) {
      return <input name="userName" placeholder="userName" />;
    } else if (stage === 2) {
      return <input name="password" placeholder="password" />;
    } else {
      return <span>tamam shod</span>;
    }
  };

  return (
    <div className="login--background">
      <div className="login--form">
      <h1 className="font-Snaap text-purple-default">آکادمی نقطه</h1>
            <h3>لطفا اطلاعات خود را وارد کنید</h3>
        <form>{formBodyCreator(stepNumber)}</form>
        {/* <div className="buttons"> */}
        <button className="btn1" type="button" onClick={() => nextStageHandler()}>
          مرحله بعد
        </button>
        <button type="button" onClick={() => previousStageHandler()}>
          مرحله قبل
        </button>
        {/* </div> */}
      </div>
    </div>
  );
}

export default App;