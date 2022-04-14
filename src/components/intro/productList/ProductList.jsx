import React from 'react'
import Product from '../product/Product'
import {products} from "../../../data"

import "./productList.css"
function ProductList() {
    return (
        <section id="projects">
            <h3>Let's inspire</h3>
            <h2>Here you can find Amany's projects</h2>
            {/* <div className="container services__container">
                <article className="service">
                    <div className="service__head">
                        <h3>UI/UX Design</h3>
                        <ul className="service__list">
                        {products.map((item)=>(
                        // console.log(item.link),
                       <Product key={item.id} img={item.img} link={item.link} name={item.name}/>
                    ))}
                        </ul>
                    </div>
                </article>
            </div> */}
            <div className="p1" >
                <div className="p1-texts">
                    {/* <h1 className="p1-title">Let's inspire</h1>
                    <p className="p1-desc">Here you can find Amany's creative portfolio,</p> */}
                </div>
                <div className="p1-list">
                    {products.map((item)=>(
                        // console.log(item.link),
                        <Product key={item.id} img={item.img} link={item.link} name={item.name}/>
                    ))}
                    
                    
                </div>
            </div>
        </section>
    )
}

export default ProductList
