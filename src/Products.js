import React from 'react'
import {useState ,useEffect , useContext} from 'react'
import "./Products.css"
import Box from '@mui/material/Box';
import { Button, Drawer } from '@mui/material'
import Modal from '@mui/material/Modal';
import {dummy} from "./Datacontext"
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import StraightIcon from '@mui/icons-material/Straight';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import TextField from '@mui/material/TextField';
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import Snackbar from '@mui/material/Snackbar';
import ImageIcon from '@mui/icons-material/Image';
import TitleIcon from '@mui/icons-material/Title';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';





const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width:400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  }
  const style1 = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width:300,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  }


export default function Products(props) {
    const[flagmodal,setFlagmodal]=useState(false)
    const[modaldata,setModaldata]=useState([])
    const user = useContext(dummy)

    const open_modal_fun=(d)=>{
       setModaldata([d])
       setFlagmodal(true) 
    }

    
    const add_to_cart_fun=(d)=>{
    
        if(user.cartid.indexOf(d.id)===-1){
            d.quantity = 1;
            user.setCart([...user.cart,d])
            user.setCartid([...user.cartid,d.id])

        }
         console.log(user.cart)
    }
 
 
    useEffect(()=>{
        fetch('https://api.escuelajs.co/api/v1/products')
        .then(res=>res.json())
        .then(json=>{user.setPost(json)})
      

    },[])

    const checkout_fun=()=>{
        if(user.loginflag===true){
            user.setFlagmodal2(true)
        }
        if(user.loginflag===false){
            user.setFlagmodal1(true)
        }
        user.setFlagdrawer(false)

    }

    const login_div_fun=()=>{
        document.getElementById("login_div_id").style.display="block";
        document.getElementById("register_div_id").style.display="none";

    }

    const register_div_fun=()=>{
        document.getElementById("login_div_id").style.display="none";
        document.getElementById("register_div_id").style.display="block";
        
    }

    const confirm_fun=()=>{
        document.getElementById("order_details_div_id").style.display="none";
        document.getElementById("thanks_div_id").style.display="block";
    }

    const register_fun=(event)=>{
        event.preventDefault();
        var name = event.target.name.value;
        var email = event.target.email.value;
        var password = event.target.password.value;
    
         if(password.length<6){
            user.setRegistermessage("Password length should be greater than 6")
            return;
         }
         else{ 
            user.setRegistermessage("")
            user.setUserregistration([...user.userregistration,{id:Math.random() , name:name , email:email , password:password , role:"customer", avatar:"https://png.pngtree.com/png-vector/20190411/ourmid/pngtree-business-male-icon-vector-png-image_916468.jpg"}])
            document.getElementById("login_div_id").style.display="block";
            document.getElementById("register_div_id").style.display="none";
         }
    }

    const login_fun=(event)=>{
        event.preventDefault()
        var loginemail = event.target.loginemail.value;
        var loginpassword = event.target.loginpassword.value;
        user.userregistration.map((d)=>{
            if(d.email===loginemail && d.password===loginpassword){
                user.setLoggedusername(d.name)
                user.setLoginFlag(true)
                user.setFlagmodal1(false)
                user.setSnackflag(true)
            }
        })
        

    }
    const topfun=()=>{
        document.body.scrollTop=350;
        document.documentElement.scrollTop=350;
  
      }
   
  return (
    <>
    <button id="top_move_btn_id" onClick={topfun}><StraightIcon/></button>
    {user.searchinput===''?<div id="product_page_main_div_id">
        {user.flagproductcategory===false?user.post===undefined ?"": user.post.map((d)=>{  
            if(d.price<50 && d.price!==10){
            
                return(
                    <div id="repetitive_product_div_id" >
                        <img src={d.images[0]} alt="" id="product_image_id" onClick={()=>open_modal_fun(d)}/>
                        <p id="title_p_id" >{d.title}</p>
                        <p id="title_p_id">${d.price}</p>
                        <p id="add_to_cart_button_p_id"><button id="add_to_cart_btn_id" onClick={()=>add_to_cart_fun(d)}>Add to cart</button></p>
                    </div>
                )

            }
            
        }):user.post.map((d)=>{ 
            if(d.category.name===user.procategory){ 
   
            
                return(
                    <div id="repetitive_product_div_id" >
                        <img src={d.images[0]} alt="" id="product_image_id" onClick={()=>open_modal_fun(d)}/>
                        <p id="title_p_id" >{d.title}</p>
                        <p id="title_p_id">${d.price}</p>
                        <p id="add_to_cart_button_p_id"><button id="add_to_cart_btn_id" onClick={()=>add_to_cart_fun(d)}>Add to cart</button></p>
                    </div>
                )

            }

            
            
        })} 
       
    </div>:<div id="product_page_main_div_id">{user.post.map((d)=>{ 
            if(d.title.toLowerCase().includes(user.searchinput.toLowerCase())){ 
                return(
                    <div id="repetitive_product_div_id" >
                        <img src={d.images[0]} alt="" id="product_image_id" onClick={()=>open_modal_fun(d)}/>
                        <p id="title_p_id" >{d.title}</p>
                        <p id="title_p_id">${d.price}</p>
                        <p id="add_to_cart_button_p_id"><button id="add_to_cart_btn_id" onClick={()=>add_to_cart_fun(d)}>Add to cart</button></p>
                    </div>
                )
            }     
        })}</div>} 
            
    <Modal
        open={flagmodal}
        onClose={()=>setFlagmodal(false)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
         
            <div>
            {modaldata.length===0?"":
            <Carousel width={"100%"} showThumbs={false}  id="carousel_div_id">
                <div className="img_class">
                    <img src={modaldata[0].images[0]} alt=""/> 
                   
                </div>
                <div className="img_class">
                    <img src={modaldata[0].images[1]} alt=""/>
                   
                </div>
                <div className="img_class">
                    <img src={modaldata[0].images[2]} alt=""/>
                 
                </div>
            </Carousel>}
            </div>
           
          <p className="p_modal_content"> {modaldata.length===0?"":"PRODUCT CATEGORY : "+modaldata[0].category.name}</p>
          <p className="p_modal_content"> {modaldata.length===0?"":"PRODUCT NAME : "+modaldata[0].title}</p>
          <p className="p_modal_content"> {modaldata.length===0?"":"PRODUCT DESCRIPTION : "+modaldata[0].description}</p>
          <p className="p_modal_content">  {modaldata.length===0?"":"PRODUCT PRICE : "+modaldata[0].price}</p>
          
        </Box>
      </Modal>
      <Drawer
         open={user.flagdrawer}
         anchor='right'
         onClose = {()=>user.setFlagdrawer(false)}
        >
            <Button variant='contained' onClick={()=>user.setFlagdrawer(false)} id="close_drawer_btn_id" className="animate__animated animate__jackInTheBox">x</Button>
           <div id="cart_products" className="animate__animated animate__backInRight ">   
           {user.cart.length===0?<div id="gif_div_id"><img src ="https://hakimitr.com/assets/website/images/empty-cart.gif" id="gif_id" alt="" /></div>:""}
           {user.cart.length===0?<p id="empty_cart_message">Your cart is empty</p>:""}
           {user.cart.length!==0?<p id="tagline_p_your_cart_items">Your cart Items</p>:""}
           {user.cart.map((d  , i)=>{
              return (<>
                   <div id="repetitive_cart_div">
                    <div id="cart_image_div_id"><img src={d.images[0]} alt="" id="cart_image_id"/></div>
                    <div id="cart_div_content_id">
                        <p>{d.title}</p>
                        <p id="p_id_change_quantity"><span id="increase_quant_icon_id" title="Increase Quantity"><StraightIcon onClick={()=>props.increasequantfun(d)}/></span><span id="current_quantity_id">{d.quantity}</span><span id="decrease_quant_icon_id" title="decrease Quantity" onClick={()=>props.decreasequantfun(d , i)}><StraightIcon style={{rotate:"180deg"}} /></span><span id="decrease_quant_icon_id" title="delete" onClick={()=>props.delete_fun(i)}><DeleteOutlineIcon /></span></p>
                        <p id="price_p_id">$ {d.quantity * d.price}</p>
                    </div>
                   </div>
                   </>
                 
                  ) 
           })}
          {user.cart.length>0? <p id="total_amount">Total Amount ${user.totalamount}</p>:""} 
           {user.cart.length>0?<p id="p_amt"><button id="checkout_btn" onClick={checkout_fun}>Checkout</button></p>:""}
          </div> 
        </Drawer >
        <Modal
        open={user.flagmodal1}
        onClose={()=>user.setFlagmodal1(false)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        >
        <Box sx={style1} style={{backgroundColor:"#BABDB6"}}>
            <div id="register_div_id">
                <p ><span title="click to login" onClick={login_div_fun}><KeyboardBackspaceIcon id="arrow_left_id"/></span></p>
                <p id="heading_p_id">Create Account</p>
                <h6 style={{color:"red"}}>{user.registermessage}</h6>
                <form onSubmit={register_fun}>
                <p><TextField id="outlined-basic" label="Name" variant="outlined" name="name" required/></p>
                <p><TextField id="outlined-basic" label="Email" variant="outlined" name="email" type="email" required/></p>
                <p><TextField id="outlined-basic" label="Password" variant="outlined" name="password" type="password" required/></p>
                <p><button type="submit" className="login_register_btn_class">Register</button></p>
                </form>
            </div>
            <div id="login_div_id">
            <p><span title="click to register" onClick={register_div_fun}><KeyboardBackspaceIcon id="arrow_left_id"/></span></p>
                <p id="heading_p_id">Login Here</p>
                <form onSubmit={login_fun}>
                <p><TextField id="outlined-basic" label="Email" variant="outlined" type="email" name="loginemail" required/></p>
                <p><TextField id="outlined-basic" label="Password" variant="outlined" type="password" name="loginpassword" required/></p>
                <p><button className="login_register_btn_class" type="submit">Login</button></p>
                </form>
            </div>
        </Box>
      </Modal>
      <Snackbar
        open={user.snackflag}
        autoHideDuration={6000}
        onClose={()=>user.setSnackflag(false)}
        message= {"Welcome "+user.loggedusername}
      />

      <Modal
        open={user.flagmodal2}
        onClose={()=>user.setFlagmodal2(false)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        >
        <Box sx={style1} style={{backgroundColor:"#BABDB6"}}>
            <div id="order_details_div_id">
                <p id="order_details_heading_p_id">Order Details</p>
                <table>
                    <tr><td><ImageIcon/></td><td><TitleIcon/></td><td>Quantity</td><td><AttachMoneyIcon/></td></tr>
                    {user.cart.map((d)=>{
                        return(
                          <tr><td><img src={d.images[0]} alt="" id="order_page_image_id"/></td><td>{d.title}</td><td>{d.quantity}</td><td>${d.quantity* d.price}</td></tr>
                        )
                    })}
                    <tr><td colSpan={2}>Total Amount</td><td colSpan={2}>${user.totalamount}</td></tr>
                </table>
                <p id="confirm_btn_p_id"><button id="confirm_btn_id" onClick={confirm_fun}>Confirm</button></p>
            </div>
            <div id="thanks_div_id">
                <img src="https://media.giphy.com/media/gEP2k49ndOqJDBSPZl/giphy.gif" alt="" id="thanks_gif_id"/>
            </div>
            
        </Box>
      </Modal>
      
    </>
  )
}
