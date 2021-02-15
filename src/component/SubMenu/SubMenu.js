import ButtonWithOutlineBase from "../ButtonWithOutlineBase";
import { Ripple } from "primereact/ripple";

export const LeadingIcon = ({ leadingIcon }) => <div>{leadingIcon}</div>;

export const MenuText = ({ subMenuText }) => <div>{subMenuText}</div>;

export const SubMenu = ({ leadingIcon, subMenuText }) => {
  return (
    <ButtonWithOutlineBase>
      <Ripple />

      <LeadingIcon>{leadingIcon}</LeadingIcon>

      <MenuText>{subMenuText}</MenuText>
    </ButtonWithOutlineBase>
  );
};
