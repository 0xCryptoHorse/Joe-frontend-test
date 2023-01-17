import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Box, Image, Link } from "components/base";
import { Flex } from "components/base/container";
import { Button } from "components/element";
import styled from "styled-components";
import { NFT } from "utils/types";
import { JsonImage } from ".";
import {EtherIcon} from "../../components/icon";

const Ethereum = require("../../assets/image/ethereum.png");

export const DetailPropsCard: React.FC<{ item: NFT }> = ({ item }) => {
  const navigate = useNavigate();
  const { creator, name } = useParams();
  const [isBuying, setIsBuying] = useState(false);
  return (
    <DetailPropsCardBase>

      <JsonImage src={item.preview_uri} width={"100%"} borderRadius={"8px"} />
      <Flex flexDirection={["column", "column", "row"]} alignCenter mt={"auto"} gridGap={"8px"}>
        <Flex col gridGap={"1em"} width={"100%"} px={"10px"}>
          <Box mt={"8px"} fontFamily={"art"}>
            {item.token_name}
          </Box>
          <Flex spaceBetween gridGap={"0.5em"}>
            <Flex gridGap={"0.5em"} alignCenter>
              <EtherIcon />
              <Box>{item.price}</Box>
            </Flex>
          </Flex>
          <Flex spaceBetween gridGap={"0.5em"}>
            <Flex gridGap={"0.5em"} >
              <Box color={"#999"}>Ends in 12 hours</Box>
            </Flex>
          </Flex>
        </Flex>
      </Flex>
      <Flex flexDirection={["column", "column", "row"]} mt={"12px"} gridGap={"8px"}>
        <Button
          isPending={isBuying}
          justifyContent={"center"}
          px={"16px"}
          py={"8px"}
          fontSize={"1em"}
          lineHeight={"unset"}
          mt={"auto"}
          ml={"auto"}
          width={"100%"}
          border={"1px solid transparent"}
          background={"linear-gradient(99.99deg, rgb(167, 91, 202) -21.45%, rgb(255, 164, 113) 91.78%)"}
          borderRadius={"8px"}
          onClick={() => {}}
        >
          Buy now
        </Button>
        <Link
          justifyContent={"center"}
          p={"8px 16px"}
          mt={"auto"}
          ml={"auto"}
          width={"100%"}
          border={"1px solid rgb(255, 164, 113)"}
          borderRadius={"8px"}
          onClick={() => {}}
        >
          Details &gt;
        </Link>
      </Flex>
    </DetailPropsCardBase>
  );
};

const DetailPropsCardBase = styled(Flex)``;
DetailPropsCardBase.defaultProps = {
  flexDirection: "column",
  position: "relative",
  backgroundImage: "linear-gradient(135deg, rgba(185, 54, 245, 0.25), rgba(0, 0, 0, 0.5))",
  p: "8px",
  borderRadius: "8px",
};
