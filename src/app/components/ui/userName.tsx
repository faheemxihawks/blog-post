import React from 'react'
const baseClasses = ' flex leading-relaxed'


function UserName({
  text,
  className,
}: {
  text: React.ReactNode
  className?: string
}) {
  return (
    <span className={`text-[#FF5E5E] font-semibold ${className} ${baseClasses}`}>
      {text}
    </span>
  )
}

export default UserName
