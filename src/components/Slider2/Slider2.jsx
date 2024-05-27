import "./Slider2.css"
import { data2 } from "../../data/data";

const Slider2 = () => {

	const list2 =data2.map((val,index)=>
		<li className="w-[12rem] h-[12rem] md:h-[18rem] md:w-[18rem]"><img src={val.image} key={index} alt=""/></li>
	)
    return (
       <div className="relative slider2  panel w-full  h-[52vh] md:h-[80vh] ">

	 <div className="gallery2">
	   <ul className="cards">
		
		{list2}
		
	
	
	   </ul>
	 
	 </div>
	 <div className="drag-proxy2"></div></div>

        )};

                export default Slider2;


                