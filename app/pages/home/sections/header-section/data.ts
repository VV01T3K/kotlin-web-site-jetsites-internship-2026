import androidImg from "../../images/good-for/android.svg";
import mobileImg from "../../images/good-for/mobile.svg";
import serverSideImg from "../../images/good-for/server-side.svg";
import webImg from "../../images/good-for/web.svg";

export interface HeaderCard {
  id: number;
  title: string;
  subTitle: string;
  link: string;
  img: string;
}

export const cardsData = [
  {
    id: 1,
    img: mobileImg,
    link: "#",
    subTitle:
      "Share the logic of your Android and iOS apps while keeping UX native",
    title: "Multiplatform Mobile",
  },
  {
    id: 2,
    img: serverSideImg,
    link: "#",
    subTitle: "Modern development experience with familiar JVM technology",
    title: "Server-side",
  },
  {
    id: 3,
    img: webImg,
    link: "#",
    subTitle: "Extend your projects to web",
    title: "Web Frontend",
  },
  {
    id: 4,
    img: androidImg,
    link: "#",
    subTitle: "Recommended by Google for building Android apps",
    title: "Android",
  },
] satisfies HeaderCard[];
