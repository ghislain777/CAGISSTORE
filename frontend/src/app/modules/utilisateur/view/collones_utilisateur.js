
import React from 'react'
import { MatxMenu } from '../../../components'
import AddIcon from '@material-ui/icons/Add'
import { Delete, Edit, ArrowRightAlt, ArrowDropDown, Visibility, PostAdd, Check, Add, LocalShipping, EditOutlined } from '@material-ui/icons'
import { makeStyles, useTheme } from '@material-ui/core/styles'
import { Avatar, Box, Button, Checkbox, Divider, Hidden, Icon, IconButton, MenuItem } from '@material-ui/core';
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

export default function getcollonesUtilisateur(fonctions) {

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


const getOptionActions = (utilisateur) => {
    switch (utilisateur.statut) {
      case 'Annulé':
        return [
          {
            id: 1,
            nom: 'Détails',
            action: (utilisateur) => handleClickSurAction(utilisateur, 'Détails'),
            icon: <Visibility color='primary' />

          },
        ]
      case 'Nouveau':
        return [
          {
            id: 1,
            nom: 'Détails',
            action: (utilisateur) => handleClickSurAction(utilisateur, 'Détails'),
            icon: <Visibility color='primary' />
          },
          {
            id: 2,
            nom: 'Modifier',
            action: (utilisateur) => handleClickSurAction(utilisateur, 'Modifier'),
            icon: <EditOutlined color='primary' />
          },
          {
            id: 3,
            nom: 'Supprimer',
            action: (utilisateur) => handleClickSurAction(utilisateur, 'Supprimer'),
            icon: <Delete color='error' />
          },


        ]

      default:
        return [
          //  {
          //    id: 1,
          //    nom: 'Détails',
          //    action: (utilisateur) => handleClickSurAction(utilisateur, 'Détails'),
          //    icon: <Visibility color='primary' />
          //  },
           {
             id: 2,
             nom: 'Modifier',
             action: (utilisateur) => handleClickSurAction(utilisateur, 'Modifier'),
             icon: <EditOutlined color='primary' />
           },
          // {
          //   id: 3,
          //   nom: 'Supprimer',
          //   action: (utilisateur) => handleClickSurAction(utilisateur, 'Supprimer'),
          //   icon: <Delete color='error' />
          // },
        ]

    }
  }



  const handleClickSurAction = (utilisateur, action) => {
   // console.log('Action sur une utilisateur::::Action=' + action + ' utilisateur :::' + utilisateur.id);
   fonctions.handleClickSurAction(utilisateur, action)

  }


  return [


    {
        name: 'utilisateur',
        label: 'ID',
        options: {
          filter: false,
          sort: false,
          display: true,
          customBodyRender: (utilisateur, tableMeta, updateValue) => {
            return utilisateur.id?.toLocaleString('fr-FR')?? ''
        }
        }
      },
    
   {
    name: 'utilisateur',
    label: 'Utilisateur',
    options: {
      filter: false,
      sort: false,
      display: true,
      customBodyRender: (utilisateur, tableMeta, updateValue) => {
        return <>
    <div className='flex items-center'>
      <Box onClick={() => fonctions.handleClickSurphoto(utilisateur)}>
        <Button>
          <Avatar
            variant='rounded'
            className='w-48 h-48'
            src={serveur+'/fichiers/'+utilisateur.photo}
          />
        </Button>
      </Box>
      <div className='ml-3'>
        <h5 className='my-0 text-15'>{ (utilisateur.nom ?? '') +' '+ (utilisateur.prenom ?? '')}</h5>
        <small className='text-muted'>
          {(utilisateur.telephone?? '' / utilisateur.email?? '')}
        </small><br />
        <small className='text-muted'>
        </small>
      </div>
    </div>
   </>
    }
    }
  
   },

       
{
  name: 'utilisateur',
  label: 'Role',
  options: {
    filter: false,
    sort: false,
    display: true,
    customBodyRender: (utilisateur, tableMeta, updateValue) => {
      return utilisateur.Role?.nom?? ''
  }
  }
},
    
{
  name: 'utilisateur',
  label: 'Email',
  options: {
    filter: false,
    sort: false,
    display: true,
    customBodyRender: (utilisateur, tableMeta, updateValue) => {
      return utilisateur.email?? ''
  }
  }
},
    
   
    
    {
        name: 'utilisateur',
        label: 'actif',
        options: {
          filter: false,
          sort: false,
          display: true,
          customBodyRender: (utilisateur, tableMeta, updateValue) => {
            return <Checkbox
        checked={utilisateur.actif}
        onChange={() =>
          fonctions.handleTogleactif(utilisateur)
        }
            />

        }
        }
      },
    
    
    
    {
        name: 'utilisateur',
        label: 'Créé le',
        options: {
          filter: false,
          sort: false,
          display: "excluded",
          customBodyRender: (utilisateur, tableMeta, updateValue) => {
            return utilisateur.createdAt == null
            ? ' '
            : format(parseISO(utilisateur.createdAt), 'dd/MM/yyyy')
            
        }
        }
      },
    

{
    name: 'utilisateur',
    label: 'Actions',
    options: {
      filter: false,
      sort: false,
      display: true,
      customBodyRender: (utilisateur, tableMeta, updateValue) => {
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

              {getOptionActions(utilisateur).map((item) => (
                  <>
                    <MenuItem

                      onClick={() =>
                        item.action(utilisateur)
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

