/** @jsx h */
import { h } from "preact";
import { PageProps } from "$fresh/server.ts";
import { Layout } from "../../components/layouts/Layout.tsx";
import Input from "../../islands/Input.tsx";
import {useState} from 'preact/hooks'

export default function Hello(props: PageProps) {
  console.log('props in Hello : ',  props)

  function handleClick(some : string) {
    console.log('something from handleClick callback function : ', some)
  }

  return (
    <div>
      <Input name='Steve Sangtae Jeong' onClick={handleClick}/>
    </div>
  );
}
