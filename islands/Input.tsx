/** @jsx h */
import { h } from "preact";
import { tw } from "@twind";
import { useEffect, useState } from "preact/hooks";
import { Layout } from "../components/layouts/Layout.tsx";

// type InputPropsType = {
//   onSubmit: (name: string) => void;
// };

export default function Input(props) {
  const [gname, setGname] = useState("");
  const [fname, setFname] = useState('')
  const [user, setUser] = useState({});

  useEffect(()  => {
    async function fetchData() {
      const res = await fetch(`https://api.github.com/users/${fname}`);
      if(res.status === 404){
        setUser({})
      } else {
        const data = await res.json();
        setUser(data)
      }
    }
    fetchData()
  }, [fname]);

  const onInput = (e) => {
    setGname(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('name in Input : ', gname);
    setFname(gname)

  };

  return (
    <Layout
      // title={`Hello ${props.params.name}`}   // name때문에 오류가 난다. island로 넘어오면서 name이 초기화 되는 것 같다.
      title={`Hello ${props.name}`}
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

      <div>gname : {gname} </div>
      <div>fname : {fname} </div>
      {fname != '' ? 
        (
        <section class={tw`mt-10`}>
          <a href={user.html_url} target="_blank">
            <p class={tw`text-2xl text-center`}>Username: {user.login}</p>
            <img class={tw`m-auto border rounded shadow-md w-32 h-32`} src={user.avatar_url} alt={user.login} />
          </a>
        </section>
        ) : 
        ''}
    </Layout>
  );
}
