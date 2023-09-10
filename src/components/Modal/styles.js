import styled from "styled-components";

export const Wrapper = styled.div`
  position: fixed;
  z-index: 100;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.7);
`;

export const ModalContent = styled.div`
  background-color: #fefefe;
  margin: 10% auto; /* 15% from the top and centered */
  padding: 20px;
  border: 1px solid #888;
  border-radius: 4px;
  width: 65%;
  height: auto; /* Could be more or less, depending on screen size */
`;

export const FieldArea = styled.div`
  display: flex;
  margin: 12px auto;
  padding-left: 60px;
  justify-content: start;
`;

export const Label = styled.span`
  font-weight: bold;
  margin-right: 5px;
`;

export const Value = styled.span`
  font-weight: normal;
`;

export const CloseButton = styled.button`
  height: 24px;
  width: 24px;
  border: none;
  background-color: transparent;

  &:hover {
    background-color: #ddd;
    cursor: pointer;
  }
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
`;
