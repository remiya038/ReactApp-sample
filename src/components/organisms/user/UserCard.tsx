import { FC, memo } from "react";
import { Box, Stack, Text } from "@chakra-ui/layout";
import { Image } from "@chakra-ui/react";

type Props = {
    id:number;
    imageUrl:string;
    userName:string;
    fullName:string;
    onClick:(id:number)=>void;
};

export const UserCard:FC<Props> = memo((props)=>{
    const {id,imageUrl,userName,fullName,onClick} = props;
    return(
        <Box p={4} 
        w='260px' 
        h='260px' 
        bg='white' 
        borderRadius='10px' 
        shadow='md'
        _hover={{cursor:'Pointer',opacity:0.6}}
        onClick={()=>onClick(id)}
        > 
         <Stack textAlign='center'>
             <Image 
                 borderRadius='full' 
                 boxSize='160px' 
                 src={imageUrl}
                 alt='プロフィール画像'
                 m='auto'
             />
             <Text fontSize='lg' fontWeight='bold'>{userName}</Text>
             <Text fontSize='sm' color='gray'>{fullName}</Text>
         </Stack>
        </Box>

    )
})