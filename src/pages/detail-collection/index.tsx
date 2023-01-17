import { Box, Image, Input, Link } from "components/base";
import { useNavigate, useParams, useSearchParams } from "react-router-dom";
import { useEffect, useMemo, useState } from "react";
import { Collection, NFT } from "../../utils/types";
import {
  imgUrlFromJson,
  cloudflareUrl
} from "utils";
import { Container, Flex } from "components/base/container";
import { Button, CustomSelect, PageContainer, SmOption } from "components/element";
import { DetailPropsCard } from "./comp.detailcollection";
import styled, { keyframes } from "styled-components";
import {collectionData, nftData} from "../../utils/data";
// const Ethereum = require("../../assets/image/ethereum.png");

const DetailPool = () => {
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();
  const { creator, name } = useParams(); // collection_name
  const [tokens, setTokens] = useState<NFT[]>(nftData);
  const [limit] = useState<number>(20);
  const [collectionInfo, setCollectionInfo] = useState<Collection>(collectionData);
  const [refreshFlag, setRefreshFlag] = useState(false);
  const [searchTokenId, setSearchTokenId] = useState("");

  const page = searchParams.get("page") ? parseInt(searchParams.get("page") as string) : 1;
  const searchValue = searchParams.get("search");
  const sort_id = searchParams.get("sort_id") ? parseInt(searchParams.get("sort_id") as string) : 1;

  useEffect(() => {
    if (searchValue) {
      setSearchTokenId(searchValue);
    }
  }, [creator, name, refreshFlag, searchValue, page, sort_id]);

  const search_tokenlist = () => {
    if (searchTokenId.trim() != "") {
      navigate(`/collection/${creator}/${name}?search=${searchTokenId}&sort_id=${sort_id}`);
    } else {
      navigate(`/collection/${creator}/${name}?sort_id=${sort_id}`);
    }
  };
  const maxPage = useMemo(() => 10, [collectionInfo]);
  return (
    <PageContainer background={require("assets/image/pool_bg.png")}>
      <Container mt={"28px"} px={["5px", "5px", "15px", "28px"]} justifyCenter>
        <Flex
          col
          flexDirection={["column", "column", "row"]}
          backgroundColor={"rgba(0, 0, 0, 0.8)"}
          backgroundImage={"linear-gradient(135deg, rgba(20, 108, 240, 0.18), rgba(151, 60, 68, 0.055), rgba(54, 131, 245, 0))"}
          width={"100%"}
          maxWidth={"1600px"}
          px={["10px", "10px", "15px", "28px"]}
          py={["10px", "10px", "15px", "28px"]}
          borderRadius={"8px"}
          gridGap={"16px"}
        >
          <Flex
            alignItems={["flex-start", "flex-start", "flex-start", "flex-start", "flex-end"]}
            flexDirection={["column", "column", "column", "column", "row"]}
            gridGap={"1em"}
          >
            <Flex flex={"1"} gridGap={"16px"} flexDirection={["column", "column", "row"]}>
              <Flex alignCenter>
                <JsonImage src={cloudflareUrl(collectionInfo?.logo_uri as string)} width={"150px"} borderRadius={"16px"} />
              </Flex>
              <Flex col justifyCenter gridGap={"1em"}>
                <Flex fontFamily={"art"} fontSize={"1.4em"} gridGap={"0.5em"}>
                  {collectionInfo?.name}
                </Flex>
                <Flex color={"#EBA9FF70"}>Created by &nbsp;<Box color={"white"}> {collectionInfo?.creator}</Box></Flex>
                <Flex color={"#EBA9FF70"}>{collectionInfo?.description}</Flex>
              </Flex>
            </Flex>
            <Flex gridGap={"1em"} ml={"auto"} flexWrap={"wrap"}>
              <Flex
                col
                flex={"1"}
                background={"linear-gradient(77.91deg, rgba(185, 54, 245, 0.25) 1.95%, rgba(185, 54, 245, 0.2) 1.95%, rgba(170, 20, 240, 0.15) 108.82%)"}
                px={"1em"}
                py={"0.5em"}
                borderRadius={"8px"}
              >
                <Box whiteSpace={"nowrap"} opacity={"0.6"}>
                  Floor Price
                </Box>
                <Box>{collectionInfo.floor_price}</Box>
              </Flex>
              <Flex
                col
                flex={"1"}
                background={"linear-gradient(77.91deg, rgba(185, 54, 245, 0.25) 1.95%, rgba(185, 54, 245, 0.2) 1.95%, rgba(170, 20, 240, 0.15) 108.82%)"}
                px={"1em"}
                py={"0.5em"}
                borderRadius={"8px"}
              >
                <Box whiteSpace={"nowrap"} opacity={"0.6"}>
                  Items
                </Box>
                <Box>{collectionInfo?.items}</Box>
              </Flex>
              <Flex
                  col
                  flex={"1"}
                  background={"linear-gradient(77.91deg, rgba(185, 54, 245, 0.25) 1.95%, rgba(185, 54, 245, 0.2) 1.95%, rgba(170, 20, 240, 0.15) 108.82%)"}
                  px={"1em"}
                  py={"0.5em"}
                  borderRadius={"8px"}
              >
                <Box whiteSpace={"nowrap"} opacity={"0.6"}>
                  Owners
                </Box>
                <Box>{collectionInfo?.owners}</Box>
              </Flex>
              <Flex
                col
                flex={"1"}
                background={"linear-gradient(77.91deg, rgba(185, 54, 245, 0.25) 1.95%, rgba(185, 54, 245, 0.2) 1.95%, rgba(170, 20, 240, 0.15) 108.82%)"}
                px={"1em"}
                py={"0.5em"}
                borderRadius={"8px"}
              >
                <Box whiteSpace={"nowrap"} opacity={"0.6"}>
                  Listed
                </Box>
                <Box>10</Box>
              </Flex>
            </Flex>
          </Flex>
          <Flex alignCenter flexDirection={["column-reverse", "column-reverse", "row"]} gridGap={"1em"}>
            <CustomSelect
              background={"linear-gradient(180deg, rgb(167, 91, 202) -21.45%, rgb(255, 164, 113) 91.78%)"}
              width={["100%", "100%", "unset"]}
              p={"6px 12px"}
              border={"none"}
              borderRadius={"8px"}
              value={sort_id && sort_id > 0 && sort_id < 5 ? sort_id : 1}
              onChange={(e: number) => {
              }}
            >
              <SmOption value={1}>Price: Low to High</SmOption>
              <SmOption value={2}>Price: High to Low</SmOption>
              <SmOption value={3}>Rank: Common to Rare</SmOption>
              <SmOption value={4}>Rank: Rare to common</SmOption>
            </CustomSelect>
            <Flex flex={"1"} width={["100%", "100%", "unset"]}>
              <Input
                ml={"auto"}
                p={"10px 20px"}
                width={"100%"}
                backgroundColor={"rgba(0, 0, 0, 0.6)"}
                borderRadius={"8px"}
                color={"white"}
                border={"1px solid rgb(255,164,113)"}
                fontFamily={"art"}
                fontWeight={"400"}
                fontSize={"16px"}
                lineHeight={"14px"}
                placeholder="Search by ID"
                value={searchTokenId}
                onKeyDown={(e) => {
                  if (e.key == "Enter") {
                  }
                }}
                onChange={(e) => {
                  setSearchTokenId(e.target.value);
                }}
              />
            </Flex>
          </Flex>
        </Flex>
      </Container>
      <Container mt={"28px"} px={["5px", "5px", "15px", "28px"]} justifyCenter>
        <Flex
          col
          alignCenter
          backgroundColor={"rgba(0, 0, 0, 0.8)"}
          backgroundImage={"linear-gradient(135deg, rgba(20, 108, 240, 0.18), rgba(151, 60, 68, 0.055), rgba(54, 131, 245, 0))"}
          width={"100%"}
          maxWidth={"1600px"}
          px={["10px", "10px", "15px", "28px"]}
          py={["10px", "10px", "15px", "28px"]}
          borderRadius={"8px"}
          gridGap={"16px"}
        >
          <Box
            display={"grid"}
            gridTemplateColumns={["repeat(2, 1fr)", "repeat(2, 1fr)", "repeat(3, 1fr)", "repeat(4, 1fr)", "repeat(4, 1fr)", "repeat(5, 1fr)"]}
            gridGap={["8px", "8px", "16px", "24px"]}
          >
            {tokens.map((item, index) => (
              <DetailPropsCard key={`token-${index}`} item={item} />
            ))}
          </Box>
          <Flex justifyCenter marginTop={"20px"} gridGap={"20px"} mx={"auto"}>
            {page > 1 && (
              <Button
                background={"transparent"}
                border={"1px solid #EBA9FF"}
                onClick={() => {}}
              >
                &lt;
              </Button>
            )}
            {page > 2 && (
              <Button
                background={"transparent"}
                border={"1px solid #EBA9FF"}
                onClick={() => {}}
              >
                1
              </Button>
            )}
            {page > 3 && <Flex alignCenter>...</Flex>}
            {Array(3)
              .fill(0)
              .map((_, index) => {
                const _toPageNum = index + page - 1;
                if (_toPageNum < 1) return "";
                if (_toPageNum > maxPage) return "";
                return (
                  <Button
                    key={index}
                    background={
                      _toPageNum === page
                        ? "linear-gradient(77.91deg,rgba(185,54,245,0.25) 1.95%,rgba(185,54,245,0.2) 1.95%,rgba(170,20,240,0.15) 108.82%)"
                        : "transparent"
                    }
                    border={"1px solid #EBA9FF"}
                    onClick={() => {}}
                  >
                    {_toPageNum}
                  </Button>
                );
              })}
            {page < maxPage - 2 && <Flex alignCenter>...</Flex>}
            {page < maxPage - 1 && (
              <Button
                background={"transparent"}
                border={"1px solid #EBA9FF"}
                onClick={() => {}}
              >
                {maxPage}
              </Button>
            )}
            {page < maxPage && (
              <Button
                background={"transparent"}
                border={"1px solid #EBA9FF"}
                onClick={() => {}}
              >
                &gt;
              </Button>
            )}
          </Flex>
        </Flex>
      </Container>
    </PageContainer>
  );
};

