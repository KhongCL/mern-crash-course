import React from 'react'
import { Button, Container, Flex, HStack, Text, useColorMode} from '@chakra-ui/react'
import {Link as RouterLink} from 'react-router-dom'
import { FiPlusSquare } from 'react-icons/fi'
import { IoMoon } from 'react-icons/io5'
import { LuSun } from 'react-icons/lu'


const Navbar = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  return <Container maxW={"1140px"} px={4}>
    <Flex
      h={6}
      alignItems={"center"}
      justifyContent={"space-between"}
      flexDir={{
        base: "column",
        sm:"row"
      }}>

        <Text
          fontSize={{base:"22", sm:"28"}}
          fontWeight={"bold"}
          textTransform={"uppercase"}
          textAlign={"center"}
          bgGradient={"linear(to-r, teal.500, green.500)"}
          bgClip={"text"}
        >
        <RouterLink to={"/"}> Product Store 🛒</RouterLink>
        </Text>

        <HStack spacing={2} alignItems={"center"}>
          <RouterLink to={"/create"}>
          <Button>
            <FiPlusSquare fontSize={20}/>
          </Button>
          </RouterLink>

          <Button onClick={toggleColorMode}>
            {colorMode === "light" ? <IoMoon /> : <LuSun size="20"/>}
          </Button>
        </HStack>

    </Flex>
  </Container>
}

export default Navbar