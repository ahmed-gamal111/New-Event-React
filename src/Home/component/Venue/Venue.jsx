import 'bootstrap/dist/css/bootstrap.min.css';
import { H, P, Span, VenueWrapper } from './style';
export default function Venue() {
    return (
    <VenueWrapper className='container'>
        <div className='ps-5 pt-5'>
        <H className='fs-3 fw-bold'>Venue</H>
        <P className="text-white-50 mt-4 fs-5">Lorem ipsum dolor sit amet, 
            consectetur adipisicing elit. Eum id enim nulla sit expedita aperiam velit cumque mollitia asperiores accusantium dolore.</P>
        <Span>New Event</Span>
        <Span>120 Market Street , Suitte 210</Span>
        <Span>San Fracisco , CA 10100</Span>
        <Span>Tel : 111-00-1-1-000</Span>
        </div>
    </VenueWrapper>
    )
}
