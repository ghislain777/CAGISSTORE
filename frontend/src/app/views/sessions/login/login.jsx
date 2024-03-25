import React, { useState } from 'react'
import { Redirect } from 'react-router-dom'
import {
    Card,
    Checkbox,
    FormControlLabel,
    Grid,
    Button,
    CircularProgress,
} from '@material-ui/core'
import { TextValidator, ValidatorForm } from 'react-material-ui-form-validator'
import { MatxLogo, MatxDivider } from 'app/components'
import { makeStyles } from '@material-ui/core/styles'
import history from 'history.js'
import clsx from 'clsx'
import useAuth from 'app/hooks/useAuth'
import Logo from './../../../components/zen/logo'
import LogoClient from './../../../components/zen/logoClient'
import UtilisateurModel from 'app/modules/utilisateur/model/utilisateur_model'
// import { loginUtilisateur } from '../../../../model/utilisateurModel'

const useStyles = makeStyles(({ palette, ...theme }) => ({
    cardHolder: {
        // background: '#1A2038',
        background: palette.primary.dark,

    },
    card: {
        maxWidth: 800,
        margin: '1rem',
    },
    cardLeft: {
        background: '#161c37 url(/admin/assets/images/bg-3.png) no-repeat',
        backgroundSize: 'cover',
        color: '#fff',
        display: 'flex',
        flexDirection: 'column',
        [theme.breakpoints.down('sm')]: {
            minWidth: 200,
        },
    },
    logo: {
        margin: theme.spacing(3),
        width: 300,
        height: 200,
        // display: 'flex',
        alignItems: 'center',
        '& span': {
            fontSize: 26,
            lineHeight: 1.3,
            fontWeight: 800,
        },
    },
    mainTitle: {
        fontSize: 18,
        lineHeight: 1.3,
        marginBottom: 24,
    },
    features: {
        '& .item': {
            position: 'relative',
            marginBottom: 12,
            paddingLeft: 20,
            '&::after': {
                position: 'absolute',
                content: '""',
                width: 4,
                height: 4,
                borderRadius: 4,
                left: 4,
                top: 7,
                backgroundColor: palette.error.main,
            },
        },
    },
    buttonProgress: {
        position: 'absolute',
        top: '50%',
        left: '50%',
        marginTop: -12,
        marginLeft: -12,
    },
    socialButton: {
        width: '100%',
        '& img': {
            margin: '0 8px',
        },
    },
}))

