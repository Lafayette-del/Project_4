import React from 'react'
import Form from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';

export default function ProductList() {
    return (
      <>
      <h1>Production Component</h1>
      <Form.Control type="text" placeholder="Product List" />
      <Form.Control type="text" placeholder="Product price"/>
      <Form.Select aria-label="Default select example">
        <option>Select Product Category</option>
        <option value="Study React">One</option>
        <option value="Study HTML">Two</option>
        <option value="Data Structure">Three</option>
    </Form.Select>
    <Form.Select aria-label="Default select example">
        <option>Select Product Featured </option>
        <option value="Yes">Yes</option>
        <option value="No">No</option>
    </Form.Select>
      </>
    )
}