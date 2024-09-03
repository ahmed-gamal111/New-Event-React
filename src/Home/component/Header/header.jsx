import {H2, H3, HeaderWrapper, Learn, Register} from "./style"
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Header() {
  return (
    <HeaderWrapper>
        <H3>July 22 - 26 in San Fransisco , CA</H3>
        <H2>Web Design Confence</H2>
        <Learn className='text-uppercase'>Learn More</Learn>
        <Register className='text-uppercase'>register now</Register>
    </HeaderWrapper>
  )
}
