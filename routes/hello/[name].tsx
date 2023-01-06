/** @jsx h */
import { h } from "preact";
import { PageProps } from "$fresh/server.ts";
import { Layout } from "../../components/layouts/Layout.tsx";
import Input from "../../islands/Input.tsx";



export default function Hello(props: PageProps) {
  let gname = 'abc'
  function handleSubmit(name:string):null {
    gname = name;
    console.log('in caller fn the name is : ', name);
  }

  return (
    <Layout
      title={`Hello ${props.params.name}`}
      description={`Hello ${props.params.name}`}
      canonical={`/hello/${props.params.name}`}
      hasFooter={true}
      hasHeader={true}
    >
      <Input onSubmit={handleSubmit} />
      <div>Hello {gname}</div>
    </Layout>
  );
}
