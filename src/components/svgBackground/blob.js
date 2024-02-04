import * as React from "react"
const blob = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" {...props}>
    <defs>
      <linearGradient id="a" x1={0} x2={1} y1={1} y2={0}>
        <stop offset="0%" stopColor="rgba(255, 66, 44, 1)" />
        <stop offset="100%" stopColor="rgba(251, 168, 31, 1)" />
      </linearGradient>
    </defs>
    <path
      fill="url(#a)"
      d="M15.9-25.2c6.5 4.8 15 6 20.5 10.7 5.5 4.7 8 13 4.5 18.7-3.4 5.7-12.8 8.8-18.8 14.1-5.9 5.3-8.4 12.6-13.1 15.5-4.8 2.9-11.8 1.4-18.1-1.2-6.3-2.5-11.8-6.1-15.2-11-3.3-4.9-4.6-11.1-6.5-17.8-1.9-6.7-4.5-13.9-2.3-19 2.1-5.2 9.1-8.2 15.5-13.1C-11.3-33.2-5.7-40-.5-39.2c5.1.8 9.8 9.2 16.4 14Z"
      style={{
        transition: "all .3s ease 0s",
      }}
      transform="translate(50 50)"
    />
  </svg>
)
export default blob