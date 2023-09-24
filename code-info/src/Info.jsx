// import coder from './assets/fingercoding.jpg'
import { useState } from "react";
import { languages } from "./data";

const Info = () => {
    return ( 
        <main>
         <Lang/>
            {/* <img src={coder} alt="laptop" className='w-48 rounded-lg object-cover h-48'/> */}
        </main>
     );
}
 
export default Info;


const Lang = () => {
     const [index, setIndex] = useState(0);
    //  const [showMore, setShowMore] = useState(false);


    let lang = languages[index];
    let hasPrev = index > 0;
    let hasNext = index < languages.length - 1;

    function handlePrevClick() {
        if (hasPrev) {
        setIndex(index - 1);
        }
    }

  function handleNextClick() {
    if (hasNext) {
      setIndex(index + 1);
    }
  }


    return ( 
        <>
        <article className="p-2 flex justify-evenly"> 
            <div>
                <img src={lang.img} alt="" className="w-36 rounded-md"/>
            </div>

            <div className="w-4/5 px-5">
                <h1 className="text-xl">{lang.language}</h1>
                <h3>Used in {lang.use}</h3>
                <p>{lang.description}</p>
             
            
            </div>
              
        </article>

            <div className="flex justify-evenly">
            <button
                className='bg-white p-1 text-blue-950 rounded-lg m-3' 
            onClick={handlePrevClick}
            disabled={!hasPrev}
            >
            Previous</button>

            <button
                className='bg-white p-1 text-blue-950 rounded-lg m-3' 
                onClick={handleNextClick}
                disabled={!hasNext}
            >Next</button>   
            </div>
            </>       
     );
};
 
// const Button = ({onclick, disabled, text}) => {
//     return ( 
//         <button
//         className='bg-white p-2 text-blue-950 rounded-lg m-1'
//          onClick={onclick}
//          disabled={disabled}
//         >
//          {text}
//         </button>
//      );
// }
 