import React from "react";
import { Div, Text } from "atomize";
import styled from "styled-components";
import { dashboard } from "../api";

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  & td,
  & th {
    border: 1px solid #333;
    padding: 0.5rem;
  }
`;

const InfoPanel = styled(Div)`
  border-radius: 12px;
`;

function DataDisplay() {
  const [data, setData] = React.useState([]);

  React.useEffect(() => {
    const getData = async () => {
      try {
        const data = await dashboard.getData();
        setData(data);
      } catch (err) {
        console.log(err);
      }
    };
    getData();
  }, []);

  return (
    <Div>
      <Text tag="h3" m={{ b: "1rem" }} textSize="title">
        Uploaded Files Info
      </Text>
      <InfoPanel bg="white" p="0.5rem" m={{ b: "1rem" }} shadow="4">
        <Table>
          <thead>
            <tr>
              <th>File Name</th>
              <th>Size</th>
              <th>Uploaded By</th>
            </tr>
          </thead>
          <tbody>
            {data.map((datum, index) => {
              const { fileName, createdDate, uploadedBy, size } = datum;
              return (
                <React.Fragment
                  key={`${fileName}-${createdDate}-${size}-${index}`}
                >
                  <tr>
                    <td>{fileName}</td>
                    <td>{`${Math.floor(size / 1024).toFixed(2)} kb`}</td>
                    <td>{uploadedBy}</td>
                  </tr>
                </React.Fragment>
              );
            })}
          </tbody>
        </Table>
      </InfoPanel>
    </Div>
  );
}

export default DataDisplay;
