import "./Slider.css"
import { data } from "../../data/data";

const Slider = () => {
	const list =data.map((val,index)=>
		<li className="w-[12rem] h-[12rem] md:h-[18rem] md:w-[18rem] "><img src={val.image} key={index} alt=""/></li>
	)
	
    return (
       <div className="relative h-[52vh] md:h-[80vh] slider  panel w-full ">
		<div className="gallery">
	   <ul className="cards">
		{list}
	   </ul>
	 </div>
	
	 <div className="drag-proxy"></div></div>

        )};

                export default Slider;


                