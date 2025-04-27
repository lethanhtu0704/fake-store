// Convert the amount of money that receive from the API

import { ProductModel } from "../types/product";

export const formatPrice = (number:number) => {
  const numberFormat = new Intl.NumberFormat("vi-VN", {
    style: "currency",
    currency: "VND",
  }).format((number * 20000) / 100);
  return numberFormat;
};

export const getUniqueValues = (arr:ProductModel[], key:keyof ProductModel) => {
  let keyFeature = arr.map((item) => item[key]);
  if (key === "colors" as string) {
    keyFeature = keyFeature.flat();
  }
  return ["all", ...new Set(keyFeature)];
};
