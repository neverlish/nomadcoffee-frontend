import styled from "styled-components";
import { SeeCoffeeShops_seeCoffeeShops } from "../../__generated/SeeCoffeeShops";
import Avatar from "../Avatar";
import { FatText } from "../shared";

const CoffeeShopContainer = styled.div`
  background-color: white;
  border-radius: 4px;
  border: 1px solid ${(props) => props.theme.borderColor};
  margin-bottom: 60px;
  max-width: 615px;
`;
const CoffeeShopHeader = styled.div`
  padding: 15px;
  display: flex;
  align-items: center;
  border-bottom: 1px solid rgb(239, 239, 239);
`;

const Username = styled(FatText)`
  margin-left: 15px;
`;
const CoffeeShopData = styled.div`
  padding: 12px 15px;
`;

const CoffeeShopCategories = styled.div`
  display: flex;
  justify-content: right;
  gap: 5px;
`;

function CoffeeShop({ id, user, name, photos, categories }: SeeCoffeeShops_seeCoffeeShops) {
  return (
    <CoffeeShopContainer key={id}>
      <CoffeeShopHeader>
        <Avatar lg url={user.avatarURL} />
        <Username>{user.username}</Username>
      </CoffeeShopHeader>
      {/* <CoffeeShopFile src={file} /> */}
      <CoffeeShopData>
        <div>
          {name}
        </div>
        <CoffeeShopCategories>
          {categories.map((c) => <div key={c.name}>{c.name}</div>)}
        </CoffeeShopCategories>
        <div>
          {photos.map((p) => <img src={p.url} key={p.url} />)}
        </div>
      </CoffeeShopData>
    </CoffeeShopContainer>
  );
}

export default CoffeeShop;