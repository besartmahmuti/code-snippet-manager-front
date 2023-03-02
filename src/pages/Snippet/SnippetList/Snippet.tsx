import { Button, Container, Table, InputGroup, Form, Dropdown, DropdownButton } from "react-bootstrap"
import withHeaderAndFooter from "../../../hoc/withHeaderAndFooter"
import { AiOutlineDelete, AiOutlineEdit, AiOutlineSearch } from "react-icons/ai";
import { DATA } from "../../../lib/constants";
import { useState } from "react";
import PaginationComponent from "../../../components/Pagination";
import { useDispatch } from "react-redux";
import { showModal } from "../../../lib/store/slices/modal";
import DeleteModalContent from "../../../components/ConfirmationModal/DeleteModalContent";


const Snippet = () => {
  const dispatch = useDispatch()
  const itemsPerPage = 6;
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(DATA.length / itemsPerPage);
  const pageData = DATA.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const handleEdit = (id: number) =>{}
  
  const handleDelete = (id: number) =>{
    dispatch(showModal({
      state: true,
      title: "Delete",
      body: "Are u sure u want to delete this item",
      footer: <DeleteModalContent />
    }))
  
  }

  return (
    <Container fluid className={"p-2 container mt-5 text-center"} style={{ backgroundColor :'#f8f9fa'}}>
      <div className="d-flex justify-content-between align-items-center">
            <InputGroup className="m-3">
              <InputGroup.Text><AiOutlineSearch /></InputGroup.Text>
              <Form.Control placeholder="Search..." />
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
        
           
            <Button variant="outline-success" href='/addSnippet'  className="m-3">
              Add 
            </Button>
            </div>
     
        
        <Table bordered responsive className="text-center">
         
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
              
              <td >{item.column1}</td>
              <td>{item.column2}</td>
             
              <td  style={{ width: '150px' }}>
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
   
      <PaginationComponent pageData={pageData} currentPage={currentPage} totalPages={totalPages} setCurrentPage={setCurrentPage}  />
    </Container >
  )
}
export default withHeaderAndFooter(Snippet)
