import { Col, Row } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import Reviews from "./Reviews";

const Home = () => {
  return (
    <div>
      <section>
        <img
          style={{
            width: "100%",
            height: "90vh",
            objectFit: "cover",
            objectPosition: "0% 79%",
          }}
          src="https://images.unsplash.com/photo-1518604666860-9ed391f76460?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt=""
        />
      </section>
      <section className="my-5">
        <h1 className="text-center my-5">Welcome</h1>
        <Row className="container-fluid">
          <Col md={4}>
            <Card
              className="w-100 shadow"
              style={{ width: "20rem", margin: "0 auto" }}
            >
              <Card.Img
                variant="top"
                src="https://plus.unsplash.com/premium_photo-1676634832558-6654a134e920?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              />
              <Card.Body>
                <Card.Title>24 / 7</Card.Title>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card
              className="w-100 shadow"
              style={{ width: "20rem", margin: "0 auto" }}
            >
              <Card.Img
                variant="top"
                src="https://images.unsplash.com/photo-1535131749006-b7f58c99034b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              />
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card
              className="w-100 shadow"
              style={{ width: "20rem", margin: "0 auto" }}
            >
              <Card.Img
                variant="top"
                src="https://images.unsplash.com/photo-1624880357913-a8539238245b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              />
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </section>
      <Reviews />
    </div>
  );
};
export default Home;