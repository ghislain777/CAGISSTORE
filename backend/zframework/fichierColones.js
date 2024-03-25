const getContenuColones = (table) => {

  let contenuFichierColones = `
import React from 'react'
import { MatxMenu } from '../../../components'
import AddIcon from '@material-ui/icons/Add'
import { Delete, Edit, ArrowRightAlt, ArrowDropDown, Visibility, PostAdd, Check, Add, LocalShipping, EditOutlined, AddAPhotoOutlined } from '@material-ui/icons'
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

export default function getcollones${table.model}(fonctions) {

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
`

  table.champs.forEach((champ) => {
    if (champ.type == "STATUT") {
      contenuFichierColones += `
    const getCouleur${champ.nom.ucfirst()} = (${table.nom}) => {
        switch (${table.nom}.${champ.nom}) {
          case 'Annlée':
            return 'bg-error'
          case 'Nouveau':
            return 'bg-primary'
          case 'Validée':
            return 'bg-green'
    
          default:
            return 'bg-primary'
        }
      }
    
      const getOptions${champ.nom.ucfirst()} = (${table.nom}) => {
    
        switch (${table.nom}.${champ.nom}) {
          case 'Annulée':
            return [
    
            ]
    
          case 'Nouveau':
            return [
              {
                id: 1,
                nom: 'Valider',
                ${champ.nom}: 'Validée'
    
              },
              {
                id: 2,
                nom: 'Annuler',
                ${champ.nom}: 'Annulée'
    
              },
            ]
          case 'Validée':
            return [
    
            ]
          default:
          return [
            
          ]
        }
        
      }

    `
    }

  })

  contenuFichierColones += `

const getOptionActions = (${table.nom}) => {
    switch (${table.nom}.statut) {
      case 'Annulé':
        return [
          {
            id: 1,
            nom: 'Détails',
            action: (${table.nom}) => handleClickSurAction(${table.nom}, 'Détails'),
            icon: <Visibility color='primary' />

          },
        ]
      case 'Nouveau':
        return [
          {
            id: 1,
            nom: 'Détails',
            action: (${table.nom}) => handleClickSurAction(${table.nom}, 'Détails'),
            icon: <Visibility color='primary' />
          },
          {
            id: 2,
            nom: 'Modifier',
            action: (${table.nom}) => handleClickSurAction(${table.nom}, 'Modifier'),
            icon: <EditOutlined color='primary' />
          },
          {
            id: 3,
            nom: 'Supprimer',
            action: (${table.nom}) => handleClickSurAction(${table.nom}, 'Supprimer'),
            icon: <Delete color='error' />
          },


        ]

      default:
        return [
          //  {
          //    id: 1,
          //    nom: 'Détails',
          //    action: (${table.nom}) => handleClickSurAction(${table.nom}, 'Détails'),
          //    icon: <Visibility color='primary' />
          //  },
           {
             id: 2,
             nom: 'Modifier',
             action: (${table.nom}) => handleClickSurAction(${table.nom}, 'Modifier'),
             icon: <EditOutlined color='primary' />
           },
          // {
          //   id: 3,
          //   nom: 'Supprimer',
          //   action: (${table.nom}) => handleClickSurAction(${table.nom}, 'Supprimer'),
          //   icon: <Delete color='error' />
          // },
        ]

    }
  }



  const handleClickSurAction = (${table.nom}, action) => {
   // console.log('Action sur une ${table.nom}::::Action=' + action + ' ${table.nom} :::' + ${table.nom}.id);
   fonctions.handleClickSurAction(${table.nom}, action)

  }

  return [


`

  table.champs.forEach((champ) => {
    let type = champ.type
    let rendu = `${table.nom}.${champ.nom}  ?? ''`

    switch (type) {

      case "TEXTE":
        rendu = champ.estCle ? `${table.nom}.${champ.nom.ucfirst()}?.nom?? ''` : `${table.nom}.${champ.nom}  ?? ''`
        break;

      case "TEXTELONG":
         rendu = `${table.nom}.${champ.nom}  ?? ''`
        break;

      case "BOOLEEN":
        rendu = `<Checkbox
        checked={${table.nom}.${champ.nom}}
        onChange={() =>
          fonctions.handleTogle${champ.nom}(${table.nom})
        }
    />
`

        break;

      case "DATE":

        rendu = `${table.nom}.${champ.nom} == null
          ? ' '
          : format(parseISO(${table.nom}.${champ.nom}), 'dd/MM/yyyy')
      `

        break;

      case "DATEHEURE":
        rendu = `${table.nom}.${champ.nom} == null
            ? ' '
            : format(parseISO(${table.nom}.${champ.nom}), 'dd/MM/yyyy HH:mm')
            `
        break;

      case "STATUT":
        rendu = `<div>
      <div>
        <MatxMenu
          menuButton={
            <div className={classes.userMenu}>
              <Hidden xsDown>
                <Button
                  size='small'
                  variant='text'
                  color='primary'
                  endIcon={<ArrowDropDown />}
                >
                  <small
                    className={'border-radius-4  text-white px-2 py-2px ' + getCouleur${champ.nom.ucfirst()}({id: ${table.nom}.id, ${champ.nom}: ${table.nom}.${champ.nom}})}
                  >
                    {${table.nom}.${champ.nom}}
                  </small>
                </Button>
              </Hidden>
            </div>
          }
        >
          {getOptions${champ.nom.ucfirst()}(${table.nom}).map((item) => (
            <MenuItem
  
              onClick={() =>
                fonctions.handleChangement${champ.nom.ucfirst()}({id: ${table.nom}.id, ${champ.nom}:item.${champ.nom}})
              }
              key={item.id}
              value={item.${champ.nom}}
            >
              {item.nom}
            </MenuItem>
          )
          )
          }
  
  
        </MatxMenu>
      </div>
    </div>`;
        break;

      case "IMAGE":
        rendu = `<>
        <div className='flex items-center'>
        <Box onClick={() => fonctions.handleClickSurphoto(${champ.nom})}>
          <Button>
            <Avatar
              variant='rounded'
              className='w-48 h-48'
              src={
                serveur +

                ${champ.nom}.Media[0]?.fichier
              }
            />
          </Button>
        </Box>
        <Box onClick={() => fonctions.handleAjouterPhoto(${champ.nom})}>
          <AddAPhotoOutlined />
        </Box>
      </div>
      <small className='text-muted'>
        {(${champ.nom}.Media.length)}
      </small>
    </>
        `;
        break;

      case "ENTIER":
        rendu = champ.estCle ? `${table.nom}.${champ.nom.ucfirst()}?.nom?? ''` : `${table.nom}.${champ.nom}?.toLocaleString('fr-FR')?? ''`
        break;

      default:
        rendu = `${table.nom}.${champ.nom}`
        break;

    };
    if (champ.estCle) {

      contenuFichierColones += `
{
    name: '${table.nom}',
    label: "${champ.titre}",
    options: {
      filter: false,
      sort: false,
      display: true,
      customBodyRender: (${table.nom}, tableMeta, updateValue) => {
        return ${rendu}
    }
    }
  },
`
    }
    else {
      contenuFichierColones += `
    {
        name: '${table.nom}',
        label: "${champ.titre}",
        options: {
          filter: false,
          sort: false,
          display: true,
          customBodyRender: (${table.nom}, tableMeta, updateValue) => {
            return ${rendu}
        }
        }
      },
    `
    }
  })


if(table.champImageExiste) {
  contenuFichierColones+= `{
    name: '${table.nom}',
    label: 'Photos',
    options: {
      filter: false,
      sort: false,
      display: true,
      customBodyRender: (${table.nom}, tableMeta, updateValue) => {
        return <>
  <div className='flex items-center'>
  <Box onClick={() => fonctions.handleClickSurphoto(${table.nom})}>
    <Button>
      <Avatar
        variant='rounded'
        className='w-48 h-48'
        src={
          serveur +

          ${table.nom}.Media[0]?.fichier
        }
      />
    </Button>
  </Box>
  <Box onClick={() => fonctions.handleAjouterPhoto(${table.nom})}>
    <AddAPhotoOutlined />
  </Box>
</div>
<small className='text-muted'>
  {(${table.nom}.Media.length)}
</small>
</>
}
}
},
  `
}


  contenuFichierColones += `
{
    name: '${table.nom}',
    label: 'Actions',
    options: {
      filter: false,
      sort: false,
      display: true,
      customBodyRender: (${table.nom}, tableMeta, updateValue) => {
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

              {getOptionActions(${table.nom}).map((item) => (
                  <>
                    <MenuItem

                      onClick={() =>
                        item.action(${table.nom})
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

`
  return contenuFichierColones
}

module.exports = getContenuColones