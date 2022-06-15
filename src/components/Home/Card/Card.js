import { faCheckCircle, faXmarkCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Button, Card } from 'react-bootstrap';
import { useNavigate } from "react-router-dom";

const CardSection = ({cardItem}) => {
    const {title, description, price} = cardItem;
    const navigate = useNavigate();
    return (
        <>
           <Card
                bg='light'
                key='light'
                text='dark'
                style={{ width: '18rem' }}
                className={title.includes("Special")?"mx-2 mb-5":"mx-2 my-5"}
            >
                <Card.Header>{title}</Card.Header>
                {
                    description.map(item=><Card.Body key={item.title}>
                        <Card.Text>
                            {item.status ? <FontAwesomeIcon color='green' icon={faCheckCircle} /> : <FontAwesomeIcon color='red' icon={faXmarkCircle} />} <span className={!item.status ? 'text-decoration-line-through' : "text-dark"}>{item.title}</span>
                        </Card.Text>
                    </Card.Body>)
                }
                <Card.Footer>
                    <small className={ title.includes("Special") ? "fw-bold text-primary" : "text-success" }>Price: ${price}</small>
                </Card.Footer>
                <Button variant={title.includes("Special")?'outline-primary':'outline-success'} onClick={()=>navigate('/checkout',{item: {"hello":"yes"} })} >Order Now</Button>
            </Card> 
        </>
    );
};

export default CardSection;