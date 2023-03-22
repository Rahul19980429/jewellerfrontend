import React, { useState,useContext ,useEffect} from 'react';
import Context from '../context/Context';

const CustomerChechForm = () => {
    const a =useContext(Context);
    const{getSearch,setSearchCustomer,setError}=a;
    const [verify, setVerify] = useState('')
    
    useEffect(() => {
        if(verify.length===0){
            setSearchCustomer('')
        }
    }, [])
    

    const onChange=(e)=>{
        setVerify(e.target.value);
        setSearchCustomer('')
        setError('')
    }
    const keypress=(e)=>{
        if(isNaN(e.target.value)){
            e.target.value="";
        }
    }

    const submit=(e)=>{
        e.preventDefault();
        getSearch(verify);
    }
    return (
        <form onSubmit={submit} className="px-lg-4">
            <div className=" input-group mb-3">
                <span className="input-group-text" id="basic-addon1"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="yellowclr bi bi-phone-fill" viewBox="0 0 16 16">
                    <path d="M3 2a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V2zm6 11a1 1 0 1 0-2 0 1 1 0 0 0 2 0z" />
                </svg></span>
                <input autoComplete='off' onChange={onChange} onKeyUp={keypress} maxLength={12} minLength={10} type="search" className="form-control" value={verify} id="verify" name="verify" placeholder='Enter Adhar Or Contact Number' />
            </div>
            <div className="d-grid gap-2 mt-3 ">
                <button className="btn setbgYellow text-white fw-bold border-warning" disabled={!verify?true:false} type="submit">SEARCH</button>
            </div>
        </form>
    )
}

export default CustomerChechForm
