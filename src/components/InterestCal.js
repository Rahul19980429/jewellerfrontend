import React, { useState } from 'react'

const InterestCal = () => {

    const [input, setInput] = useState({ amount: '', interestRate: '', months: ''})
   
    const [amountwithI, setAmountwithI] = useState('0')
    const [deposit, setDeposit] = useState('')
    const [finalAmount, setFinalAmount] = useState('0')
    const [totalAmount, setTotalAmount] = useState('0')
    const onChange = (e) => {
        setInput({ ...input, [e.target.name]: e.target.value });
        setTotalAmount('0')
        setDeposit('')
        setFinalAmount('0')
        setAmountwithI('0')
    }

    const keypress = (e) => {
        if (isNaN(e.target.value)) {
            e.target.value = "";
        }
    }

    const CalculateAmount = async (e) => {
        e.preventDefault();
        let intRate = parseFloat(input.interestRate / 100);
        let amt = parseFloat(input.amount);
        let mnth = parseFloat(input.months);
        let amount = parseFloat((intRate * amt) * mnth);
        let amountwithInt = parseFloat(amount+amt);
        setAmountwithI(amountwithInt)
        setTotalAmount(amount)
        setFinalAmount(amountwithInt)
    }
    

    const clearForm = () => {
        setInput({ amount: '', interestRate: '', months: ''})
        setTotalAmount('0')
        setFinalAmount('0')
        setDeposit('')
        setAmountwithI('0')
    }
    return (
        <form onSubmit={CalculateAmount} className="">
            <div className='row text-warning py-2'>
                <div className='col-lg-2'>
                    <h6 className='fw-bold text-lg-center'>Amount</h6>
                    <div className=" input-group mb-4">
                        <input  autoComplete='off' onChange={onChange} onKeyUp={keypress} minLength={1} type="text" className="form-control" id="amount" name="amount" placeholder='Enter Amount' value={input.amount} />
                    </div>
                </div>
                <div className='col-lg-1'>
                    <h6 className='fw-bold text-lg-center'>Int.Rate</h6>
                    <div className=" input-group mb-4">
                        <input step="0.1" autoComplete='off' onChange={onChange} onKeyUp={keypress} maxLength={4} minLength={1} type="text" className="form-control" id="interestRate" name="interestRate" placeholder='Rate' value={input.interestRate} />
                    </div>
                </div>
                <div className='col-lg-1'>
                    <h6 className='fw-bold text-lg-center'>Months</h6>
                    <div className=" input-group mb-4">
                        <input autoComplete='off' onChange={onChange} onKeyUp={keypress} minLength={1} type="text" className="form-control" id="months" name="months" placeholder='Months' value={input.months} />
                    </div>
                </div>
                
                
                <div className='col-lg-2'>
                    <h6 className='fw-bold text-lg-center'>Interest Amount</h6>
                    <div className=" input-group mb-3">
                        <span className='text-white fw-bold pt-2 pe-2 d-none d-lg-block'>=</span> <input autoComplete='off' minLength={1} type="text" className="form-control" onChange={onChange} id="amount" name="amount" placeholder='Enter Laber' value={totalAmount} />
                    </div>
                </div>

                <div className='col-lg-2'>
                    <h6 className='fw-bold text-lg-center'>Amount with Int.</h6>
                    <div className=" input-group mb-3">
                        <input autoComplete='off' minLength={1} type="text" className="form-control" onChange={onChange} id="amountwithI" name="amountwithI" placeholder='Enter Laber' value={amountwithI} />
                    </div>
                </div>
                <div className='col-lg-2'>
                    <h6 className='fw-bold text-lg-center'>Deposit Before</h6>
                    <div className=" input-group mb-3">
                        <input autoComplete='off' minLength={1} type="text" className="form-control" onKeyUp={keypress} placeholder="0" onChange={(e)=>{setDeposit(e.target.value);setFinalAmount(amountwithI - e.target.value)}} id="deposit" name="deposit"  value={deposit} />
                    </div>
                </div>
                <div className='col-lg-2'>
                    <h6 className='fw-bold text-lg-center'>Final Amount</h6>
                    <div className=" input-group mb-3">
                        <input autoComplete='off' minLength={1} type="text" className="form-control" onChange={onChange} id="finalamount" name="finalamount"  value={finalAmount} />
                    </div>
                </div>
            </div>


            <div className="d-flex justify-content-center">
                <button className="btn setbgYellow text-white fw-bold border-warning me-3" disabled={!input.amount || !input.interestRate || !input.months ||deposit!==''  ? true : false} >CALCULATE</button>
                <button className='btn setbgYellow text-white fw-bold border-warning' disabled={!input.amount && !input.interestRate && !input.months ? true : false} onClick={clearForm}>CLEAR</button>
            </div>
        </form>
    )
}

export default InterestCal
