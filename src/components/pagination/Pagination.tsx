import React from 'react'
import { Pagination } from 'react-bootstrap'
import { DATA } from '../../lib/constants'
import { DataType } from '../../lib/types'
interface Props {
  pageData?: DataType[],
  currentPage: number,
  totalPages: number,
  setCurrentPage:  React.Dispatch<React.SetStateAction<number>>
}

const PaginationComponent: React.FC<Props> = ({pageData, currentPage , totalPages, setCurrentPage}) => {



  return (
    <div className="d-flex justify-content-between align-items-center">
      <div>
        Showing {pageData?.length} of {DATA.length} entries
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
  )

}

export default PaginationComponent
