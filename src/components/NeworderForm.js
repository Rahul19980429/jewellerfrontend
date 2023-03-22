import React, { useContext, useState } from 'react';
import Context from '../context/Context';

const NeworderForm = () => {
    const a = useContext(Context);
    const { error, setError,createCustomerOrder} = a;
    if (error.length !== 0) {
        setTimeout(() => {
            setError('')
        }, 3000);
    }
    const [input, setInput] = useState({ name: '', address: '', contact: '', metal:'',bhav:'',description:'' })
    const onChange = (e) => {
        setInput({ ...input, [e.target.name]: e.target.value });
        setError('')
    }
    const keypress = (e) => {
        if (isNaN(e.target.value)) {
            e.target.value = "";
        }
    }

    const submit = (e) => {
        e.preventDefault();
        createCustomerOrder(input.name,input.address,input.contact,input.metal,input.bhav,input.description);
        setInput({ name: '', address: '', contact: '', metal:'',bhav:'',description:'' })
    }

    return (
        <div className='container'>
            <div className='row'>
                <div className='col-12'>
                    <form onSubmit={submit} className="px-lg-4">
                        <div className='row'>
                            {/* form part 1st for customer detail */}
                            <div className='col-lg-6 col-12'>
                                <h5 className='text-warning fw-bold pb-2'>CUSTOMER DETAIL</h5>
                                <div className=" input-group mb-4">
                                    <span className="input-group-text" id="basic-addon1"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className=" yellowclr bi bi-person-fill" viewBox="0 0 16 16">
                                        <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3Zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" />
                                    </svg></span>
                                    <input autoComplete='off' onChange={onChange} minLength={3} type="text" className="form-control" value={input.name} id="name" name="name" placeholder='Enter Full Name' />
                                </div>
                                <div className=" input-group mb-4">
                                    <span className="input-group-text" id="basic-addon1"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className=" yellowclr bi bi-house-fill" viewBox="0 0 16 16">
                                        <path d="M8.707 1.5a1 1 0 0 0-1.414 0L.646 8.146a.5.5 0 0 0 .708.708L8 2.207l6.646 6.647a.5.5 0 0 0 .708-.708L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293L8.707 1.5Z" />
                                        <path d="m8 3.293 6 6V13.5a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 2 13.5V9.293l6-6Z" />
                                    </svg></span>
                                    <input autoComplete='off' onChange={onChange} minLength={3} type="text" className="form-control" value={input.address} id="address" name="address" placeholder='Enter Address' />
                                </div>
                                <div className=" input-group mb-4">
                                    <span className="input-group-text" id="basic-addon1"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className=" yellowclr bi bi-telephone-fill" viewBox="0 0 16 16">
                                        <path fillRule="evenodd" d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z" />
                                    </svg></span>
                                    <input autoComplete='off' onChange={onChange} onKeyUp={keypress} maxLength={10} minLength={10} type="text" className="form-control" value={input.contact} id="contact" name="contact" placeholder='Enter Contact Number' />
                                </div>

                            </div>
                            {/* form part 2nd for order detail */}
                            <div className='col-lg-6 col-12'>
                                <h5 className='text-warning fw-bold pb-2'>ORDER DETAIL</h5>
                                <div className='d-flex mb-3'>
                                    <div className="form-check ps-0">
                                        <input type="radio" id="gold" onChange={onChange} name="metal" value="gold" style={{ width: '1.2em', height: "1.2em" }} />
                                        <label htmlFor="gold" className='text-white fw-bold ms-2 fs-5'>GOLD</label>
                                    </div>
                                    <div className="form-check">
                                        <input type="radio" id="silver"  onChange={onChange}  name="metal" value="silver" style={{ width: '1.2em', height: "1.2em" }} />
                                        <label htmlFor="silver" className='text-white fw-bold ms-2 fs-5'>SILVER</label>
                                    </div>
                                </div>

                                <div className=" input-group mb-4">
                                    <span className="input-group-text" id="basic-addon1"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className=" text-warning bi bi-currency-rupee" viewBox="0 0 16 16">
                                        <path d="M4 3.06h2.726c1.22 0 2.12.575 2.325 1.724H4v1.051h5.051C8.855 7.001 8 7.558 6.788 7.558H4v1.317L8.437 14h2.11L6.095 8.884h.855c2.316-.018 3.465-1.476 3.688-3.049H12V4.784h-1.345c-.08-.778-.357-1.335-.793-1.732H12V2H4v1.06Z" />
                                    </svg></span>
                                    <input autoComplete='off' onKeyUp={keypress} onChange={onChange} minLength={3} type="text" className="form-control" value={input.bhav} id="bhav" name="bhav" placeholder='Enter Metal Rate' />
                                </div>
                                <div className=" input-group mb-4">
                                    <span className="input-group-text" id="basic-addon1"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="text-warning bi bi-card-checklist" viewBox="0 0 16 16">
                                        <path d="M14.5 3a.5.5 0 0 1 .5.5v9a.5.5 0 0 1-.5.5h-13a.5.5 0 0 1-.5-.5v-9a.5.5 0 0 1 .5-.5h13zm-13-1A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 14.5 2h-13z" />
                                        <path d="M7 5.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5zm-1.496-.854a.5.5 0 0 1 0 .708l-1.5 1.5a.5.5 0 0 1-.708 0l-.5-.5a.5.5 0 1 1 .708-.708l.146.147 1.146-1.147a.5.5 0 0 1 .708 0zM7 9.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5zm-1.496-.854a.5.5 0 0 1 0 .708l-1.5 1.5a.5.5 0 0 1-.708 0l-.5-.5a.5.5 0 0 1 .708-.708l.146.147 1.146-1.147a.5.5 0 0 1 .708 0z" />
                                    </svg></span>
                                    <textarea autoComplete='off' onChange={onChange} minLength={3} type="text" className="form-control" rows="2" value={input.description} id="description" name="description" placeholder='Enter Jewellery Description' />
                                </div>


                            </div>
                        </div>
                        <div className=" input-group mb-3 text-white justify-content-center fw-bold">
                            {error.error || error}
                        </div>
                        <div className="d-grid gap-2">
                            <button className="btn setbgYellow text-white fw-bold border-warning" disabled={!input.name || !input.address || !input.contact || !input.metal || !input.bhav ||!input.description ? true : false} type="submit">CREATE NEW</button>
                        </div>
                    </form>




                </div>

            </div>

        </div>
    )
}

export default NeworderForm
