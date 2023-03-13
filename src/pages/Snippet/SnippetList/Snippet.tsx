import { Button, Container, Table, InputGroup, Form, Dropdown, DropdownButton } from "react-bootstrap"
import withHeaderAndFooter from "../../../hoc/withHeaderAndFooter"
import { AiOutlineDelete, AiOutlineEdit, AiOutlineSearch, AiOutlineCopy } from "react-icons/ai";
import { MdOutlineClear } from "react-icons/md"
import { DATA } from "../../../lib/constants";
import { useEffect, useState } from "react";
import PaginationComponent from "../../../components/Pagination";
import { useDispatch } from "react-redux";
import { showModal } from "../../../lib/store/slices/modal";
import DeleteModalContent from "../../../components/ConfirmationModal/DeleteModalContent";
import { useNavigate } from "react-router-dom";
import styles from './Snippet.module.scss'
import { updateAlertContent } from "../../../lib/store/slices/alert";
import { copyToClipboard } from "../../../utils/copyToClipboard";
import { DataType } from "../../../lib/types";



const Snippet = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const itemsPerPage = 6;
  const [currentPage, setCurrentPage] = useState(1);
  const [filter, setFilter] = useState<string | null>('')
  const [totalPages, setTotalPages] = useState(Math.ceil(DATA.length / itemsPerPage))
  const [data, setData] = useState<DataType[]>()
  const [search, setSearch] = useState('')


  useEffect(() => {
    handleFilter()
    // eslint-disable-next-line
  }, [filter, currentPage, search])

  const handleFilter = () =>{
    let filteredData: DataType[]  = []
    if (filter || search) {
      filteredData = DATA.filter(item => (filter ? item.language === filter : true) && ( search ? item.title.toLowerCase().includes(search.toLowerCase()  ) : true
      ));
    } else {
      filteredData = DATA;
    }
    setData((filteredData.slice(
      (currentPage - 1) * itemsPerPage,
      currentPage * itemsPerPage
    )))
    data && setTotalPages(Math.ceil(filteredData.length / itemsPerPage))
  }

  const handleEdit = (item: number) => {
    navigate(`/snippetDetails/${item}/${true}`);
  }
  const rowClicked = (item: number) =>{
    navigate(`/snippetDetails/${item}/${false}`)
  }

  const handleDelete = (item: string) => {
    dispatch(showModal({
      show: true,
      title: "Delete",
      body: "Are u sure u want to delete " + item,
      footer: <DeleteModalContent />
    }))

  }
  const handleAdd = () => {
    navigate({
      pathname: '/snippetDetails'
    });
  }
  const handleSelect = (eventKey: string | null, e: React.SyntheticEvent<unknown | Event>) => {
    const filterText = (e.target as HTMLAnchorElement).textContent
    setFilter(filterText)
    setCurrentPage(1)
  }
  const handleSearch = (search: string) => {
  setSearch(search)
  setCurrentPage(1)
  }
  const copy = (code: string) => {
    copyToClipboard(code).then((success) => {
      if (success) {
        dispatch(updateAlertContent({
          state: true,
          title: 'Success',
          content: 'Data copied to clipboard!',
          type: 'success'
        }))
      } else {
        dispatch(updateAlertContent({
          state: true,
          title: 'Failed',
          content: 'Failed to copy data to clipboard!',
          type: 'danger'
        }))
      }
    });
  }

  return (
    <Container fluid className={"p-2 container mt-5 text-center"} style={{ backgroundColor: '#f8f9fa' }}>

      <div className="d-flex justify-content-between align-items-center">
        <InputGroup className="m-3">

          <InputGroup.Text><AiOutlineSearch /></InputGroup.Text>
          
          <Form.Control placeholder="Search by name..." onChange={(event) => { handleSearch(event.target.value) }} />
          <DropdownButton
            variant="outline-secondary"
            title={filter || "Filter"}
            id="input-group-dropdown-2"
            align="end"
            onSelect={handleSelect}
          >
            <Dropdown.Item href="#">plaintext</Dropdown.Item>
            <Dropdown.Item href="#">javascript</Dropdown.Item>
            <Dropdown.Item href="#">java</Dropdown.Item>
            <Dropdown.Item href="#">node-repl</Dropdown.Item>
            <Dropdown.Item href="#">c</Dropdown.Item>
            <Dropdown.Item href="#">php</Dropdown.Item>
            <Dropdown.Item href="#">python</Dropdown.Item>
          </DropdownButton>
          {filter &&
            <Button variant="primary">
              <MdOutlineClear className="mb-1" onClick={() => { setFilter(''); setCurrentPage(1) }} />
            </Button>
          }




        </InputGroup>


        <Button variant="outline-success" onClick={() => { handleAdd() }} className="m-3">
          Add
        </Button>
      </div>

     {data && data?.length >  1 ?  
      <Table bordered responsive className={"text-center " + styles.table_hover}>

        <thead>
          <tr>
            <th>Name</th>
            <th>Language</th>
            <th>#</th>
          </tr>
        </thead>
        <tbody>
          {data?.map((item, index) => (
            <tr key={item.id} >

              <td onClick={()=>{ rowClicked(item.id) }} >{item.title}</td>
              <td onClick={()=>{ rowClicked(item.id)}}>{item.language}</td>

              <td style={{ width: '200px' }}>
                <Button variant="warning" onClick={() => handleEdit(item.id)}>
                  <AiOutlineEdit />
                </Button>{" "}
                <Button variant="primary" onClick={() => copy(item.code)}>
                  <AiOutlineCopy />
                </Button>{" "}

                <Button variant="danger" onClick={() => handleDelete(item.title)}>
                  <AiOutlineDelete />
                </Button>
              </td>
            </tr>
          ))}
        </tbody>

      </Table> :  <h1> no data found </h1>  }

      <PaginationComponent pageData={data} currentPage={currentPage} totalPages={totalPages} setCurrentPage={setCurrentPage} />
    </Container >
  )
}
export default withHeaderAndFooter(Snippet)
