import { useState } from "react";


const [user, setUser] = useState({
    name: "",
    surname: "",
    role: "",
  });

function Form() {
    const [user, setUser] = useState({ username: "", password: "" });
  
    const handleChange = event => {
      setUser({ ...user, [event.target.name]: event.target.value });
    };
  
    // const handleSubmit = event => {
    //   event.preventDefault();
    //   console.log(user.name);
    //   console.log(user.password);
    // };
  
    const handleSubmit = event => {
      event.preventDefault();
      setUser({ username: '', password: '' });
    };
  
    
    return (
        <div className="form-container">
        <form>
          <div>
            <h3>Contact Form</h3>
          </div>
          <div>
            <input
              type="text"
              name="name"
              placeholder="Name"
              value={contactInfo.name}
            />
          </div>
          <div>
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={contactInfo.email}
            />
          </div>
          <div>
            <input
              type="number"
              name="phonenumber"
              placeholder="Phone Number"
              value={contactInfo.phonenumber}
            />
          </div>
          <div>
            <button>Submit Contact</button>
          </div>
        </form>
      </div>
    );
  }
  
  export default Form;