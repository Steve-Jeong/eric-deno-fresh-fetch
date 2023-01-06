/** @jsx h */
import { h } from "preact";
import { tw } from "@twind";
import { useEffect, useState } from "preact/hooks";

// type InputPropsType = {
//   onSubmit: (name: string) => null;
// };

export default function Input(props) {
  const [name, setName] = useState("");

  const onChange = (e) => {
    setName(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('name in handleSubmit island : ', name)
    props.onSubmit(name);
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input class={tw`border-2 border-blue-200`} type="text" name="text" onChange={onChange} placeholder="Input github username"></input>
        <button class={tw`ml-2 px-2 border-2 border-round bg-blue-500 text-white`}type="submit">Submit</button>
      </form>
    </div>
  );
}
