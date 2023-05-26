/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: CreateCoffeeShop
// ====================================================

export interface CreateCoffeeShop_createCoffeeShop {
  __typename: "MutationResponse";
  ok: boolean;
  error: string | null;
}

export interface CreateCoffeeShop {
  createCoffeeShop: CreateCoffeeShop_createCoffeeShop;
}

export interface CreateCoffeeShopVariables {
  name: string;
  latitude: string;
  longitude: string;
  categoryNames: string[];
  photos: any[];
}
