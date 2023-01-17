import { Box, Link } from "components/base";
import { Container, ContainerFluid, Flex } from "components/base/container";
import styled, { keyframes } from "styled-components";
import { Children, useEffect, useRef, useState } from "react";
import { IconNarrow } from "components/icon";

interface PageTitleProps {
  color: string;
  children: React.ReactNode;
}
export const PageTitle: React.FC<PageTitleProps> = ({ color, children }) => {
  return (
    <Container justifyCenter>
      <Flex
        justifyCenter
        alignItems={["flex-start", "flex-start", "center"]}
        gridGap={"8px"}
        background={color}
        WebkitBackgroundClip={"text"}
        color={"transparent"}
        fontFamily={"art"}
        fontWeight={"900"}
        fontSize={"30px"}
      >
        {children}
      </Flex>
    </Container>
  );
};

interface PageContainerProps {
  background: string;
  children: React.ReactNode;
}
export const PageContainer: React.FC<PageContainerProps> = ({ background, children }) => {
  return (
    <ContainerFluid
      flex={"1"}
      backgroundImage={`url(${background})`}
      backgroundColor={"black"}
      backgroundPosition={"center"}
      backgroundSize={"cover"}
      pt={["28px", "28px", "40px", "52px"]}
      pb={"28px"}
      overflow={"auto"}
    >
      {children}
    </ContainerFluid>
  );
};

export const Button = styled(Link)<{ [index: string]: any }>`
  color: ${(p) => (p.isPending ? "transparent" : "")};
  pointer-events: ${(p) => (p.isPending ? "none" : "")};
  position: relative;
  user-select: none;
  &::after {
    display: ${(p) => (p.isPending ? "block" : "none")};
    content: "";
    position: absolute;
    top: 50%;
    left: 50%;
    background: conic-gradient(transparent, white);
    mask: radial-gradient(transparent 50%, black 50%);
    width: 1.5em;
    aspect-ratio: 1;
    border-radius: 100%;
    animation: ${keyframes`
        from {
          transform: translate(-50%, -50%) rotate(0deg);
        }
        to {
          transform: translate(-50%, -50%) rotate(360deg);
        }
      `} 1s linear infinite;
  }
`;
Button.defaultProps = {
  justifyContent: "center",
  alignItems: "center",
  gridGap: "9px",
  background: "#3F74C5",
  width: "100%",
  px: "20px",
  py: "10px",
  borderRadius: "4px",
  fontWeight: "500",
  fontSize: ["18px", "18px", "20px"],
  lineHeight: ["22px", "22px", "24px"],
  textAlign: "center",
};

interface InforCardProps {
  title: React.ReactNode;
  children: React.ReactNode;
  headerBg: string;
  width?: string;
}
export const InforCardBase: React.FC<InforCardProps> = ({ headerBg, title, width, children }) => {
  return (
    <Flex
      col
      backgroundColor={"rgba(0, 0, 0, 0.6)"}
      backgroundImage={"linear-gradient(180deg, #146CF0 -42.59%, #00000000 -42.59%, #1486F0 -42.58%, #146cf02e 2.71%, #973c440e 99.99%, #3683f500 100%)"}
      width={"100%"}
      maxWidth={width}
      borderRadius={"8px"}
    >
      <Flex
        justifyCenter
        alignCenter
        gridGap={"6px"}
        py={"19px"}
        background={headerBg}
        width={"100%"}
        fontFamily={"art"}
        fontWeight={"600"}
        fontSize={"20px"}
        lineHeight={"24px"}
        borderRadius={"8px 8px 0px 0px"}
      >
        {title}
      </Flex>
      <Flex col gridGap={"38px"} pt={"26px"} px={["25px", "25px", "33px", "42px"]} pb={"45px"}>
        {children}
      </Flex>
    </Flex>
  );
};

interface InforBoxProps {
  title: string;
  content: string;
  hidden?: boolean;
  color?: string;
}
export const InforBox: React.FC<InforBoxProps> = ({ title, content, hidden, color = "white" }) => {
  return (
    <Flex col alignCenter gridGap={"6px"} visibility={hidden ? "hidden" : "visible"}>
      <Flex color={color} fontWeight={"400"} fontSize={"14px"} lineHeight={"16px"}>
        {title}
      </Flex>
      <Flex color={"#F5FDF9"} fontFamily={"art"} fontWeight={"600"} fontSize={"20px"} lineHeight={"24px"}>
        {content}
      </Flex>
    </Flex>
  );
};

