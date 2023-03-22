import React, { useEffect, useContext } from 'react'
import Context from '../context/Context';
const CustomerOrderShowPage = () => {
    let ordertobe= 'true';
    const a = useContext(Context);
    const { getOrder, order,completeCustomerOrder } = a;

    const submitform=(id,orderStatus)=>{
        completeCustomerOrder(id,orderStatus)
    }

    useEffect(() => {
        getOrder(false)
      
    }, [])

    return (
        <div className='container'>
            <div className='row'>
                <div className='col-12'>
                    <div className='row px-lg-4 mt-lg-3 px-2 ' style={{ overflowY:'scroll',maxHeight:'55vh'}} >
                        {order.length === 0 ? <h6 className='text-white fw-bold text-center'>NOT FOUND</h6> :
                            order.map((clientdata) => {

                                return (
                                    <div className={`col-lg-12 col-12 p-2 border border-warning rounded-2 py-3 my-2 ${clientdata.order_status===false?'d-none':'d-block'} `} key={clientdata._id}>
                                            <div className='row'>
                                                <div className='col-lg-1 m-auto col-2 '>
                                                    <button title='Order Complete?' onClick={()=>{submitform(clientdata._id,ordertobe='false')}} className='mb-2 mb-lg-0 ms-2 btn btn-warning text-white'><input type='checkbox' className='mt-1' title='Order Complete?' style={{width:'1.2em',height:'1.2em'}}/></button>
                                                </div>
                                                <div className='col-lg-11 m-auto col-10 ps-4'>
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

export default CustomerOrderShowPage
