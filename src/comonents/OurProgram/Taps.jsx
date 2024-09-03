import React, { useState } from 'react';
import { faClock, faMapMarker } from '@fortawesome/free-solid-svg-icons';
import { ImageWrapper, Image, IconWrapper, Title, Wrapper, SpanTap, Line } from './style';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { tap3, tab1, tap2 } from './OurProgramData';

export default function Taps() {
  const [currentTab, setTab] = useState("tab1");

  const switchTap = (newTab) => {
    setTab(newTab); 
  };

  const renderContent = () => {
    if (currentTab === "tab1") {
      return tab1;
    } else if (currentTab === "tab2") {
      return tap2;
    } else if (currentTab === "tab3") {
      return tap3;
    } else {
      return [];
    }
  };
  

  return (
    <div>
        <Wrapper className='mb-4'>
            <SpanTap 
            onClick={() => switchTap("tab1")} 
            isActive={currentTab === "tab1"}
            >
            First Day
            </SpanTap>
            <SpanTap 
            onClick={() => switchTap("tab2")} 
            isActive={currentTab === "tab2"}
            >
            Second Day
            </SpanTap>
            <SpanTap 
            onClick={() => switchTap("tab3")} 
            isActive={currentTab === "tab3"}
            >
            Last Day
            </SpanTap>
            <Line />
        </Wrapper>

      <div>
        {renderContent().map((our, index) => (
          <div key={index} style={{ display: 'flex', marginBottom: '20px', alignItems: 'center' }}>
            <ImageWrapper style={{ flex: '0 0 150px' }}>
              <Image src={our.img} alt={our.alt} style={{ width: '100%', height: 'auto' }} />
            </ImageWrapper>
            <div style={{ marginLeft: '50px', flex: '1' }}>
              <IconWrapper>
                <div>
                  <FontAwesomeIcon size='xs' icon={faClock} /> {our.time}
                </div>
                <div>
                  <FontAwesomeIcon size='xs' icon={faMapMarker} /> Room {our.roomNumber}
                </div>
              </IconWrapper>
              <Title>{our.title}</Title>
              <span>{our.name}</span>
              <p>{our.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
