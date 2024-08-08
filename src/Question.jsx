import React from "react";


const Question = ({ question, options,handleclick ,currentanswer}) => {

  return (
    <>
      <div className="question  h-auto  w-full mt-[4%] p-2 ">
        <h1 className="text-lg capitalize border-b-[2px]">{question}</h1>
      </div>
      <div className="options w-full h-[40vh] mt-[5%] p-2">
        {options.map((option, index) => {
          return (
            <ul>
              <li
                className={currentanswer===option?"selected":"notselected" }
                id="list"
                key={index}
                onClick={()=>handleclick(option)}
              >
                {option}
              </li>
            </ul>
          );
        })}
      </div>
    </>
  );
};

export default Question;
