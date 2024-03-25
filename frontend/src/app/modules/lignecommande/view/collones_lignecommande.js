
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

export default function getcollonesLignecommande(fonctions) {

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


const getOptionActions = (lignecommande) => {
    switch (lignecommande.statut) {
      case 'Annulé':
        return [
          {
            id: 1,
            nom: 'Détails',
            action: (lignecommande) => handleClickSurAction(lignecommande, 'Détails'),
            icon: <Visibility color='primary' />

          },
        ]
      case 'Nouveau':
        return [
          {
            id: 1,
            nom: 'Détails',
            action: (lignecommande) => handleClickSurAction(lignecommande, 'Détails'),
            icon: <Visibility color='primary' />
          },
          {
            id: 2,
            nom: 'Modifier',
            action: (lignecommande) => handleClickSurAction(lignecommande, 'Modifier'),
            icon: <EditOutlined color='primary' />
          },
          {
            id: 3,
            nom: 'Supprimer',
            action: (lignecommande) => handleClickSurAction(lignecommande, 'Supprimer'),
            icon: <Delete color='error' />
          },


        ]

      default:
        return [
          //  {
          //    id: 1,
          //    nom: 'Détails',
          //    action: (lignecommande) => handleClickSurAction(lignecommande, 'Détails'),
          //    icon: <Visibility color='primary' />
          //  },
           {
             id: 2,
             nom: 'Modifier',
             action: (lignecommande) => handleClickSurAction(lignecommande, 'Modifier'),
             icon: <EditOutlined color='primary' />
           },
          // {
          //   id: 3,
          //   nom: 'Supprimer',
          //   action: (lignecommande) => handleClickSurAction(lignecommande, 'Supprimer'),
          //   icon: <Delete color='error' />
          // },
        ]

    }
  }



  const handleClickSurAction = (lignecommande, action) => {
   // console.log('Action sur une lignecommande::::Action=' + action + ' lignecommande :::' + lignecommande.id);
   fonctions.handleClickSurAction(lignecommande, action)

  }


  return [

    // en commentaire les collones pour les champs complexes et les champs statuts
    //**************collone avec photo ***************************************/ */
    // {
    //   name: 'lignecommande',
    //   label: 'Photo',
    //   options: {
    //     filter: false,
    //     sort: false,
    //     display: true,
    //     customBodyRender: (lignecommande, tableMeta, updateValue) => {
    //       return <>

    //         <div className='flex items-center'>
    //           <Box onClick={() => fonctions.handleClickSurphoto(lignecommande)}>
    //             <Button>
    //               <Avatar
    //                 variant='rounded'
    //                 className='w-48 h-48'
    //                 src={
    //                   serveur +
    //                   '/fichiers/' +
    //                   lignecommande.photo
    //                 }
    //               />
    //             </Button>
    //           </Box>
    //           <div className='ml-3'>
    //             <h5 className='my-0 text-15'>{(lignecommande.nom ?? '') + (' ') + (lignecommande.prenom ?? '')}</h5>
    //             <small className='text-muted'>
    //               {  (lignecommande.email ?? '') + '/' +   (lignecommande.adresse ?? '')}
    //             </small><br />
    //             <small className='text-muted'>
    //               { (lignecommande.telephone ?? '')}
    //             </small>
    //           </div>
    //         </div>
    //       </>
    //     }
    //   }
    // },
    //********************collone de statut ***************************/
    //  {
    //   name: 'lignecommande',
    //   label: 'Statut',
    //   options: {
    //     filter: false,
    //     sort: false,
    //     display: true,
    //     customBodyRender: (lignecommande, tableMeta, updateValue) => {
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
    //                     {lignecommande.statut}
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
        name: 'lignecommande',
        label: "ID",
        options: {
          filter: false,
          sort: false,
          display: true,
          customBodyRender: (lignecommande, tableMeta, updateValue) => {
            return lignecommande.id?.toLocaleString('fr-FR')?? ''
        }
        }
      },
    
    {
        name: 'lignecommande',
        label: "Prix unitaire",
        options: {
          filter: false,
          sort: false,
          display: true,
          customBodyRender: (lignecommande, tableMeta, updateValue) => {
            return lignecommande.prixunitaire?.toLocaleString('fr-FR')?? ''
        }
        }
      },
    
    {
        name: 'lignecommande',
        label: "Quantité",
        options: {
          filter: false,
          sort: false,
          display: true,
          customBodyRender: (lignecommande, tableMeta, updateValue) => {
            return lignecommande.quantite?.toLocaleString('fr-FR')?? ''
        }
        }
      },
    
    {
        name: 'lignecommande',
        label: "Prix total",
        options: {
          filter: false,
          sort: false,
          display: true,
          customBodyRender: (lignecommande, tableMeta, updateValue) => {
            return lignecommande.prixtotal?.toLocaleString('fr-FR')?? ''
        }
        }
      },
    
{
    name: 'lignecommande',
    label: "produit",
    options: {
      filter: false,
      sort: false,
      display: true,
      customBodyRender: (lignecommande, tableMeta, updateValue) => {
        return lignecommande.Produit?.nom?? ''
    }
    }
  },

{
    name: 'lignecommande',
    label: "commande",
    options: {
      filter: false,
      sort: false,
      display: true,
      customBodyRender: (lignecommande, tableMeta, updateValue) => {
        return lignecommande.Commande?.nom?? ''
    }
    }
  },

{
    name: 'lignecommande',
    label: 'Actions',
    options: {
      filter: false,
      sort: false,
      display: true,
      customBodyRender: (lignecommande, tableMeta, updateValue) => {
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

              {getOptionActions(lignecommande).map((item) => (
                  <>
                    <MenuItem

                      onClick={() =>
                        item.action(lignecommande)
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

