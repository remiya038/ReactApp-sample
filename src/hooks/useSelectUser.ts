import { useCallback, useState } from "react";
import { User } from "../components/types/api/user";

type Props = {
    users:Array<User>;
    id:number;
    onOpen:()=>void;
}

export const useSelectUser = () =>{

    const [selectedUser,setSelectedUser] = useState<User | null>(null);

    const onSelectUser = useCallback((props:Props) =>{
        const {users,id,onOpen} = props;
        const targetUser = users.find((user)=>user.id===id);
        setSelectedUser(targetUser!);
        onOpen();
    },[])
    return {onSelectUser,selectedUser}
}