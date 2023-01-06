/** @jsx h */
import { h } from "preact";
import { PageProps } from "$fresh/server.ts";
import { Layout } from "../../components/layouts/Layout.tsx";
import Input from "../../islands/Input.tsx";

export default function Hello(props: PageProps) {
  console.log('props in Hello : ', props)
  return (
    <div>
      <Input props={props} />
    </div>
  );
}