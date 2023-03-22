import React, { useState, useContext, useEffect } from 'react'
import context from '../context/Context';
import { useNavigate } from 'react-router-dom';
const AddJeweller = () => {

    let navigate =useNavigate();
    // useState for search 
    const [search, setSearch] = useState('')
    useEffect(() => {
        if (!localStorage.getItem('J_token') || localStorage.getItem('J_activeStatus')==='false') {
            if(localStorage.getItem('J_activeStatus')==='false'){
                setError({'error':'YOUR ACCESS IS STOPPED BY ADMIN PLEASE RENEWAL YOUR ACCOUNT'})
            }
            logOutClick();
            navigate('/login')
        }
        else{
        getAllJeweller()
        }
    }, [])

    const userStatus = (id, bool) => {
         editActiveStatus(id,bool);
    }

    const a = useContext(context);
    const { createNewJeweller, error, setError,logOutClick, jeweller,setJeweller, getAllJeweller, editActiveStatus } = a;

    const [input, setInput] = useState({ name: '', firmName: '', contact: '', address: '', password: '' });
    const onChange = (e) => {
        setInput({ ...input, [e.target.name]: e.target.value })
        setError('');
    }
    const searchchange=(e)=>{
        setSearch(e.target.value)
    }
    const submit = (e) => {
        e.preventDefault()
        if (!input.name || !input.firmName || !input.contact || !input.address || !input.password) {
            alert("Empty field is not allowed")
        }
        else {
            createNewJeweller(input.name, input.firmName, input.contact, input.address, input.password)
            setInput({ name: '', firmName: '', contact: '', address: '', password: '' })
            
        }

    }
    const keypress = (e) => {
        if (isNaN(e.target.value)) {
            e.target.value = "";
        }
    }

    const filterData= async()=>{
        let data;
        if(search.length === 0){
           return getAllJeweller();
        }
        else{
            data = jeweller.filter((data) => (data.name.toLowerCase().indexOf(search.toLowerCase()) !== -1 || data.contact.toLowerCase().indexOf(search.toLowerCase()) !== -1));
            setJeweller(data)
        
        }
        if(jeweller.length===0){
            getAllJeweller();
            setSearch('')
        }

    }
    return (
       localStorage.getItem('J_superAdmin')==='false'?"":
        <div>
            <div className='container mt-4'>
                <div className='row px-3 py-2'>
                    <div className='col-lg-4 col-12 px-1 px-lg-3 card border-warning '>
                        <h4 className='my-4 text-center text-warning fw-bold'>ADD NEW JEWELLER</h4>
                        <div className='card-body'>
                            <form onSubmit={submit}>
                                <div className=" input-group mb-3">
                                    <span className="input-group-text" id="basic-addon1"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="text-warning bi bi-person-circle" viewBox="0 0 16 16">
                                        <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
                                        <path fillRule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z" />
                                    </svg></span>
                                    <input autoComplete='off' onChange={onChange} value={input.name} minLength={3} type="text" className="form-control" id="name" name="name" placeholder='Enter Name' />
                                </div>

                                <div className=" input-group mb-3">
                                    <span className="input-group-text" id="basic-addon1"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="text-warning bi bi-building" viewBox="0 0 16 16">
                                        <path d="M4 2.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1Zm3 0a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1Zm3.5-.5a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-1ZM4 5.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1ZM7.5 5a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-1Zm2.5.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1ZM4.5 8a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-1Zm2.5.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1Zm3.5-.5a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-1Z" />
                                        <path d="M2 1a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V1Zm11 0H3v14h3v-2.5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 .5.5V15h3V1Z" />
                                    </svg></span>
                                    <input autoComplete='off' onChange={onChange} value={input.firmName} minLength={2} type="text" className="form-control" id="firmName" name="firmName" placeholder='Enter Firm Name ' />
                                </div>

                                <div className=" input-group mb-3">
                                    <span className="input-group-text" id="basic-addon1"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="text-warning bi bi-phone" viewBox="0 0 16 16">
                                        <path d="M11 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h6zM5 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H5z" />
                                        <path d="M8 14a1 1 0 1 0 0-2 1 1 0 0 0 0 2z" />
                                    </svg></span>
                                    <input autoComplete='off' onChange={onChange} value={input.contact} onKeyUp={keypress} maxLength={10} minLength={10} type="text" className="form-control" id="contact" name="contact" placeholder='Enter Contact' />
                                </div>

                                <div className=" input-group mb-3">
                                    <span className="input-group-text" id="basic-addon1"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="text-warning bi bi-shop" viewBox="0 0 16 16">
                                        <path d="M2.97 1.35A1 1 0 0 1 3.73 1h8.54a1 1 0 0 1 .76.35l2.609 3.044A1.5 1.5 0 0 1 16 5.37v.255a2.375 2.375 0 0 1-4.25 1.458A2.371 2.371 0 0 1 9.875 8 2.37 2.37 0 0 1 8 7.083 2.37 2.37 0 0 1 6.125 8a2.37 2.37 0 0 1-1.875-.917A2.375 2.375 0 0 1 0 5.625V5.37a1.5 1.5 0 0 1 .361-.976l2.61-3.045zm1.78 4.275a1.375 1.375 0 0 0 2.75 0 .5.5 0 0 1 1 0 1.375 1.375 0 0 0 2.75 0 .5.5 0 0 1 1 0 1.375 1.375 0 1 0 2.75 0V5.37a.5.5 0 0 0-.12-.325L12.27 2H3.73L1.12 5.045A.5.5 0 0 0 1 5.37v.255a1.375 1.375 0 0 0 2.75 0 .5.5 0 0 1 1 0zM1.5 8.5A.5.5 0 0 1 2 9v6h1v-5a1 1 0 0 1 1-1h3a1 1 0 0 1 1 1v5h6V9a.5.5 0 0 1 1 0v6h.5a.5.5 0 0 1 0 1H.5a.5.5 0 0 1 0-1H1V9a.5.5 0 0 1 .5-.5zM4 15h3v-5H4v5zm5-5a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1v-3zm3 0h-2v3h2v-3z" />
                                    </svg></span>
                                    <input autoComplete='off' onChange={onChange} value={input.address} minLength={2} type="text" className="form-control" id="address" name="address" placeholder='Enter Address' />
                                </div>

                                <div className=" input-group mb-3">
                                    <span className="input-group-text" id="basic-addon1"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="text-warning bi bi-eye-fill" viewBox="0 0 16 16">
                                        <path d="M10.5 8a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0z" />
                                        <path d="M0 8s3-5.5 8-5.5S16 8 16 8s-3 5.5-8 5.5S0 8 0 8zm8 3.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7z" />
                                    </svg></span>
                                    <input autoComplete='off' onChange={onChange} value={input.password} minLength={6} type="text" className="form-control" id="password" name="password" placeholder='Enter Password' />
                                </div>
                                <div className=" input-group mb-3 text-white justify-content-center fw-bold">
                                    {error.error || error}
                                </div>

                                <div className="d-grid gap-2 my-3 ">
                                    <button className="btn setbgYellow text-white fw-bold border-warning" type="submit" disabled={!input.name || !input.firmName || !input.address || !input.contact || !input.password ? true : false}>CREATE NEW</button>
                                </div>
                            </form>
                        </div>
                    </div>

                    <div className='col-lg-6 offset-lg-2 mt-5 mt-lg-0'>
                        <div className='row '>
                            <div className='col-lg-5'>
                                <h4 className=' text-center text-lg-start text-warning' >Existed Jeweller</h4>
                            </div>

                            <div className='col-lg-6'>
                                <input className="searchinputSet form-control me-2 btnlogIn text-white border-warning " onKeyUp={filterData} value={search} onChange={searchchange} type="search" placeholder="Search" aria-label="Search" />
                            </div>

                        </div>


                        <hr className='mb-0' />
                        <div className='setClient px-3 py-2 '>
                            {jeweller.length === 0 ? <h5 className='text-warning'>No Client Added Yet</h5> :
                                jeweller.map((clientdata) => {
                                    return (
                                        <div className="card mb-4 text-warning border-warning" key={clientdata._id}>
                                            <div className="card-body">
                                                <div className='d-flex'>
                                                    <p className="card-title text-capitalize mb-0">Name: {clientdata.name}</p>
                                                    {clientdata.activeStatus === false ? <button className={`py-0 btn btn-sm  ms-auto  border-warning text-white setbgYellow fw-bold d-${clientdata.superAdmin?'d-none':'d-block'}`} onClick={() => userStatus(clientdata._id, 'true')}> <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className="bi bi-person-fill-x py-1 py-lg-0" viewBox="0 0 16 16">
                                                        <path d="M11 5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm-9 8c0 1 1 1 1 1h5.256A4.493 4.493 0 0 1 8 12.5a4.49 4.49 0 0 1 1.544-3.393C9.077 9.038 8.564 9 8 9c-5 0-6 3-6 4Z" />
                                                        <path d="M12.5 16a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7Zm-.646-4.854.646.647.646-.647a.5.5 0 0 1 .708.708l-.647.646.647.646a.5.5 0 0 1-.708.708l-.646-.647-.646.647a.5.5 0 0 1-.708-.708l.647-.646-.647-.646a.5.5 0 0 1 .708-.708Z" />
                                                    </svg></button>
                                                        : <button className={`py-0 btn btn-sm ms-auto border-warning text-white fw-bold setbgYellow ${clientdata.superAdmin?'d-none':'d-block'}`} onClick={() => userStatus(clientdata._id, 'false')}><svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className="bi bi-person-fill-check py-1  py-lg-0" viewBox="0 0 16 16">
                                                            <path d="M12.5 16a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7Zm1.679-4.493-1.335 2.226a.75.75 0 0 1-1.174.144l-.774-.773a.5.5 0 0 1 .708-.708l.547.548 1.17-1.951a.5.5 0 1 1 .858.514ZM11 5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                                                            <path d="M2 13c0 1 1 1 1 1h5.256A4.493 4.493 0 0 1 8 12.5a4.49 4.49 0 0 1 1.544-3.393C9.077 9.038 8.564 9 8 9c-5 0-6 3-6 4Z" />
                                                        </svg> </button>}
                                                </div>
                                                <p className="card-text  text-white mb-0 text-capitalize">Firm Name: {clientdata.firmName} Jewellers</p>
                                                <p className="card-text  text-white mb-0">Mobile: {clientdata.contact}</p>
                                                <p className="card-text  text-white text-capitalize">Address: {clientdata.address}</p>
                                            </div>
                                        </div>
                                    )

                                })}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AddJeweller
