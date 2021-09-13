import axios from "axios"
import { useCallback, useState } from "react";
import { useHistory } from "react-router";
import { User } from "../components/types/api/user";
import { useLoginUser } from "./useLoginUser";
import { useMessage } from "./useMessage";



export const useAuth = () =>{
    const history = useHistory();
    const {showMessage} = useMessage();
    const {setLoginUser} = useLoginUser();
    const [loading, setLoading] = useState(false)
    const login = useCallback((id:string) => {
        setLoading(true);
        axios.get<User>(`https://jsonplaceholder.typicode.com/users/${id}`)
        .then((res)=>{
            if(res.data){
                showMessage({title:'ログインが成功しました',status:'success'})
                setLoginUser(res.data);
                history.push('/home');
            }else{
                showMessage({title:'ユーザーが見つかりません',status:'error'})
                setLoading(false);
            }
        }).catch(()=>{
            showMessage({title:'ユーザーが見つかりません',status:'error'})
            setLoading(false);
        })
    },[],)
    return{login,loading}
}