
import React from 'react';

export default props => {
  const size = Math.round(props.dimensions.width * 0.25);

  return (
    <svg 
      width={size} height={size} 
      viewBox="0 0 500 500" 
      xmlns="http://www.w3.org/2000/svg" 
    >
 
      <g 
        transform="matrix(.87261 0 0 .87261 55.244 6.6464)" strokeWidth="1.146"
      >
        <path 
          d="m96 0c-53 0-96 49.736-96 111.04v366.82c0-58.395 43-105.77 96-105.77h328c13.3 0 24 11.789 24 26.443v-370.77c0-15.384-10.7-27.76-24-27.76z" 
          fill="#1a1a1a" 
          strokeWidth="1.146"
        />
      <g fill="#f95">
        <rect x="129.77" y="69.991" width="231.56" height="51.486" rx="19.804" ry="19.686" stroke="#000" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.292" 
        />
        <rect x="154.56" y="151.99" width="181.6" height="40.045" rx="15.531" ry="15.311" stroke="#000" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.292" 
        />
        <path 
          d="m95.694 372c-53 0-96 40.96-96 91.446v6.0726c0 50.486 43 91.446 96 91.446h328c13.3 0 24-10.192 24-22.861v-15.241c0-7.1442-3.5004-13.621-8.9004-17.812-2.2486-7.8537-3.2802-23.483-3.1211-38.567-0.1591-15.084 0.87249-30.714 3.1211-38.567 5.4-4.1913 8.9004-10.668 8.9004-17.812v-15.241c0-12.669-10.7-22.861-24-22.861zm0 60.964h285.4c-1.0366 8.8866-1.4866 21.359-1.3926 33.518-0.094 12.159 0.35598 24.632 1.3926 33.518h-285.4c-17.7 0-32-13.622-32-30.482 0-1.0245 0.0551-2.037 0.1602-3.0363-0.1051-0.99925-0.1602-2.0118-0.1602-3.0363 0-16.86 14.3-30.482 32-30.482z" 
          strokeWidth="1.146"
        />
      </g>
      <path 
        d="m106.88 390.13c-49.322 0-89.337 33.106-89.337 73.912v4.908c0 40.806 40.016 73.914 89.337 73.914h305.24c1.7956 0 3.5384-0.17899 5.2092-0.50674l1.0706-151.49c-1.9914-0.47845-4.0964-0.7388-6.2797-0.7388z" fill="#e6e6e6" 
        strokeWidth="1.146"
      />
      <g 
        fill="#333" stroke="#000" strokeLinecap="round" 
        strokeLinejoin="round" strokeWidth=".11231"
      >
        <rect 
          x="76.823" y="447.48" width="323.4" height="10.979" rx="6.4967" ry="10.979" 
        />
        <rect 
          x="77.497" y="420.43" width="323.4" height="10.979" rx="6.4967" ry="10.979" 
        />
        <rect 
          x="76.823" y="501.57" width="323.4" height="10.979" rx="6.4967" ry="10.979" 
        />
        <rect 
          x="78.171" y="474.53" width="323.4" height="10.979" rx="6.4967" ry="10.979" 
        />
      </g>
    </g>
  </svg>
  );
};
