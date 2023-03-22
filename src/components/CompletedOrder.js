import React, { useEffect, useContext } from 'react'
import Context from '../context/Context';
const CompletedOrder = () => {
    let ordertobe = "false";
    const a = useContext(Context);
    const { getOrder, order, completeCustomerOrder ,deleteCompletedOrder} = a;

    const submitform = (id, orderStatus) => {
        completeCustomerOrder(id, orderStatus)
    }
    const deleteOrder= (id)=>{
        deleteCompletedOrder(id)
    }
    useEffect(() => {
        getOrder(false)

    }, [])

    return (
        <div className='container'>
            <div className='row'>
                <div className='col-12'>
                    <div className='row px-lg-4 mt-lg-3 px-2 ' style={{ overflowY: 'scroll', maxHeight: '55vh' }} >
                        {order.length === 0 ? <h6 className='text-white fw-bold text-center'>NOT FOUND</h6> :
                            order.map((clientdata) => {

                                return (
                                    <div className={`col-lg-12 col-12 p-2 border border-warning rounded-2 py-3 position-relative my-2 ${clientdata.order_status === true ? 'd-none' : 'd-block'} `} key={clientdata._id}>
                                        <button onClick={()=>deleteOrder(clientdata._id)} className='btn text-white fw-bold position-absolute top-0 end-0'><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-trash-fill" viewBox="0 0 16 16">
                                            <path d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0z" />
                                        </svg></button>
                                        <div className='row'>
                                            <div className='col-lg-1 m-auto col-2 '>
                                                <button title='Order Complete?' onClick={() => { submitform(clientdata._id, ordertobe = 'true') }} className='mb-2 mb-lg-0 ms-2 btn btn-warning text-white fw-bold'><input type='checkbox' className='mt-1' title='Order Complete?' style={{ width: '1.2em', height: '1.2em' }} /></button>
                                            </div>
                                            <div className='col-lg-11 m-auto position-relative col-10 ps-4'>

                                                <div className='row px-lg-2'>
                                                    <div className='col-12'>
                                                        <p className="text-warning fs-5  text-capitalize m-0">
                                                            Name:&nbsp;{clientdata.name},
                                                            Address:&nbsp;{clientdata.address},
                                                            Mobile:&nbsp;{clientdata.contact}
                                                        </p>
                                                    </div>
                                                    <hr className='my-1 text-warning' />

                                                    <div className='col-12'>
                                                        <p className="text-warning fs-5  text-capitalize m-0">
                                                            {clientdata.metal} jewellery,
                                                            Bhav:&nbsp;{clientdata.rate}/tola,
                                                            Description:&nbsp;{clientdata.item_description}
                                                        </p>
                                                    </div>
                                                </div>

                                            </div>
                                        </div>
                                    </div>
                                )

                            })}

                    </div>
                </div>
            </div>

        </div>
    )
}

export default CompletedOrder
