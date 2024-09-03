import { OurProgramWrapper, Span, SpanTwo, } from './style';

import 'bootstrap/dist/css/bootstrap.min.css';
import Taps from './Taps';

export default function OurProgram() {
  return (
    <OurProgramWrapper className='container'>
      <div className='py-3'>
        <Span>Creative<SpanTwo> Speaker</SpanTwo></Span>
        <p className='text-black-50 fs-5'>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
      </div>
      <Taps />

    </OurProgramWrapper>
  );
}
