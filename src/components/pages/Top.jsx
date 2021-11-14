import styled from "styled-components";
// import { useContext } from "react";
import { useSetRecoilState } from "recoil";
import { DefaultLayout } from "../templates/DefaultLayout";
import { SecondaryButton } from "../atoms/button/SecondaryButton";
import { useHistory } from "react-router-dom";
// import { UserContext } from "../../providers/UserProvider";
import { userState } from "../../store/userState";

export const Top = () => {
  const history = useHistory();
  // const { setUserInfo } = useContext(UserContext);
  const setUserInfo = useSetRecoilState(userState);

  const onClickAdmin = () => {
    setUserInfo({ isAdmin: true });
    history.push("/users");
  };
  const onClickGeneral = () => {
    setUserInfo({ isAdmin: false });
    history.push("/users");
  };
  return (
    <DefaultLayout>
      <Scontainer>
        <h2>TOPページです</h2>
        <SecondaryButton onClick={onClickAdmin}>管理者ユーザー</SecondaryButton>
        <br />
        <br />
        <SecondaryButton onClick={onClickGeneral}>一般ユーザー</SecondaryButton>
      </Scontainer>
    </DefaultLayout>
  );
};

const Scontainer = styled.div`
  text-align: center;
`;