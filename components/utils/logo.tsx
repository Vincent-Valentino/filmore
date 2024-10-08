import React from 'react'

const Logo: React.FC = () => (
  <svg className="w-10 h-10" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="50" cy="50" r="45" stroke="currentColor" strokeWidth="10"/>
    <path d="M30 30L70 70M30 70L70 30" stroke="currentColor" strokeWidth="10" strokeLinecap="round"/>
  </svg>
)

export default Logo;