import { Image, Link } from "components/base";
import { Container, ContainerFluid, Flex } from "components/base/container";
import { HamburgerMenu, HeaderLink, WalletConnectBtn } from "./comp.layout";
import { useLocation, useNavigate } from "react-router-dom";
import {EtherIcon, ListIcon} from "components/icon";
import { useState } from "react";
import { useCustomWalletConnect } from "common/hook/hook.wallet";
const LayoutHeader = () => {
  const menuItem = [
    { name: "Collection Details", link: "/" }
  ];
  const location = useLocation();
  const navigate = useNavigate();
  const [menuVisible, setMenuVisible] = useState(false);
  const { openModal } = useCustomWalletConnect();
  return (
    <ContainerFluid position={"relative"}>
      <Container
        justifyContent={"space-between"}
        alignItems={"center"}
        position={"relative"}
        bg={"black"}
        pt={["26px", "26px", "33px", "40px"]}
        pb={"14px"}
        px={"52px"}
      >
        <Link onClick={() => navigate("/")}>
          <EtherIcon />
          <span style={{ marginLeft: 10, marginTop: 5, fontWeight: 700 }}>NFT Collection Detail</span>
        </Link>
        <HamburgerMenu visible={menuVisible}>
          {menuItem.map((each, index) => (
            <HeaderLink
              key={index}
              href={""}
              target={""}
              onClick={() => {
                navigate(each.link);
                setMenuVisible(false);
              }}
              active={true}
            >
              {each.name}
            </HeaderLink>
          ))}
          <WalletConnectBtn ml={["0px", "0px", "64px"]} width={["100%", "100%", "unset"]} onClick={() => openModal()}>
              Connect wallet
          </WalletConnectBtn>
        </HamburgerMenu>
        <Link display={["flex", "flex", "none"]} fontSize={"24px"} onClick={() => setMenuVisible(!menuVisible)}>
          <ListIcon />
        </Link>
      </Container>
    </ContainerFluid>
  );
};

export default LayoutHeader;
