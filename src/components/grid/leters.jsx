import "./grid.css";


function Leters({letra,i,handleClick,clicked}) {

        
        return (
                <div
                        key={letra}
                        className="cell"
                         onClick={() => {
                                handleClick(i);
                         }}
                       style={{ backgroundColor: clicked ? "rgb(100, 2300, 136)" : "white" }}
                        >
                        {letra} 
                </div>
        );







}



export default Leters;