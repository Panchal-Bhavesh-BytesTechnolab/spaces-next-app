import {Images} from "../../public/assets/index"

interface MenuItem {
  id: number;
  name: string;
  link: string;
  image: string;
}

export const Menu: MenuItem[] = [
  {
    id: 1,
    name: "Browse Venues",
    link: "/#",
    image: Images.World_Wide_Logo,
  },
  {
    id: 2,
    name: "Browse Vendors",
    link: "/#",
    image: Images.World_Wide_Logo,
  },
  {
    id: 3,
    name: "List Your Space",
    link: "/#",
    image: Images.Conversation,
  },
  {
    id: 4,
    name: "List Your Services",
    link: "/#",
    image: Images.Conversation,
  },
];
