import React from "react";

function MyProfile(props) {
  const { photo, firstName, lastName, birthDate, city } = props;
    
  return (
    <div>
      <h1>Мой профиль</h1>
      <img src={photo} alt="Фото профиля" />
      <p>Имя: {firstName}</p>
      <p>Фамилия: {lastName}</p>
      <p>Дата рождения: {birthDate}</p>
      <p>Город: {city}</p>
    </div>
  );
}

export default MyProfile;
