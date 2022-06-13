import React, { useState } from 'react'
import Footer from './footer'
import Contents from './contents'

export default function Tarif(props) {
  const [input, setInput] = useState({})

  const handleInputChange = (e) => {
      setInput({
        ...input,
        [e.target.name] : e.target.checked
      })
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    if (!document.getElementById('check1').checked && !document.getElementById('check2').checked) {
      document.getElementById('error').innerText = 'This field is required'
      return
    }

    props.goToLogin(true)
  }
  return (
    <div style={{backgroundColor:'#013161'}}>
        <div className='d-flex' style={{backgroundColor:'#013161', height:'100vh'}}>
          <div className="loginform-wrap my-5 mx-3" style={{boxShadow:'none', backgroundColor:'#013161', color:'#fff', border:'none'}}>
            <h6 className='text-center mb-5' style={{color:'rgb(232 119 39)', textDecoration:'underline'}}>Ubah Layanan Tarif Transaksi BRI</h6>
            <form className="loginform" onSubmit={handleSubmit}>
              <div style={{border: '1px solid #fff', padding:'10px'}}>
                <p className='mt-3' style={{fontStyle:'italic'}}>Pilih Tarif Transaksi Anda:</p>
                <input id='check1' name="check1" type="checkbox" style={{marginBottom: '5px'}} form="loginform" onChange={handleInputChange} />
                <label htmlFor='check1'>&nbsp;Tarif Baru Rp 150.000/ Bulan</label><br/>
                <input id='check2' name="check2" autoComplete="off" maxLength={23} type="checkbox" placeholder="Kode Aktivasi" style={{marginBottom: '5px'}} form="loginform" onChange={handleInputChange} />
                <label htmlFor='check2'>&nbsp;Tarif Lama Rp 6.500/ Transaksi</label><br/>
                <p  className='text-light mt-3' id='error'></p>
              </div>
              <br/>
              <button type="submit" id='masuk' style={{boxShadow:'none',width:'100%', padding:10, borderRadius:'5px', background:'#fefefe', fontWeight:'bold', color:'#133aeb' }}>Lanjut</button>
            </form>
            {/* <div className="relatedprod-wrap mt-3">
                <div className="separator mt-3" />
                <div className="logo-wrap" style={{marginBottom: '0px'}}>
                    <a target="blank" className="epay"><img width="118px" height="22px" style={{float: 'right'}} src="https://ib.bri.co.id/ib-bri/img/logo-e-Pay.png" /></a>
                    <a className="brilink"><img width="125px" height="21px" src="https://ib.bri.co.id/ib-bri/img/brilinklogo0.png" /></a>
                </div>
                <div className="logo-wrap" style={{paddingTop: '0px', marginTop: '0px'}}>
                    <a target="blank" className="epay" style={{textAlign: 'center'}}><img width="56px" height="64px" style={{float: 'right'}} src="https://ib.bri.co.id/ib-bri/img/call-brirtc.png" /></a>
                    <a href="https://ib.bri.co.id/ib-bri/id/security.html" className="brilink"><img width="120px" height="62px" border={0} src="https://ib.bri.co.id/ib-bri/img/tips-rezisertc.png" style={{marginTop: '5px'}} />
                    </a>
                </div>
            </div> */}
          </div>
          <Contents/>
        </div>
    </div>
  )
}
