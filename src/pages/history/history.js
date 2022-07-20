import React from 'react'
import Footer from '../../components/Module/footer'
import Navbar from '../../components/Module/navbar'
// import CardAlter from '../../components/Base/CardAlter/index'
import ButtonAlter from '../../components/Base/ButtonAlter'
import { useEffect } from 'react'
import { acceptInvitation, getHistoryHire } from '../../config/redux/actions/hireAction'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const History = () => {
    const [history, setHistory] = useState([])
    const role = localStorage.getItem('Role')
    const navigate = useNavigate()

    useEffect(() => {
        getHistoryHire(setHistory)
    }, [])

    console.log(history);
    return (
        <div>
            <Navbar />
            <div className=' container'>
                <div className='row justify-content-center'>
                    <div className='col-8 mt-5'>
                        {history && history.map((item, index) => (
                            <div className="card mt-5">
                                <div className="card-body">
                                    <h5 className="card-title">{item.companyname}</h5>
                                    <h6 className="card-subtitle mb-2 text-muted">{item.project}</h6>
                                    <p className="card-text">{item.description}</p>
                                    {item.status == '1' ? <>
                                        <ButtonAlter>Interview has been Arranged, good luck!</ButtonAlter>
                                    </> : <>
                                        <div className='d-flex'>
                                            <ButtonAlter onClick={() => {
                                                const data = {
                                                    status: '1'
                                                }
                                                acceptInvitation(data)
                                            }} className="me-2">Accept</ButtonAlter>
                                            <ButtonAlter>Reject</ButtonAlter>

                                            <ButtonAlter onClick={
                                                () => navigate('/recruiterProfile')
                                            } className="ms-2">Look Company Profile</ButtonAlter>

                                        </div>
                                    </>}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <Footer className="px-5 py-2" />
        </div>
    )
}

export default History