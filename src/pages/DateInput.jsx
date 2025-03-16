import React from 'react';

const DateInput = () => {
  return (
    <div>
      {/* Date Input */}
      <input
        type="date"
        className="bg-gray-200 text-gray-800 border-2 border-blue-500 p-2 text-lg rounded-md focus:border-blue-700 focus:outline-none"
        style={{ appearance: 'none' }}
      />

      {/* OK and Cancel Buttons */}
      <div className="mt-4">
        <button className="text-purple-500 text-sm font-normal" style={{ fontFamily: 'Firago', fontSize: '13px', lineHeight: '100%' }}>
          Cancel
        </button>
        <button className="ml-4 text-purple-500 text-sm font-normal" style={{ fontFamily: 'Firago', fontSize: '13px', lineHeight: '100%' }}>
          OK
        </button>
      </div>
    </div>
  );
};

export default DateInput;