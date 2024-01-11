'use client'
import {store} from './store'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
import { persistStore } from 'redux-persist'


export const StoreProvider =({children}:{children:React.ReactNode}) =>{
    const persistor = persistStore(store)
    


    return <Provider store={store}>
        <PersistGate persistor={persistor}>

        {children}
        </PersistGate>
    </Provider>
}