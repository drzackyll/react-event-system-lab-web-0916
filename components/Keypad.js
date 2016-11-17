// const React = require('react');
//
// class Keypad extends React.Component{
//   constructor() {
//     super();
//
//     this.enteringPassword = this.enteringPassword.bind(this)
//   }
//
//   enteringPassword(){
//     console.log("Entering password...")
//   }
//
//   render(){
//     return(
//       <input type="password" onKeyUp={this.enteringPassword}></input>
//     )
//   }
// }
//
// module.exports = Keypad

const React = require('react');

class Keypad extends React.Component {
  constructor() {
    super();

    this.handleInputPassword = this.handleInputPassword.bind(this);
  }

  handleInputPassword() {
    console.log('Entering password...');
  }

  render() {
    return (
      <div>
        <input type="password" onKeyUp={this.handleInputPassword}/>
      </div>
    );
  }
}

module.exports = Keypad;
