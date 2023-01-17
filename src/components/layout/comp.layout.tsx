import { Link } from "components/base";
import { Flex } from "components/base/container";
import styled from "styled-components";

interface HeaderLinkProps {
  active?: boolean;
}
export const HeaderLink = styled(Link)<HeaderLinkProps>`
  & {
    color: ${(p) => (p.active ? "#c824ec" : "white")};
    &::after {
      content: "";
      background: white;
      width: ${(p) => (p.active ? "10px" : "0px")};
      height: 2px;
      border-radius: 100px;
      transition: var(--transition);
    }
  }
  &:hover {
    &::after {
      width: 100%;
    }
  }
`;
HeaderLink.defaultProps = {
  pt: "10px",
  px: "20px",
  fontWeight: "700",
  fontSize: ["20px", "20px", "16px", "12px"],
  lineHeight: "1.25em",
  flexDirection: "column",
  gridGap: ["2px", "2px", "5px"],
};

export const WalletConnectBtn = styled(Link)``;
WalletConnectBtn.defaultProps = {
  justifyContent: "center",
  background: "linear-gradient(99.05deg, #BC3CD8 0.07%, #C54B8C 106.32%)",
  px: "18px",
  py: "12px",
  borderRadius: "4px",
  fontWeight: "700",
  fontSize: ["16px", "16px", "14px", "12px"],
  lineHeight: "1.15em",
  textAlign: "center",
};

interface HamburgerMenu {
  visible?: boolean;
  children: React.ReactNode;
}
export const HamburgerMenu: React.FC<HamburgerMenu> = ({ visible, children }) => {
  return (
    <Flex
      alignCenter
      gridGap={["27px", "27px", "0px"]}
      flexDirection={["column", "column", "row"]}
      position={["absolute", "absolute", "static"]}
      top={"100%"}
      left={"0px"}
      background={"#000000BA"}
      backdropFilter={"blur(7.5px)"}
      width={["100%", "100%", "auto"]}
      pt={["20px", "20px", "0px"]}
      pb={["67px", "67px", "0px"]}
      px={["47px", "47px", "0px"]}
      zIndex={1}
      visibility={visible ? "visible" : ["hidden", "hidden", "visible"]}
      opacity={visible ? "1" : ["0", "0", "1"]}
      transition={"500ms"}
    >
      {children}
    </Flex>
  );
};
