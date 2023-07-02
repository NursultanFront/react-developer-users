import { Fragment, useEffect } from "react";
import { options } from "../../data/data";
import { Dropdown } from "semantic-ui-react";

type Props = {
  closeAdvance: () => void;
};

const UserAccessChange = ({ closeAdvance }: Props) => {
  useEffect(() => {
    window.addEventListener("click", () => {
      closeAdvance();
    });

    return () => {
      window.removeEventListener("click", () => {
        closeAdvance();
      });
    };
  }, [closeAdvance]);

  return (
    <>
      <Dropdown icon={false}>
        <Dropdown.Menu open className="menu-reset access-menu">
          <form className="user-dropdown">
            {options.map((item) => {
              return (
                <label
                  key={item.label}
                  htmlFor={item.value}
                  className="user-dropdown__access"
                >
                  <input
                    type="checkbox"
                    id={item.value}
                    onChange={() => console.log("lolka")}
                  />
                  <span>{item.label}</span>
                </label>
              );
            })}
          </form>
        </Dropdown.Menu>
      </Dropdown>
    </>
  );
};

export { UserAccessChange };
