
import {Form, FormWrapper, H4, Register, RegisterWrapper, Span, SpanTwo} from './style'
import 'bootstrap/dist/css/bootstrap.min.css';


export default function RegisterPage() {
  return (
    <RegisterWrapper className='container'>
        <div className='row'>
            <div className='col-7 '>
                <Span>Register<SpanTwo> Here</SpanTwo></Span>
                <H4 className='mt-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga ipsa quibusdam reiciendis voluptates cum culpa repellat.</H4>
                <p className='text-white-50'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate perferendis reiciendis labore accusamus iure? Eum enim molestias delectus, qui eius laboriosam incidunt explicabo 
                dicta sed atque, neque dolore fugiat modi?</p>
            </div>
            <FormWrapper className='col-5'>
                <Form type="text" placeholder='First Name'/>
                <Form type="text" placeholder='Last Name'/>
                <Form type="number" placeholder='Phone Number'/>
                <Form type="email" placeholder='Email Address' />
                <Register className="mt-3 ms-4 align-self-center">Register</Register>
            </FormWrapper>
        </div>
    </RegisterWrapper>
  )
}
