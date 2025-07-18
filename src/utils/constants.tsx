
import { GiCompass, GiDiamondHard, GiStabbedNote } from "react-icons/gi";
import { GrHomeRounded } from "react-icons/gr";
import { CgGift } from "react-icons/cg";
import { FaRegQuestionCircle } from "react-icons/fa";
// For the value of nav bar
export const links = [
  {
    id: 1,
    text: "home",
    url: "/home",
    icon: <GrHomeRounded color="#ab7b60"/>,
  },
  {
    id: 2,
    text: "about",
    url: "/about",
    icon: <FaRegQuestionCircle style={{}} color="#ab7b60" size={38} />
  },
  {
    id: 3,
    text: "products",
    url: "/products",
    icon: <CgGift color="#ab7b60" />
  },
];

// For the value of services part
export const services = [
  {
    id: 1,
    icon: <GiCompass />,
    title: "mission",
    text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptates, ea. Perferendis corrupti reiciendis nesciunt rerum velit autem unde numquam nisi",
  },
  {
    id: 2,
    icon: <GiDiamondHard />,
    title: "vision",
    text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptates, ea. Perferendis corrupti reiciendis nesciunt rerum velit autem unde numquam nisi",
  },
  {
    id: 3,
    icon: <GiStabbedNote />,
    title: "history",
    text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptates, ea. Perferendis corrupti reiciendis nesciunt rerum velit autem unde numquam nisi",
  },
];

// For the API from the instructor
export const products_url = "https://course-api.com/react-store-products";

export const single_product_url = `https://course-api.com/react-store-single-product?id=`;
