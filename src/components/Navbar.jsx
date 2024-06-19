import { Box, Flex, Link, Button } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";

const Navbar = () => {
  return (
    <Box bg="blue.500" px={4} py={2}>
      <Flex h={16} alignItems="center" justifyContent="space-between">
        <Box>
          <Link as={RouterLink} to="/" color="white" fontSize="xl" fontWeight="bold">
            Home
          </Link>
        </Box>
        <Flex alignItems="center">
          <Link as={RouterLink} to="/application-form" color="white" mr={4}>
            Application Form
          </Link>
        </Flex>
      </Flex>
    </Box>
  );
};

export default Navbar;