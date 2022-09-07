import React, { createContext , useState } from 'react'

export const dummy = createContext()

const Datacontext = (props) => {
    const[flagmodal, setFlagmodal]=useState(false)
    const[flagmodal1, setFlagmodal1]=useState(false)
    const[flagmodal2, setFlagmodal2]=useState(false)
    const[flagdrawer, setFlagdrawer]=useState(false)
    const[loginflag,setLoginFlag]=useState(false)
    const[loggedusername,setLoggedusername]=useState()
    const[searchinput,setSearchinput]=useState('')
    const[snackflag,setSnackflag]=useState(false)
    const[post,setPost]=useState()
    const[procategory,setProcategory]=useState()
    const[flagproductcategory,setFlagproductcategory]=useState(false)
    const[cart,setCart]=useState([])
    const[cartid,setCartid]=useState([])
    const[totalamount,setTotalamount]=useState(0)
    const[userregistration,setUserregistration]=useState([
    { id: 1, email: "john@mail.com", password: "changeme", name: "Jhon", role: "customer", avatar: "https://api.lorem.space/image/face?w=640&h=480&r=8704" }, 
    { id: 2, email: "maria@mail.com", password: "12345", name: "Maria", role: "customer", avatar: "https://api.lorem.space/image/face?w=640&h=480&r=6301" }, 
    { id: 3, email: "admin@mail.com", password: "admin123", name: "Admin", role: "admin", avatar: "https://api.lorem.space/image/face?w=640&h=480&r=8888" }, 
    { id: 4, name: "Jawoad", password: "19a10A14", email: "jawadhossain35-261@diu.edu.bd", avatar: "https://png.pngtree.com/png-vector/20190411/ourmid/pngtree-business-male-icon-vector-png-image_916468.jpg",  role: "customer" }, 
    { id: 5, name: "Jawoad", password: "19a10A14", email: "jawadhossain35-261@diu.edu.bd", avatar: "https://png.pngtree.com/png-vector/20190411/ourmid/pngtree-business-male-icon-vector-png-image_916468.jpg",  role: "customer" },
    { id: 6, name: "Jawoad", password: "19a10A14", email: "jawadhossain35-261@diu.edu.bd", avatar: "https://png.pngtree.com/png-vector/20190411/ourmid/pngtree-business-male-icon-vector-png-image_916468.jpg",  role: "customer" },
    { id: 7, name: "Jawoad", password: "19a10A14", email: "jawadhossain35-261@diu.edu.bd", avatar: "https://png.pngtree.com/png-vector/20190411/ourmid/pngtree-business-male-icon-vector-png-image_916468.jpg",  role: "customer" }, 
    { id: 8, name: "Jawoad", password: "19a10A14", email: "jawadhossain35-261@diu.edu.bd", avatar: "https://png.pngtree.com/png-vector/20190411/ourmid/pngtree-business-male-icon-vector-png-image_916468.jpg",  role: "customer" },
      
    ]);
    const[userlogin,setUserlogin]=useState({
      email:"",
      password:""
    });
    // const[flagforloginsignupmodal, setFlagforloginsignupmodal]=useState()
  return (
  <>
  <dummy.Provider value={{flagmodal, setFlagmodal,searchinput,setSearchinput,flagmodal2, setFlagmodal2,loggedusername,setLoggedusername,snackflag,setSnackflag,totalamount,setTotalamount,cart,setCart,cartid,setCartid,post,setPost,procategory,setProcategory ,flagproductcategory,setFlagproductcategory, flagmodal1 ,setFlagmodal1 ,flagdrawer, setFlagdrawer,userregistration,setUserregistration ,userlogin,setUserlogin,loginflag,setLoginFlag}}>
{props.children}
  </dummy.Provider>
  </>
  )
}
export default Datacontext;
