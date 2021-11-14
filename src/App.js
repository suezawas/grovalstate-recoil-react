import { RecoilRoot } from "recoil";
import { UserPrivider } from "./providers/UserProvider";
import { Router } from "./router/Router";
import "./styles.css";

export default function App() {
  return (
    <RecoilRoot>
      <UserPrivider>
        <Router />;
      </UserPrivider>
    </RecoilRoot>
  );
}
