import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Card } from 'react-bootstrap';

const CardSection = ({cardItem}) => {
    const {title, description, price} = cardItem;
    return (
        <>
           <Card
          bg='light'
          key='light'
          text='dark'
          style={{ width: '18rem' }}
          className="m-2"
        >
          <Card.Header>{title}</Card.Header>
          <Card.Body>
            <Card.Title>Card TItle </Card.Title>
            <Card.Text>
              <FontAwesomeIcon icon={faCheckCircle} />
            </Card.Text>
          </Card.Body>
        </Card> 
        </>
    );
};

export default CardSection;