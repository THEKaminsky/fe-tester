import * as s from "./styles";
import { Cross1Icon } from "@radix-ui/react-icons";

const Modal = ({ employee, onClose }) => {
  const { id, employee_name, employee_salary, employee_age } = employee;
  return (
    <s.Wrapper onClick={onClose}>
      <s.ModalContent>
        <s.Header>
          <h2>Employee Details</h2>
          <s.CloseButton onClick={onClose}>
            <Cross1Icon />
          </s.CloseButton>
        </s.Header>

        <s.FieldArea>
          <s.Label>ID:</s.Label>
          <s.Value>{id}</s.Value>
        </s.FieldArea>
        <s.FieldArea>
          <s.Label>Employee Name:</s.Label>
          <s.Value>{employee_name}</s.Value>
        </s.FieldArea>
        <s.FieldArea>
          <s.Label>Employee Salary:</s.Label>
          <s.Value>{employee_salary}</s.Value>
        </s.FieldArea>
        <s.FieldArea>
          <s.Label>Employee Age:</s.Label>
          <s.Value>{employee_age}</s.Value>
        </s.FieldArea>
      </s.ModalContent>
    </s.Wrapper>
  );
};

export default Modal;