interface CustomSelectSelectProps {
  onChange?: any;
  bg?: any;
  after?: any;
  before?: any;
  placeHolder?: string;
  value?: any;
  [index: string]: any;
}

export const CustomSelect: React.FC<CustomSelectSelectProps> = ({ after, before, onChange, bg, children, placeHolder, value, ...props }) => {
  const [currentOption, setCurrentOption] = useState<any>(null);
  const [isOpened, setIsOpened] = useState(false);
  const [optionList, setOptionList] = useState<any>(null);
  const dropBox = useRef<any>();
  const dropPannel = useRef<any>();
  useEffect(() => {
    if (!optionList) return;
    for (let i = 0; i < optionList.length; i++) {
      const each = optionList[i];
      if (each?.value === value) {
        setCurrentOption(each);
      }
    }
  }, [value, optionList]);
  useEffect(() => {
    const handle = (event: any) => {
      if (dropBox?.current && !dropBox.current.contains(event.target)) {
        setIsOpened(false);
      }
    };
    window.addEventListener("click", handle);
    return () => {
      window.removeEventListener("click", handle);
    };
  }, []);
  useEffect(() => {
    const list: any = [];
    if (!children) {
      setOptionList(list);
      return;
    } else {
      Children.toArray(children)?.map((each: any) => {
        if (each.props.customTagType !== "--411customisedOption--") {
          return null;
        }
        const value = each.props.value;
        const text = each.props.children;
        const selected = each.props.selected;
        list.push({
          value: value,
          text: text,
          selected: selected,
        });
        return {
          value: value,
          text: text,
          selected: selected,
        };
      });
      list.map((each: any, index: any) => {
        if (each.selected) {
          setCurrentOption(each);
        }
      });
      setOptionList(list);
    }
  }, [children]);
  return (
    <Box position={"relative"} ref={dropBox} {...props}>
      <Box
        whiteSpace={"nowrap"}
        fontWeight={"400"}
        fontSize={"14px"}
        lineHeight={"2em"}
        cursor="pointer"
        display={"flex"}
        alignItems={"center"}
        flexWrap={"nowrap"}
        gridGap={"8px"}
        onClick={() => {
          setIsOpened(!isOpened);
        }}
      >
        {before}
        {currentOption ? currentOption.text : placeHolder || "select ..."}
        <Box ml={"auto"} fontSize={"20px"} display={"flex"} alignItems={"center"}>
          <IconNarrow dir={isOpened ? "up" : "down"} />
        </Box>
        {after}
      </Box>
      <Box
        visible={isOpened ? "visible" : "hidden"}
        opacity={isOpened ? "1" : "0"}
        position={"absolute"}
        top={"105%"}
        left={"0px"}
        px={"22px"}
        py={"12px"}
        bg={"#000"}
        backDrop={"blur(10px)"}
        // border={"1px solid #333333"}
        borderRadius={"8px"}
        ref={dropPannel}
        display={"flex"}
        flexDirection={"column"}
        transition={"opacity 200ms"}
        zIndex={isOpened ? 1000 : -1000}
      >
        {optionList
          ? optionList.map((each: any, index: any) => {
              return (
                <SmOption
                  key={index}
                  onClick={() => {
                    setIsOpened(false);
                    if (currentOption?.value === each.value) return;
                    setCurrentOption(each);
                    onChange && onChange(each.value);
                  }}
                >
                  {each.text}
                </SmOption>
              );
            })
          : "Here is not any options."}
      </Box>
    </Box>
  );
};

interface SmOptionProps {
  value: any;
  [index: string]: any;
}
export const SmOption = styled.div<SmOptionProps>`
  padding: 5px;
  white-space: nowrap;
  display: flex;
  align-items: center;
  grid-gap: 8px;
  cursor: pointer;
  &:hover {
    background: #8888;
  }
`;
SmOption.defaultProps = {
  customTagType: "--411customisedOption--",
};
