import React from 'react';
import CV from "../../assets/Aizirek Nurlanbekova_PM_CV.pdf"

export default function CTA() {
  return (
    <div className='cta'>
      <a href={CV} download={CV} className='btn'>Download CV</a>
      <a href='#contact' className='btn btn-primary'>Let's talk!</a>
    </div>
  )
}