const Login = () => {

    
    const [loading, setLoading] = useState(false)
    const [userInfo, setUserInfo] = useState({
        email: '',
        password: '',
        remember: true,
    })

    const utilisateurModel = new UtilisateurModel()

    const [valid, setValid] = useState(false)

    const [message, setMessage] = useState('')
    const { login, estAuthentifie } = useAuth()

    const classes = useStyles()

    const handleChange = ({ target: { name, value } }) => {
        let temp = { ...userInfo }
        temp[name] = value
        setUserInfo(temp)
    }

    const handleFormSubmit = async (event) => {
        setLoading(true)
        // console.log(userInfo);
        try {
            const response = await utilisateurModel.loginUtilisateur({
                email: userInfo.email,
                motdepasse: userInfo.password,
            })
            console.log("utilisateur:::: " + JSON.stringify(response))

            if (response.statusCode === 200) {

                if (response.data.code === 401) {
                    setMessage(response.data.message)
                    setLoading(false)
                }
                else {
                    let session = JSON.stringify({
                        utilisateur: response.data.utilisateur,
                        privileges: response.data.privileges,
                        navigation: response.data.navigation,
                    })

                    sessionStorage.setItem('session', session)

                    login(
                        response.data.utilisateur,
                        response.data.privileges,
                        response.data.navigation
                    )
                    //console.log(...response.data.navigation);
                    history.push('/')
                }
            }
            else {
                // l'utilisateur n'a pas réussi à se connecter
                setMessage(response.data)
                setLoading(false)
            }
        } catch (e) {
            console.log(e)
            setMessage('Adresse email ou mot de passe incorrect')
            setLoading(false)
        }
    }

    return (
        <div>
            <div
                className={clsx(
                    'flex justify-center items-center  min-h-full-screen',
                    classes.cardHolder
                )}
            >
                <Card className={classes.card}>
                    <Grid container>
                        <Grid item lg={6} md={6} sm={5} xs={12}>
                            <div className="p-8 flex justify-center bg-light-gray items-center h-full">
                                <img
                                    className="w-full"
                                    src="/admin/assets/images/logos/logo.png"
                                    alt=""
                                />
                            </div>
                            {/* <div
                                className={clsx({
                                    'py-8 px-14 h-full': true,
                                    [classes.cardLeft]: true,
                                })}
                            >
                                {/* <h1 className={classes.mainTitle}>
                                    KISSAN TRANSPORT
                                </h1> */}
                            {/* <div className={classes.features}> */}
                            {/* <div className="item">
                                    Rapiditié
                                </div>
                                <div className="item">
                                   Fiabilité
                                </div>
                                <div className="item">
                                   Proféssionalisme
                                </div> 
                                <Grid item lg={5} md={5} sm={5} xs={12}>
                                    <div className="p-8 flex justify-center bg-light-gray items-center h-full">
                                        <img
                                            className="w-full"
                                            src="/assets/images/logos/logo.png"
                                            alt="logo"
                                        />
                                    </div>
                                </Grid>

                                {/* </div>
                                <span className="flex-grow"></span>
                            </div> */}
                        </Grid>
                        <Grid item lg={6} md={6} sm={6} xs={12}>
                            {/* <div className={classes.logo}>
                              <Logo />
                            </div>  */}
                            <MatxDivider
                                className="mt-6 px-8"
                                text="Identification CAGI STORE"
                            />

                            <div className="p-8 h-full relative">
                                <ValidatorForm onSubmit={handleFormSubmit}>
                                    <TextValidator
                                        className="mb-6 w-full"
                                        variant="outlined"
                                        size="small"
                                        label="Email"
                                        onChange={handleChange}
                                        type="email"
                                        name="email"
                                        value={userInfo.email}
                                        validators={['required', 'isEmail']}
                                        errorMessages={[
                                            'Adresse email requise',
                                            'email non valide',
                                        ]}
                                    />
                                    <TextValidator
                                        className="mb-3 w-full"
                                        label="Mot de passe"
                                        variant="outlined"
                                        size="small"
                                        onChange={handleChange}
                                        name="password"
                                        type="password"
                                        value={userInfo.password}
                                        validators={['required']}
                                        errorMessages={['mot de passe requis']}
                                    />
                                    <FormControlLabel
                                        className="mb-3 min-w-288"
                                        name="remember"
                                        onChange={handleChange}
                                        control={
                                            <Checkbox
                                                size="small"
                                                onChange={({
                                                    target: { checked },
                                                }) =>
                                                    handleChange({
                                                        target: {
                                                            name: 'remember',
                                                            value: checked,
                                                        },
                                                    })
                                                }
                                                checked={userInfo.remember}
                                            />
                                        }
                                        label="Se souvenir de moi"
                                    />

                                    {message && (
                                        <p className="text-error">{message}</p>
                                    )}

                                    <div className="flex flex-wrap items-center mb-4">
                                        <div className="relative">
                                            <Button
                                                variant="contained"
                                                color="primary"
                                                disabled={loading}
                                                type="submit"
                                            >
                                                Connexion
                                            </Button>
                                            {loading && (
                                                <CircularProgress
                                                    size={24}
                                                    className={
                                                        classes.buttonProgress
                                                    }
                                                />
                                            )}
                                        </div>
                                    </div>
                                </ValidatorForm>
                            </div>
                        </Grid>
                    </Grid>
                </Card>
            </div>
        </div>
    )
}

export default Login
