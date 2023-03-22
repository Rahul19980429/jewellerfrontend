import React ,{ useState }from 'react'
import context from './Context';
const host = 'http://localhost:3002/'

const States = (props) => {
    // useState for error
    const [error, setError] = useState('')
    // useState for get result at the time of search by user
    const [searchCustomer, setSearchCustomer] = useState([])
    // useState for all spam customer view by perticular user
    const [spamCustomer, setSpamCustomer] = useState([])
    // useState for all jewellers used by SuperAdmin
    const [jeweller, setJeweller] = useState([])
     // useState for all orders 
     const [order, setOrder] = useState([])
  
    // this is the api for checkout customer is spammed or not 
    const getSearch = async(verify)=>{
        const response = await fetch(`${host}api/customer/searchCustomer`, {
          method: 'POST', 
          mode: 'cors', 
          headers: {
            'Content-Type': 'application/json',
            'auth-token':localStorage.getItem('J_token')
          },
            body: JSON.stringify({verify}) 
        });
        let data = await response.json(); 
        if(data.success){
        setSearchCustomer(data.completeData);
        }
        else{
            setError(data)
        }
      }

      const addNewSpamCustomer = async(name,address,contact,adhar,balance)=>{
        const response = await fetch(`${host}api/customer/createCustomer`, {
          method: 'POST', 
          mode: 'cors', 
          headers: {
            'Content-Type': 'application/json',
            'auth-token':localStorage.getItem('J_token')
          },
            body: JSON.stringify({name,address,contact,adhar,balance}) 
        });
        let data = await response.json(); 
        if(data.success){
           setError(data.msg)
        }
        else{
            setError(data)
        }
      }

      // get all spam customers of perticular user
      const getAll = async()=>{
        const response = await fetch(`${host}api/customer/getCustomer`, {
          method: 'GET', 
          mode: 'cors', 
          headers: {
            'Content-Type': 'application/json',
            'auth-token':localStorage.getItem('J_token')
          },
             
        });
        let data = await response.json(); 
        if(data.success){
         setSpamCustomer(data.result.reverse());
        }
        else{
            setError(data)
        }
      }

      // Delete spammed customer by perticular user
      const deleteSpammedCustomer = async(_id)=>{
        const response = await fetch(`${host}api/customer/deleteCustomer/${_id}`, {
          method: 'DELETE', 
          mode: 'cors', 
          headers: {
            'Content-Type': 'application/json',
            'auth-token':localStorage.getItem('J_token')
          },
             
        });
        let data = await response.json(); 
        if(data.success){
          getAll()
        }
        else{
            setError(data)
        }
      }

       // Login api for user 
       const logInUser = async(contact,password)=>{
        const response = await fetch(`${host}api/auth/loginUser`, {
          method: 'POST', 
          mode: 'cors', 
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({contact,password}) 
        });
        let data = await response.json(); 
        return data;
      }
      
      // Create new Jeweller by super Admin api
      const createNewJeweller = async(name,firmName,contact,address,password)=>{
        const response = await fetch(`${host}api/auth/createUser`, {
          method: 'POST', 
          mode: 'cors', 
          headers: {
            'Content-Type': 'application/json',
            'auth-token':localStorage.getItem('J_token')
          },
          body: JSON.stringify({name,firmName,contact,address,password}) 
        });
        let data = await response.json(); 
        if(data.success){
          setError(data.msg)
          getAllJeweller();
        }
        else{
            setError(data)
        }
      }

      // get all jewellers by super Admin api 
      const getAllJeweller = async()=>{
        const response = await fetch(`${host}api/auth/allUser`, {
          method: 'GET', 
          mode: 'cors', 
          headers: {
            'Content-Type': 'application/json',
            'auth-token':localStorage.getItem('J_token')
          }
        });
        let data = await response.json(); 
        if(data.success){
          setJeweller(data.user.reverse());
        }
        else{
            setError(data.error)
        }
      }

    // activeStatus change by superAdmin api 
    const  editActiveStatus=async(_id,activeStatus)=>{
      const response = await fetch(`${host}api/auth/access/${_id}`, {
        method: 'PUT', 
        mode: 'cors', 
        headers: {
          'Content-Type': 'application/json',
          'auth-token':localStorage.getItem('J_token')
        },
        body: JSON.stringify({activeStatus}) 
      });
      let data = await response.json(); 
      if(data.success){
       getAllJeweller();
      }
      else{
          setError(data.error)
      }
    } 

    // this is the api for get all customer order of perticular user 
    const getOrder = async(condition)=>{
      const response = await fetch(`${host}api/order/allorder`, {
        method: 'GET', 
        mode: 'cors', 
        headers: {
          'Content-Type': 'application/json',
          'auth-token':localStorage.getItem('J_token')
        },
      });
      let data = await response.json(); 
      if(data.success){
        setOrder(data.result.reverse());
      }
      else{
          setError(data)
      }
    }

     // create customer order by user api
     const  createCustomerOrder=async(name,address,contact,metal,rate,item_description)=>{
      const response = await fetch(`${host}api/order/neworder`, {
        method: 'POST', 
        mode: 'cors', 
        headers: {
          'Content-Type': 'application/json',
          'auth-token':localStorage.getItem('J_token')
        },
        body: JSON.stringify({name,address,contact,metal,rate,item_description}) 
      });
      let data = await response.json(); 
      if(data.success){
       setError(data.msg)
       getOrder()
      }
      else{
          setError(data.error)
      }
    } 

    //EDIT order Completed api for user
    const  completeCustomerOrder=async(id,order_status)=>{
      const response = await fetch(`${host}api/order/ordercompleted/${id}`, {
        method: 'PUT', 
        mode: 'cors', 
        headers: {
          'Content-Type': 'application/json',
          'auth-token':localStorage.getItem('J_token')
        },
        body: JSON.stringify({order_status}) 
      });
      let data = await response.json(); 
      if(data.success){
       getOrder()
      }
      else{
          setError(data.error)
      }
    } 

      //Delete  Completed  order api for user
      const  deleteCompletedOrder=async(id)=>{
        const response = await fetch(`${host}api/order/deleteorder/${id}`, {
          method: 'DELETE', 
          mode: 'cors', 
          headers: {
            'Content-Type': 'application/json',
            'auth-token':localStorage.getItem('J_token')
          },
         });
        let data = await response.json(); 
        if(data.success){
         getOrder()
        }
        else{
            setError(data.error)
        }
      } 

    // Log out functionality
    const logOutClick=()=>{
      localStorage.removeItem('J_token');
      localStorage.removeItem('J_superAdmin');
      localStorage.removeItem('J_activeStatus');
      localStorage.removeItem('J_name')
      setSearchCustomer('')
  }

  return (
    <context.Provider value={{searchCustomer,error,spamCustomer ,jeweller,order,setSpamCustomer,deleteCompletedOrder,completeCustomerOrder,createCustomerOrder,getOrder,logOutClick,setJeweller,editActiveStatus,getAllJeweller, createNewJeweller,logInUser,deleteSpammedCustomer,setError,getAll,addNewSpamCustomer,setSearchCustomer, getSearch}}>
        {props.children}
    </context.Provider>
  )
}

export default States
