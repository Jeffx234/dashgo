import { Box, DrawerBody, DrawerContent, DrawerHeader, DrawerOverlay, useBreakpointValue, Drawer, DrawerCloseButton } from "@chakra-ui/react";
import { useSidebarDrawer } from "../../contexts/SideBarDrawerContext";
import { SidebarNav } from './SidebarNav'

export function Sidebar() {
  const { isOpen, onClose } = useSidebarDrawer()

  const isDrawerSidebar = useBreakpointValue({
    base: true,
    lg: false,
  })

  if (isDrawerSidebar) {
    return(
      <Drawer isOpen={isOpen} placement="left" onClose={onClose}>
        <DrawerOverlay>
          <DrawerContent bg="gray.800" p="4">
            <DrawerCloseButton></DrawerCloseButton>
            <DrawerHeader>Navegação</DrawerHeader>
            <DrawerBody>
              <SidebarNav />
            </DrawerBody>
          </DrawerContent>
        </DrawerOverlay>
      </Drawer>
      
    )
  }

  return(
    <Box as="aside" w="64" mr="8">
      <SidebarNav />
    </Box>
  )
}