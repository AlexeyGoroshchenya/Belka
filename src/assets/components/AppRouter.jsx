import React from 'react';
import { Navigate, Route, Routes, } from 'react-router-dom';
import { privateRoutes } from '../routes';
import { publicRoutes } from '../routes';

import {HOME_ROUTE, LOGIN_ROUTE} from '../../assets/utils/consts'
import { useContext } from 'react';
import { Context } from '../..';



const AppRouter = () => {

    const {user} = useContext(Context)
    

    return (
        <div>

            <Routes>

                {privateRoutes.map((route, index) => <Route path={route.path} key={index} element={route.element} exact={route.exact} />)}
                {publicRoutes.map((route, index) => <Route path={route.path} key={index} element={route.element} exact={route.exact} />)}

                <Route
                    path="*"
                    element={<Navigate to={user.isAuth?HOME_ROUTE : LOGIN_ROUTE} replace />}
                />

            </Routes>

        </div>
    );
};

export default AppRouter;