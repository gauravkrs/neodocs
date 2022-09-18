import React, { useEffect, useState } from "react";
import Style from "./nested.module.css";

export const Nested = () => {
  const data = [
    { value: "Student1" },
    { value: "Student2" },
    { value: "Student3" },
    { value: "Student4" },
  ];
  const [student, setStudent] = useState([]);
  const [student2, setStudent2] = useState([]);
  const [student3, setStudent3] = useState([]);
  const [student4, setStudent4] = useState([]);
  const [student5, setStudent5] = useState([]);
  const [details, setDetails] = useState([]);

  useEffect(() => {
    setStudent(data);
    setStudent2(data);
    setStudent3(data);
    setStudent4(data);
    setStudent5(data);
  }, []);

  const handleChange = (e) => {
    const { name, checked } = e.target;

    if (name === "Teacher1") {
      let tempStudent = student.map((el) => {
        return { ...el, isChecked: checked };
      });
      setStudent(tempStudent);
      setDetails({ ...details, tempStudent, [name]: checked });
    } else {
      let tempStudent = student.map((el) =>
        el.value === name ? { ...el, isChecked: checked } : el
      );
      setStudent(tempStudent);
      setDetails({ ...details, [name]: checked });
    }

    console.log(details);
  };
  const handleChange2 = (e) => {
    const { name, checked } = e.target;
    if (name === "Teacher2") {
      let tempStudent = student2.map((el) => {
        return { ...el, isChecked: checked };
      });
      setStudent2(tempStudent);
    } else {
      let tempStudent = student2.map((el) =>
        el.value === name ? { ...el, isChecked: checked } : el
      );
      setStudent2(tempStudent);
    }

    // console.log(name, checked);
  };
  const handleChange3 = (e) => {
    const { name, checked } = e.target;
    if (name === "Teacher3") {
      let tempStudent = student3.map((el) => {
        return { ...el, isChecked: checked };
      });
      setStudent3(tempStudent);
    } else {
      let tempStudent = student3.map((el) =>
        el.value === name ? { ...el, isChecked: checked } : el
      );
      setStudent3(tempStudent);
    }

    // console.log(name, checked);
  };
  const handleChange4 = (e) => {
    const { name, checked } = e.target;
    if (name === "Teacher4") {
      let tempStudent = student4.map((el) => {
        return { ...el, isChecked: checked };
      });
      setStudent4(tempStudent);
    } else {
      let tempStudent = student4.map((el) =>
        el.value === name ? { ...el, isChecked: checked } : el
      );
      setStudent4(tempStudent);
    }

    // console.log(name, checked);
  };
  const handleChange5 = (e) => {
    const { name, checked } = e.target;
    if (name === "Teacher5") {
      let tempStudent = student5.map((el) => {
        return { ...el, isChecked: checked };
      });
      setStudent5(tempStudent);
    } else {
      let tempStudent = student5.map((el) =>
        el.value === name ? { ...el, isChecked: checked } : el
      );
      setStudent5(tempStudent);
    }

    // console.log(name, checked);
  };
  //   console.log(details);

  return (
    <div>
      <h2>Nested Check Box</h2>
      <div className={Style.container}>
        <div>
          <input
            type="checkbox"
            name="Teacher1"
            checked={student.filter((el) => el?.isChecked !== true).length < 1}
            onChange={handleChange}
          />
          <span>Teacher1</span>
          {student.map((el, index) => (
            <div key={index} className={Style.student}>
              <input
                type="checkbox"
                name={el.value}
                checked={el?.isChecked || false}
                onChange={handleChange}
              />
              <span>{el.value}</span>
            </div>
          ))}
        </div>
        <div>
          <input
            type="checkbox"
            name="Teacher2"
            checked={student2.filter((el) => el?.isChecked !== true).length < 1}
            onChange={handleChange2}
          />
          <span>Teacher2</span>
          {student2.map((el, index) => (
            <div key={index} className={Style.student}>
              <input
                type="checkbox"
                name={el.value}
                checked={el?.isChecked || false}
                onChange={handleChange2}
              />
              <span>{el.value}</span>
            </div>
          ))}
        </div>
        <div>
          <input
            type="checkbox"
            name="Teacher3"
            onChange={handleChange3}
            checked={student3.filter((el) => el?.isChecked !== true).length < 1}
          />
          <span>Teacher3</span>
          {student3.map((el, index) => (
            <div key={index} className={Style.student}>
              <input
                type="checkbox"
                name={el.value}
                onChange={handleChange3}
                checked={el?.isChecked || false}
                id=""
              />
              <span>{el.value}</span>
            </div>
          ))}
        </div>
        <div>
          <input
            type="checkbox"
            name="Teacher4"
            onChange={handleChange4}
            checked={student4.filter((el) => el?.isChecked !== true).length < 1}
          />
          <span>Teacher4</span>
          {student4.map((el, index) => (
            <div key={index} className={Style.student}>
              <input
                type="checkbox"
                name={el.value}
                onChange={handleChange4}
                checked={el?.isChecked || false}
                id=""
              />
              <span>{el.value}</span>
            </div>
          ))}
        </div>
        <div>
          <input
            type="checkbox"
            name="Teacher5"
            value="Teacher5"
            onChange={handleChange5}
            checked={student5.filter((el) => el?.isChecked !== true).length < 1}
            id=""
          />
          <span>Teacher5</span>
          {student5.map((el, index) => (
            <div key={index} className={Style.student}>
              <input
                type="checkbox"
                name={el.value}
                onChange={handleChange5}
                checked={el?.isChecked || false}
              />
              <span>{el.value}</span>
            </div>
          ))}
        </div>
      </div>

      {/* <div>
        {details.map((el, i) => (
          <div>
            <h3>{}</h3>
          </div>
        ))}
      </div> */}
    </div>
  );
};
