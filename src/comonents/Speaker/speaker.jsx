import React from 'react';
import { Span, SpanTwo, SpeakerWrapper } from './style';
import 'bootstrap/dist/css/bootstrap.min.css';
import Slider from './slider';

export default function Speaker() {
  return (
    <SpeakerWrapper className='container-fluid p-5'>
      <div className='text-center py-5'>
        <Span>Creative<SpanTwo> Speaker</SpanTwo></Span>
        <p className='text-black-50 fs-5'>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
      </div>
    <div>
      <Slider className=' m-0' />
    </div>
    </SpeakerWrapper>
  );
}
