import React from 'react';
import {Card} from 'react-bootstrap';
import '../App.css';
import qualityLogo from '../Asset/images/guarantee.gif';
import innovationLogo from '../Asset/images/trust.gif';
import reliabilityLogo from '../Asset/images/check-circle.gif';
import commitmentLogo from '../Asset/images/people.gif';

export const HomeCard = () => {
  return <div>
     
<div className="card">
  

<Card className="text-center" style={{ width: '18rem'}}>
  <Card.Body>
      <img src={qualityLogo} alt="quality" style={{width:'80px'}}/>
    <Card.Title>Quality</Card.Title>
   
    <Card.Text style={{color:'grey'}}>
    As the UK’s largest supplier of the Asian food market, we have a passion for the delivery of high quality produce.
    </Card.Text>

  </Card.Body>
</Card>

<Card className="text-center" style={{ width: '18rem' }}>
  <Card.Body>
  <img src={innovationLogo} alt="innovation" style={{width:'80px'}}/>
    <Card.Title>Innovation</Card.Title>
   
    <Card.Text>
    We lead the industry with innovation in products and services to ensure ongoing, loyal customer relationships .
    </Card.Text>

  </Card.Body>
</Card>

<Card className="text-center" style={{ width: '18rem' }}>
  <Card.Body>
  <img src={reliabilityLogo} alt="reliability" style={{width:'80px'}}/>
    <Card.Title>Reliability</Card.Title>
    <Card.Text>
    We work in an honest and trustworthy manner to gain and maintain the respect of our customers.
    </Card.Text>

  </Card.Body>
</Card>

<Card className="text-center" style={{ width: '18rem' }}>
  <Card.Body>
  <img src={commitmentLogo} alt="commitment" style={{width:'80px'}}/>
    <Card.Title>Commitment</Card.Title>
   
    <Card.Text>
    We promise to fulfil our customer’s needs and engage with their views to help improve our services for everyone.
    </Card.Text>

  </Card.Body>
</Card>
</div>
 
  </div>;
};
