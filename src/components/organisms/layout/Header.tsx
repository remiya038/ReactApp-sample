import { useDisclosure } from "@chakra-ui/hooks";
import { Box, Flex, Heading, Link } from "@chakra-ui/layout";
import { FC, memo, useCallback } from "react";
import { useHistory } from "react-router";
import { MenuIconButton } from "../../atoms/button/MenuIconButton";
import { MenuDrawer } from "../../molecules/MenuDrawer";

export const Header:FC = memo(()=>{
    const {isOpen,onClose,onOpen} = useDisclosure();

    const histroy = useHistory();

    const onClickHome = useCallback( () =>{histroy.push('/home')},[histroy]);
    const onClickUserManagement = useCallback( () =>{histroy.push('/home/user_management')},[histroy]);
    const onClickSetting = useCallback( () =>{histroy.push('/home/setting')},[histroy]);

    return (
    <>
    <Flex 
    as="nav"
    bg="teal.500" 
    color="gray.50" 
    align='center'
    justify="space-between"
    padding= {{base:5,md:3}}
    >
        <Flex align='center' as='a' mr={8} _hover={{cursor:'pointer'}}>
            <Heading as="h1" fontSize={{base:'md' ,md:'lg'}} onClick={onClickHome}>ユーザー管理アプリ</Heading>
        </Flex>
        <Flex align='center' fontSize='sm' flexGrow={2} display={{base: "none",md:"flex"}}>
            <Box pr={4}>
                <Link onClick={onClickUserManagement}>ユーザー一覧</Link>
            </Box>
            <Link onClick={onClickSetting}>設定</Link>
        </Flex>
        <MenuIconButton onOpen={onOpen}/>
    </Flex>
    <MenuDrawer onClose={onClose} isOpen={isOpen} onClickHome={onClickHome} onClickUserManagement={onClickUserManagement} onClickSetting={onClickSetting}/>
    </>
    )
})