import { Center, Heading, Stack, Wrap, WrapItem } from "@chakra-ui/layout";
import { FC, memo, useCallback, useEffect } from "react";
import { UserCard } from "../organisms/user/UserCard";

import { useAllUsers } from "../../hooks/useAllUsers"; 
import { Spinner } from "@chakra-ui/spinner";
import { Modal, ModalBody, ModalCloseButton, ModalContent, ModalHeader, ModalOverlay } from "@chakra-ui/modal";
import { useDisclosure } from "@chakra-ui/hooks";
import { UserDtailModal } from "../organisms/user/UserDtailModal";
import { useSelectUser } from "../../hooks/useSelectUser";
import { useLoginUser } from "../../hooks/useLoginUser";


export const UserManagement:FC = memo(()=>{
    const{getUsers,users,loading} =useAllUsers();
    const {isOpen,onOpen,onClose}= useDisclosure();
    const {onSelectUser,selectedUser} = useSelectUser();
    const {loginUser} = useLoginUser();

    useEffect(()=>getUsers(),[])
  
    const onClickUser = useCallback((id:number)=>{
        onSelectUser({id,users,onOpen});
    },[users])

    return(
        <>
        {loading?(
            <Center h='100vh'>
                <Spinner/>
            </Center>
        ):(
            <><Heading fontSize='sm'>ログイン中のユーザーは{loginUser?.name}</Heading><Wrap p={{ base: 4, md: 10 }}>
                        {users.map((obj, key) => (
                            <WrapItem key={key}>
                                <UserCard id={obj.id} imageUrl='https://source.unsplash.com/random' userName={obj.username} fullName={obj.name} onClick={onClickUser} />
                            </WrapItem>
                        ))}
                    </Wrap></>
        )}
        <UserDtailModal isOpen={isOpen}  onClose={onClose} user={selectedUser}/>
        </>
    )
})