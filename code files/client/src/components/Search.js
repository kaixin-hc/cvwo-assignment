import React, { useState } from 'react';
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'

// props: searchTasks
const Search = (props) => {
    const [search, setSearch] = useState({});

    const handleInputChange = event => {
        const { name, value } = event.target
        setSearch({ ...search, [name]: value })
    };

    return (
        <Form onSubmit={event => {
            event.preventDefault()
            // if (!search.title) return;
            props.searchTasks(search)
        }}>

            <div>
                <Form.Group>
                    <Form.Row>
                        <Col>
                            <Form.Label>Subject: </Form.Label>
                        </Col>
                        <Col>
                            <Form.Control name="title" value={search.title} onChange={handleInputChange} />
                        </Col>
                        <Col>
                            <Form.Label>Category</Form.Label>
                        </Col>
                        <Col>
                            <Form.Control name="category" value={search.category} onChange={handleInputChange} />
                        </Col>
                        <Col>
                            <Button variant="info" type="submit"
                            > Search! </Button>
                        </Col>
                    </Form.Row>
                </Form.Group>


            </div>
        </Form>
    )
}


export default Search;