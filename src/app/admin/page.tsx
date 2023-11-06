"use client";

import Button from "react-bootstrap/Button";
import styles from "./page.module.css";
import { useRouter } from "next/navigation";
import Table from "react-bootstrap/Table";

const AminPage = () => {
  const router = useRouter();
  const onBackHome = () => {
    router.push("/");
  };
  return (
    <>
      <div>
        <span className={styles.title}>Phu toi choi ne</span>
        <div>
          <Button onClick={() => onBackHome()} variant="outline-primary">
            Back Home
          </Button>{" "}
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>#</th>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Username</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>Mark</td>
                <td>Otto</td>
                <td>@mdo</td>
              </tr>
              <tr>
                <td>2</td>
                <td>Jacob</td>
                <td>Thornton</td>
                <td>@fat</td>
              </tr>
              <tr>
                <td>3</td>
                <td colSpan={2}>Larry the Bird</td>
                <td>@twitter</td>
              </tr>
            </tbody>
          </Table>
        </div>
      </div>
    </>
  );
};
export default AminPage;
