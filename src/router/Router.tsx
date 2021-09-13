import { FC, memo } from "react"
import { Route, Switch } from "react-router"
import { Login } from "../components/pages/Login"
import { Page404 } from "../components/pages/Page404"
import { HomeRoutes } from "./HomeRoutes"
import {HeaderLayout} from '../components/template/HeaderLayout'
import { LoginUserProvider } from "../providers/LoginUserProvider"

export const Router:FC = memo(() =>{
    return(
        
        <Switch>
            <LoginUserProvider>
                <Route exact path="/">
                    <Login/>
                </Route>
                <Route  path="/home" render={({match:{url}})=>(
                    <Switch>
                        {HomeRoutes.map((obj,key)=>(
                        <Route key={key} exact={obj.exact} path={`${url}${obj.path}`} >
                            <HeaderLayout>{obj.children}</HeaderLayout>
                        </Route>
                        ))} 
                    </Switch>
                )}/>
                </LoginUserProvider>
                <Route>
                    <Page404/>
                </Route>
            
        </Switch>
    );
})
