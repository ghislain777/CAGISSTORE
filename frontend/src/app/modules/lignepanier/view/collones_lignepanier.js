
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

export default function getcollonesLignepanier(fonctions) {

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


const getOptionActions = (lignepanier) => {
    switch (lignepanier.statut) {
      case 'Annulé':
        return [
          {
            id: 1,
            nom: 'Détails',
            action: (lignepanier) => handleClickSurAction(lignepanier, 'Détails'),
            icon: <Visibility color='primary' />

          },
        ]
      case 'Nouveau':
        return [
          {
            id: 1,
            nom: 'Détails',
            action: (lignepanier) => handleClickSurAction(lignepanier, 'Détails'),
            icon: <Visibility color='primary' />
          },
          {
            id: 2,
            nom: 'Modifier',
            action: (lignepanier) => handleClickSurAction(lignepanier, 'Modifier'),
            icon: <EditOutlined color='primary' />
          },
          {
            id: 3,
            nom: 'Supprimer',
            action: (lignepanier) => handleClickSurAction(lignepanier, 'Supprimer'),
            icon: <Delete color='error' />
          },


        ]

      default:
        return [
          //  {
          //    id: 1,
          //    nom: 'Détails',
          //    action: (lignepanier) => handleClickSurAction(lignepanier, 'Détails'),
          //    icon: <Visibility color='primary' />
          //  },
           {
             id: 2,
             nom: 'Modifier',
             action: (lignepanier) => handleClickSurAction(lignepanier, 'Modifier'),
             icon: <EditOutlined color='primary' />
           },
          // {
          //   id: 3,
          //   nom: 'Supprimer',
          //   action: (lignepanier) => handleClickSurAction(lignepanier, 'Supprimer'),
          //   icon: <Delete color='error' />
          // },
        ]

    }
  }



  const handleClickSurAction = (lignepanier, action) => {
   // console.log('Action sur une lignepanier::::Action=' + action + ' lignepanier :::' + lignepanier.id);
   fonctions.handleClickSurAction(lignepanier, action)

  }


  return [

    // en commentaire les collones pour les champs complexes et les champs statuts
    //**************collone avec photo ***************************************/ */
    // {
    //   name: 'lignepanier',
    //   label: 'Photo',
    //   options: {
    //     filter: false,
    //     sort: false,
    //     display: true,
    //     customBodyRender: (lignepanier, tableMeta, updateValue) => {
    //       return <>

    //         <div className='flex items-center'>
    //           <Box onClick={() => fonctions.handleClickSurphoto(lignepanier)}>
    //             <Button>
    //               <Avatar
    //                 variant='rounded'
    //                 className='w-48 h-48'
    //                 src={
    //                   serveur +
    //                   '/fichiers/' +
    //                   lignepanier.photo
    //                 }
    //               />
    //             </Button>
    //           </Box>
    //           <div className='ml-3'>
    //             <h5 className='my-0 text-15'>{(lignepanier.nom ?? '') + (' ') + (lignepanier.prenom ?? '')}</h5>
    //             <small className='text-muted'>
    //               {  (lignepanier.email ?? '') + '/' +   (lignepanier.adresse ?? '')}
    //             </small><br />
    //             <small className='text-muted'>
    //               { (lignepanier.telephone ?? '')}
    //             </small>
    //           </div>
    //         </div>
    //       </>
    //     }
    //   }
    // },
    //********************collone de statut ***************************/
    //  {
    //   name: 'lignepanier',
    //   label: 'Statut',
    //   options: {
    //     filter: false,
    //     sort: false,
    //     display: true,
    //     customBodyRender: (lignepanier, tableMeta, updateValue) => {
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
    //                     {lignepanier.statut}
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
        name: 'lignepanier',
        label: "ID",
        options: {
          filter: false,
          sort: false,
          display: true,
          customBodyRender: (lignepanier, tableMeta, updateValue) => {
            return lignepanier.id?.toLocaleString('fr-FR')?? ''
        }
        }
      },
    
    {
        name: 'lignepanier',
        label: "Quantité",
        options: {
          filter: false,
          sort: false,
          display: true,
          customBodyRender: (lignepanier, tableMeta, updateValue) => {
            return lignepanier.quantite?.toLocaleString('fr-FR')?? ''
        }
        }
      },
    
    {
        name: 'lignepanier',
        label: "Prix unitaire",
        options: {
          filter: false,
          sort: false,
          display: true,
          customBodyRender: (lignepanier, tableMeta, updateValue) => {
            return lignepanier.prixunitaire?.toLocaleString('fr-FR')?? ''
        }
        }
      },
    
    {
        name: 'lignepanier',
        label: "Prix total",
        options: {
          filter: false,
          sort: false,
          display: true,
          customBodyRender: (lignepanier, tableMeta, updateValue) => {
            return lignepanier.prixtotal?.toLocaleString('fr-FR')?? ''
        }
        }
      },
    
{
    name: 'lignepanier',
    label: "produit",
    options: {
      filter: false,
      sort: false,
      display: true,
      customBodyRender: (lignepanier, tableMeta, updateValue) => {
        return lignepanier.Produit?.nom?? ''
    }
    }
  },
{
    name: 'lignepanier',
    label: 'Photos',
    options: {
      filter: false,
      sort: false,
      display: true,
      customBodyRender: (lignepanier, tableMeta, updateValue) => {
        return <>
  <div className='flex items-center'>
  <Box onClick={() => fonctions.handleClickSurphoto(lignepanier)}>
    <Button>
      <Avatar
        variant='rounded'
        className='w-48 h-48'
        src={
          serveur +

          lignepanier.Media[0]?.fichier
        }
      />
    </Button>
  </Box>
  <Box onClick={() => fonctions.handleAjouterPhoto(lignepanier)}>
    <AddAPhotoOutlined />
  </Box>
</div>
<small className='text-muted'>
  {(lignepanier.Media.length)}
</small>
</>
}
}
},
  
{
    name: 'lignepanier',
    label: 'Actions',
    options: {
      filter: false,
      sort: false,
      display: true,
      customBodyRender: (lignepanier, tableMeta, updateValue) => {
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

              {getOptionActions(lignepanier).map((item) => (
                  <>
                    <MenuItem

                      onClick={() =>
                        item.action(lignepanier)
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

