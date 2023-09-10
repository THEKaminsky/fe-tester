import { useEffect, useState } from "react";
import _ from "lodash";
import { ArrowUpIcon, ArrowDownIcon } from "@radix-ui/react-icons";
import * as s from "./styles";
import Modal from "../Modal/Modal";
const EMPLOYEES = [
  {
    id: 1,
    employee_name: "Tiger Nixon",
    employee_salary: 320800,
    employee_age: 61,
    profile_image: "",
  },
  {
    id: 2,
    employee_name: "Garrett Winters",
    employee_salary: 170750,
    employee_age: 63,
    profile_image: "",
  },
  {
    id: 3,
    employee_name: "Ashton Cox",
    employee_salary: 86000,
    employee_age: 66,
    profile_image: "",
  },
  {
    id: 4,
    employee_name: "Cedric Kelly",
    employee_salary: 433060,
    employee_age: 22,
    profile_image: "",
  },
  {
    id: 5,
    employee_name: "Airi Satou",
    employee_salary: 162700,
    employee_age: 33,
    profile_image: "",
  },
  {
    id: 6,
    employee_name: "Brielle Williamson",
    employee_salary: 372000,
    employee_age: 61,
    profile_image: "",
  },
  {
    id: 7,
    employee_name: "Herrod Chandler",
    employee_salary: 137500,
    employee_age: 59,
    profile_image: "",
  },
  {
    id: 8,
    employee_name: "Rhona Davidson",
    employee_salary: 327900,
    employee_age: 55,
    profile_image: "",
  },
  {
    id: 9,
    employee_name: "Colleen Hurst",
    employee_salary: 205500,
    employee_age: 39,
    profile_image: "",
  },
  {
    id: 10,
    employee_name: "Sonya Frost",
    employee_salary: 103600,
    employee_age: 23,
    profile_image: "",
  },
  {
    id: 11,
    employee_name: "Jena Gaines",
    employee_salary: 90560,
    employee_age: 30,
    profile_image: "",
  },
  {
    id: 12,
    employee_name: "Quinn Flynn",
    employee_salary: 342000,
    employee_age: 22,
    profile_image: "",
  },
  {
    id: 13,
    employee_name: "Charde Marshall",
    employee_salary: 470600,
    employee_age: 36,
    profile_image: "",
  },
  {
    id: 14,
    employee_name: "Haley Kennedy",
    employee_salary: 313500,
    employee_age: 43,
    profile_image: "",
  },
  {
    id: 15,
    employee_name: "Tatyana Fitzpatrick",
    employee_salary: 385750,
    employee_age: 19,
    profile_image: "",
  },
  {
    id: 16,
    employee_name: "Michael Silva",
    employee_salary: 198500,
    employee_age: 66,
    profile_image: "",
  },
  {
    id: 17,
    employee_name: "Paul Byrd",
    employee_salary: 725000,
    employee_age: 64,
    profile_image: "",
  },
  {
    id: 18,
    employee_name: "Gloria Little",
    employee_salary: 237500,
    employee_age: 59,
    profile_image: "",
  },
  {
    id: 19,
    employee_name: "Bradley Greer",
    employee_salary: 132000,
    employee_age: 41,
    profile_image: "",
  },
  {
    id: 20,
    employee_name: "Dai Rios",
    employee_salary: 217500,
    employee_age: 35,
    profile_image: "",
  },
  {
    id: 21,
    employee_name: "Jenette Caldwell",
    employee_salary: 345000,
    employee_age: 30,
    profile_image: "",
  },
  {
    id: 22,
    employee_name: "Yuri Berry",
    employee_salary: 675000,
    employee_age: 40,
    profile_image: "",
  },
  {
    id: 23,
    employee_name: "Caesar Vance",
    employee_salary: 106450,
    employee_age: 21,
    profile_image: "",
  },
  {
    id: 24,
    employee_name: "Doris Wilder",
    employee_salary: 85600,
    employee_age: 23,
    profile_image: "",
  },
];

