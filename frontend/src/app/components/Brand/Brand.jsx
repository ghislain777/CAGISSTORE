import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import clsx from 'clsx'
import useSettings from 'app/hooks/useSettings'
import Logo from './../zen/logo';

const useStyles = makeStyles(({ palette, ...theme }) => ({
    brand: {
        padding: '20px 18px 20px 24px',
    },
    hideOnCompact: {
        display: 'none',
    },
    large: {
        width: theme.spacing(15),
        height: theme.spacing(7),
      },
    logo: {
      
        margin: theme.spacing(0),
        width: 200,
        height: 100,
        display: 'flex',
        alignItems: 'left',
        '& span': {
            fontSize: 26,
            lineHeight: 1.3,
            fontWeight: 100,
        },
    },
}))

const Brand = ({ children }) => {
    const classes = useStyles()
    const { settings } = useSettings()
    const leftSidebar = settings.layout1Settings.leftSidebar
    const { mode } = leftSidebar

    return (
        <div
            className={clsx('flex items-center justify-between', classes.brand)}
        >
            <div className="flex items-center">
            <div className={classes.logo}>
                              <Logo />
                            </div>
                <span
                    className={clsx({
                        'text-18 ml-2 font-medium sidenavHoverShow': true,
                        [classes.hideOnCompact]: mode === 'compact',
                    })}
                >
                    
                </span>
            </div>
            <div
                className={clsx({
                    sidenavHoverShow: true,
                    [classes.hideOnCompact]: mode === 'compact',
                })}
            >
                {children || null}
            </div>
        </div>
    )
}

export default Brand
