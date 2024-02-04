import * as React from "react"
const circle2 = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" {...props}>
    <defs>
      <linearGradient id="a" x1={0} x2={1} y1={1} y2={0}>
        <stop offset="0%" stopColor="rgba(248, 117, 55, 1)" />
        <stop offset="100%" stopColor="rgba(251, 168, 31, 1)" />
      </linearGradient>
    </defs>
    <path
      fill="url(#a)"
      d="M27.9-.3C27.9 13.2 14 26.5-.2 26.5c-14.2 0-28.6-13.3-28.6-26.8S-14.4-27.6-.2-27.6C14-27.6 27.9-13.8 27.9-.3Z"
      transform="translate(50 50)"
    />
  </svg>
)
export default circle2
