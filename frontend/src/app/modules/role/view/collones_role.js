
import React from 'react'
import { MatxMenu } from '../../../components'
import AddIcon from '@material-ui/icons/Add'
import { Delete, Edit, ArrowRightAlt, ArrowDropDown, Visibility, PostAdd, Check, Add, LocalShipping, EditOutlined } from '@material-ui/icons'
import { makeStyles, useTheme } from '@material-ui/core/styles'
import { Avatar, Box, Button, Checkbox, Divider, Hidden, Icon, IconButton, MenuItem } from '@material-ui/core';
import { format, parseISO } from 'date-fns'
import { serveur } from '../../../../config';
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

export default function getcollonesRole(fonctions) {

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
  



  const getOptionActions = (role) => {
    switch (role.statut) {
      case 'Annulé':
        return [
          {
            id: 1,
            nom: 'Détails',
            action: (role) => handleClickSurAction(role, 'Détails'),
            icon: <Visibility color='primary' />

          },
        ]
      case 'Nouveau':
        return [
          {
            id: 1,
            nom: 'Détails',
            action: (role) => handleClickSurAction(role, 'Détails'),
            icon: <Visibility color='primary' />
          },
          {
            id: 2,
            nom: 'Modifier',
            action: (role) => handleClickSurAction(role, 'Modifier'),
            icon: <EditOutlined color='primary' />
          },
          {
            id: 3,
            nom: 'Supprimer',
            action: (role) => handleClickSurAction(role, 'Supprimer'),
            icon: <Delete color='error' />
          },


        ]

      default:
        return [
          //  {
          //    id: 1,
          //    nom: 'Détails',
          //    action: (role) => handleClickSurAction(role, 'Détails'),
          //    icon: <Visibility color='primary' />
          //  },
           {
             id: 2,
             nom: 'Modifier',
             action: (role) => handleClickSurAction(role, 'Modifier'),
             icon: <EditOutlined color='primary' />
           },
          // {
          //   id: 3,
          //   nom: 'Supprimer',
          //   action: (role) => handleClickSurAction(role, 'Supprimer'),
          //   icon: <Delete color='error' />
          // },
        ]

    }
  }



  const handleClickSurAction = (role, action) => {
   // console.log('Action sur une role::::Action=' + action + ' role :::' + role.id);
   fonctions.handleClickSurAction(role, action)

    // switch (action) {
    //   case 'Détails':

    //     console.log('action details')
    //     //      history.push('/ventes/nouvellecommande/'+utilisateur.id+'/view')
    //     break;
    //   case 'Modifier':
    //     fonctions.handleClickSurEdit(role)
    //     break;
    //   case 'Supprimer':
    //     fonctions.handleClickSurSupprimer(role)
    //     break;
    //   default:
    //     break;
    // }

  }


  return [


    // en commentaire les collones pour les champs complexes et les champs statuts
    //**************collone complexe ***************************************/ */
    // {
    //   name: 'nom',
    //   label: 'Nom',
    //   options: {
    //     filter: false,
    //     sort: false,
    //     display: true,
    //     customBodyRender: (value, tableMeta, updateValue) => {
    //       return <>

    //         <div className='flex items-center'>
    //           <Box onClick={() => fonctions.handleClickSurphoto(tableMeta.rowData[4])}>
    //             <Button>
    //               <Avatar
    //                 variant='rounded'
    //                 className='w-48 h-48'
    //                 src={
    //                   serveur +
    //                   '/fichiers/photoclient/' +
    //                   tableMeta.rowData[4]
    //                 }
    //               />
    //             </Button>
    //           </Box>
    //           <div className='ml-3'>
    //             <h5 className='my-0 text-15'>{value + (' ') + (tableMeta.rowData[3] ?? '')}</h5>
    //             <small className='text-muted'>
    //               {tableMeta.rowData[8] + '/' + tableMeta.rowData[9]}
    //             </small><br />
    //             <small className='text-muted'>
    //               {tableMeta.rowData[10]}
    //             </small>
    //           </div>
    //         </div>
    //       </>
    //     }
    //   }
    // },
    //********************collone de statut ***************************/
    //  {
    //   name: 'statut',
    //   label: 'Statut',
    //   options: {
    //     filter: false,
    //     sort: false,
    //     display: true,
    //     customBodyRender: (value, tableMeta, updateValue) => {
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
    //                     {value}
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


// 0
{
    name: 'id',
    label: 'ID',
    options: {
      filter: false,
      sort: false,
      display: true,
      customBodyRender: (value, tableMeta, updateValue) => {
        return value?.toLocaleString('fr-FR')?? ''
    }
    }
  },

// 1
{
    name: 'nom',
    label: 'Nom',
    options: {
      filter: false,
      sort: false,
      display: true,
      customBodyRender: (value, tableMeta, updateValue) => {
        return value
    }
    }
  },

// 2
{
    name: 'description',
    label: 'Description',
    options: {
      filter: false,
      sort: false,
      display: true,
      customBodyRender: (value, tableMeta, updateValue) => {
        return value
    }
    }
  },


    {
      name: 'action',
      label: 'Actions',
      options: {
        filter: false,
        sort: false,
        display: true,
        customBodyRender: (value, tableMeta, updateValue) => {
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

                {getOptionActions(
                  {

id:tableMeta.rowData[0],
nom:tableMeta.rowData[1],
description:tableMeta.rowData[2],

                  }).map((item) => (
                    <>
                      <MenuItem

                        onClick={() =>
                          item.action({

    id:tableMeta.rowData[0],
    nom:tableMeta.rowData[1],
    description:tableMeta.rowData[2],

                          })
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


    // {
    //   name: 'action',
    //   label: 'Actions',
    //   options: {
    //     filter: false,
    //     sort: false,
    //     customBodyRender: (value, tableMeta, updateValue) => {
    //       return (

    //         <div>
    //           <MatxMenu
    //             menuButton={
    //               <div className={classes.userMenu}>
    //                 <Hidden xsDown>
    //                   <Button
    //                     size='small'
    //                     variant='outlined'
    //                     color='primary'
    //                     endIcon={<ArrowDropDown />}
    //                   >
    //                     Actions
    //                   </Button>
    //                 </Hidden>
    //               </div>
    //             }
    //           >

    //             {

    //               getActions().map((element) => {
    //                 return (<>
    //                   <MenuItem
    //                     key={element.id}
    //                     onClick={() =>
    //                       element.action({
    //                         id: tableMeta.rowData[0],
    //                         role: tableMeta.rowData[1],
    //                         nom: tableMeta.rowData[2],
    //                         motdepasse: tableMeta.rowData[3],
    //                         actif: tableMeta.rowData[4],
    //                         datecreation: tableMeta.rowData[5],
    //                         prenom: tableMeta.rowData[6],
    //                         email: tableMeta.rowData[7],
    //                         civilite: tableMeta.rowData[8],
    //                         telephone: tableMeta.rowData[9],
    //                         login: tableMeta.rowData[10],
    //                         magasin: tableMeta.rowData[11],
    //                         photo: tableMeta.rowData[12],

    //                       })
    //                     }
    //                   >
    //                     {element.icon} <span>{element.nom}</span>
    //                   </MenuItem>
    //                   <Divider />
    //                 </>)
    //               }
    //               )
    //             }
    //           </MatxMenu>
    //         </div>
    //       );
    //     },
    //   },
    // },

  ]


}
