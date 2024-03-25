import React from 'react'
import {
    Icon,
    IconButton,
    MenuItem,
    Avatar,
    useMediaQuery,
    Hidden,
} from '@material-ui/core'
import { MatxMenu, MatxSearchBox } from 'app/components'
import NotificationBar from '../../NotificationBar/NotificationBar'
import { Link } from 'react-router-dom'
import ShoppingCart from '../../ShoppingCart/ShoppingCart'
import { makeStyles, useTheme } from '@material-ui/core/styles'
import clsx from 'clsx'
import useAuth from 'app/hooks/useAuth'
import useSettings from 'app/hooks/useSettings'
import { NotificationProvider } from 'app/contexts/NotificationContext'
import LogoClient from './../../zen/logoClient';

const useStyles = makeStyles(({ palette, ...theme }) => ({

    logo: {
        margin: theme.spacing(3),
        width: theme.spacing(20),
        height: theme.spacing(15),
        display: 'flex',
        alignItems: 'center',
        '& span': {
            fontSize: 26,
            lineHeight: 1.3,
            fontWeight: 800,
        },
    },

    topbar: {
        top: 0,
        zIndex: 96,
        transition: 'all 0.3s ease',
        background:
            'linear-gradient(180deg, rgba(255, 255, 255, 0.95) 44%, rgba(247, 247, 247, 0.4) 50%, rgba(255, 255, 255, 0))',

        '& .topbar-hold': {
            backgroundColor: palette.primary.main,
            height: 80,
            paddingLeft: 18,
            paddingRight: 20,
            [theme.breakpoints.down('sm')]: {
                paddingLeft: 16,
                paddingRight: 16,
            },
            [theme.breakpoints.down('xs')]: {
                paddingLeft: 14,
                paddingRight: 16,
            },
        },
        '& .fixed': {
            boxShadow: theme.shadows[8],
            height: 64,
        },
    },
    userMenu: {
        display: 'flex',
        alignItems: 'center',
        cursor: 'pointer',
        borderRadius: 24,
        padding: 4,
        '& span': {
            margin: '0 8px',
            // color: palette.text.secondary
        },
    },
    menuItem: {
        display: 'flex',
        alignItems: 'center',
        minWidth: 185,
    },
}))

const Layout1Topbar = () => {
    const theme = useTheme()
    const classes = useStyles()
    const { settings, updateSettings } = useSettings()
    const { logout } = useAuth()
    const utilisateur = JSON.parse(sessionStorage.getItem('session')).utilisateur
    const isMdScreen = useMediaQuery(theme.breakpoints.down('md'))
    const fixed = settings?.layout1Settings?.topbar?.fixed

    const updateSidebarMode = (sidebarSettings) => {
        updateSettings({
            layout1Settings: {
                leftSidebar: {
                    ...sidebarSettings,
                },
            },
        })
    }

    const handleChangerMotdepasse= () => {
        console.log("changement du mot de passe");
    }

    const handleSidebarToggle = () => {
        let { layout1Settings } = settings
        let mode

        if (isMdScreen) {
            mode =
                layout1Settings.leftSidebar.mode === 'close'
                    ? 'mobile'
                    : 'close'
        } else {
            mode =
                layout1Settings.leftSidebar.mode === 'full' ? 'close' : 'full'
        }

        updateSidebarMode({ mode })
    }

    return (
        <div className={classes.topbar}>
            <div className={clsx({ 'topbar-hold': true, fixed: fixed })}>
                <div className="flex justify-between items-center h-full">
                    <div className="flex">
                        <IconButton
                            onClick={handleSidebarToggle}
                            className="hide-on-pc"
                        >
                            <Icon>menu</Icon>
                        </IconButton>
                        <div className ={classes.logo}>
                        <LogoClient/>
                        </div>
{/* 
                        <div className="hide-on-mobile">
                            <IconButton>
                                <Icon>mail_outline</Icon>
                            </IconButton>

                            <IconButton>
                                <Icon>web_asset</Icon>
                            </IconButton>

                            <IconButton>
                                <Icon>star_outline</Icon>
                            </IconButton>
                        </div> */}
                    </div>
                    <div className="flex items-center">
                        {/* <MatxSearchBox />
                        <NotificationProvider>
                            <NotificationBar />
                        </NotificationProvider> */}

                        {/* <NotificationBar2 /> */}

                        {/* <ShoppingCart /> */}

                        <MatxMenu
                            menuButton={
                                <div className={classes.userMenu}>
                                    <Hidden xsDown>
                                        <span>
                                            Bonjour <strong>{utilisateur.nom} {utilisateur.prenom}</strong> ({utilisateur.Role?.nom?? ""})
                                        </span>
                                    </Hidden>
                                    <Avatar
                                        className="cursor-pointer"
                                        src={utilisateur.avatar}
                                    />
                                </div>
                            }
                        >
                            <MenuItem>
                                <Link className={classes.menuItem} to="/">
                                    <Icon> dashboard </Icon>
                                    <span className="pl-4"> Dashboard </span>
                                </Link>
                            </MenuItem>
                            <MenuItem>
                                <Link
                                    className={classes.menuItem}
                                    to="/page-layouts/user-profile"
                                >
                                    <Icon> person </Icon>
                                    <span className="pl-4"> Profile </span>
                                </Link>
                            </MenuItem>
                           
                            <MenuItem
                                onClick={handleChangerMotdepasse}
                                className={classes.menuItem}
                            >
                                 <Link to="/session/passwordchange">
                                     <Icon> lock </Icon>
                                <span className="pl-4"> Changer le mot de passe </span>   
                                    </Link>
                                
                            </MenuItem>
                            <MenuItem>
                            <Link to="/"   onClick={logout}
                                className={classes.menuItem}
                            >
                                <Icon> power_settings_new </Icon>
                                <span className="pl-4"> Déconnexion </span>
                                </Link>
                            </MenuItem>
                        </MatxMenu>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default React.memo(Layout1Topbar)
