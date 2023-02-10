import React, { useState } from 'react';

// export default class ToggleSwitch extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = { isToggled: false };
//     this.handleClick = this.handleClick.bind(this);
//   }

//   handleClick() {
//     this.setState({ isToggled: !this.state.isToggled });
//   }

//   render() {
//     if (!this.state.isToggled) {
//       return (
//         <div onClick={this.handleClick}>
//           <button className="button-off">
//             <button className='toggle-off' />
//           </button>
//           <span>OFF</span>
//         </div>
//       );
//     } else {
//       return (
//         <div onClick={this.handleClick}>
//           <button className="button-on">
//             <button className='toggle-on' />
//           </button>
//           <span>ON</span>
//         </div>
//       );
//     }
//   }
// }

function Toggle() {
  const [toggle, setToggle] = useState(false);
  const toggleClass = ' transform translate-x-6';
  return (
    <div className='flex justify-center'>
      <h3>Sign-In</h3>
      <div className="md:w-14 md:h-7 flex items-center bg-blue-300 rounded-full p-1 cursor-pointer"
          onClick={() => {
            setToggle(!toggle);
          }}
        >
        <div className={'bg-black md:w-6 md:h-6 h-5 w-5 rounded-full shadow-md transform duration-300 ease-in-out' +
              (toggle ? null : toggleClass)
            }
           />
      </div>
      <h3>Sign-Up</h3>
    </div>
  );
}

export default Toggle;
