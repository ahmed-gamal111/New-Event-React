import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import {  WatchWrapper} from './style'

export default function Watch() {
  return (
    <div className='container d-flex gap-2 align-items-start'>
        <WatchWrapper className='row'>
            <div className='col-7 '>
                <span className='fs-3 text-uppercase'>watch vedio</span>
                <p className='text-black-50 mt-4 fs-6'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit libero, inventore obcaecati soluta blanditiis ullam asperiores voluptatem ipsam fugit tempora a culpa neque ipsa.</p>
                <p className='text-black-50 fs-6'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit libero, inventore obcaecati soluta blanditiis ullam asperiores voluptatem ipsam fugit tempora a culpa neque ipsa.</p>
            </div>
            <div className=' col-5'>
            <div className="ratio ratio-16x9">
            <iframe 
                src="https://www.youtube.com/embed/mR6e5GbyNfE?si=UZhb8UG5JaXC7-TD fixed" 
                title="YouTube video" 
                allowFullScreen
            >
            </iframe>
            </div>
        </div>
        </WatchWrapper>
    </div>
  )
}
