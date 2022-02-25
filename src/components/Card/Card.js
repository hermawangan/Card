import React, { useState, useEffect } from "react";
import { Guid } from "js-guid";
import CardCompo from "../CardComponent/CardCompo";

function Card() {
  const [datas, setDatas] = useState([
    {
      title: "programming Rwanda Interface cyan Card deposit Plastic Guarani",
      cover: "http://placeimg.com/600/400/nightlife",
      summary:
        "Expedita est impedit doloribus sit sunt ipsum magnam ea. Voluptatem dolorem nam.",
      bookmarked: true,
      likes: 43,
    },
    {
      title: "Bacon Granite Tajikistan Direct Small calculating Chair",
      cover: "http://placeimg.com/600/400/nightlife",
      summary:
        "Commodi consequatur laborum accusantium iure quis. Cupiditate sit consequatur ipsa quo temporibus voluptas officiis. Sed sit beatae temporibus dolorum.",
      bookmarked: true,
      likes: 29,
    },
    {
      title: "state Self-enabling Movies",
      cover: "http://placeimg.com/600/400/nightlife",
      summary:
        "Libero facere eius aspernatur numquam officia tenetur. Veniam accusantium sunt et optio dolores libero accusantium quos. Consequatur at aut modi distinctio qui veniam eveniet neque dolorum. Atque esse odit architecto iusto. Reiciendis beatae saepe quia non aut quo. Maxime iste praesentium sed perspiciatis.",
      bookmarked: false,
      likes: 5,
    },
    {
      title: "Berkshire Loan Electronics Bacon",
      cover: "http://placeimg.com/600/400/nightlife",
      summary:
        "Enim architecto modi harum fugit. Dolor consectetur facere voluptas labore non qui exercitationem. Quia facilis voluptatem quibusdam dolor quo architecto error doloribus velit.",
      bookmarked: false,
      likes: 25,
    },
    {
      title: "Integration Sleek Awesome Plastic Bedfordshire",
      cover: "http://placeimg.com/600/400/nightlife",
      summary:
        "Qui eos dignissimos et. Sunt sunt voluptatem commodi sunt consequatur ea pariatur voluptas quasi. Quo itaque placeat. Et est a non ratione et quasi.",
      bookmarked: true,
      likes: 24,
    },
    {
      title: "Specialist Port Loaf",
      cover: "http://placeimg.com/600/400/nightlife",
      summary:
        "Velit odio magni ipsum animi corporis deserunt facere eveniet quo. Ex ducimus dolores quae et consequatur minus dolorem. Esse ducimus adipisci architecto enim eligendi et aut nihil. Sunt adipisci sit in cum laudantium. Voluptas ut perspiciatis itaque minus cupiditate.",
      bookmarked: true,
      likes: 15,
    },
    {
      title:
        "Generic Kip Forward Oklahoma B2C olive North Home Cambridgeshire Parks Home Granite",
      cover: "http://placeimg.com/600/400/nightlife",
      summary:
        "Voluptatibus consequuntur laborum consequuntur ut culpa perspiciatis aliquam. Id pariatur quod ipsam est magni quidem quam expedita voluptas. Delectus blanditiis voluptas quia hic ut iusto. Nobis cupiditate sapiente est quidem ipsam at facere quis.",
      bookmarked: false,
      likes: 2,
    },
    {
      title:
        "generate withdrawal auxiliary Usability Australian Chicken Small Squares 24/365 Gorgeous Maryland Arizona",
      cover: "http://placeimg.com/600/400/nightlife",
      summary: "Qui fugiat provident.",
      bookmarked: true,
      likes: 23,
    },
  ]);
  const newData = datas.map((data) => {
    return { ...data, id: Guid.newGuid().StringGuid, isprime: false };
  });

  useEffect(() => {
    setDatas(newData);
  }, []);

  const checkPrime = (number) => {
    if (number <= 2) {
      return false;
    } else {
      for (let i = 2; i < number; i++) {
        if (number % i === 0) {
          return false;
        }
      }
      return true;
    }
  };

  datas.forEach((element, i) => {
    const isPrime = checkPrime(i + 1);
    if (isPrime) {
      datas[i].isprime = true;
    }
  });

  return (
    <>
      <div className="container-fluid">
        <CardCompo data={datas} />
      </div>
    </>
  );
}

export default Card;
