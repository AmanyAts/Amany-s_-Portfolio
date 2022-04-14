import React from 'react'
import "./product.css";
// import a from "../../../img/tic-tac-toe.PNG"
const Product = (img,link) => {
    console.log("AAAAs")
    console.log(img.link)
    // var imageName = require(img.img)
    return (
        <div className="p">
            <div className="p-browser">
                
                <div className="p-circle"></div>
                <div className="p-circle"></div>
                <div className="p-circle"></div>
                <p> &nbsp;		</p>
                <h6>{img.name}</h6>
            </div>
           
            <a href={img.link} target="_blank" rel="noreferrer">
                <img src={img.img} alt="" className="p-img"/>
                
                
            </a>
            
           
        </div>
        
       
    )
    //https://amanyats.github.io/Tic-Tac-Toe-project/
}

export default Product
