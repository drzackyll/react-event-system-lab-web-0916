// const React = require('react');
//
// class EyesOnMe extends React.Component{
//   contructor(){
//     super();
//
//     this.handleFocus = this.handleFocus.bind(this)
//     this.handleBlur = this.handleBlur.bind(this)
//   }
//     handleFocus(){
//       console.log('Good!')
//     }
//
//     handleBlur(){
//       console.log('Hey! Eyes on me!')
//     }
//
//   render(){
//     return(
//       <button onFocus={this.handleFocus} onBlur={this.handleBlur}> Eyes on me, please! </button>
//     )
//   }
// }
//
// module.exports = EyesOnMe

const React = require('react');

class EyesOnMe extends React.Component {
  constructor() {
    super();

    this.onFocus = this.onFocus.bind(this);
    this.onBlur = this.onBlur.bind(this);
  }

  onFocus() {
    console.log('Good!');
  }

  onBlur() {
    console.log('Hey! Eyes on me!');
  }

  render() {
    return (
      <button onFocus={this.onFocus} onBlur={this.onBlur} >
        Eyes on me, please!
      </button>
    );
  }
}

module.exports = EyesOnMe;
