import React from 'react'
import { Form, FormControl, Button } from 'react-bootstrap';

function SearchBar(props) {

    const handleChange = (e) => {
        const stringSearch = e.target.value
        // console.log(stringSearch)
        props.setSearchString(stringSearch.toLowerCase())
    }

    return (
        <div>
            <Form className="d-flex">
                <FormControl
                    type="search"
                    placeholder="Search"
                    className="me-2"
                    aria-label="Search"
                    name="search"
                    onChange={handleChange}
                />
                <Button variant="outline-success">Search</Button>
            </Form>
        </div>
    )
}

export default SearchBar