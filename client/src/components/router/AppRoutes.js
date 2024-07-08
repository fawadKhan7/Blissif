import React, { Suspense } from 'react'
import { Route, Routes } from 'react-router-dom'
import { RoutesData } from '../../utils/config'
import { ImportLazy } from '../../utils/importLazy'

const AppRoutes = () => {
    return (
        <Suspense fallback={<div>Loading</div>}>
            <Routes>
                {RoutesData.map(({ path, component }) => {
                    const Component = ImportLazy(component);
                    return <Route path={path} key={path} element={<Component />} />;
                })}
            </Routes>
        </Suspense>
    )
}

export default AppRoutes