import { useState, useEffect } from "react";
import styles from "./List_items.module.css";
import { Switch } from "@mui/material";
const TypeSBN = (props) => {
  const [value, setValue] = useState(props.name);
  const [focus, setFocus] = useState(false);
  const [required, setRequired] = useState(props.required);
  const [type, setType] = useState(props.type);
  
  const onFocus = (e) => {
    setFocus(true);
  };

  const onChange = (e) => {
    setValue(e.target.value);
  };
  
  const onBlur = (e) => {
    setFocus(false);
  };
  
  const onChangeRequired = (e) => {
    setRequired((prev) => !prev);
  };
  
  const onTypeChange = (e) => {
    setType(e.target.value);
  };
  
  useEffect(() => {
    if (
      props.name !== value ||
      props.required !== required ||
      props.type !== type
    ) {
      props.updateFields(props.id, props.uid, value, type, required);
    }
  }, [value, required, type]);
  
  return (
    <div className={styles.main}>
      <div className={styles.main__left}>
        <input
          onFocus={onFocus}
          onBlur={onBlur}
          className={
            styles.main__left__input +
            " " +
            (focus ? styles.main__left__input__focus : "")
          }
          type="text"
          value={value}
          onChange={onChange}
        ></input>
        <select
          value={type}
          onChange={onTypeChange}
          name="datatype"
          id="datatype"
          className={styles.main__left__select}
        >
          <option value="string">STRING</option>
          <option value="number">NUMBER</option>
          <option value="boolean">BOOLEAN</option>
          <option value="object">OBJECT</option>
        </select>
      </div>
      <div className={styles.main__right}>
        <span className={styles.text__black}>Required</span>
        <Switch
          checked={required}
          onChange={onChangeRequired}
          size="small"
        />
        {/* <button className={styles["main__right__add"]}>+</button> */}
        <div
          onClick={() => props.deleteField(props.id)}
          className={styles.delete__container}
        >
          <img src="/delete.png"></img>
        </div>
      </div>
    </div>
  );
};

export default TypeSBN;
