import React from 'react';
// import Toggle from './toggle';

export default class LogInPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isToggled: false };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState({ isToggled: !this.state.isToggled });
  }

  render() {
    return (
      <div className='container background-blue'>
        <div className='row'>
          <div className='column-half background-blue height center'>
            <img src="https://media.istockphoto.com/id/1156402718/vector/group-tourists-hikers-with-backpacks-taking-selfie-photo-on-smartphone-camera-hiking-concept.jpg?s=612x612&w=0&k=20&c=HrKJfnzl3fNIhQFQlrJJStyuV8csd4gg3c67o0NTgco=" alt="friends" />
            <h1 className='center text-5xl'>Welcome to Link</h1>
            <h3 className='text-sm px-20 py-6 text-gray-600'>An application that allows travelers to connect with each other. Use Link to find new travel buddies, tour guides, or even roommates.</h3>
          </div>
          <div className='column-half center mt-44'>
            {/* <Toggle onClick={this.handleClick} /> */}
            <span className='square shadow-lg shadow-black-500 border-b-4'>
              <div className="flex flex-col">
                <h1 className='text-2xl'>Become a Linker</h1>
                <input type="text" placeholder='Username' className='my-2 rounded-full h-10 w-[16rem] px-4 text-black outline-none border-b-2' />
                <input type="email" placeholder='Email Address' className='my-2 rounded-full h-10 w-[16rem] px-4 text-black outline-none border-b-2' />
                <input type="password" placeholder='Password' className='my-2 rounded-full h-10 w-[16rem] px-4 text-black outline-none border-b-2' />
                <input type="password" placeholder='Confirm Password' className='my-2 rounded-full h-10 w-[16rem] px-4 text-black outline-none border-b-2' />
                <button className='my-5 rounded-full h-10 w-[16rem] px-4 bg-blue-300 hover:bg-blue-400 hover:text-white'>Sign Up</button>
              </div>
            </span>
            <span>
              <div>
                <h3>Have an account? <button className='text-blue-500'>Log In</button></h3>
              </div>
            </span>
          </div>
        </div>
      </div>
    );
  }
}
