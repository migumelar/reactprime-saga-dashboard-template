import styled from "styled-components";

const SidebarLogoWrapper = styled.div`
  font-weight: bold;
  padding: 1rem;

  & > img {
    padding: 0.5rem;
    width: 100%;
  }
`;

function SidebarLogo({ src }) {
  return (
    <SidebarLogoWrapper>
      <img src={src} alt="logo" />
    </SidebarLogoWrapper>
  );
}

export default SidebarLogo;
