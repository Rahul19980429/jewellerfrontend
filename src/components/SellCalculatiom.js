import React, { useContext, useEffect } from 'react';
import Context from '../context/Context';
import { useNavigate } from 'react-router-dom';

import CalculationForm from './CalculationForm';
import InterestCal from './InterestCal';

const SellCalculation = () => {
    let navigate = useNavigate();
    const a = useContext(Context);
    const { logOutClick,setError} = a;
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
            <h5 className='text-center text-warning mb-4 mt-2 mt-lg-0 fw-bold '>HERE YOU CAN CALCULATE THE AMOUNT OF THE ITEM </h5>
        </div>
        <div className='row px-4 '>
            <div className='col-lg-12 px-lg-5 col-12 border rounded-2 border-warning py-4 py-lg-4'>
                <div className="nav nav-pills justify-content-center mb-4" id="pills-tab" role="tablist">
                    <div className="nav-item" role="presentation">
                        <button  className="nav-link active text-white fw-bold border-0" id="pills-home-tab" data-bs-toggle="pill" data-bs-target="#pills-home" type="button" role="tab" aria-controls="pills-home" aria-selected="true">JEWELLERY CAL</button>
                    </div>
                    <div className="nav-item" role="presentation">
                        <button  className="nav-link text-white fw-bold  border-0" id="pills-profile-tab" data-bs-toggle="pill" data-bs-target="#pills-profile" type="button" role="tab" aria-controls="pills-profile" aria-selected="false">INTEREST CAL</button>
                    </div>

                </div>
                <div className="tab-content " id="pills-tabContent">
                    <div className="tab-pane fade show active" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab" tabIndex="0"><CalculationForm/></div>
                    <div className="tab-pane fade" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab" tabIndex="0"><InterestCal/></div>
                </div>

            </div>
        </div>
    </div>
)
}

export default SellCalculation
