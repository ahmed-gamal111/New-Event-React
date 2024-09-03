import 'bootstrap/dist/css/bootstrap.min.css';
import { ContactUsWrapper, Half, Input, InputWrapper, Send, Span, TextArea } from './style';

export default function ContactUs() {
    return (
    <ContactUsWrapper className="container ">
        <div className='row pt-5 ps-5'>
            <div className='col-6'>
                <span className='fs-3 fw-bold '>New<Span> Event</Span></span>
                <p className='fs-5 text-black-50 mt-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi facere vero odio aliquid a culpa minus doloremque? Cupiditate hic ex ea illum fuga praesentium tenetur asperiores eos eius, in aperiam.</p>
                <p className='fs-5 text-black-50'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sed minima eveniet doloremque consequuntur recusandae numquam cumque. Laboriosam repudiandae atque voluptatum iusto, optio dolorum amet dolore tempora soluta dignissimos recusandae nobis?</p>
                <p className='fs-5 text-black-50'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis vitae quaerat itaque suscipit quisquam quas quo eos ducimus expedita fugiat ipsum ullam voluptas, accusantium, ipsam nulla qui sint laudantium beatae.</p>
                <Send>Download</Send>
            </div>
            <Half className='col-6'>
                <div className='mt-5'>
                    <h3 className='fs-3 fw-bold mb-4'>keep in<Span> Touch</Span></h3>
                    <div className='ms-5 mt-5'>
                    <InputWrapper>
                        <Input type='name' placeholder='Name' />
                        <Input type='email' placeholder='Email' />
                        <TextArea placeholder='Message' />
                    </InputWrapper>
                    <Send className='mt-8'>Send</Send>
                    </div>
                </div>
            </Half>
        </div>
    </ContactUsWrapper>
    )
}
