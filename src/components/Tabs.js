import React, {useState} from "react";


const Tabs =({tabs}) => {
    // let [tabClicked, setTabClicked] = useState("")

    function handleClick(content) {
        setTabClicked(content)
    }

    return(
        <div>
         <ul>
        {
            tabs.map((value) =>
                 <li onClick ={()=>handleClick(value.content)}>(value.tittle)</li>    
            )
        }
         </ul>
        {
            // setTabClicked && <p>This is content for Tab2 {tabClicked}</p>
            tabClicked && <p>This is the content for {tabClicked}</p>
      }
        </div>
    )
} 


export default Tabs;