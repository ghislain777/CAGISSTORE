
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

export default function getcollonesCommune(fonctions) {

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


const getOptionActions = (commune) => {
    switch (commune.statut) {
      case 'Annulé':
        return [
          {
            id: 1,
            nom: 'Détails',
            action: (commune) => handleClickSurAction(commune, 'Détails'),
            icon: <Visibility color='primary' />

          },
        ]
      case 'Nouveau':
        return [
          {
            id: 1,
            nom: 'Détails',
            action: (commune) => handleClickSurAction(commune, 'Détails'),
            icon: <Visibility color='primary' />
          },
          {
            id: 2,
            nom: 'Modifier',
            action: (commune) => handleClickSurAction(commune, 'Modifier'),
            icon: <EditOutlined color='primary' />
          },
          {
            id: 3,
            nom: 'Supprimer',
            action: (commune) => handleClickSurAction(commune, 'Supprimer'),
            icon: <Delete color='error' />
          },


        ]

      default:
        return [
          //  {
          //    id: 1,
          //    nom: 'Détails',
          //    action: (commune) => handleClickSurAction(commune, 'Détails'),
          //    icon: <Visibility color='primary' />
          //  },
           {
             id: 2,
             nom: 'Modifier',
             action: (commune) => handleClickSurAction(commune, 'Modifier'),
             icon: <EditOutlined color='primary' />
           },
          // {
          //   id: 3,
          //   nom: 'Supprimer',
          //   action: (commune) => handleClickSurAction(commune, 'Supprimer'),
          //   icon: <Delete color='error' />
          // },
        ]

    }
  }



  const handleClickSurAction = (commune, action) => {
   // console.log('Action sur une commune::::Action=' + action + ' commune :::' + commune.id);
   fonctions.handleClickSurAction(commune, action)

  }


  return [

    // en commentaire les collones pour les champs complexes et les champs statuts
    //**************collone avec photo ***************************************/ */
    // {
    //   name: 'commune',
    //   label: 'Photo',
    //   options: {
    //     filter: false,
    //     sort: false,
    //     display: true,
    //     customBodyRender: (commune, tableMeta, updateValue) => {
    //       return <>

    //         <div className='flex items-center'>
    //           <Box onClick={() => fonctions.handleClickSurphoto(commune)}>
    //             <Button>
    //               <Avatar
    //                 variant='rounded'
    //                 className='w-48 h-48'
    //                 src={
    //                   serveur +
    //                   '/fichiers/' +
    //                   commune.photo
    //                 }
    //               />
    //             </Button>
    //           </Box>
    //           <div className='ml-3'>
    //             <h5 className='my-0 text-15'>{(commune.nom ?? '') + (' ') + (commune.prenom ?? '')}</h5>
    //             <small className='text-muted'>
    //               {  (commune.email ?? '') + '/' +   (commune.adresse ?? '')}
    //             </small><br />
    //             <small className='text-muted'>
    //               { (commune.telephone ?? '')}
    //             </small>
    //           </div>
    //         </div>
    //       </>
    //     }
    //   }
    // },
    //********************collone de statut ***************************/
    //  {
    //   name: 'commune',
    //   label: 'Statut',
    //   options: {
    //     filter: false,
    //     sort: false,
    //     display: true,
    //     customBodyRender: (commune, tableMeta, updateValue) => {
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
    //                     {commune.statut}
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
        name: 'commune',
        label: 'id',
        options: {
          filter: false,
          sort: false,
          display: true,
          customBodyRender: (commune, tableMeta, updateValue) => {
            return commune.id?.toLocaleString('fr-FR')?? ''
        }
        }
      },
    
    {
        name: 'commune',
        label: 'Nom',
        options: {
          filter: false,
          sort: false,
          display: true,
          customBodyRender: (commune, tableMeta, updateValue) => {
            return commune.nom  ?? ''
        }
        }
      },
    
    {
        name: 'commune',
        label: 'Description',
        options: {
          filter: false,
          sort: false,
          display: true,
          customBodyRender: (commune, tableMeta, updateValue) => {
            return commune.description  ?? ''
        }
        }
      },
    
{
    name: 'commune',
    label: 'ville',
    options: {
      filter: false,
      sort: false,
      display: true,
      customBodyRender: (commune, tableMeta, updateValue) => {
        return commune.Ville?.nom?? ''
    }
    }
  },

{
    name: 'commune',
    label: 'Actions',
    options: {
      filter: false,
      sort: false,
      display: true,
      customBodyRender: (commune, tableMeta, updateValue) => {
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

              {getOptionActions(commune).map((item) => (
                  <>
                    <MenuItem

                      onClick={() =>
                        item.action(commune)
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

