
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

export default function getcollonesParametre(fonctions) {

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


const getOptionActions = (parametre) => {
    switch (parametre.statut) {
      case 'Annulé':
        return [
          {
            id: 1,
            nom: 'Détails',
            action: (parametre) => handleClickSurAction(parametre, 'Détails'),
            icon: <Visibility color='primary' />

          },
        ]
      case 'Nouveau':
        return [
          {
            id: 1,
            nom: 'Détails',
            action: (parametre) => handleClickSurAction(parametre, 'Détails'),
            icon: <Visibility color='primary' />
          },
          {
            id: 2,
            nom: 'Modifier',
            action: (parametre) => handleClickSurAction(parametre, 'Modifier'),
            icon: <EditOutlined color='primary' />
          },
          {
            id: 3,
            nom: 'Supprimer',
            action: (parametre) => handleClickSurAction(parametre, 'Supprimer'),
            icon: <Delete color='error' />
          },


        ]

      default:
        return [
          //  {
          //    id: 1,
          //    nom: 'Détails',
          //    action: (parametre) => handleClickSurAction(parametre, 'Détails'),
          //    icon: <Visibility color='primary' />
          //  },
           {
             id: 2,
             nom: 'Modifier',
             action: (parametre) => handleClickSurAction(parametre, 'Modifier'),
             icon: <EditOutlined color='primary' />
           },
          // {
          //   id: 3,
          //   nom: 'Supprimer',
          //   action: (parametre) => handleClickSurAction(parametre, 'Supprimer'),
          //   icon: <Delete color='error' />
          // },
        ]

    }
  }



  const handleClickSurAction = (parametre, action) => {
   // console.log('Action sur une parametre::::Action=' + action + ' parametre :::' + parametre.id);
   fonctions.handleClickSurAction(parametre, action)

  }


  return [

    // en commentaire les collones pour les champs complexes et les champs statuts
    //**************collone avec photo ***************************************/ */
    // {
    //   name: 'parametre',
    //   label: 'Photo',
    //   options: {
    //     filter: false,
    //     sort: false,
    //     display: true,
    //     customBodyRender: (parametre, tableMeta, updateValue) => {
    //       return <>

    //         <div className='flex items-center'>
    //           <Box onClick={() => fonctions.handleClickSurphoto(parametre)}>
    //             <Button>
    //               <Avatar
    //                 variant='rounded'
    //                 className='w-48 h-48'
    //                 src={
    //                   serveur +
    //                   '/fichiers/' +
    //                   parametre.photo
    //                 }
    //               />
    //             </Button>
    //           </Box>
    //           <div className='ml-3'>
    //             <h5 className='my-0 text-15'>{(parametre.nom ?? '') + (' ') + (parametre.prenom ?? '')}</h5>
    //             <small className='text-muted'>
    //               {  (parametre.email ?? '') + '/' +   (parametre.adresse ?? '')}
    //             </small><br />
    //             <small className='text-muted'>
    //               { (parametre.telephone ?? '')}
    //             </small>
    //           </div>
    //         </div>
    //       </>
    //     }
    //   }
    // },
    //********************collone de statut ***************************/
    //  {
    //   name: 'parametre',
    //   label: 'Statut',
    //   options: {
    //     filter: false,
    //     sort: false,
    //     display: true,
    //     customBodyRender: (parametre, tableMeta, updateValue) => {
    //       return   <div>
    //       <div>
    //         <MatxMenu
    //           menuButton={
    //             <div className={classes.userMenu}>
    //               <Hidden xsDown>
    //                 <Button
    //                   size='small'
    //                   variant='text'
    //                   color='primary'
    //                   endIcon={<ArrowDropDown />}
    //                 >
    //                   <small
    //                     className={'border-radius-4  text-white px-2 py-2px '+ getCouleurStatut(value)}
    //                   >
    //                     {parametre.statut}
    //                   </small>
    //                 </Button>
    //               </Hidden>
    //             </div>
    //           }
    //         >
    //         {getOptionsStatut(value).map((item) => (
    //                 <MenuItem

    //                 onClick={() =>
    //                   fonctions.handleChangementStatut({
    //                       id: tableMeta.rowData[0],
    //                       statut: item.statut
    //                   })
    //               }
    //                   key={item.id}
    //                   value={item.statut}
    //                 >
    //                   {item.nom}
    //                 </MenuItem>
    //               )
    //               )
    //               }


    //         </MatxMenu>
    //       </div>


    //     </div>
    //   }
    //   }
    // },


    {
        name: 'parametre',
        label: "id",
        options: {
          filter: false,
          sort: false,
          display: true,
          customBodyRender: (parametre, tableMeta, updateValue) => {
            return parametre.id?.toLocaleString('fr-FR')?? ''
        }
        }
      },
    
      {
        name: 'parametre',
        label: "Paramètre",
        options: {
          filter: false,
          sort: false,
          display: true,
          customBodyRender: (parametre, tableMeta, updateValue) => {
            return parametre.description  ?? ''
        }
        }
      },

      {
        name: 'parametre',
        label: "Nom du parametre",
        options: {
          filter: false,
          sort: false,
          display: false,
          customBodyRender: (parametre, tableMeta, updateValue) => {
            return parametre.nom  ?? ''
        }
        }
      },
    
    {
        name: 'parametre',
        label: "Valeur",
        options: {
          filter: false,
          sort: false,
          display: true,
          customBodyRender: (parametre, tableMeta, updateValue) => {
            return parametre.valeur  ?? ''
        }
        }
      },
    
    
{
    name: 'parametre',
    label: 'Actions',
    options: {
      filter: false,
      sort: false,
      display: true,
      customBodyRender: (parametre, tableMeta, updateValue) => {
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

              {getOptionActions(parametre).map((item) => (
                  <>
                    <MenuItem

                      onClick={() =>
                        item.action(parametre)
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

