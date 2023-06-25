import { useState } from "react";
import Select, { ActionMeta, MultiValue, SingleValue } from "react-select";
import { options } from "../data/data";
import type { Options } from "../data/data";
type Props = {
  multi: boolean;
  getValue: (value: Options["label"][]) => void;
};

const accessList = options.filter((item) => !item.default);

const SelectComp = ({ multi, getValue }: Props) => {
  const [currentCountry, setCurrentCounrty] = useState<
    Options["label"] | MultiValue<Options> | null
  >(null);

  const onChange = (
    option: SingleValue<Options> | MultiValue<Options>,
    actionMeta: ActionMeta<Options>
  ) => {
    if (option) {
      if (multi) {
        const selectedValues = (option as MultiValue<Options>).map(
          (value) => value.label
        );

        //@ts-ignore
        setCurrentCounrty(selectedValues);
        getValue(selectedValues);
      } else {
        const selectedValue = (option as Options).label;
        setCurrentCounrty(selectedValue);
      }
    }
  };

  return (
    <Select
      onChange={onChange}
      options={accessList}
      isMulti={multi}
      classNamePrefix="react-select"
      placeholder="Выберите права доступа"
    />
  );
};

export { SelectComp };
