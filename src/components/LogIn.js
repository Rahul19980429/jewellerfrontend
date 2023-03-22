import React, { useEffect } from 'react'
import Form from '../components/LogInForm'
import { useNavigate } from 'react-router-dom';

const LogIn = () => {
    const navigate = useNavigate();
    useEffect(() => {
        // localStorage.removeItem('userEmail');
        // localStorage.removeItem('userId');
        // localStorage.removeItem('userName');
        if (localStorage.getItem('J_token')) {
            // if (localStorage.getItem('activeStatus') !== 'true') {
            //     localStorage.removeItem('token');
            //     localStorage.removeItem('superadmin')
            //     localStorage.removeItem('user')
            //     localStorage.removeItem('activeStatus')

            navigate('/')
            // }
            // else{
            //     navigate('/')
        }

        else {
            navigate('/login');
        }

    }, [])
    return (
        <div className='container mt-5'>
            <div className='row px-4'>
                <div className='col-lg-4 offset-lg-4'>
                    <div className='card border-warning '>
                        <div className='card-body p-5'>
                            <h2 className='text-center text-warning mb-5'>LOGIN</h2>
                            <Form />
                        </div>
                    </div>

                </div>
                <div className='col-12  fixed-bottom text-warning  opacity-75'>
                    <div className='row'>
                        <div className='col-lg-6'>
                        <h5 className='mb-0'> Developed By- Rahul soni</h5>
                        </div>
                        <div className='col-lg-6'>
                        <h5 className=' float-lg-end '> For any query, contact +91 9729001793</h5>
                        </div>
                    </div>
                    
                    
                </div>
            </div>

        </div>
    )
}

export default LogIn
