 
import p1_img from "./eye1.webp";
import p2_img from "./eye2.webp";
import p3_img from "./eye3.webp";
import p4_img from "./eye4.webp";
import p5_img from "./eye5.webp";
import p6_img from "./eye6.webp";
import p7_img from "./eye7.webp";
import p8_img from "./eye8.webp"; 
import p13_img from "./face1.webp";
import p14_img from "./face2.webp";
import p15_img from "./face3.webp";
import p16_img from "./face4.webp";
import p17_img from "./face5.webp";
import p18_img from "./face6.webp";
import p19_img from "./face7.webp";
import p20_img from "./face8.webp";
import p21_img from "./face9.webp";
import p22_img from "./face10.webp";
import p23_img from "./face11.webp";
import p24_img from "./face12.webp";
import p25_img from "./sanamaliitna (1) (1).jpg";
import p26_img from "./lips2 (1).webp";
import p27_img from "./lips3 (1).webp";
import p28_img from "./lips4 (1).webp";
import p29_img from "./lips5 (1).webp";
import p30_img from "./lips6 (1).webp";
import p31_img from "./lips7 (1).webp";
import p32_img from "./lips8 (2).webp";

let all_product = [
  {
    id: 1,
    name: "Midsummer Fairytales Embossed Five- Color Makeup Palette",
    category: "face",
    image: p1_img,
    new_price: 1245.00,
    old_price: 1265.00,
  },
  {
    id: 2,
    name: "Swan Ballet Six-Color Makeup Palette",
    category: "face",
    image: p2_img,
    new_price: 1345.00,
    old_price: 1375.00,
  },
  {
    id: 3,
    name: "Violet Strawberry Rococo Eyeshadow Palette",
    category: "face",
    image: p3_img,
    new_price: 1245.00,
    old_price: 1275.00,
  },
  {
    id: 4,
    name: "Little Angel 9-color Eyeshadow Palette",
    category: "face",
    image: p4_img,
    new_price: 1355.00,
    old_price: 1455.00,
  },
  {
    id: 5,
    name: "Midsummer Fairytales Eyebrow Palette",
    category: "face",
    image: p5_img,
    new_price: 1155.00,
    old_price: 1255.00,
  },
  {
    id: 6,
    name: "Strawberry Cupid Makeup Palette",
    category: "face",
    image: p6_img,
    new_price: 1165.00,
    old_price: 1255.00,
  },
  {
    id: 7,
    name: "Butterfly Cloud Collar Liquid Eyeliner $15.00",
    category: "face",
    image: p7_img,
    new_price: 1455.00,
    old_price: 1485.00,
  },
  {
    id: 8,
    name: "Butterfly Cloud Collar Embossed Six-Color Makeup Palette",
    category: "face",
    image: p8_img,
    new_price: 1465.00,
    old_price: 1495.00,
  },
  
  {
    id: 13,
    name: "Little Angel Embossed Highlighter",
    category: "eyes",
    image: p13_img,
    new_price: 1555.00,
    old_price: 1585.00,
  },
  {
    id: 14,
    name: "Swan Ballet Embossed Blush",
    category: "eyes",
    image: p14_img,
    new_price: 1255.00,
    old_price: 1455.00,
  },
  {
    id: 15,
    name: "Strawberry Rococo Embossed Blush",
    category: "eyes",
    image: p15_img,
    new_price: 1355.00,
    old_price: 1455.00,
  },
  {
    id: 16,
    name: "Little Angel Cream Blush",
    category: "eyes",
    image: p16_img,
    new_price:  1125.00,
    old_price: 1225.00,
  },
  {
    id: 17,
    name: "Butterfly Cloud Collar Rouge Box Highlighting & Blush Duo Powder",
    category: "eyes",
    image: p17_img,
    new_price:  1455.00,
    old_price: 1485.00,
  },
  {
    id: 18,
    name: "Strawberry Cupid All day Glow Liquid Blush",
    category: "eyes",
    image: p18_img,
    new_price: 1255.00,
    old_price: 1285.00,
  },
  {
    id: 19,
    name: "Chocolate Wonder-Shop Highlighter & Contour",
    category: "eyes",
    image: p19_img,
    new_price: 1355.00,
    old_price: 1385.00,
  },
  {
    id: 20,
    name: "Violet Strawberry Rococo Embossed Blush",
    category: "eyes",
    image: p20_img,
    new_price: 1125.00,
    old_price: 1145.00,
  },
  {
    id: 21,
    name: "Midsummer Fairytales Liquid Highlighter (Multichrome)",
    category: "eyes",
    image: p21_img,
    new_price: 1555.00,
    old_price: 1585.00,
  },
  {
    id: 22,
    name: "Strawberry Cupid Pressed Powder",
    category: "eyes",
    image: p22_img,
    new_price: 1355.00,
    old_price: 1385.00,
  },
  {
    id: 23,
    name: "Butterfly Cloud Collar Embossed Highlight & Contour Palette",
    category: "eyes",
    image: p23_img,
    new_price: 1125.00,
    old_price: 1155.00,
  },
  {
    id: 24,
    name: "Midsummer Fairytales Velvet Embossed Blush",
    category: "eyes",
    image: p24_img,
    new_price: 1125.00,
    old_price: 1155.00,
  },
  {
    id: 25,
    name: "Swan Ballet Shine Lipstick",
    category: "lips",
    image: p25_img,
    new_price: 1565.00,
    old_price: 1585.00,
  },
  {
    id: 26,
    name: "Violet Strawberry Rococo Glowy Lip Gloss ",
    category: "lips",
    image: p26_img,
    new_price: 1355.00,
    old_price: 1385.00,
  },
  {
    id: 27,
    name: "Strawberry Cupid Cake Lip Cream ",
    category: "lips",
    image: p27_img,
    new_price: 1245.00,
    old_price: 1295.00,
  },
  {
    id: 28,
    name: "Midsummer Fairytales Coating Lip ",
    category: "lips",
    image: p28_img,
    new_price: 1425.00,
    old_price: 1455.00,
  },
  {
    id: 29,
    name: "Butterfly Cloud Collar Collection Glossy Lipstick",
    category: "lips",
    image: p29_img,
    new_price: 1355.00,
    old_price: 1375.00,
  },
  {
    id: 30,
    name: "Moonlight Mermaid Jewelry Lip Gloss GE01 Nude Stellar ",
    category: "lips",
    image: p30_img,
    new_price: 1145.00,
    old_price: 1175.00,
  },
  {
    id: 31,
    name: "Little Angel Matte Lipstick",
    category: "lips",
    image: p31_img,
    new_price: 1455.00,
    old_price: 1485.00,
  },
  {
    id: 32,
    name: "Strawberry Rococo Cloud Lip Cream",
    category: "lips",
    image: p32_img,
    new_price: 1235.00,
    old_price: 1255.00,
  },

];

export default all_product;
