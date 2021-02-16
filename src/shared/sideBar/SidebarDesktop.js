// import theme from "../../styles/theme";
// import Sidebar from "./SidebarContent";
import MenuList from "../MenuList";
// const SidebarDesktopWrapper = styled.div`
//   display: none;
//   @media ${theme.breakpoint.lg} {
//     display: block;
//   }
// `;

const style = {
  display: "flex",
  flexDirection: "column",
  flexShrink: 0,
  // width: ${(props) => (props.minimize ? "60px" : "225px")},
  width: "225px",
  height: "100%",
  backgroundColor: `${(props) => props.theme.surfaceA}`,
  overflowY: "hidden",
}

function SidebarDesktop() {
  return (
    <div style={style} className="p-shadow-12">
      <MenuList />
    </div>
    // <SidebarDesktopWrapper>
    //   <Sidebar />
    // </SidebarDesktopWrapper>
  );
}

export default SidebarDesktop;