interface JsonImageProps {
  src: string;
  [index: string]: any;
}
export const JsonImage: React.FC<JsonImageProps> = ({ src, ...props }) => {
  const [imgurl, setImgurl] = useState<string>("");
  const [visible, setVisible] = useState(false);


  useEffect(() => {
    imgUrlFromJson(src).then((res) => {
      setImgurl(res);
    });
  }, [src]);
  return (
    <>
      {!(visible && imgurl) && <LoadingBox aspectRatio={"1"} width={props.width || "100%"} {...props} />}
      <Image display={visible && imgurl ? "initial" : "none"} src={imgurl} {...props} onLoad={() => setVisible(true)} />
    </>
  );
};

export const LoadingBox = styled(Flex)`
  position: relative;
  &::before,
  &::after {
    content: "";
    position: absolute;
    top: 50%;
    left: 50%;
    background: #000a;
    width: 100px;
    height: 100px;
    border-radius: 100%;
  }
  &::after {
    animation: ${keyframes`
        from { transform: translate(-50%, -50%) scale(0); opacity: 1}
        to { transform: translate(-50%, -50%) scale(1); opacity: 0}
      `} infinite linear 2s;
  }
  &::before {
    animation: ${keyframes`
        from { transform: translate(-50%, -50%) scale(0); opacity: 1}
        to { transform: translate(-50%, -50%) scale(1); opacity: 0}
      `} infinite linear 2s -1s;
  }
`;
LoadingBox.defaultProps = {
  background: "#0004",
};

export default DetailPool;
