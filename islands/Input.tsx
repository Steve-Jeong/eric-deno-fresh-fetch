/** @jsx h */
import { h } from "preact";
import { tw } from "@twind";
import { useEffect, useState } from "preact/hooks";
import { Layout } from "../components/layouts/Layout.tsx";

// type InputPropsType = {
//   onSubmit: (name: string) => null;
// };

export default function Input(props) {
  const [gname, setGname] = useState("");

  console.log('props in Input :', props);

  const onInput = (e) => {
    setGname(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <Layout
      // title={`Hello ${props.params.name}`}   // name때문에 오류가 난다. island로 넘어오면서 name이 초기화 되는 것 같다.
      title={`Hello `}
      description={`Hello `}
      canonical={`/hello/`}
      hasFooter={true}
      hasHeader={true}
    >
      <form onSubmit={handleSubmit}>
        <input
          class={tw`border-2 border-blue-200`}
          type="text"
          name="text"
          onInput={onInput}
          placeholder="Input github username"
        >
        </input>
        <button
          class={tw`ml-2 px-2 border-2 border-round bg-blue-500 text-white`}
          type="submit"
        >
          Submit
        </button>
      </form> 
  
      <div>Hello {gname}</div>
    </Layout>
  );
}
