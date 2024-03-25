import React, { useState } from 'react'
import {
    Card,
    Checkbox,
    FormControlLabel,
    Grid,
    Button,
    CircularProgress,
} from '@material-ui/core'
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator'
import { useQuery, useMutation, useQueryClient } from 'react-query'
import ApiAlert from 'app/components/zen/apiAlert'
import { makeStyles } from '@material-ui/core/styles'
import clsx from 'clsx'
import { Link } from 'react-router-dom'
import useAuth from 'app/hooks/useAuth'
import history from 'history.js'
import UtilisateurModel from 'app/modules/utilisateur/model/utilisateur_model'

const useStyles = makeStyles(({ palette, ...theme }) => ({
    cardHolder: {
        background: '#010208',
    },
    card: {
        maxWidth: 650,
        borderRadius: 12,
        margin: '1rem',
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
    labelLink: {
        color: palette.primary.main,
        textDecoration: 'underline',
    },
}))

const Passwordchange = () => {
    const [loading, setLoading] = useState(false)

    const [utilisateur, setUtilisateur] = useState({
        email_utilisateur: JSON.parse(sessionStorage.getItem('session')).utilisateur.email,
        mot_de_passe_utilisateur: '',
        nouveau_mot_de_passe_utilisateur: '',
        confirmation: '',
    })
    const classes = useStyles()
    const [message, setMessage] = useState('')
    const [close, setClose] = useState(false)
    const [apiAlert, setapiAlert] = useState({
        severity: 'severity',
        message: '',
        open: false,
        automaticClose: true,
        duration: 10000,
    })

    const utilisateurmodel = new UtilisateurModel()

    const handleChange = ({ target: { name, value } }) => {
        setUtilisateur({
            ...utilisateur,
            [name]: value,
        })
    }

    //const queryClient = useQueryClient()
    const mutationPasswordchange = useMutation(utilisateurmodel.changementPass, {
        onSuccess: (data) => {
            //     queryClient.invalidateQueries('Utilisateurs')
            if (data.statusCode == 200) {
                setapiAlert({
                    message: 'Changement de mot de passe réussi',
                    open: true,
                    severity: 'success',
                    automaticClose: false,
                    duration: 10000,
                })
                setClose(true)
            } else {
                setapiAlert({
                    message: data.data,
                    open: true,
                    severity: 'error',
                    automaticClose: false,
                    duration: 100000,
                })
            }
        },
        onError: () => {
            //   queryClient.invalidateQueries('Utilisateurs')
            console.log('echec')
            setapiAlert({
                message: 'Echec lors de l opération',
                open: true,
                severity: 'error',
                automaticClose: false,
            })
        },
    })
    const handleFermeture = () => {
        setapiAlert({ ...apiAlert, open: false })
        setUtilisateur({
            email_utilisateur:JSON.parse(sessionStorage.getItem('session')).utilisateur.email,
            mot_de_passe_utilisateur: '',
            nouveau_mot_de_passe_utilisateur: '',
            confirmation: '',
        })
        if (close) history.push('/')
    }

    const handleFormSubmit = async () => {
        console.log('utilisateur::' + JSON.stringify(utilisateur))
        mutationPasswordchange.mutate({
            ...utilisateur,
            email_utilisateur: JSON.parse(sessionStorage.getItem('session')).utilisateur.email
        })
    }

    let {
        confirmation,
        mot_de_passe_utilisateur,
        nouveau_mot_de_passe_utilisateur,
        email_utilisateur,
    } = utilisateur

    ValidatorForm.addValidationRule('isPasswordMatch', (value) => {
        if (value !== utilisateur.nouveau_mot_de_passe_utilisateur) {
            return false
        }
        return true
    })
    return (
        <div
            className={clsx(
                'flex justify-center items-center  min-h-full-screen',
                classes.cardHolder
            )}
        >
            <Card className={classes.card}>
                <Grid container>
                    <Grid item lg={5} md={5} sm={5} xs={12}>
                        <div className="p-8 flex justify-center bg-light-gray items-center h-full">
                            <img
                                className="w-full"
                                src="/assets/images/logos/logo.png"
                                alt=""
                            />
                        </div>
                    </Grid>

                    <Grid item lg={7} md={7} sm={7} xs={12}>
                        <div className="px-8 pt-8">
                            {/* <Button
                                onClick={handleGoogleRegister}
                                variant="contained"
                                className={classes.socialButton}
                            >
                                <img
                                    src="/assets/images/logos/google.svg"
                                    alt=""
                                />
                                Sign Up With Google
                            </Button> */}
                            <ApiAlert
                                message={apiAlert.message}
                                severity={apiAlert.severity}
                                open={apiAlert.open}
                                handleAlertClose={handleFermeture}
                                duration={apiAlert.duration}
                            />
                        </div>
                        <p className="text-center mb-0 h4">
                            Changement de mot de passe
                        </p>
                        <div className="p-8 h-full">
                            <ValidatorForm onSubmit={handleFormSubmit}>
                                <TextValidator
                                    className="mb-6 w-full"
                                    variant="outlined"
                                    size="small"
                                    label="Ancien mot de passe"
                                    onChange={handleChange}
                                    type="password"
                                    name="mot_de_passe_utilisateur"
                                    value={mot_de_passe_utilisateur || ''}
                                    validators={['required']}
                                    errorMessages={[
                                        'Le champs mot de passe est requis',
                                    ]}
                                />
                                <TextValidator
                                    className="mb-6 w-full"
                                    variant="outlined"
                                    size="small"
                                    label="Nouveau mot de passe"
                                    onChange={handleChange}
                                    type="password"
                                    name="nouveau_mot_de_passe_utilisateur"
                                    value={
                                        nouveau_mot_de_passe_utilisateur || ''
                                    }
                                    validators={['required']}
                                    errorMessages={[
                                        'Le champs mot de passe est requis',
                                    ]}
                                />
                                <TextValidator
                                    className="mb-4 w-full"
                                    label="Confirmation"
                                    variant="outlined"
                                    size="small"
                                    onChange={handleChange}
                                    name="confirmation"
                                    type="password"
                                    value={confirmation || ''}
                                    validators={['required', 'isPasswordMatch']}
                                    errorMessages={[
                                        'Le champs confirmation est requis',
                                        'Les mots de passe ne correspondent pas',
                                    ]}
                                />
                                {/* <FormControlLabel
                                    className="mb-4"
                                    name="agreement"
                                    onChange={(e) =>
                                        handleChange({
                                            target: {
                                                name: 'agreement',
                                                value: e.target.checked,
                                            },
                                        })
                                    }
                                    control={
                                        <Checkbox
                                            size="small"
                                            checked={agreement || false}
                                        />
                                    }
                                    label={
                                        <>
                                            I have read and agree to the{' '}
                                            <a
                                                href="/"
                                                className={classes.labelLink}
                                            >
                                                terms of service.
                                            </a>
                                        </>
                                    }
                                /> */}
                                {message && (
                                    <p className="text-error">{message}</p>
                                )}
                                <div className="flex items-center">
                                    <div className="relative">
                                        <Button
                                            variant="contained"
                                            color="primary"
                                            disabled={loading}
                                            type="submit"
                                        >
                                            Valider
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
                                    <span className="mx-2 ml-5"></span>
                                    <Link to="/administration/dashboard">
                                        <Button className="capitalize">
                                            Annuler
                                        </Button>
                                    </Link>
                                </div>
                            </ValidatorForm>
                        </div>
                    </Grid>
                </Grid>
            </Card>
        </div>
    )
}

export default Passwordchange
