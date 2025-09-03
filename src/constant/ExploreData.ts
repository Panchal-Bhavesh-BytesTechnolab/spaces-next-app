import { Images } from "../../public/assets/index";
import { StaticImageData } from "next/image";

export type Category = {
  id: number;
  name: string;
};

export type EventItem = {
  id: number;
  title: string;
  subtitle: string;
  image: string | StaticImageData;
};

export const categories: Category[] = [
  { id: 1, name: "Party Event" },
  { id: 2, name: "Wedding Events" },
  { id: 3, name: "Studio Spaces" },
  { id: 4, name: "Lounge & Bars" },
  { id: 5, name: "Business Spaces" },
  { id: 6, name: "Creative Venues" },
];

export const eventsByCategory: Record<string, EventItem[]> = {
  "Party Event": [
    {
      id: 1,
      title: "Birthday Party",
      subtitle: "Creative Spaces",
      image: Images.Carousel_First,
    },
    {
      id: 2,
      title: "Baby Shower",
      subtitle: "Creative Spaces",
      image: Images.Carousel_Second,
    },
    {
      id: 3,
      title: "Day Party",
      subtitle: "Creative Spaces",
      image: Images.Carousel_Third,
    },
    {
      id: 4,
      title: "Dinner Party",
      subtitle: "Creative Spaces",
      image: Images.Carousel_Fourth,
    },
    {
      id: 5,
      title: "Birthday Party",
      subtitle: "Creative Spaces",
      image: Images.Carousel_First,
    },
    {
      id: 6,
      title: "Baby Shower",
      subtitle: "Creative Spaces",
      image: Images.Carousel_Second,
    },
    {
      id: 7,
      title: "Day Party",
      subtitle: "Creative Spaces",
      image: Images.Carousel_Third,
    },
    {
      id: 8,
      title: "Dinner Party",
      subtitle: "Creative Spaces",
      image: Images.Carousel_Fourth,
    },
  ],
  "Wedding Events": [
    {
      id: 5,
      title: "Birthday Party",
      subtitle: "Creative Spaces",
      image: Images.Carousel_First,
    },
  ],
  "Studio Spaces": [
    {
      id: 6,
      title: "Baby Shower",
      subtitle: "Creative Spaces",
      image: Images.Carousel_Second,
    },
  ],
  "Lounge & Bars": [
    {
      id: 7,
      title: "Day Party",
      subtitle: "Creative Spaces",
      image: Images.Carousel_Third,
    },
  ],
  "Business Spaces": [
    {
      id: 8,
      title: "Dinner Party",
      subtitle: "Creative Spaces",
      image: Images.Carousel_Fourth,
    },
  ],
  "Creative Venues": [
    {
      id: 9,
      title: "Dinner Party",
      subtitle: "Creative Spaces",
      image: Images.Carousel_Fourth,
    },
  ],
};
