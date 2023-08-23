import React from 'react';

const Message = ({ varient = 'danger', text }) => {
  return (
    <div className={`alert alert-${varient}`} role='alert'>
      {text}
    </div>
  );
};

export default Message;
