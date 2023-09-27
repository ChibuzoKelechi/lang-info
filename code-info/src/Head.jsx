import { Link } from "react-router-dom";
const intro = ({time}) => {
    return ( 
        <header className="text-center font-bold text-xl max-h-full bg-black text-white">
            <div className="py-3">
              <h1>{time}</h1>
              <h3 className="text-blue-100">CodeInfo</h3>
            </div>

            <div className="py-3">
             <h2 className="text-2xl font-bold text-blue-600">Welcome!</h2>
             <p className="my-2 text-sm">
                This website will guide you through the plethora of existing programming languages, their applications, learning resources, and also fun facts about them.
             </p>
            </div>
            <Link to="/info">Programming languages</Link>
        </header>
     );
}
 
export default Intro;