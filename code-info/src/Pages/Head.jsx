import { Link } from "react-router-dom";
const Intro = () => {
    return ( 
        <header className="text-center font-bold text-xl max-h-full text-white">
            <div className="py-3">
              <h3 className="text-blue-100">CodeInfo</h3>
            </div>

            <div className="py-3">
             <h2 className="text-2xl font-bold text-blue-600">Welcome!</h2>
             <p className="my-2 text-sm">
                This website will guide you through the plethora of existing programming languages, their applications, learning resources, and also fun facts about them.
             </p>
            </div>

            <div>
              <Link to="/about" className="hover:bg-blue-600 text-blue-200 p-2 rounded-xl my-2">Learn more...</Link>
            </div>

            <div>
               <Link to="/info" className="bg-blue-600 text-white p-2 rounded-xl mx-[45%]">Start</Link>
            </div>
            {/* <Link to="/info" className="text-xl cursor-pointer">Programming languages</Link> */}
        </header>
     );
}
 
export default Intro;