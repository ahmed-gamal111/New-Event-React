import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Descripton , Title ,OverviewWrapper } from './style'
import 'bootstrap/dist/css/bootstrap.min.css'


export default function Overview({icon , title ,description}) {
  return (
    <OverviewWrapper className='container'>
        <div>
            <FontAwesomeIcon color='#f2545f' size='2xl' icon={icon} />
        </div>
        <Title className='pt-3'>{title}</Title>
        <Descripton>{description}</Descripton>
    </OverviewWrapper>
  )
}
