import { gql, useQuery } from "@apollo/client";
import { Link, useRouteMatch } from "react-router-dom";
import { SeeCoffeeShop } from "../__generated/SeeCoffeeShop";
import CoffeeShop from "../components/coffeeShop/CoffeeShop";
import styled from "styled-components";

const SEE_COFFEE_SHOP = gql`
  query SeeCoffeeShop($id: Int!) {
    seeCoffeeShop(id: $id) {
      id
      name
      user {
        username
        avatarURL
      }
      photos {
        url
      }
      categories {
        name
        slug
      }
    }
  }
`

const EDIT_COFFEE_SHOP = gql`
  mutation EditCoffeeShop(
    $id: Int!
    $name: String!
    $latitude: String!
    $longitude: String!
  ) {
    editCoffeeShop(
      id: $id
      name: $name
      latitude: $latitude
      longitude: $longitude
    ) {
      ok
      error
    }
  }
`;

const Button = styled.span`
  background-color: ${(props) => props.theme.accent};
  border-radius: 4px;
  padding: 4px 15px;
  color: white;
  font-weight: 600;
`;

function CoffeeShopDetail() {
  const { id } = useRouteMatch<{id: string}>().params;
  const { data } = useQuery<SeeCoffeeShop>(SEE_COFFEE_SHOP, { variables: { id: Number(id) }});
  return <div>
    {data?.seeCoffeeShop && <CoffeeShop {...data.seeCoffeeShop} />}
    <Link to={`/shop/${data?.seeCoffeeShop?.id}/edit`}>
      <Button>edit</Button>
    </Link>    
  </div>
}

export default CoffeeShopDetail;