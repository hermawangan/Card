import React from "react";
import CardCompo from "./CardCompo";

export default {
  title: "CardComponent",
  component: CardCompo,
};

const data = [
  {
    title: "programming Rwanda Interface cyan Card deposit Plastic Guarani",
    cover: "http://placeimg.com/600/400/nightlife",
    summary:
      "Expedita est impedit doloribus sit sunt ipsum magnam ea. Voluptatem dolorem nam.",
    bookmarked: true,
    likes: 43,
    isprime: true,
  },
];

export const RenderCard = () => {
  return (
    <div>
      <CardCompo data={data} />
      <p>In this Component, The component will takes a data as a props.</p>
      <p>The props then will be loop using Arrays.map.</p>
      <p>
        If the props contains data which also contain property name isprime.
        isprime value will be boolean. if isprime value equal to true, then it
        will renders 'Ad Sponsored' in the card.
      </p>
    </div>
  );
};
