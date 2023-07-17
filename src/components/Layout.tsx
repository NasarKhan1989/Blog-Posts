import "styled-components/macro";
import Box from "./Box";
import Flex from "./Flex";
import Header from "./Header";

interface Props {
  children: React.ReactNode;
}

const Layout = (props: Props) => {

  return (
    <Flex bg="white" minHeight="100vh" style={{ position: "relative" }}>
      <Header />
      <Box as="main" id="main" width="100%" mx="auto" mt={81}>
        {props.children}
      </Box>
    </Flex>
  );
};

export default Layout;
