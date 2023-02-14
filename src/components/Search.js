import { useState, useEffect } from "react";
import { Stack } from "react-bootstrap";
import Cards from "./Cards";
import { Dropdown } from "react-bootstrap";
import { Form } from "react-bootstrap";
import { Row } from "react-bootstrap";
import { Col } from "react-bootstrap";
const Search = () => {
  const [search, setSearch] = useState([]);
  const [input, setInput] = useState("");
  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then((res) => res.json())
      .then((data) => {
        setSearch(data);
        console.log(data);
      });
  }, []);
  const searchHandler = (e) => {
    e.preventDefault();
    setInput(e.target.value);
  };

  return (
    <>
      <Stack direction="horizontal" className="container">
        <Form className="container">
          <Row>
            <Col>
              <Form.Control
                type="text"
                placeholder="Search Here..."
                value={input}
                onChange={searchHandler}
              />
            </Col>
          </Row>
        </Form>
        <Dropdown>
          <Dropdown.Toggle variant="secondary" id="dropdown-basic">
            Dropdown Button
          </Dropdown.Toggle>

          <Dropdown.Menu>
            <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
            <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
            <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </Stack>
      <div className="container">
        {search?.map((t, index) => {
          return (
            <div key={index}>
              <Cards t={t} />
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Search;
