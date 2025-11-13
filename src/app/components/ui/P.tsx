import React from 'react'
const baseClasses = 'text-gray-200 flex leading-relaxed'
const variants = {
  default: "text-sm md:text-base flex gap-2 text-gray-200 mb-8 leading-relaxed",
  gray:"text-gray-500 flex gap-2 text-sm md:text-base mb-6 leading-relaxed"

}

type VariantKeys = keyof typeof variants

function P({
  text,
  className,
  variant = "default",
}: {
  text: React.ReactNode
  className?: string
  variant?: VariantKeys
}) {
  return (
    <p className={`${variants[variant]} ${className} ${baseClasses}`}>
      {text}
    </p>
  )
}

export default P
