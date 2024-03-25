import '../fake-db'
import React from 'react'
import { Provider } from 'react-redux'
import { Router, Switch, Route } from 'react-router-dom'
import AppContext from './contexts/AppContext'
import history from 'history.js'
import routes from './RootRoutes'
import { Store } from './redux/Store'
import { GlobalCss, MatxSuspense, MatxTheme, MatxLayout } from 'app/components'
import sessionRoutes from './views/sessions/SessionRoutes'
import AuthGuard from './auth/AuthGuard'
import { AuthProvider } from 'app/contexts/FirebaseAuthContext'
import { SettingsProvider } from 'app/contexts/SettingsContext'
import { ZenAuthProvider } from './contexts/ZenAuthContext';
import { QueryClient, QueryClientProvider } from 'react-query'
import { MuiThemeProvider } from '@material-ui/core/styles'
import {getMuiTheme} from '../model/config'

const App = () => {
    const queryClient = new QueryClient()
    return (
        <QueryClientProvider client={queryClient}>
        <AppContext.Provider value={{ routes }}>
            <Provider store={Store}>
                <SettingsProvider>
                    <MatxTheme>
                    <MuiThemeProvider theme={getMuiTheme()}>
                        <GlobalCss />
                        <Router history={history} basename={'/admin'}>
                            <ZenAuthProvider>
                                <MatxSuspense>
                                    <Switch>
                                        {/* AUTHENTICATION PAGES (SIGNIN, SIGNUP ETC.) */}
                                        {sessionRoutes.map((item, i) => (
                                            <Route
                                                key={i}
                                                path={item.path}
                                                component={item.component}
                                            />
                                        ))}
                                        {/* AUTH PROTECTED DASHBOARD PAGES */}
                                        <AuthGuard>
                                            <MatxLayout />{' '}
                                            {/* RETURNS <Layout1/> component */}
                                        </AuthGuard>
                                    </Switch>
                                </MatxSuspense>
                            </ZenAuthProvider>
                        </Router>
                        </MuiThemeProvider>
                    </MatxTheme>
                </SettingsProvider>
            </Provider>
        </AppContext.Provider>
        </QueryClientProvider>
    )
}

export default App
