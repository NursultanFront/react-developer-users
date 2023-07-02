import React, { useState } from "react";
import { LoupeIcon } from "../../assets/home/LoupeIcon";

type Props = {
  showModalInvint: () => void;
};

const TheHeader = ({ showModalInvint }: Props) => {
  const [inputValue, setInputValue] = useState("");

  const handleInputValue = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };

  return (
    <header>
      <div className="home__header">
        <h2 className="home__title">Команда</h2>
        <div className="home__input">
          <form onSubmit={onSubmit}>
            <label className="home__label">
              <input
                type="text"
                placeholder="Поиск по Email"
                value={inputValue}
                onChange={handleInputValue}
              />
              <button type="submit" className="home__loupe">
                <LoupeIcon />
              </button>
            </label>
          </form>
          <button className="home__add-btn" onClick={showModalInvint}>
            Добавить пользователя
          </button>
        </div>
      </div>
    </header>
  );
};

export default TheHeader;
