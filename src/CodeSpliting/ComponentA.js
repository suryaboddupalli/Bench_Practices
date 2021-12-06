import React, { lazy, Suspense } from 'react'
const Componentb = lazy(() => import('./ComponentB'));

function ComponentA() {
    return (
        <div>
            <Suspense fallback={<div>loading</div>}>
                <ComponentB />
            </Suspense>
        </div>
    )
}