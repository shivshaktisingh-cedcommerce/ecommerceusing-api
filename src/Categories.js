import React from 'react'
import {useState ,useEffect , useContext} from 'react'
import {categories} from "./Data"
import "./Categories.css"
import {dummy} from "./Datacontext"

export default function Categories() {
    const user = useContext(dummy)


    const category_fun=(d)=>{  
       user.setFlagproductcategory(true)
        user.setProcategory(d)
           
    }
  return (
    <div id="categories_main_div_id">
        {categories.map((d)=>{
            return (
                <div id="category_main_repetitive_div_id" onClick={()=>category_fun(d.name)}>
                    <img src ={d.image} alt="" id="category_image_id"/>
                    <h3 id="category_name_h3_id">{d.name}</h3>
                    <h5 id="category_h5_id">{d.name}</h5>

                </div>
            )
        })}
    </div>
  )
}
