import React from 'react';

class ComingSoon extends React.Component {
  render() {
    const containerStyle = {
      margin: 0,
      padding: 0,
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100vh',
      backgroundColor: 'black',
    };

    const textStyle = {
      fontSize: '48px',
      color: 'white',
      animation: 'hop 1s infinite alternate',
    };

    return (
      <div style={containerStyle}>
        <div style={textStyle}>Com<span style={{animation: 'hop 1s infinite alternate'}}>i</span>ng Soon...</div>
      </div>
    );
  }
}

export default ComingSoon;
