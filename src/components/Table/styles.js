import styled from "styled-components";

export const Wrapper = styled.div`
  background: rgba(119, 136, 153, 0.5);
  box-shadow: 0 0 12px black;
  border-radius: 6px;
  margin: 2rem 6rem 2rem 6rem;
  padding: 1rem 1.5rem;
`;

export const StyledTable = styled.table`
  border: 1px solid #e4e2db;
  background-color: #fff;
  border-radius: 2px;
  width: 100%;
  margin: 1rem auto 1rem auto;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.85);
`;

export const TD = styled.td`
  font-size: 1rem;
  padding: 0.5rem 1rem 0.5rem 1rem;
  &:not-first-child {
    border-top: 1px solid #787162;
  }

  &:nth-child(odd) {
    background: #f2f4f2;
  }
`;

export const Button = styled.button`
  border: none;
  background-color: #fff;
  height: 100%;
  font-size: 1rem;
  font-weight: 600;
`;

export const SearchButton = styled.button`
  background-color: #fff;
  border: none;
  margin-left: 1rem;
  border-radius: 4px;
  height: 28px;

  &:hover {
    background-color: #ddd;
    cursor: pointer;
  }
`;

export const DetailsButton = styled.button`
  border: none;
  background-color: #fff;
  color: darkblue;
  font-size: 0.75rem;
  font-weight: 400;
`;

export const TH = styled.th`
  height: 50px;
  justify-content: space-between;
`;

export const FlexTitle = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const FilterInput = styled.input`
  height: 24px;
  width: 180px;
`;

export const SearchDisplay = styled.div`
  display: flex;
  flex-direction: row;
`;

export const VowelDisplay = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  font-size: 0.8rem;
  margin-top: -0.5rem;
  margin-left: -0.5rem;
`;
