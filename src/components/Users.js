import React, {useContext} from "react";
import UsersData from "./context";
import {styles} from "./styles";

export default function Users() {
  const { state } = useContext(UsersData);
  return (
    <div>
      {state.data.map(t => (
        <div style={styles.card}>
          <div style={styles.pcard}>
            <h1>Имя:</h1> <p>{t[0]}</p>
          </div>
          <div style={styles.pcard}>
            <h1>Возраст:</h1> <p>{t[1]}</p>
          </div>
          <div style={styles.pcard}>
            <h1>Цвет:</h1> <p>{t[2]}</p>
          </div>
        </div>
      ))}
    </div>
  );
}