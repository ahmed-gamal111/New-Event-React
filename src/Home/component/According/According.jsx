import 'bootstrap/dist/css/bootstrap.min.css'
import { AccordingSwitch, AccordingWrapper, H, Span, SpanTwo, Title, Wrapper } from './style'
import AccordingData from './AccordingData'
import { useState } from 'react'



export default function According() {
    const [active , setactive] =useState(null)

    const toggele = (i) =>{
        if(active===i){
            return (
                setactive(null)
            )
        }
        setactive(i)
    }

    return (
    <div className='container p-5'>
        <div className='pb-5'>
        <div className='text-center py-5'>
        <Span>Do You Have<SpanTwo> Question</SpanTwo>?</Span>
        <p className='text-black-50 fs-5'>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
        </div>
        </div>
    {AccordingData.map((item , i) =>{
        return(

        <Wrapper>
                <AccordingWrapper key={i} onClick={()=>toggele(i)}>
            <Title>
                <H className='fs-3'>{item.Qeustion}</H>
                <span>{active===i ? "-" : "+" }</span>
            </Title>
            <AccordingSwitch className={active===i ? "show" : ""}>
            <p className='text-black-50'>{item.TitelOne}</p>
            <p className='text-black-50'>{item.TitelTwo}</p>
            </AccordingSwitch>
                </AccordingWrapper>
        </Wrapper>
        )
    } )}
    </div>
  )
}
