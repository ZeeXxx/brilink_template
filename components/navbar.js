import React, {useEffect} from 'react'

const Navbar = () => {
    useEffect(() => {
      const tanggal = new Date()
      const hari = tanggal.getDay()

      let hariIni =''
      switch (hari) {
          case 1:
            hariIni='Senin';
            break;
          case 2:
            hariIni='Selasa';
            break;
          case 3:
            hariIni='Rabu';
            break;
          case 4:
            hariIni='Kamis';
            break;
          case 5:
            hariIni='Jumat';
            break;
          case 6:
            hariIni='Sabtu';
            break;
          case 0:
            hariIni='Minggu';
            break;
      
          default:
              break;
      }

      let bulanIni=''
      switch (tanggal.getMonth()+1) {
        case 1:
          bulanIni='Januari';
          break;
        case 2:
          bulanIni='Februari';
          break;
        case 3:
          bulanIni='Maret';
          break;
        case 4:
          bulanIni='April';
          break;
        case 5:
          bulanIni='Mei';
          break;
        case 6:
          bulanIni='Juni';
          break;
        case 7:
          bulanIni='Juli';
          break;
        case 8:
          bulanIni='Agustus';
          break;
        case 9:
          bulanIni='September';
          break;
        case 10:
          bulanIni='Oktober';
          break;
        case 11:
          bulanIni='Nobember';
          break;
        case 12:
          bulanIni='Desember';
          break;
    
        default:
            break;
    }
      document.getElementById('day').innerText = `
        ${hariIni}, ${tanggal.getDate()} ${bulanIni} ${tanggal.getFullYear()} ${tanggal.getHours()}:${tanggal.getMinutes()}:${tanggal.getSeconds()}
    `

    }, [])
    
  return (
    <>
        <nav className="navbar navbar-expand-lg navbar-light bg-biru">
            <div className="container">
                <a className="navbar-brand logo-for-mobile" href="#">
                    <img className="logo-ib" src="https://ib.bri.co.id/ib-bri//img/logoib1rtc.jpg" width="205px" />

                </a>
                <div id="flag">
                  <a href="https://ib.bri.co.id/ib-bri/Login.html/en"><img className="flag-img" src="https://ib.bri.co.id/ib-bri/img/engflagrtc.gif" width="21px" height="12px;" /></a>
                  &nbsp;  
                  <a href="https://ib.bri.co.id/ib-bri/Login.html/id"><img className="flag-img" src="https://ib.bri.co.id/ib-bri/img/indoflag.gif" width="21px" height="12px;" /></a>
                </div>
                <div className='row'>
                    <div className='col-md-12'>
                        <div className="collapse navbar-collapse me-0" id="navbarNav">
                            <ul className="navbar-nav ms-auto">
                                <li className="nav-item">
                                    <a className="nav-link active link-a" aria-current="page" href="http://bri.co.id/">BRI Site <b className='mx-2'>|</b></a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link link-a" href="https://ib.bri.co.id/ib-bri/id/help.html">Bantuan <b className='ms-2'>|</b></a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link active link-a" aria-current="page" href="https://ib.bri.co.id/ib-bri/id/demo.html">Demo <b className='ms-2'>|</b></a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link link-a d-flex" href="https://ib.bri.co.id/ib-bri/Login.html/en">English
                                        <img src="https://ib.bri.co.id/ib-bri/img/engflag.gif" className='ms-2' width="25"/>
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div className="row text-end hidden-for-mobile" style={{marginTop:"-20px"}}>
                            <div className='col-md-12'>
                                <p id='day' className='text-light text-size14 fw-bold'></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    </>
  
  )
}

export default Navbar