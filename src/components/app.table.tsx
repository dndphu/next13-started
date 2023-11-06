"use client";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
interface IProps {
  blogs: IBlog[];
}
const AppTable = (props: IProps) => {
  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>Id</th>
          <th>Title</th>
          {/* <th>Content</th> */}
          <th>Author</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {props.blogs?.map((item) => (
          <tr key={item.id}>
            <td>{item.id}</td>
            <td>{item.title}</td>
            {/* <td>{item.content}</td> */}
            <td>{item.author}</td>
            <td>
              <Button>View</Button>
              <Button variant="warning" className="mx-3">Edit</Button>
              <Button variant="danger"> Delete</Button>
            </td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};
export default AppTable;
