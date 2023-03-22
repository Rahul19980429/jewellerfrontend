import React, { useState } from 'react'

const CalculationForm = () => {

    const [input, setInput] = useState({ weight: '', tnch: '', bhav: '', lbr: '', other: '' })
    const [stamp, setStamp] = useState('Rs')
    const [fine, setFine] = useState(0);
    const [totalAmount, setTotalAmount] = useState(0)
    // const [laber, setLaber] = useState(0)
    const onChange = (e) => {
        setInput({ ...input, [e.target.name]: e.target.value });
        // setLaber(0)
        setTotalAmount(0)
        setFine(0)
    }

    const keypress = (e) => {
        if (isNaN(e.target.value)) {
            e.target.value = "";
        }
    }

    const CalculateAmount = async (e) => {
        e.preventDefault();
        let tnch = parseFloat(input.tnch / 100);
        let bhav = parseFloat(input.bhav / 10);
        let weight = parseFloat(input.weight);
        let lbr = parseFloat(input.lbr);
        let other = parseFloat(input.other);
        if (bhav === 0) {
            if (stamp === 'Rs') {
                setFine(weight * tnch);
                setTotalAmount(other + lbr)               
            }
            else {
                setFine(weight * tnch);
                setTotalAmount(other + (lbr * weight))
            }
        }
        else {
            if (stamp === 'Rs') {
                setFine(0);
                let amount = parseFloat(weight * tnch * bhav) + parseFloat(lbr) + (other === 0 ? 0 : other);
                setTotalAmount(amount)
            }
            else {
                setFine(0);
                let amount = parseFloat(weight * tnch * bhav) + parseFloat(lbr * weight) + (other === 0 ? 0 : other);
                setTotalAmount(amount)
            }
        }

        
    }
    const ChangeStamp = async (e) => {
        e.preventDefault();
        if (stamp === "Rs") {
            setStamp("Wt")
            setTotalAmount(0)
            setFine(0)
           }
        else {
            setStamp("Rs")
            setTotalAmount(0)
            setFine(0)
           }
    }

    const clearForm = () => {
        setInput({ weight: '', tnch: '', bhav: '', lbr: '', other: '' })
        setStamp('Rs')
        // setLaber(0)
        setTotalAmount(0)
        setFine(0)
    }
    return (
        <form onSubmit={CalculateAmount} className="">
            <div className='row text-warning py-2'>
                <div className='col-lg-1'>
                    <h6 className='fw-bold text-lg-center'>Wt(gm)</h6>
                    <div className=" input-group mb-4">
                        <input step="0.1" autoComplete='off' onChange={onChange} onKeyUp={keypress} minLength={1} type="text" className="form-control" id="weight" name="weight" placeholder='Wt' value={input.weight} />
                    </div>
                </div>
                <div className='col-lg-1'>
                    <h6 className='fw-bold text-lg-center'>Tnch</h6>
                    <div className=" input-group mb-4">
                        <input step="0.1" autoComplete='off' onChange={onChange} onKeyUp={keypress} maxLength={4} minLength={1} type="text" className="form-control" id="tnch" name="tnch" placeholder='Tnch' value={input.tnch} />
                    </div>
                </div>
                <div className='col-lg-2'>
                    <h6 className='fw-bold text-lg-center'>Metal Bhav(10gm)</h6>
                    <div className=" input-group mb-4">
                        <input autoComplete='off' onChange={onChange} onKeyUp={keypress} minLength={1} type="text" className="form-control" id="bhav" name="bhav" placeholder='Enter Bhav' value={input.bhav} />
                    </div>
                </div>
                <div className='col-lg-2 col-9'>
                    <h6 className='fw-bold text-lg-center'>Laber</h6>
                    <div className=" input-group mb-3">
                        <input autoComplete='off' onChange={onChange} onKeyUp={keypress} minLength={1} type="text" className="form-control" id="lbr" name="lbr" placeholder='Enter Laber' value={input.lbr} />
                    </div>
                </div>
                <div className='col-lg-1 col-3'>
                    <h6 className='fw-bold '> Rs/Wt</h6>
                    <div className=" input-group mb-3">
                        <button className="btn btn-warning" id="stamp" onClick={ChangeStamp}>{stamp}</button>
                    </div>
                </div>
                <div className='col-lg-2'>
                    <h6 className='fw-bold text-lg-center'>Other</h6>
                    <div className=" input-group mb-4">
                        <input autoComplete='off' onChange={onChange} onKeyUp={keypress} minLength={1} type="text" className="form-control" id="other" name="other" placeholder='Enter Other' value={input.other} />
                    </div>
                </div>
                <div className='col-lg-2'>
                    <h6 className='fw-bold text-lg-center'>Amount</h6>
                    <div className=" input-group mb-3">
                        <span className='text-white fw-bold pt-2 pe-2 d-none d-lg-block'>=</span> <input autoComplete='off' minLength={1} type="text" className="form-control" onChange={onChange} id="amount" name="amount" placeholder='Enter Laber' value={totalAmount} />
                    </div>
                </div>
                <div className='col-lg-1'>
                    <h6 className='fw-bold text-lg-center'>Fine</h6>
                    <div className=" input-group mb-3">
                        <input autoComplete='off' type="text" className="form-control" onChange={onChange} id="fine" name="fine" value={fine} />
                    </div>
                </div>
            </div>


            <div className="d-flex justify-content-center">
                <button className="btn setbgYellow text-white fw-bold border-warning me-3" disabled={!input.weight || !input.tnch || !input.bhav || !input.lbr || !input.other ? true : false} >CALCULATE</button>
                <button className='btn setbgYellow text-white fw-bold border-warning' disabled={!input.weight && !input.tnch && !input.bhav && !input.lbr && !input.other ? true : false} onClick={clearForm}>CLEAR</button>
            </div>
        </form>
    )
}

export default CalculationForm
