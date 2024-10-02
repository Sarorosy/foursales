import React from 'react';
import PropTypes from 'prop-types';

export default function WavyLine({ width = 800, height = 50, color = 'black' }) {
  return (
    <svg width={width} height={height} viewBox={`0 0 ${width} ${height}`} preserveAspectRatio="none">
      <path
        d={`
          M0,25
          C33.33,0 66.66,50 100,25
          C133.33,0 166.66,50 200,25
          C233.33,0 266.66,50 300,25
          C333.33,0 366.66,50 400,25
          C433.33,0 466.66,50 500,25
          C533.33,0 566.66,50 600,25
          C633.33,0 666.66,50 700,25
          C733.33,0 766.66,50 800,25
        `}
        fill="none"
        stroke={color}
        strokeWidth="4"
      />
    </svg>
  );
}

// Define prop types for validation
WavyLine.propTypes = {
  width: PropTypes.number,
  height: PropTypes.number,
  color: PropTypes.string,
};