const Table = ({ apiEmployees }) => {
  const [employees, setEmployees] = useState(EMPLOYEES);
  const [showModal, setShowModal] = useState(false);
  const [modalEmployee, setModalEmployee] = useState(null);
  const [idSearch, setIdSearch] = useState(null);
  const [empVowelDisplay, setEmpVowelDisplay] = useState(null);
  const headers = Object.keys(EMPLOYEES[0]);

  const handleSort = (key, sort) => {
    const compare = (a, b) => {
      if (a < b) {
        return -1;
      }
      if (a > b) {
        return 1;
      }
      return 0;
    };

    const sortedEmps = employees.sort((a, b) =>
      sort === "asc" ? compare(a[key], b[key]) : compare(b[key], a[key])
    );
    setEmployees(() => [...sortedEmps]);
  };

  const handleFilter = (val) => {
    let filtered;
    console.log("val", val, typeof Number(val));
    typeof Number(val) == "number"
      ? (filtered = EMPLOYEES.filter((emp) =>
          emp.employee_salary.toString().includes(val)
        ))
      : (filtered = EMPLOYEES.filter((emp) =>
          emp.employee_name.toLowerCase().includes(val.toLowerCase())
        ));
    console.log("filtered", filtered);
    setEmployees(filtered);
  };

  const handleVowelSearch = () => {
    const emp = EMPLOYEES[idSearch - 1] || false;
    if (emp) {
      emp.employee_name[0].match(/[aeiou]/gi)
        ? setEmpVowelDisplay("Employee name DOES start with a vowel")
        : setEmpVowelDisplay("Employee name DOES NOT start with a vowel");
    } else {
      setEmpVowelDisplay("Invalid Employee");
    }
  };

  return (
    <s.Wrapper>
      <s.FlexTitle>
        <h3>EMPLOYEES</h3>
        <div>
          <s.SearchDisplay>
            <s.FilterInput
              type="text"
              placeholder="Employee ID Check"
              onChange={(e) => setIdSearch(e.target.value)}
            />
            <s.SearchButton onClick={() => handleVowelSearch()}>
              {" "}
              Search Names{" "}
            </s.SearchButton>
          </s.SearchDisplay>
        </div>
        <s.FilterInput
          type="text"
          placeholder="Filter by Name or Salary"
          onChange={(e) => handleFilter(e.target.value)}
        />
      </s.FlexTitle>
      {empVowelDisplay && <s.VowelDisplay>{empVowelDisplay}</s.VowelDisplay>}

      <s.StyledTable>
        {headers.map((key, index) => (
          <s.TH id={index}>
            <s.Button onClick={() => handleSort(key, "asc")}>
              <ArrowUpIcon />
            </s.Button>
            {_.startCase(key)}
            <s.Button onClick={() => handleSort(key, "dsc")}>
              <ArrowDownIcon />
            </s.Button>
          </s.TH>
        ))}
        <tbody>
          {employees.map((emp, index) => {
            return (
              <tr key={`${emp.id}-${index}`}>
                <s.TD>{emp.id}</s.TD>
                <s.TD>{emp.employee_name}</s.TD>
                <s.TD>{emp.employee_salary}</s.TD>
                <s.TD>{emp.employee_age}</s.TD>
                <s.TD>{emp.profile_image || "-"}</s.TD>
                <s.TD>
                  <s.DetailsButton
                    onClick={() => {
                      setModalEmployee(emp);
                      setShowModal(true);
                    }}
                  >
                    Details &gt;
                  </s.DetailsButton>
                </s.TD>
              </tr>
            );
          })}
        </tbody>
      </s.StyledTable>
      {showModal && (
        <Modal employee={modalEmployee} onClose={() => setShowModal(false)} />
      )}
    </s.Wrapper>
  );
};

export default Table;
