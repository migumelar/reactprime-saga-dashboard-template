import styled from "styled-components";

const Wrapper = styled.div`
  font-weight: bold;

  & > img {
    width: 100%;
  }
`;

function SidebarLogo({ className, src, minimize }) {
  return minimize ? null : (
    <Wrapper className={className}>
      <img src={src} alt="logo" />
    </Wrapper>
  );
}

export default SidebarLogo;
