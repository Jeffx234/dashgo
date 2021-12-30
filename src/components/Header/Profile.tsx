import { Avatar, Box, Flex, Text } from "@chakra-ui/react";

interface ProfileProps {
  showProfileData?: boolean;
}

export function Profile({showProfileData = true}: ProfileProps) {
  return(
    <Flex align="center">
      { showProfileData && (
        <Box mr="4" textAlign="right">
        <Text>Jeferson Luis</Text>
        <Text color="gray.300" fontSize="small">jefersonluisx@hotmail.com</Text>
      </Box>
      )}

      <Avatar size="md" name="Jeferson Luis" src="http://github.com/Jeffx234.png" />
    </Flex>
  )
}