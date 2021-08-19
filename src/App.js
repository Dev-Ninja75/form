import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import logo from "./logo.svg";
import "./App.css";

const reg= /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
      rememberMe: false,
      emailIsValid: false,
      passwordIsValid: false,
      isSubmitted: false,
    };
  }

  
  //Saisie d'adresse mail

  handleEmailChange = (e) => {
    this.setState({ email: e.target.value, 
                    emailIsValid: reg.test(e.target.value)})
    console.log(this.state);
    
  };

  //Saisie Mot de passe

  handlePasswordChange = (e) => {
    // console.log(e);
    this.setState({ password: e.target.value,
                    passwordIsValid: (e.target.value.length>5) });
    console.log(this.state);
  };

  //Se rappler de User ID
  handleRememberMeChange = (e) => {
    console.log(e);
    this.setState({ rememberMe: e.target.value });
  };

  //Validation ID "True or False"
  handleSubmit = (e) => {

  };

  render() {
    return (
      <>
        <p> Sofiane.ab@gmail.com... {this.state.email}</p>
        <form onSubmit={this.onFormSubmit}>
          <input 
            type="email" 
            onChange={this.handleEmailChange}
            value= {this.state.email} />

          <input
            type="password"
            onChange={this.handlePasswordChange}
            value= {this.state.password}
          />
          
           <button 
            type="submit" 
            onChange={this.handlePasswordChange}
            value= {this.state.password}>
            Validation email adress 
            
          </button>

          
        </form>
      </>
    );
  }
}

export default App;
