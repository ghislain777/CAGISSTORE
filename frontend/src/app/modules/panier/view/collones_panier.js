
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

export default function getcollonesPanier(fonctions) {

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


const getOptionActions = (panier) => {
    switch (panier.statut) {
      case 'Annulé':
        return [
          {
            id: 1,
            nom: 'Détails',
            action: (panier) => handleClickSurAction(panier, 'Détails'),
            icon: <Visibility color='primary' />

          },
        ]
      case 'Nouveau':
        return [
          {
            id: 1,
            nom: 'Détails',
            action: (panier) => handleClickSurAction(panier, 'Détails'),
            icon: <Visibility color='primary' />
          },
          {
            id: 2,
            nom: 'Modifier',
            action: (panier) => handleClickSurAction(panier, 'Modifier'),
            icon: <EditOutlined color='primary' />
          },
          {
            id: 3,
            nom: 'Supprimer',
            action: (panier) => handleClickSurAction(panier, 'Supprimer'),
            icon: <Delete color='error' />
          },


        ]

      default:
        return [
          //  {
          //    id: 1,
          //    nom: 'Détails',
          //    action: (panier) => handleClickSurAction(panier, 'Détails'),
          //    icon: <Visibility color='primary' />
          //  },
           {
             id: 2,
             nom: 'Modifier',
             action: (panier) => handleClickSurAction(panier, 'Modifier'),
             icon: <EditOutlined color='primary' />
           },
          // {
          //   id: 3,
          //   nom: 'Supprimer',
          //   action: (panier) => handleClickSurAction(panier, 'Supprimer'),
          //   icon: <Delete color='error' />
          // },
        ]

    }
  }



  const handleClickSurAction = (panier, action) => {
   // console.log('Action sur une panier::::Action=' + action + ' panier :::' + panier.id);
   fonctions.handleClickSurAction(panier, action)

  }


  return [

    // en commentaire les collones pour les champs complexes et les champs statuts
    //**************collone avec photo ***************************************/ */
    // {
    //   name: 'panier',
    //   label: 'Photo',
    //   options: {
    //     filter: false,
    //     sort: false,
    //     display: true,
    //     customBodyRender: (panier, tableMeta, updateValue) => {
    //       return <>

    //         <div className='flex items-center'>
    //           <Box onClick={() => fonctions.handleClickSurphoto(panier)}>
    //             <Button>
    //               <Avatar
    //                 variant='rounded'
    //                 className='w-48 h-48'
    //                 src={
    //                   serveur +
    //                   '/fichiers/' +
    //                   panier.photo
    //                 }
    //               />
    //             </Button>
    //           </Box>
    //           <div className='ml-3'>
    //             <h5 className='my-0 text-15'>{(panier.nom ?? '') + (' ') + (panier.prenom ?? '')}</h5>
    //             <small className='text-muted'>
    //               {  (panier.email ?? '') + '/' +   (panier.adresse ?? '')}
    //             </small><br />
    //             <small className='text-muted'>
    //               { (panier.telephone ?? '')}
    //             </small>
    //           </div>
    //         </div>
    //       </>
    //     }
    //   }
    // },
    //********************collone de statut ***************************/
    //  {
    //   name: 'panier',
    //   label: 'Statut',
    //   options: {
    //     filter: false,
    //     sort: false,
    //     display: true,
    //     customBodyRender: (panier, tableMeta, updateValue) => {
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
    //                     {panier.statut}
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
        name: 'panier',
        label: "ID",
        options: {
          filter: false,
          sort: false,
          display: true,
          customBodyRender: (panier, tableMeta, updateValue) => {
            return panier.id?.toLocaleString('fr-FR')?? ''
        }
        }
      },
    
    {
        name: 'panier',
        label: "Montant TTC",
        options: {
          filter: false,
          sort: false,
          display: true,
          customBodyRender: (panier, tableMeta, updateValue) => {
            return panier.montantttc?.toLocaleString('fr-FR')?? ''
        }
        }
      },
    
    {
        name: 'panier',
        label: "Montant HT",
        options: {
          filter: false,
          sort: false,
          display: true,
          customBodyRender: (panier, tableMeta, updateValue) => {
            return panier.montantht?.toLocaleString('fr-FR')?? ''
        }
        }
      },
    
    {
        name: 'panier',
        label: "Montant Taxe",
        options: {
          filter: false,
          sort: false,
          display: true,
          customBodyRender: (panier, tableMeta, updateValue) => {
            return panier.montanttaxe?.toLocaleString('fr-FR')?? ''
        }
        }
      },
    
    {
        name: 'panier',
        label: "Remise",
        options: {
          filter: false,
          sort: false,
          display: true,
          customBodyRender: (panier, tableMeta, updateValue) => {
            return panier.remise?.toLocaleString('fr-FR')?? ''
        }
        }
      },
    
    {
        name: 'panier',
        label: "Session",
        options: {
          filter: false,
          sort: false,
          display: true,
          customBodyRender: (panier, tableMeta, updateValue) => {
            return panier.session  ?? ''
        }
        }
      },
    
{
    name: 'panier',
    label: "client",
    options: {
      filter: false,
      sort: false,
      display: true,
      customBodyRender: (panier, tableMeta, updateValue) => {
        return panier.Client?.nom?? ''
    }
    }
  },

{
    name: 'panier',
    label: 'Actions',
    options: {
      filter: false,
      sort: false,
      display: true,
      customBodyRender: (panier, tableMeta, updateValue) => {
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

              {getOptionActions(panier).map((item) => (
                  <>
                    <MenuItem

                      onClick={() =>
                        item.action(panier)
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

