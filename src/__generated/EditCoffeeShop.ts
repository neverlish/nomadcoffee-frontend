/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: EditCoffeeShop
// ====================================================

export interface EditCoffeeShop_editCoffeeShop {
  __typename: "MutationResponse";
  ok: boolean;
  error: string | null;
}

export interface EditCoffeeShop {
  editCoffeeShop: EditCoffeeShop_editCoffeeShop;
}

export interface EditCoffeeShopVariables {
  id: number;
  name: string;
  latitude: string;
  longitude: string;
}
