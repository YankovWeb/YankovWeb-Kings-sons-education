import {useState} from "react";

import RatingAtom from "../../Atoms/RatingAtom";

export default function CustomizedRating() {
  const [value, setValue] = useState(2);

  const onChangeHandler = (e) => {
    setValue(e.target.value);
    //send post request
  };

  return <RatingAtom value={value} onChangeHandler={onChangeHandler} />;
}
