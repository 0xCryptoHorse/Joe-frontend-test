import { Flex } from "components/base/container";
// import { TimesIcon } from "components/icons";
import { useRef } from "react";

type ModalParentProps = {
  visible: boolean;
  setVisible: (arg: boolean) => void;
  noCloseBtn?: boolean;
  children?: React.ReactNode;
};

export const ModalParent: React.FC<ModalParentProps> = ({
  visible,
  setVisible,
  noCloseBtn,
  children,
}) => {
  const modalContainer = useRef<any>();
  return (
    <>
      {visible && (
        <Flex
          position={"fixed"}
          backdropFilter={"blur(10px)"}
          top={"0px"}
          left={"0px"}
          background={"#0008"}
          width={"100%"}
          height={"100%"}
          zIndex={"1000"}
          onClick={(e) => {
            if (modalContainer?.current && modalContainer?.current === e.target)
              setVisible(false);
          }}
          ref={modalContainer}
        >
          <Flex
            col
            margin={"auto"}
            backgroundImage={
              "linear-gradient(180deg, #146CF0 -42.59%, rgba(0, 0, 0, 0) -42.59%, #1486F0 -42.58%, rgba(20, 108, 240, 0.18) 2.71%, rgba(151, 60, 68, 0.055) 99.99%, rgba(54, 131, 245, 0) 100%)"
            }
            backgroundColor={"black"}
            padding={"10px 20px"}
            borderRadius={"8px"}
            boxSizing={"border-box"}
          >
            {!noCloseBtn && (
              <Flex
                ml={"auto"}
                fontSize={"25px"}
                lineHeight={"1em"}
                cursor={"pointer"}
                onClick={() => setVisible(false)}
              >
                {/* <TimesIcon /> */}
                &times;
              </Flex>
            )}
            {children}
          </Flex>
        </Flex>
      )}
    </>
  );
};
