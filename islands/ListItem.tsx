/** @jsx h */
import { h } from "preact";
import { tw } from "@twind";
import { useState, useEffect } from "preact/hooks";

interface Posts {
  item: {
    id: number;
    title: string;
    body: string;
    userId: number;
  };
}

export default function ListItem({ item }: Posts) {
  const { id, title } = item;
  const randomColor = "#" + ((Math.random() * 0xffffff) << 0).toString(16);
  const [bgColor, setBgColor] = useState(randomColor);

  useEffect(() => {
    if (!bgColor) {
      setBgColor(randomColor);
    }
  }, []);

  return (
    <li
      class={tw`block pl-2 pr-2 pt-2 pb-2 my-2 border-l-4 border-[${bgColor}] hover:(border-l-8 pl-1)`}
    >
      <a href={`/post/${bgColor.substring(1)}/${id}`}>
        <div>{title}</div>
      </a>
    </li>
  );
}
