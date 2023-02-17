/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";

import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getSongsAction, GET_SONGS } from "../Redux/Actions";
import Song from "./Song";

const MainSearch = () => {
    const [query, setQuery] = useState('');
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const songsFromRedux = useSelector((state) => state.song.result);

    const handleChange = (e) => {
        setQuery(e.target.value)
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        dispatch(getSongsAction(query))
    }

    useEffect(() => {
        dispatch({
            type: GET_SONGS,
            payload: [],
        })  
    }, []);

    return (
        <Container>
          <Row>
            <Col xs={10} className="mx-auto my-3">
              <h1>Search Song</h1>
              <Button onClick={() => navigate('/favourites')}>Favourites</Button>
            </Col>
            <Col xs={10} className="mx-auto">
              <Form onSubmit={handleSubmit}>
                <Form.Control
                  type="search"
                  value={query}
                  onChange={handleChange}
                  placeholder="type and press Enter"
                />
              </Form>
            </Col>
            <Col xs={10} className="mx-auto mb-5">
              {songsFromRedux.map((songData) => (
                <Song key={songData._id} data={songData} />
              ))}
            </Col>
          </Row>
          {/* {applicationError && (<Alert variant="danger" className="mr-2 text-center">Oh no, error occurred!</Alert> )}
          {applicationSpinner && ( <Spinner className='mr-2' animation='border' variant='success' /> )} */}
        </Container>
      )


}

export default MainSearch