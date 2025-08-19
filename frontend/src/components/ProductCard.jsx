import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { 
    Box, 
    Button, 
    Text, 
    Image, 
    HStack, 
    VStack, 
    IconButton, 
    useColorModeValue, 
    Heading, 
    useToast, 
    Modal, 
    Input, 
    useDisclosure, 
    ModalCloseButton, 
    ModalOverlay, 
    ModalContent, 
    ModalBody, 
    ModalHeader, 
    ModalFooter
} from '@chakra-ui/react'
import React, { useState } from 'react'
import { useProductStore } from "../store/product";

const ProductCard = ({product}) => {
    const { deleteProduct, updateProduct }= useProductStore();
    const toast= useToast();
    const { isOpen, onOpen, onClose } = useDisclosure();
    const [updatedProduct, setUpdatedProduct] = useState(product);

    const handleUpdateProduct = async (pid, updatedProduct) => {
        const { success, message } = await updateProduct(pid, updatedProduct);
        if (!success) {
            toast({
                title: "Error",
                description: message,
                status: "error",
                duration: 3000,
                isClosable: true,
            });
        } else {
            toast({
                title: "Success",
                description: message,
                status: "success",
                duration: 3000,
                isClosable: true,
            });
            onClose();
        }
    };

    const handleDeleteProduct= async (pid) => {
        const {success, message} = await deleteProduct(pid);
        if (!success) {
            toast({
                title: "Error",
                description: message,
                status: "error",
                duration: 3000,
                isClosable: true,
            });
        } else{
            toast({
                title: "Success",
                description: message,
                status: "success",
                duration: 3000,
                isClosable: true,
            });
        }
    };


    const textColor= useColorModeValue("gray.600", "gray.200");
    const bg= useColorModeValue("white", "gray.800");
    return (
        <Box 
            shadow={"lg"}
            rounded={"lg"}
            overflow={"hidden"}
            transition={"all 0.3s ease"}
            _hover={{ transform: "translateY(-5px)", shadow: "xl"}}
            bg={bg}
        >
            <Image src={product.image} alt={product.name} h={48} w="full" objectFit="cover"/>
            <Box p={4}>
                <Heading as="h3" size="md" mb={2} color={textColor}>
                    {product.name}
                </Heading>
                <Text fontWeight={"bold"} fontSize={"xl"} color={textColor} mb={4}>
                    ${product.price}
                </Text>
                <HStack spacing={2}>
                    <IconButton icon={<FaEdit />} onClick={onOpen} colorScheme="blue"/>
                    <IconButton icon={<MdDelete />} onClick={()=>handleDeleteProduct(product._id)} colorScheme="red"/>
                </HStack>
            </Box>
            <Modal isOpen={isOpen} onClose={onClose}>
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>
                        Update Product
                    </ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                        <VStack spacing={4}>
                            <Input 
                                placeholder='Product Name'
                                name="name"
                                value={updatedProduct.name}
                                onChange={(e) => setUpdatedProduct({...updatedProduct, name: e.target.value})}
                            /> 

                            <Input 
                                placeholder='Product Price'
                                name= "price"
                                type= "number"
                                value={updatedProduct.price}
                                onChange={(e) => setUpdatedProduct({...updatedProduct, price: e.target.value})}
                            />

                            <Input 
                                placeholder='Product Image URL'
                                name= "image"
                                value={updatedProduct.image}
                                onChange={(e) => setUpdatedProduct({...updatedProduct, image: e.target.value})}
                            />
                        </VStack>
                    </ModalBody>
                    <ModalFooter>
                        <Button colorScheme="blue" onClick={() => handleUpdateProduct(product._id, updatedProduct)}>
                            Update
                        </Button>
                        <Button ml={3} onClick={onClose}>
                            Cancel
                        </Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </Box>
    )
}

export default ProductCard