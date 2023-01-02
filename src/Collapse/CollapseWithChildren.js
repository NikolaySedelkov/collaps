import { useState } from "react";

var count=0;
function CollapseWithChildren(props){
    const [checkbox, setCheckbox] = useState(true);
    const handleClick = () => {
        setCheckbox(!checkbox)
    }
    return (
        <div className="conteiner__collapse">
            <div className="title-collapse">
                <input 
                    className="checkbox-collapse"  
                    type="checkbox" 
                    value={checkbox} 
                    onClick={handleClick}
                    id={`collapse-${++count}`}/>

                <label 
                    className="checkbox-title-collapse"  
                    htmlFor={`collapse-${count}`}>
                        {props.title}
                </label>
            </div>
            <div className={!checkbox?"visible-box-collapse":"hidden-box-collapse"}>
                {props.children}
            </div>
        </div>
    )
}
export default CollapseWithChildren;