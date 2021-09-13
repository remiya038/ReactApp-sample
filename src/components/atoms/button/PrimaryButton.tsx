import { Button } from "@chakra-ui/button";

import { FC, memo, ReactNode } from "react";

type Props = {
    children:ReactNode;
    onClick:()=>void;
    disabled?:boolean;
    loading?:boolean;
};

export const PrimaryButton:FC<Props> = memo((props)=>{
    const {children,onClick,disabled=false,loading=false} = props;
    return(
        <Button 
        bg="teal.400" 
        color="white" 
        _hover={{opacity:0.5}}
        onClick={onClick}
        isLoading={loading}
        disabled={disabled}
        >{children} 
        </Button>

    )
})