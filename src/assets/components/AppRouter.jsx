import React from 'react';
import { Navigate, Route, Routes, } from 'react-router-dom';
import { privateRoutes } from '../routes';
import { publicRoutes } from '../routes';

import {HOME_ROUTE, LOGIN_ROUTE} from '../../assets/utils/consts'



const AppRouter = () => {

    const isAuth = false

    return (
        <div>

            <Routes>

                {isAuth && privateRoutes.map((route, index) => <Route path={route.path} key={index} element={route.element} exact={route.exact} />)}
                {publicRoutes.map((route, index) => <Route path={route.path} key={index} element={route.element} exact={route.exact} />)}

                <Route
                    path="*"
                    element={<Navigate to={isAuth?HOME_ROUTE : LOGIN_ROUTE} replace />}
                />

            </Routes>

        </div>
    );
};

export default AppRouter;