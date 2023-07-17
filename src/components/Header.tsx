import Flex from "./Flex";

const Header = () => {
  return (
    <>
      <Flex
        as="header"
        flexDirection={["column", "row"]}
        justifyContent={["center", "flex-start"]}
        alignItems="center"
        color="#ffffff"
        bg="#FFBF00"
        width="100%"
        minHeight={36}
        py={[0, 0]}
        style={{
          position: "fixed",
          top: 0,
          zIndex: 2,
        }}
      >
        <Flex
          
          alignItems="center"
          flexDirection={"column"}
          width={["100%"]}
          px={[2, 4]}
        >
          <h1 aria-label="Blog Post">Blog Post</h1>
        </Flex>
      </Flex>
    </>
  );
};

export default Header;
