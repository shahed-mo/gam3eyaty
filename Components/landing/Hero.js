import React from 'react'

const Hero = ({span,header,par}) => {
  return (
    <div className="flex flex-col items-center text-center max-w-2xl mx-auto mb-space-xl">
        <span className="font-label-lg text-label-lg text-secondary font-bold uppercase tracking-wider">{span}</span>
        <h2 className="font-headline-lg text-headline-lg text-primary mt-1">{header}</h2>
        <p className="font-body-md text-body-md text-on-surface-variant mt-2">{par}</p>
</div>
  )
}

export default Hero