//import React from 
export const Hello=()=>{
    return (
        <div id= "container">
            <h1>Hello World</h1>
        </div>
    )
}

export const HelloWithoutJSX =()=>{
    return React.createElement("div", {id:"conatiner"},React.createElement("div", {id:"conatiner"},"Hello world "))

}

//without jsx the code is very difficult to read