import { Button, Container, Row, Table, InputGroup, Form, Dropdown, DropdownButton } from "react-bootstrap"
import withHeaderAndFooter from "../../hoc/withHeaderAndFooter"
import { AiOutlineDelete, AiOutlineEdit, AiOutlineSearch } from "react-icons/ai";


const Snippet = () => {
  return (
    <Container fluid className={"p-0 container mt-5"}>
     
      <Row className="m-0">
        <Table bordered responsive>
          <thead>
          <tr>
            <th colSpan={2}>
            <InputGroup className="mb-3">
              <InputGroup.Text><AiOutlineSearch /></InputGroup.Text>
              <Form.Control aria-label="Amount (to the nearest dollar)" />
              <DropdownButton
                variant="outline-secondary"
                title="Filter"
                id="input-group-dropdown-2"
                align="end"
              >
                <Dropdown.Item href="#">Action</Dropdown.Item>
                <Dropdown.Item href="#">Another action</Dropdown.Item>
                <Dropdown.Item href="#">Something else here</Dropdown.Item>
                <Dropdown.Divider />
                <Dropdown.Item href="#">Separated link</Dropdown.Item>
              </DropdownButton>
            </InputGroup>
            
            </th>
            <th>
            <Button variant="outline-success"  className="ml-4 buttonMargin">
              Add new 
            </Button>
            </th>
            </tr>
        
        </thead>
        <thead>
          <tr>
            <th>Name</th>
            <th>Language</th>
            <th>#</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>Mark</td>
            <td>
            <Button className="m-1 mb-0 mt-0" variant="outline-primary"> <AiOutlineEdit /> </Button>
              <Button  variant="outline-danger"> <AiOutlineDelete /> </Button>
              
            </td>

          </tr>
          <tr>
            <td>2</td>
            <td>Jacob</td>
            <td>  <Button className="m-1 mb-0 mt-0" variant="outline-primary"> <AiOutlineEdit /> </Button>
              <Button  variant="outline-danger"> <AiOutlineDelete /> </Button></td>

          </tr>

        </tbody>
      </Table>
    </Row>

    </Container >
  )
}
export default withHeaderAndFooter(Snippet)
