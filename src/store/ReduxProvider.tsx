import React, { PropsWithChildren } from 'react'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
import Loader from '../common/Loader/Loader'
import store, { persistor } from './store'

const ReduxProvider = (props: PropsWithChildren<{}>) => {
	return (
		<Provider store={store}>
			<PersistGate persistor={persistor} loading={<Loader/>}>
				{props.children}
			</PersistGate>
		</Provider>
	)}

export default ReduxProvider
