import { Input } from "@chakra-ui/input";
import { Box, Divider, Flex, Heading ,Stack} from "@chakra-ui/layout";
import { FC, memo, useState } from "react";
import { useAuth } from "../../hooks/useAuth";
import { PrimaryButton } from "../atoms/button/PrimaryButton";

export const Login:FC = memo(()=>{
    const [userId, setUserId] = useState('');
    const {login , loading} = useAuth();

    const onClickLogin = () =>{
        login(userId)
    }
    return(
        <Flex align='center' justify='center' height='100vh'>
            <Box bg='white' w='sm' p={4} borderRadius='md' shadow='md'>
                <Heading as='h1' size='lg' textAlign='center'>ユーザー管理アプリ</Heading>
                <Divider my={4} />
                <Stack spacing={5} py={4} px={10}>
                    <Input placeholder='ユーザーID' value={userId} onChange={(e:React.ChangeEvent<HTMLInputElement>)=>{setUserId(e.target.value)}}/>
                    <PrimaryButton loading={loading} disabled={userId===""} onClick={onClickLogin} >ログイン</PrimaryButton>
                </Stack>
            </Box>
        </Flex>

    )
})