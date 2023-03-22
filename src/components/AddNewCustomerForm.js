import React, { useContext, useState } from 'react';
import Context from '../context/Context';

const AddNewCustomerForm = () => {
    const a = useContext(Context);
    const { addNewSpamCustomer, error, setError } = a;
    if (error.length !== 0) {
        setTimeout(() => {
            setError('')
        }, 3000);
    }
    const [input, setInput] = useState({ name: '', address: '', contact: '', adhar: '', balance: '' })
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
        addNewSpamCustomer(input.name, input.address, input.contact, input.adhar, input.balance);
        setInput({ name: '', address: '', contact: '', adhar: '', balance: '' })
    }
    return (
        <form onSubmit={submit} className="px-lg-4">
            <div className=" input-group mb-3">
                <span className="input-group-text" id="basic-addon1"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className=" yellowclr bi bi-person-fill" viewBox="0 0 16 16">
                    <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3Zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" />
                </svg></span>
                <input autoComplete='off' onChange={onChange} minLength={3} type="text" className="form-control" value={input.name} id="name" name="name" placeholder='Enter Name' />
            </div>
            <div className=" input-group mb-3">
                <span className="input-group-text" id="basic-addon1"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className=" yellowclr bi bi-house-fill" viewBox="0 0 16 16">
                    <path d="M8.707 1.5a1 1 0 0 0-1.414 0L.646 8.146a.5.5 0 0 0 .708.708L8 2.207l6.646 6.647a.5.5 0 0 0 .708-.708L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293L8.707 1.5Z" />
                    <path d="m8 3.293 6 6V13.5a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 2 13.5V9.293l6-6Z" />
                </svg></span>
                <input autoComplete='off' onChange={onChange} minLength={3} type="text" className="form-control" value={input.address} id="address" name="address" placeholder='Enter Address' />
            </div>
            <div className=" input-group mb-3">
                <span className="input-group-text" id="basic-addon1"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className=" yellowclr bi bi-telephone-fill" viewBox="0 0 16 16">
                    <path fillRule="evenodd" d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z" />
                </svg></span>
                <input autoComplete='off' onChange={onChange} onKeyUp={keypress} maxLength={10} minLength={10} type="text" className="form-control" value={input.contact} id="contact" name="contact" placeholder='Enter Contact Number' />
            </div>
            <div className=" input-group mb-3">
                <span className="input-group-text" id="basic-addon1"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className=" yellowclr bi bi-book-half" viewBox="0 0 16 16">
                    <path d="M8.5 2.687c.654-.689 1.782-.886 3.112-.752 1.234.124 2.503.523 3.388.893v9.923c-.918-.35-2.107-.692-3.287-.81-1.094-.111-2.278-.039-3.213.492V2.687zM8 1.783C7.015.936 5.587.81 4.287.94c-1.514.153-3.042.672-3.994 1.105A.5.5 0 0 0 0 2.5v11a.5.5 0 0 0 .707.455c.882-.4 2.303-.881 3.68-1.02 1.409-.142 2.59.087 3.223.877a.5.5 0 0 0 .78 0c.633-.79 1.814-1.019 3.222-.877 1.378.139 2.8.62 3.681 1.02A.5.5 0 0 0 16 13.5v-11a.5.5 0 0 0-.293-.455c-.952-.433-2.48-.952-3.994-1.105C10.413.809 8.985.936 8 1.783z" />
                </svg></span>
                <input autoComplete='off' onChange={onChange} onKeyUp={keypress} maxLength={12} minLength={12} type="text" className="form-control" value={input.adhar} id="adhar" name="adhar" placeholder='Enter Adhar Number' />
            </div>
            <div className=" input-group mb-1">
                <span className="input-group-text" id="basic-addon1"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className=" yellowclr bi bi-currency-rupee" viewBox="0 0 16 16">
                    <path d="M4 3.06h2.726c1.22 0 2.12.575 2.325 1.724H4v1.051h5.051C8.855 7.001 8 7.558 6.788 7.558H4v1.317L8.437 14h2.11L6.095 8.884h.855c2.316-.018 3.465-1.476 3.688-3.049H12V4.784h-1.345c-.08-.778-.357-1.335-.793-1.732H12V2H4v1.06Z" />
                </svg></span>
                <input autoComplete='off' onChange={onChange} onKeyUp={keypress} minLength={1} type="text" className="form-control" value={input.balance} id="balance" name="balance" placeholder='Enter Balance Left' />
            </div>
            <div className=" input-group my-2 text-white justify-content-center fw-bold">
                {error.error || error}
            </div>

            <div className="d-grid gap-2">
                <button className="btn setbgYellow text-white fw-bold border-warning" disabled={!input.name || !input.address || !input.contact || !input.adhar || !input.balance ? true : false} type="submit">CREATE NEW</button>
            </div>
        </form>
    )
}

export default AddNewCustomerForm
