import { useEffect, useState } from "react";
import DataTable from "react-data-table-component";
import Flex from "../components/Flex";
import { fetchPosts } from "../utils/api";
import Box from "../components/Box";

interface Post {
  isSelected: any;
  id: number;
  title: string;
  body: string;
  userId: number;
}

const columns = [
  {
    name: "ID",
    selector: (row: Post) => row.id
  },
  {
    name: "Title",
    selector: (row: Post) => row.title
  },
  {
    name: "Body",
    selector: (row: Post) => row.body
  },
  {
    name: "User ID",
    selector: (row: Post) => row.userId
  }
];

function BlogDataTable() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [selectedPosts, setSelectedPost] = useState<Post | null>(null);
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 5;

  useEffect(() => {
    async function fetchData() {
      const data = await fetchPosts();
      setPosts(data);
    }

    fetchData();
  }, []);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  const handleReset = () => {
    setSelectedPost(null);
  };

  const handleRowClick = (row: Post) => {
    setSelectedPost(row);
  };

  // To add background color to the entire header row and to the selected rows
  const customStyles = {
    headRow: {
      style: {
        backgroundColor: "#2AAA8A",
        fontSize: "initial"
      }
    },
    rows: {
      style: {
        cursor: "pointer",
        backgroundColor: selectedPosts ? "green" : ""
      }
    }
  };

  // This will help show the selected row only and filter the results accordingly
  const filteredPosts = selectedPosts ? [selectedPosts] : posts;

  return (
    <>
      <Flex
        as="content"
        flexDirection={["column"]}
        justifyContent={["space-between"]}
        alignContent="space-between"
      >
        <DataTable
          columns={columns}
          data={filteredPosts}
          pagination
          onRowClicked={handleRowClick}
          paginationPerPage={postsPerPage}
          paginationDefaultPage={currentPage}
          onChangePage={handlePageChange}
          customStyles={customStyles}
          selectableRows={false}
          fixedHeader
        />
        {selectedPosts ?
          <Box ml={12}>
          {/* This button will reset the selected rows and user will see the entire list again */}
          <button
            style={{
              backgroundColor: "green",
              color: "white",
              fontSize: 20,
              borderRadius: 2,
              cursor: "pointer"
            }}
            onClick={handleReset}
          >
            Reset
          </button>
        </Box> : null}
      </Flex>
    </>
  );
}

export default BlogDataTable;
