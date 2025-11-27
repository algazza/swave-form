import logo from "@/assets/logo.png";
import bunniez from "@/assets/BUNNIEZ.png";
import deadClown from "@/assets/DEAD CLOWN 510.png";
import noFace from "@/assets/NO FACE 3012.png";
import serenata from "@/assets/SERENATA 24.png";
import shiver from "@/assets/SHIVER COLORCODE.png";

export const classArray = [
  "Lainnya",
  "X PS 1",
  "X PS 2",
  "X LK 1",
  "X LK 2",
  "X TJKT 1",
  "X TJKT 2",
  "X DKV 1",
  "X DKV 2",
  "X DKV 3",
  "X PPLG 1",
  "X PPLG 2",
  "X PPLG 3",
  "XI PS 1",
  "XI PS 2",
  "XI LK 1",
  "XI LK 2",
  "XI TJKT 1",
  "XI TJKT 2",
  "XI DKV 1",
  "XI DKV 2",
  "XI DKV 3",
  "XI PPLG 1",
  "XI PPLG 2",
  "XI PPLG 3",
  "XII PS 1",
  "XII PS 2",
  "XII LK 1",
  "XII LK 2",
  "XII TJKT 1",
  "XII TJKT 2",
  "XII DKV 1",
  "XII DKV 2",
  "XII DKV 3",
  "XII PPLG 1",
  "XII PPLG 2",
  "XII PPLG 3",
];

export const variantPrice = [
  { name: "Pick", price: 10000 },
  { name: "Keychain", price: 15000 },
  { name: "Necklace", price: 20000 },
] as const;

export const productArray = {
  Pick: [
    {
      id: 11,
      name: "Serenata 24",
      img: serenata,
      stock: 1,
      entry: "entry.460964263",
      qty: 0
    },
    {
      id: 21,
      name: "NoFace 3012",
      img: noFace,
      stock: 1,
      entry: "entry.1547532915",
      qty: 0
    },
    {
      id: 31,
      name: "Dead Clown 510",
      img: deadClown,
      stock: 2,
      entry: "entry.205624519",
      qty: 0
    },
    {
      id: 41,
      name: "Bunniez",
      img: bunniez,
      stock: 0,
      entry: "entry.1422607134",
      qty: 0
    },
    {
      id: 51,
      name: "Shiver ColorCode",
      img: shiver,
      stock: 1,
      entry: "entry.938746688",
      qty: 0
    },
  ],
  Keychain: [
    {
      id: 12,
      name: "Serenata 24",
      img: serenata,
      stock: 0,
      entry: "entry.2118181466",
      qty: 0,
    },
    {
      id: 22,
      name: "NoFace 3012",
      img: noFace,
      stock: 1,
      entry: "entry.1638759177",
      qty: 0,
    },
    {
      id: 32,
      name: "Dead Clown 510",
      img: deadClown,
      stock: 2,
      entry: "entry.1657155775",
      qty: 0,
    },
    {
      id: 42,
      name: "Bunniez",
      img: bunniez,
      stock: 2,
      entry: "entry.2069998967",
      qty: 0,
    },
    {
      id: 52,
      name: "Shiver ColorCode",
      img: shiver,
      stock: 1,
      entry: "entry.1048385086",
      qty: 0,
    },
  ],
  Necklace: [
    {
      id: 13,
      name: "Serenata 24",
      img: serenata,
      stock: 0,
      entry: "entry.1311543411",
      qty: 0,
    },
    {
      id: 23,
      name: "NoFace 3012",
      img: noFace,
      stock: 0,
      entry: "entry.1199752094",
      qty: 0,
    },
    {
      id: 33,
      name: "Dead Clown 510",
      img: deadClown,
      stock: 0,
      entry: "entry.595847613",
      qty: 0,
    },
    {
      id: 43,
      name: "Bunniez",
      img: bunniez,
      stock: 0,
      entry: "entry.1156659240",
      qty: 0,
    },
    {
      id: 53,
      name: "Shiver ColorCode",
      img: shiver,
      stock: 1,
      entry: "entry.1349831291",
      qty: 0,
    },
  ],
};

export { logo, bunniez, deadClown, noFace, serenata, shiver };
