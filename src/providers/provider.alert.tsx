import { Flex } from "components/base/container";
import { Button } from "components/element";
import { ModalParent } from "components/modal";
import { createContext, useState } from "react";

export const AlertContext = createContext<any>(null);

export const AlertProvider: React.FC<{
  children: React.ReactNode;
}> = ({ children }) => {
  const [visibleAlert, setVisibleAlert] = useState(false);
  const [alertContent, setAlertContent] = useState("");
  return (
    <AlertContext.Provider
      value={{
        visibleAlert,
        setVisibleAlert,
        alertContent,
        setAlertContent,
      }}
    >
      {children}
      <ModalParent
        visible={visibleAlert}
        setVisible={setVisibleAlert}
        noCloseBtn
      >
        <Flex p={"20px"} col alignCenter gridGap={["16px", "16px", "24px"]}>
          <Flex fontSize={"1.2em"}>{alertContent}</Flex>
          <Flex width={"100%"} px={"20px"}>
            <Button
              background={
                "linear-gradient(99.99deg, #B936F5 -21.45%, #3A36F5 -21.44%, #DBAC92 100%)"
              }
              onClick={() => {
                setAlertContent("");
                setVisibleAlert(false);
              }}
            >
              Ok
            </Button>
          </Flex>
        </Flex>
      </ModalParent>
    </AlertContext.Provider>
  );
};
