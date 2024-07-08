import FlexBox from "../../components/FlexBox";
import { WelcomeScreen } from "../body/WelcomeScreen";
import MenuHeader from "../header/MenuHeader";

export const Overview = () => {
  return (
    <FlexBox flexDirection="column">
      <MenuHeader />
      <WelcomeScreen />
    </FlexBox>
  );
};
