import styles from "./Main.module.css";
import TypeSBN from "../ListItem/List_items";
import { useEffect, useState } from "react";
import uuid from "react-uuid";
const Main = () => {
  const [fields, setFields] = useState([
    {
      uid: uuid(),
      name: "addName",
      type: "string",
      required: true,
    },
  ]);

  const addNewField = () => {
    setFields((fields) => {
      const newFields = [...fields];
      newFields.push({
        uid: uuid(),
        name: "addName",
        type: "string",
        required: true,
      });
      return newFields;
    });
  };

  const updateFields = (id, uid, name, type, required) => {
    setFields((fields) => {
      const newFields = [...fields];
      newFields[id] = { uid, name, type, required };
      return newFields;
    });
  };

  const deleteField = (id) => {
    setFields((fields) => {
      const newFields = [...fields];
      newFields.splice(id, 1);
      return newFields;
    });
  };

  const printToConsole = () => {
    console.log(fields);
  };

  return (
    <div className={styles["main-container"]}>
      <div className={styles["container"]}>
        <div className={styles["main"]}>
          <div className={styles["main__header"]}>
            <span className={styles["main__header__title"]}>Field name and type</span>
            <button
              onClick={addNewField}
              className={styles["main__header__add"]}
            >
              +
            </button>
          </div>
          <div className={styles["main__body"]}>
            <ol>
              {fields.map((field, index) => (
                <li key={field.uid}>
                  <TypeSBN
                    updateFields={updateFields}
                    deleteField={deleteField}
                    // key={index}
                    uid={field.uid}
                    id={index}
                    name={field.name}
                    type={field.type}
                    required={field.required}
                  />
                </li>
              ))}
            </ol>
          </div>
        </div>
      </div>
      <button onClick={printToConsole} className={styles.main__btn}>
        Save
      </button>
    </div>
  );
};

export default Main;
