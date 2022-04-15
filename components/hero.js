import Contents from "./contents";
import Login from "./login";
import LogoSpretor from "./logoSpretor";

  
  export default function Hero() {
    return (
      <div className="container-fluid bg-grey">
        <div className="container">
          <div className="row justify-content-center pt-3">
            <div className="col-md-4">
              <Login />
              <LogoSpretor/>

            </div>
            <Contents />
          </div>
        </div>
      </div>
    );
  }