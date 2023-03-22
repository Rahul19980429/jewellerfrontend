import React, { useContext, useState, useEffect } from 'react';
import Context from '../context/Context';
import AddNewCustomerForm from './AddNewCustomerForm'
import CustomerChechForm from './CustomerCheckForm'
import { useNavigate } from 'react-router-dom';

const Home = () => {
    let date='';
    let navigate = useNavigate();
    const [activeResult, setActiveResult] = useState('true');

    const a = useContext(Context);
    const { searchCustomer, error,setError,logOutClick} = a;

    useEffect(() => {
        if (!localStorage.getItem('J_token') || localStorage.getItem('J_activeStatus')==='false') {
            if(localStorage.getItem('J_activeStatus')==='false'){
                setError({'error':<span className='text-center'>YOUR ACCESS IS STOPPED BY ADMIN PLEASE RENEWAL YOUR ACCOUNT</span>})
            }
            logOutClick();
            navigate('/login')
        }
        
       
    }, [])

   

    return (
        localStorage.getItem('J_token') && localStorage.getItem('J_activeStatus')==='false'?"":
        <div className='container mt-2'>
          
            <div className='row'>
                <h4 className='text-center text-warning mb-4 mb-lg-0 mt-2 mt-lg-0 fw-bold  pb-lg-3'>WELCOME TO THE SWARANKAR <span className='text-uppercase'>{localStorage.getItem('J_name')}</span> </h4>
            </div>
            <div className='row px-4 '>
                <div className='col-lg-6 offset-lg-3 col-12 border rounded-2 border-warning py-4 py-lg-4'>
                    <div className="nav nav-pills justify-content-center mb-4" id="pills-tab" role="tablist">
                        <div className="nav-item" role="presentation">
                            <button onClick={() => setActiveResult('true')} className="nav-link active text-white fw-bold border-0" id="pills-home-tab" data-bs-toggle="pill" data-bs-target="#pills-home" type="button" role="tab" aria-controls="pills-home" aria-selected="true">VERIFY</button>
                        </div>
                        <div className="nav-item" role="presentation">
                            <button onClick={() => setActiveResult('false')} className="nav-link text-white fw-bold  border-0" id="pills-profile-tab" data-bs-toggle="pill" data-bs-target="#pills-profile" type="button" role="tab" aria-controls="pills-profile" aria-selected="false">ADD NEW</button>
                        </div>

                    </div>
                    <div className="tab-content px-4 px-lg-5" id="pills-tabContent">
                        <div className="tab-pane fade show active" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab" tabIndex="0"><CustomerChechForm /></div>
                        <div className="tab-pane fade" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab" tabIndex="0"><AddNewCustomerForm /></div>
                    </div>

                </div>
            </div>
            <div className={`row px-4 mt-3 ${activeResult === 'false' ? 'd-none' : 'd-block'}`} >
                <h5 className='text-center text-warning mb-4 mt-2 mt-lg-0 fw-bold'>HERE YOU FIND THE RESULT</h5>
                <div className='col-lg-6 offset-lg-3 col-12 p-0' >
                    {searchCustomer.length === 0 ? <h6 className='text-white fw-bold text-center'>{!error.error ? "Here You Find Result" : error.error}</h6> :
                        searchCustomer.map((clientdata) => {
                           date = new Date(clientdata.user.date);
                            return (
                            
                                <div key={clientdata.user._id} className="px-lg-4 ps-2 fw-bold text-warning border rounded-2 border-warning py-3 py-lg-4 mb-2">
                                    <h6 className='text-warning mb-lg-3'>This Customer Is Spammed <span className='text-danger bg-warning fw-bold rounded-2 px-2'>Be Careful!</span> </h6>
                                    <hr className='my-1'/>
                                    <div className='row'>
                                        <div className='col-lg-5 col-12 d-flex'><span className='text-white'>Name: </span> <span className='text-capitalize'>&nbsp;{clientdata.user.name}</span>
                                        &nbsp;
                                         <i className='d-block d-lg-none'><span className='text-white'> From </span> <span className='text-capitalize'> {clientdata.user.address}</span></i></div>
                                         <div className='col-lg-7 col-12 d-none d-lg-block'> <span className='text-white'>Location:</span> <span className='text-capitalize'> {clientdata.user.address}</span></div>
                                    </div>
                                    <div className='row'>
                                        <div className='col-lg-5'><span className='text-white'>Contact:</span> <span> {clientdata.user.contact}</span></div>
                                        <div className='col-lg-7'> <span className='text-white'>Adhar Number:</span> <span> {clientdata.user.adhar}</span></div>
                                    </div>
                                    <hr className='my-1'/>
                                    <div className='row'>
                                       
                                        <div className='col-lg-12  mt-lg-1 '><small className='text-warning fw-normal text-capitalize'>Spam By: {clientdata.result.name} from {clientdata.result.firmName} Jewellers <span className='ms-lg-5'>Date {date.getDate() + '-' + parseInt(date.getMonth() + 1) + '-' + date.getFullYear()}</span></small></div>
                                    </div>
                                </div>
                            )

                        })}
                </div>
            </div>
        </div>
    )
}

export default Home
