import React from 'react'
import { Image, Span, SpanTwo, SponserWrapper } from './style'
import OurSponserData from './OurSponserData'

export default function OurSponser() {
  return (
    <SponserWrapper>
      <div className='text-center py-5'>
        <Span>Our<SpanTwo> Sponser</SpanTwo></Span>
        <p className='text-black-50 fs-5'>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
      </div>
      <div style={{ display: "flex", gap: "10rem", padding: "3rem", alignItems: "center", justifyContent: "center" }}>
        {OurSponserData.map(spon => (
          <div key={spon.id}>
            <Image src={spon.img} alt={spon.alt}  />
          </div>
        ))}
      </div>
    </SponserWrapper>
  )
}
