import * as React from "react"
const circle = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" {...props}>
    <defs>
      <linearGradient id="a" x1={0} x2={1} y1={1} y2={0}>
        <stop offset="0%" stopColor="rgba(248, 117, 55, 1)" />
        <stop offset="100%" stopColor="rgba(251, 168, 31, 1)" />
      </linearGradient>
    </defs>
    <path
      fill="url(#a)"
      d="M22.9-40.3c6.6 4.5 11.6 11 14.6 18 3 7.1 3.9 14.7 3.4 22-.4 7.3-2.4 14.4-5.9 20.5-3.5 6.1-8.7 11.3-14.8 14.7-6.1 3.4-13.1 5-19.8 4.3-6.7-.6-13-3.5-18.8-7.1-5.8-3.5-11-7.8-14.7-13.3-3.7-5.5-5.9-12.1-6.2-19C-39.5-7-38-14-35.2-21.1c2.7-7.1 6.7-14.3 12.7-19 6.1-4.7 14.3-7 22.5-7 8.1.1 16.3 2.4 22.9 6.8Z"
      style={{
        transition: "all .3s ease 0s",
      }}
      transform="translate(50 50)"
    />
  </svg>
)
export default circle