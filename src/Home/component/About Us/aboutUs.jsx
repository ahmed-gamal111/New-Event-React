import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import photo from "../../../Shared/aseets/speakers/work-01.jpg"
import { AboutUsWrapper} from './style'

export default function AboutUs() {
  return (
    <div className='container d-flex gap-2 align-items-start'>
        <AboutUsWrapper className='row'>
            <div className='col-7 '>
                <span className='fs-3 '>New Event is a fully responsive one page templete for event , conference and workshop.</span>
                <p className='text-black-50 mt-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit libero, inventore obcaecati soluta blanditiis ullam asperiores voluptatem ipsam fugit tempora a culpa neque ipsa.</p>
                <p className='text-black-50'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit libero, inventore obcaecati soluta blanditiis ullam asperiores voluptatem ipsam fugit tempora a culpa neque ipsa.</p>
            </div>
            <div className='col-5'>
                <img src={photo} width="110%" alt="About Us" />
            </div>
        </AboutUsWrapper>
    </div>
  )
}
