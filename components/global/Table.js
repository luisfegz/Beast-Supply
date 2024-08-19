import styled from "styled-components";

const StyledTable = styled.table`
  width: 100%;
  th{
    text-align: left;
    text-transform: uppercase;
    color: #ccc;
    font-weight: 600;
    font-size: .7rem;
  }
  td{
    border-top: 0.1px solid rgba(90,90,90,0.9);
  }
`;

export default function Table(props) {
  return <StyledTable {...props} />
}