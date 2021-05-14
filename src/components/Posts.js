import React, {useContext} from "react";
import UsersData from "./context";

export default function Posts() {
  var [name, age, color] = "";
  const { dispatch } = useContext(UsersData);

  function addUser() {
    dispatch({ payload: [name.value, age.value, color.value] });
  }

  return (
    <div>
      <input placeholder="Введите имя" ref={ref => name = ref} />
      <input placeholder="Введите возраст" ref={ref => age = ref} />
      <input placeholder="Введите цвет" ref={ref => color = ref} />
      <div>
        <button onClick={(el) => addUser()}>Добавить</button>
      </div>
    </div>
  );
}