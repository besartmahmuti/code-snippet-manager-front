import { Button, Container, Table, InputGroup, Form, Dropdown, DropdownButton, Pagination } from "react-bootstrap"
import withHeaderAndFooter from "../../hoc/withHeaderAndFooter"
import { AiOutlineDelete, AiOutlineEdit, AiOutlineSearch } from "react-icons/ai";
import { DATA } from "../../lib/constants";
import { useState } from "react";


const Snippet = () => {
  const itemsPerPage = 5;
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(DATA.length / itemsPerPage);
  const handleEdit = (id: number) =>{

  }
  const handleDelete = (id: number) =>{

  }
  const pageData = DATA.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );
  return (
    <Container fluid className={"p-0 container mt-5"}>
      <div className="d-flex justify-content-between align-items-center">
            <InputGroup className="m-3">
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
        
           
            <Button variant="outline-success"  className="m-3">
              Add 
            </Button>
            </div>
     
        
        <Table bordered responsive>
         
        <thead>
          <tr>
            <th>Name</th>
            <th>Language</th>
            <th>#</th>
          </tr>
        </thead>
        <tbody>
        {pageData.map((item, index) => (
            <tr key={item.id}>
              
              <td>{item.column1}</td>
              <td>{item.column2}</td>
             
              <td>
                <Button variant="warning" onClick={() => handleEdit(item.id)}>
                  <AiOutlineEdit />
                </Button>{" "}
                <Button variant="danger" onClick={() => handleDelete(item.id)}>
                <AiOutlineDelete/ >
                </Button>
              </td>
            </tr>
          ))}
      </tbody>
        
      </Table>
   
    <div className="d-flex justify-content-between align-items-center">
      <div>
        Showing {pageData.length} of {DATA.length} entries
      </div>
      <Pagination>
        <Pagination.First
          onClick={() => setCurrentPage(1)}
          disabled={currentPage === 1}
        />
        <Pagination.Prev
          onClick={() => setCurrentPage(currentPage - 1)}
          disabled={currentPage === 1}
        />
        {Array.from({ length: totalPages }, (_, index) => (
          <Pagination.Item
            key={index}
            active={index + 1 === currentPage}
            onClick={() => setCurrentPage(index + 1)}
          >
            {index + 1}
          </Pagination.Item>
        ))}
        <Pagination.Next
          onClick={() => setCurrentPage(currentPage + 1)}
          disabled={currentPage === totalPages}
        />
        <Pagination.Last
          onClick={() => setCurrentPage(totalPages)}
          disabled={currentPage === totalPages}
        />
      </Pagination>
    </div>
    </Container >
  )
}
export default withHeaderAndFooter(Snippet)
