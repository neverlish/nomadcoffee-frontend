import { gql, useQuery } from "@apollo/client";
import { SeeCoffeeShops } from "../__generated/SeeCoffeeShops";
import CoffeeShop from "../components/coffeeShop/CoffeeShop";
import { Link } from "react-router-dom";

const SEE_COFFEE_SHOPS = gql`
  query SeeCoffeeShops($page: Int!) {
    seeCoffeeShops(page: $page) {
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
`;

function Home() {
  const { data } = useQuery<SeeCoffeeShops>(SEE_COFFEE_SHOPS, {variables: { page: 1 }});
  return <div>
    {data?.seeCoffeeShops.map((c) => <Link to={`/shop/${c.id}`}>
      <CoffeeShop key={c.id} {...c} />
    </Link>)}
  </div>
}

export default Home;