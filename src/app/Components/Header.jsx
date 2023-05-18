import React from 'react'
import { Navbar,Container } from 'react-bootstrap'
export default function Header() {
  return (
    <Navbar expand="lg" bg="dark" variant="dark">
    <Container>
      <Navbar.Brand href="#">Navbar</Navbar.Brand>
    </Container>
  </Navbar>
  )
}
