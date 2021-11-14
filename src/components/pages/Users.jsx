import styled from "styled-components";
// import { useContext } from "react";
import { useRecoilState } from "recoil";
import { SearchInput } from "../molecules/SerchInput";
import { UserCard } from "../organisms/user/UserCard";
import { HeaderOnly } from "../templates/HeaderOnly";
import { SecondaryButton } from "../atoms/button/SecondaryButton";
// import { UserContext } from "../../providers/UserProvider";
import { userState } from "../../store/userState";

const users = [...Array(10).keys()].map((val) => {
  return {
    id: val,
    image: "https://source.unsplash.com/UtrE5DcgEyg",
    name: `すんきち${val}`,
    email: "12345@example.com",
    phone: "123-456-7890",
    company: {
      name: "テスト株式会社"
    },
    website: "https://example.com"
  };
});

export const Users = () => {
  // const { userInfo, setUserInfo } = useContext(UserContext);
  const [userInfo, setUserInfo] = useRecoilState(userState);
  const onClickSwitch = () => setUserInfo({ isAdmin: !userInfo.isAdmin });
  return (
    <HeaderOnly>
      <Scontainer>
        <h2>ユーザー一覧</h2>
        <SearchInput />
        <br />
        <SecondaryButton onClick={onClickSwitch}>切り替え</SecondaryButton>
        <SUserArea>
          {users.map((user) => (
            <UserCard key={user.id} user={user} />
          ))}
        </SUserArea>
      </Scontainer>
    </HeaderOnly>
  );
};

const Scontainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 24px;
`;

const SUserArea = styled.div`
  padding-top: 40px;
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  grid-gap: 20px;
`;
