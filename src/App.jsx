import React, { useState } from "react";
import Question from "./Question";
import data from "./data";

const App = () => {
  const[currentquestionindex,setcurrentquestionindex]=useState(0)
  const[currentanswer,setcurrentanswer]=useState(null)
  const[score,setscore]=useState(0)
  const changequestion=()=>{
    setcurrentquestionindex(currentquestionindex+1)
    setcurrentanswer(null)

  }
  const reset=()=>{
    setcurrentquestionindex(0)

  }

  const handleclick=(option)=>{
    setcurrentanswer(option)
   
   if(option===data[currentquestionindex].answer){
      setscore(score+1)
    }
    
  }
  return (
    <>
      <h1 className="text-center mt-[2%] text-3xl font-bold">Quiz App</h1>
      
      {
        currentquestionindex<data.length?
        <div className="main-cont h-auto w-[45vw] border-black border-2 ml-[28vw] mt-[5vh] rounded-xl overflow-hidden flex flex-col p-2">
        <div className="progress-container">
          <div className="progress-bar" ></div>
        </div>
        <Question question={data[currentquestionindex].ques} options={data[currentquestionindex].options} handleclick={handleclick} currentanswer={currentanswer}/>
        <button className={currentanswer===null?"btn-disabled":"btn"} onClick={changequestion} disabled={currentanswer===null}>
          Next
        </button>
      </div>:
      <div className="flex flex-col items-center">
      <h1 className="text-center text-4xl mt-[20vh] capitalize">your score is {score} our of {data.length}</h1>
        <button className="p-3 bg-black border-white border-[1px] w-[10%] mt-[10%] text-white  capitalize rounded-xl " onClick={reset}>reset</button>
      </div>
      }
     
    </>
  );
};

export default App;
