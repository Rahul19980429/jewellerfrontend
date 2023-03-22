import React from 'react'
import CompletedOrder from './CompletedOrder'
import CustomerOrderShowPage from './CustomerOrderShowPage'
import NeworderForm from './NeworderForm'

const AddOrderdetail = () => {
  return (
    <div className='container'>
      <div className='row'>
        <div className='col-12'>
          <h5 className='text-warning text-center fw-bold '>HERE YOU CAN MANAGE YOUR CUSTOMER ORDER</h5>
          <hr className='text-warning' />
          <div className="nav nav-pills justify-content-lg-center mb-4" id="pills-tab" role="tablist">
            <div className="nav-item" role="presentation">
              <button className="nav-link px-2 px-lg-4 active text-white fw-bold border-0" id="pills-neworder-tab" data-bs-toggle="pill" data-bs-target="#pills-neworder" type="button" role="tab" aria-controls="pills-neworder" aria-selected="true">NEW ORDER</button>
            </div>
            <div className="nav-item" role="presentation">
              <button className="nav-link px-2 px-lg-4 text-white fw-bold  border-0" id="pills-pendingordder-tab" data-bs-toggle="pill" data-bs-target="#pills-pendingorder" type="button" role="tab" aria-controls="pills-pendingorder" aria-selected="false">ORDER</button>
            </div>
            <div className="nav-item" role="presentation">
              <button className="nav-link px-2 px-lg-4 text-white fw-bold  border-0" id="pills-completeordder-tab" data-bs-toggle="pill" data-bs-target="#pills-completeorder" type="button" role="tab" aria-controls="pills-completeorder" aria-selected="false">COMPLETED ORDER</button>
            </div>


          </div>
          <div className="tab-content  px-lg-5" id="pills-tabContent">
            <div className="tab-pane fade show active" id="pills-neworder" role="tabpanel" aria-labelledby="pills-neworder-tab" tabIndex="0"><NeworderForm/></div>
            <div className="tab-pane fade" id="pills-pendingorder" role="tabpanel" aria-labelledby="pills-pendingordder-tab" tabIndex="0"><CustomerOrderShowPage/></div>
            <div className="tab-pane fade" id="pills-completeorder" role="tabpanel" aria-labelledby="pills-completeordder-tab" tabIndex="0"><CompletedOrder/></div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AddOrderdetail
