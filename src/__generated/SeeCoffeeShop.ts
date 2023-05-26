/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: SeeCoffeeShop
// ====================================================

export interface SeeCoffeeShop_seeCoffeeShop_user {
  __typename: "User";
  username: string;
  avatarURL: string;
}

export interface SeeCoffeeShop_seeCoffeeShop_photos {
  __typename: "CoffeeShopPhoto";
  url: string;
}

export interface SeeCoffeeShop_seeCoffeeShop_categories {
  __typename: "Category";
  name: string;
  slug: string;
}

export interface SeeCoffeeShop_seeCoffeeShop {
  __typename: "CoffeeShop";
  id: number;
  name: string;
  user: SeeCoffeeShop_seeCoffeeShop_user;
  photos: SeeCoffeeShop_seeCoffeeShop_photos[];
  categories: SeeCoffeeShop_seeCoffeeShop_categories[];
}

export interface SeeCoffeeShop {
  seeCoffeeShop: SeeCoffeeShop_seeCoffeeShop | null;
}

export interface SeeCoffeeShopVariables {
  id: number;
}
