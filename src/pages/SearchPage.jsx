import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  Button,
  Card,
  CardBody,
  CardText,
  CardTitle,
  Col,
  Container,
  Input,
  InputGroup,
  Row,
} from "reactstrap";
import { search, selectNasaData } from "../redux/features/dataSlice";

const SearchPage = () => {
  const dispatch = useDispatch();

  const [searchValue, setSearchValue] = useState();
  console.log(searchValue)

  const handleSearch = () => {
    dispatch(search(searchValue));
  };

  const data = useSelector(selectNasaData);
  var allData = data?.collection?.items || [];
  console.log(allData.map(e=>e?.links?.[0]?.href));

  return (
    <Container style={{ margin: "20px" }}>
      <Card>
        <CardBody>
          <InputGroup>
            <Input
              type="text"
              onChange={(e) => setSearchValue(e.target.value)}
            />
            <Button onClick={handleSearch}>Search!</Button>
          </InputGroup>
        </CardBody>
      </Card>
      <Row>
        {allData?.map((data, index) => (
          <Col lg={4} key={index}>
            <Card style={{ height: "300px" }}>
              <img src={data?.links?.[0]?.href} style={{maxHeight:'250px'}} alt="images" />
              <CardBody>
                <CardTitle>{data.data[0].title}</CardTitle>
              </CardBody>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default SearchPage;
