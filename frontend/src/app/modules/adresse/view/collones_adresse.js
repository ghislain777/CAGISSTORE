
import React from 'react'
import { MatxMenu } from '../../../components'
import AddIcon from '@material-ui/icons/Add'
import { Delete, Edit, ArrowRightAlt, ArrowDropDown, Visibility, PostAdd, Check, Add, LocalShipping, EditOutlined, AddAPhotoOutlined } from '@material-ui/icons'
import { makeStyles, useTheme } from '@material-ui/core/styles'
import { Avatar, Typography, Box, Button, Checkbox, Divider, Hidden, Icon, IconButton, MenuItem } from '@material-ui/core';
import { format, parseISO } from 'date-fns'
import { serveur } from '../../../../model/config';
const useStyles = makeStyles(({ palette, ...theme }) => ({
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

export default function getcollonesAdresse(fonctions) {

  const classes = makeStyles(({ palette, ...theme }) => ({
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


const getOptionActions = (adresse) => {
    switch (adresse.statut) {
      case 'Annulé':
        return [
          {
            id: 1,
            nom: 'Détails',
            action: (adresse) => handleClickSurAction(adresse, 'Détails'),
            icon: <Visibility color='primary' />

          },
        ]
      case 'Nouveau':
        return [
          {
            id: 1,
            nom: 'Détails',
            action: (adresse) => handleClickSurAction(adresse, 'Détails'),
            icon: <Visibility color='primary' />
          },
          {
            id: 2,
            nom: 'Modifier',
            action: (adresse) => handleClickSurAction(adresse, 'Modifier'),
            icon: <EditOutlined color='primary' />
          },
          {
            id: 3,
            nom: 'Supprimer',
            action: (adresse) => handleClickSurAction(adresse, 'Supprimer'),
            icon: <Delete color='error' />
          },


        ]

      default:
        return [
          //  {
          //    id: 1,
          //    nom: 'Détails',
          //    action: (adresse) => handleClickSurAction(adresse, 'Détails'),
          //    icon: <Visibility color='primary' />
          //  },
           {
             id: 2,
             nom: 'Modifier',
             action: (adresse) => handleClickSurAction(adresse, 'Modifier'),
             icon: <EditOutlined color='primary' />
           },
          // {
          //   id: 3,
          //   nom: 'Supprimer',
          //   action: (adresse) => handleClickSurAction(adresse, 'Supprimer'),
          //   icon: <Delete color='error' />
          // },
        ]

    }
  }



  const handleClickSurAction = (adresse, action) => {
   // console.log('Action sur une adresse::::Action=' + action + ' adresse :::' + adresse.id);
   fonctions.handleClickSurAction(adresse, action)

  }

  return [



    {
        name: 'adresse',
        label: "ID",
        options: {
          filter: false,
          sort: false,
          display: true,
          customBodyRender: (adresse, tableMeta, updateValue) => {
            return adresse.id?.toLocaleString('fr-FR')?? ''
        }
        }
      },
    
    {
        name: 'adresse',
        label: "Alias de l'adresse",
        options: {
          filter: false,
          sort: false,
          display: true,
          customBodyRender: (adresse, tableMeta, updateValue) => {
            return adresse.alias  ?? ''
        }
        }
      },
      
    
    {
        name: 'adresse',
        label: "Adresse",
        options: {
          filter: false,
          sort: false,
          display: true,
          customBodyRender: (adresse, tableMeta, updateValue) => {
            return <>
                            <div className='flex items-center'>                  
                              
                              <Box>
                              <Typography style={{whiteSpace:"nowrap"}} variant='subtitle2'>
                        <strong> {adresse?.nom ?? ""} {adresse?.prenom ?? ""} </strong> 
                          </Typography> 
                          <Typography style={{whiteSpace:"nowrap"}} variant='caption'>
                          {adresse?.telephone ?? ""}
                          </Typography> 
                          
                          <br/>
                          <Typography style={{whiteSpace:"nowrap"}} variant='caption'>
                          {adresse?.Quartier?.Commune?.nom ?? ""} / {adresse?.Quartier?.nom ?? ""}
                          </Typography> 
                          <br/>
                          <Typography style={{whiteSpace:"nowrap"}} variant='caption'>
                          {adresse?.adresse ?? ""}
                          </Typography> 
                          </Box>
                          </div>
                         
                            </>
        }
        }
      },
    
    
    {
        name: 'adresse',
        label: "Adresse",
        options: {
          filter: false,
          sort: false,
          display: true,
          customBodyRender: (adresse, tableMeta, updateValue) => {
            return adresse.Adresse  ?? ''
        }
        }
      },
    
    {
        name: 'adresse',
        label: "Adresse par défaut?",
        options: {
          filter: false,
          sort: false,
          display: true,
          customBodyRender: (adresse, tableMeta, updateValue) => {
            return <Checkbox
        checked={adresse.pardefaut}
        onChange={() =>
          fonctions.handleToglepardefaut(adresse)
        }
    />

        }
        }
      },
    
{
    name: 'adresse',
    label: "client",
    options: {
      filter: false,
      sort: false,
      display: true,
      customBodyRender: (adresse, tableMeta, updateValue) => {
        return <>
                        <div className='flex items-center'>                  
                          
                          <Box>
                          <Typography style={{whiteSpace:"nowrap"}} variant='subtitle2'>
                    <strong> {adresse.Client?.nom ?? ""} {adresse.Client?.prenom ?? ""} </strong> 
                      </Typography> 
                      <Typography style={{whiteSpace:"nowrap"}} variant='caption'>
                      {adresse.Client?.telephone ?? ""}
                      </Typography> 
                      <br/>
                      <Typography style={{whiteSpace:"nowrap"}} variant='caption'>
                      {adresse.Client?.email ?? ""}
                      </Typography> 
                        
                      </Box>
                      </div>
                     
                        </>
    }
    }
  },

{
    name: 'adresse',
    label: 'Actions',
    options: {
      filter: false,
      sort: false,
      display: true,
      customBodyRender: (adresse, tableMeta, updateValue) => {
        return (

          <div>
            <MatxMenu
              menuButton={
                <div className={classes.userMenu}>
                  <Hidden xsDown>
                    <Button
                      size='small'
                      variant='outlined'
                      color='primary'
                      endIcon={<ArrowDropDown />}
                    >
                      Actions
                    </Button>
                  </Hidden>
                </div>
              }
            >

              {getOptionActions(adresse).map((item) => (
                  <>
                    <MenuItem

                      onClick={() =>
                        item.action(adresse)
                      }
                      key={item.id}
                      value={item.statut}
                    >
                      {item.icon}   <span className='ml-5'>{item.nom}</span>
                    </MenuItem>
                    <Divider />
                  </>
                )
                )
              }
            </MatxMenu>
          </div>
        );
      },
    },
  },
]
}

