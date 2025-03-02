import { Card, Container } from 'react-bootstrap';
import Name from './components/Name';
import Price from './components/Price';
import Description from './components/Description';
import Image from './components/Image';

const firstName = "Ken"; // Change to empty string to see the alternate message

const App = () => {
  const userImage = "https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=600";
  return (
    <Container className="d-flex flex-column justify-content-center align-items-center mt-5">
      <Card style={{ width: '500px', padding: '1rem', textAlign: 'center' }}>
        <Image />
        <Card.Body>
          <Name />
          <Price />
          <Description />
        </Card.Body>
      </Card>

      <div style={{ padding: '1rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }} >
        <h3 className="mt-4">
          {firstName ? `Hello, ${firstName}!` : "Hello, there!"}
        </h3>

        {firstName && (
          <div style={{ paddingLeft: '10px' }} >
            <img height="40" width="40" src={userImage} alt="User Profile" className="mt-3 rounded-circle" />
          </div>
        )}
      </div>


    </Container>
  );
}

export default App;
