import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function Card1(props) 
{
  let product = [
    {
      title :'iphone',
      price : 50000
    },
    {
      title :'samsung',
      price :50000
    },
    {
      title :'hawavi',
      price :50000
    },
    {
      title :'oppo',
      price :50000
    },
    {
      title :'vivo',
      price :30000
    },
  ]
 
  return (

    <div className="Container">
      <div className="row mt-5">
      {
        product.map((products)=>
        {
         return<Card1 title={products.title} price={products.price}></Card1>
       })
      }
     

    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="holder.js/100px180" />
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text> {props.price} </Card.Text>
        <Button variant="primary">Add to Cart</Button>
      </Card.Body>
    </Card>
  </div>
</div>
  );
}

export default Card1;