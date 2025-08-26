import { Images } from "../../public/assets";
export const accountOptions = [
  {
    id: "seaker",
    title: "Seaker",
    description: "You need to host an event",
    image: Images.Speaker_Image,
    redirectTo: "/login",
  },
  {
    id: "host",
    title: "Host",
    description: "List a space for events or occasions",
    image: Images.Host_Image,
    redirectTo: "/login",
  },
  {
    id: "vendor",
    title: "Vendor",
    description: "List a service for bookings",
    image: Images.Vendor_Image,
    redirectTo: "/login",
  },
];
