import React from "react";
import "./styles/contact.css";
// import "./index.css";
// import people from "./res/img/people.jpg";
import safety from "./res/img/safety.jpg";



const Contact = () => {
  const alerting = () => {
    alert("Thankyou for contacting us we will get help for you soon!");
  };
  return (
    <>
      <div className="m-0">
        <h1 className="text-center">Contact</h1>
        <p className="text-center">Facing any health issues? contact us immediately</p>
      </div>
      <div className="container">
        <div className="row mb-5">
          <div className="col-md-6 col-6 mx-auto border border-1 rounded p-md-5 p-4 m-0">
            <form>
              <div className="mb-3">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Name"
                  autoComplete="off"
                  autoFocus="on"
                />
              </div>
              <div className="mb-3">
                <input
                  type="email"
                  className="form-control"
                  id="exampleFormControlInput1"
                  placeholder="Email"
                  autoComplete="off"
                />
              </div>
              <div className="mb-3">
                <input
                  type="phone"
                  className="form-control"
                  id="exampleFormControlInput1"
                  placeholder="Phone Number"
                  autoComplete="off"
                />
              </div>
              <div className="mb-3">
                <input
                  type="text"
                  className="form-control"
                  id="exampleFormControlInput1"
                  placeholder="Address"
                  autoComplete="off"
                />
              </div>
              <div className="mb-3">
                <textarea
                  className="form-control"
                  id="exampleFormControlTextarea1"
                  rows="10"
                  autoComplete="off"
                  placeholder="Describe your Purpose for contacting us"
                ></textarea>
                
              </div>
              <div className="mb-3">
                <p className="text-black">Select Your State</p>
              <select name="state" id="state" class="form-control">
                <option value="Andhra Pradesh">Andhra Pradesh</option>
                <option value="Andaman and Nicobar Islmeands">Andaman and Nicobar Islands</option>
                <option value="Arunachal Pradesh">Arunachal Pradesh</option>
                <option value="Assam">Assam</option>
                <option value="Bihar">Bihar</option>
                <option value="Chandigarh">Chandigarh</option>
                <option value="Chhattisgarh">Chhattisgarh</option>
                <option value="Dadar and Nagar Haveli">Dadar and Nagar Haveli</option>
                <option value="Daman and Diu">Daman and Diu</option>
                <option value="Delhi">Delhi</option>
                <option value="Lakshadweep">Lakshadweep</option>
                <option value="Puducherry">Puducherry</option>
                <option value="Goa">Goa</option>
                <option value="Gujarat">Gujarat</option>
                <option value="Haryana">Haryana</option>
                <option value="Himachal Pradesh">Himachal Pradesh</option>
                <option value="Jammu and Kashmir">Jammu and Kashmir</option>
                <option value="Jharkhand">Jharkhand</option>
                <option value="Karnataka">Karnataka</option>
                <option value="Kerala">Kerala</option>
                <option value="Madhya Pradesh">Madhya Pradesh</option>
                <option value="Maharashtra">Maharashtra</option>
                <option value="Manipur">Manipur</option>
                <option value="Meghalaya">Meghalaya</option>
                <option value="Mizoram">Mizoram</option>
                <option value="Nagaland">Nagaland</option>
                <option value="Odisha">Odisha</option>
                <option value="Punjab">Punjab</option>
                <option value="Rajasthan">Rajasthan</option>
                <option value="Sikkim">Sikkim</option>
                <option value="Tamil Nadu">Tamil Nadu</option>
                <option value="Telangana">Telangana</option>
                <option value="Tripura">Tripura</option>
                <option value="Uttar Pradesh">Uttar Pradesh</option>
                <option value="Uttarakhand">Uttarakhand</option>
                <option value="West Bengal">West Bengal</option>
                </select>
              </div>

              <div className="mb-3">
              <p>Q. Have you come into close contact (within 6 feet) with someone who has a laboratory confirmed COVID – 19 diagnosis in the past 14 days?</p>
              <input className="mx-1" id="one"  type="radio"/> Yes
              <input  className="mx-1" id="one"  type="radio"/> No
              </div>
              <div className="mb-3">
              <p>Q. Do you have any of the following:  fever or chills, cough, shortness of breath or difficulty breathing, body aches, headache, new loss of taste or smell, sore throat?</p>
              <input  className="mx-1" id="two" type="radio"/>Yes
              <input  className="mx-1" id="two"  type="radio"/>No 
              
              </div>
              <div className="mb-3">
                <p className="">Are you facing any of these?</p>
                 <p className="text-muted">Select all applies</p>
               <ul>
                 <li> Cough  <input type="checkbox"/></li>
                 <li>Cold  <input type="checkbox"/></li>
                 <li>Problem in Breathing  <input type="checkbox"/></li>
                 <li>  Fever  <input type="checkbox"/></li>
                
              </ul>
              
      
              </div>
              <div className="container d-flex justify-content-center align-items-center">
                  <button
                    type="button"
                    className="btn_send text-center position-relative"
                    onClick={alerting}
                  >
                    Get Help Now
                  </button>
                </div>
            </form>
          </div>
          
          <div className="col-md-6 col-6 mx-auto rounded p-md-5 p-4 m-0">
            <div className="container">
              <div className="img-people mx-auto p-0">
                <img src={safety} alt="img"/>
                {/* <img src={logo} alt="img"/> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Contact;