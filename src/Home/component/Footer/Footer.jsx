import 'bootstrap/dist/css/bootstrap.min.css';
import { FooterWrapper, Li, Span, Ul } from './style';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBehance, faDribbble, faFacebookF, faGoogle, faTwitter } from '@fortawesome/free-brands-svg-icons';


export default function Footer() {
  return (
    <FooterWrapper className='container'>
        <div>
            <p className='fs-5 text-black-50'>Copyright @ 2024 Your Company ! Design  <Span className='fw-bold'> Ahmed Gamal</Span> </p>
        </div>
        <div>
        <Ul className='mt-5' style={{ listStyleType: "none", paddingLeft: 0  }}>
            <Li  >
                <FontAwesomeIcon icon={faFacebookF} />
            </Li>
            <Li >
                <FontAwesomeIcon icon={faTwitter} />
            </Li>
            <Li >
                <FontAwesomeIcon icon={faGoogle} />
            </Li>
            <Li >
                <FontAwesomeIcon icon={faBehance} />
            </Li>
            <Li >
                <FontAwesomeIcon icon={faDribbble} />
            </Li>
        </Ul>
        </div>
    </FooterWrapper>
  )
}
