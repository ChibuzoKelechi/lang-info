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

// const libraries = lang.frameworks;

    return ( 
        <>
        <article className="p-2 flex justify-evenly transition-all"> 
            <div>
                <img src={lang.img} alt="" className="my-4 w-36 rounded-md"/>
            </div>

            <div className="w-4/5 px-5">
                <h1 className="text-3xl font-extrabold py-1">{lang.language}</h1>
                <h3 className="font-bold py-2 text-indigo-100">Used in {lang.use}</h3>
                <p>{lang.description}</p>
             
            
            </div>
              
        </article>
        <div className="flex justify-between p-2">
            <h2 className="font-bold">Popular libraries/frameworks</h2>
            <ul className="flex justify-evenly w-2/4 flex-nowrap">
                {lang.frameworks.map((library, index) => (
                    <li key={index} className="transition-all duration-75 text-indigo-100 text-lg  border-b border-b-indigo-200 hover:text-sky-200">{library}</li>
                ))}
            </ul>
        </div>
            <div className="flex justify-evenly m-3">
            <button
                className='bg-blue-50 p-1 text-blue-950 rounded-lg m-3' 
            onClick={handlePrevClick}
            disabled={!hasPrev}
            >
            Previous</button>

            <button
                className='bg-blue-50 p-1 text-blue-950 rounded-lg m-3' 
                onClick={handleNextClick}
                disabled={!hasNext}
            >Next</button>   
            </div>
            </>       
     );
};