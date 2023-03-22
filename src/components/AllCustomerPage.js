import React, { useEffect, useContext,useState } from 'react'
import context from '../context/Context'
import { useNavigate } from 'react-router-dom';

const AllCustomerPage = () => {
   // useState for search 
   const [search, setSearch] = useState('')
  let navigate = useNavigate();
  const a = useContext(context);
  const { getAll, error, spamCustomer, setSpamCustomer, logOutClick, setError, deleteSpammedCustomer } = a;


  useEffect(() => {
    if (!localStorage.getItem('J_token') || localStorage.getItem('J_activeStatus') === 'false') {
      if (localStorage.getItem('J_activeStatus') === 'false') {
        setError({ 'error': <span className='text-center'>YOUR ACCESS IS STOPPED BY ADMIN PLEASE RENEWAL YOUR ACCOUNT</span> })
      }
      logOutClick();
      navigate('/login')
    }
    else {

      getAll();
    }
  }, [])

  const searchchange=(e)=>{
    setSearch(e.target.value)
}

const filterData= async()=>{
    let data;
    if(search.length === 0){
       return getAll();
    }
    else{
        data = spamCustomer.filter((data) => (data.name.toLowerCase().indexOf(search.toLowerCase()) !== -1 || data.contact.toLowerCase().indexOf(search.toLowerCase()) !== -1));
        setSpamCustomer(data)
    
    }
    if(spamCustomer.length===0){
        getAll();
        setSearch('')
    }

}

  // to delete spam customer
  const deleteSpam = (id) => {
    alert('Are You Sure To Remove This Spammed Customer?')
    deleteSpammedCustomer(id);
  }
  return (
    localStorage.getItem('J_token') && localStorage.getItem('J_activeStatus') === 'true' ?
      <div className='container'>
        <div className={`row px-4 mt-3 `} >
          <div className='col-12 mb-3'>
          <div className='row'>
            <div className='col-lg-7 offset-lg-2'>
            <h5 className='text-center text-warning mb-4 mt-2 mt-lg-0 fw-bold'>HERE YOU GET SPAMMED CUSTOMER CREATERD BY YOU</h5>
            </div>

            <div className='col-lg-3'>
              <input className="searchinputSet form-control me-2 btnlogIn text-white border-warning " onKeyUp={filterData} value={search} onChange={searchchange} type="search" placeholder="Search" aria-label="Search" />
            </div>
          </div>
          </div>
          {spamCustomer.length === 0 ? <h6 className='text-white fw-bold text-center'>{!error.error ? "Here You Find Spammed Customer" : error.error}</h6> :
            spamCustomer.map((clientdata) => {
              return (
                <div className='col-lg-4  col-12 p-2' key={clientdata._id}>
                  <div className="p-lg-3 ps-2 py-3 mb-2 fw-bold text-warning border rounded-2 border-warning">
                    <h6 className='text-warning mb-lg-0'>This Customer Is Spammed <span className='text-danger bg-warning fw-bold rounded-2 px-2'>Be Careful!</span> </h6>
                    <hr className='my-2' />
                    <div className='row'>
                      <div className='col-lg-10 col-9'>
                        <div className='col-lg-12'><span className='text-white'>Name:</span> <span className='text-capitalize'>{clientdata.name}</span></div>
                        <div className='col-lg-12'> <span className='text-white'>Location:</span> <span className='text-capitalize'> {clientdata.address}</span></div>
                        <div className='col-lg-12'><span className='text-white'>Contact:</span> <span> {clientdata.contact}</span></div>
                        <div className='col-lg-12'> <span className='text-white'>Adhar Number:</span> <span> {clientdata.adhar}</span></div>
                        <div className='col-lg-12'> <span className='text-white'>Balance Left:</span> <span> {clientdata.balance} rs</span></div>
                      </div>
                      <div className='col-lg-2 col-3'>
                        <button className='btn border-0' onClick={() => deleteSpam(clientdata._id)}> <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" className="text-white bi bi-trash" viewBox="0 0 16 16">
                          <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z" />
                          <path fillRule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z" />
                        </svg></button>
                      </div>
                    </div>
                  </div>
                </div>
              )

            })}

        </div>

      </div> : ''
  )
}

export default AllCustomerPage
