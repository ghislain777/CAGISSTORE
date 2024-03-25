
import React from 'react'
import { MatxMenu } from '../../../components'
import AddIcon from '@material-ui/icons/Add'
import { Delete, Edit, ArrowRightAlt, ArrowDropDown, Visibility, PostAdd, Check, Add, LocalShipping, EditOutlined, AddAPhotoOutlined } from '@material-ui/icons'
import { makeStyles, useTheme } from '@material-ui/core/styles'
import { Avatar, Box, Button, Checkbox, Divider, Hidden, Icon, IconButton, MenuItem, Typography } from '@material-ui/core';
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

export default function getcollonesProduit(fonctions) {

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


const getOptionActions = (produit) => {
    switch (produit.statut) {
      case 'Annulé':
        return [
          {
            id: 1,
            nom: 'Détails',
            action: (produit) => handleClickSurAction(produit, 'Détails'),
            icon: <Visibility color='primary' />

          },
        ]
      case 'Nouveau':
        return [
          {
            id: 1,
            nom: 'Détails',
            action: (produit) => handleClickSurAction(produit, 'Détails'),
            icon: <Visibility color='primary' />
          },
          {
            id: 2,
            nom: 'Modifier',
            action: (produit) => handleClickSurAction(produit, 'Modifier'),
            icon: <EditOutlined color='primary' />
          },
          {
            id: 3,
            nom: 'Supprimer',
            action: (produit) => handleClickSurAction(produit, 'Supprimer'),
            icon: <Delete color='error' />
          },


        ]

      default:
        return [
          //  {
          //    id: 1,
          //    nom: 'Détails',
          //    action: (produit) => handleClickSurAction(produit, 'Détails'),
          //    icon: <Visibility color='primary' />
          //  },
           {
             id: 2,
             nom: 'Modifier',
             action: (produit) => handleClickSurAction(produit, 'Modifier'),
             icon: <EditOutlined color='primary' />
           },
          // {
          //   id: 3,
          //   nom: 'Supprimer',
          //   action: (produit) => handleClickSurAction(produit, 'Supprimer'),
          //   icon: <Delete color='error' />
          // },
        ]

    }
  }



  const handleClickSurAction = (produit, action) => {
   // console.log('Action sur une produit::::Action=' + action + ' produit :::' + produit.id);
   fonctions.handleClickSurAction(produit, action)

  }


  return [

    // en commentaire les collones pour les champs complexes et les champs statuts
    //**************collone avec photo ***************************************/ */
    // {
    //   name: 'produit',
    //   label: 'Photo',
    //   options: {
    //     filter: false,
    //     sort: false,
    //     display: true,
    //     customBodyRender: (produit, tableMeta, updateValue) => {
    //       return <>

    //         <div className='flex items-center'>
    //           <Box onClick={() => fonctions.handleClickSurphoto(produit)}>
    //             <Button>
    //               <Avatar
    //                 variant='rounded'
    //                 className='w-48 h-48'
    //                 src={
    //                   serveur +
    //                   '/fichiers/' +
    //                   produit.photo
    //                 }
    //               />
    //             </Button>
    //           </Box>
    //           <div className='ml-3'>
    //             <h5 className='my-0 text-15'>{(produit.nom ?? '') + (' ') + (produit.prenom ?? '')}</h5>
    //             <small className='text-muted'>
    //               {  (produit.email ?? '') + '/' +   (produit.adresse ?? '')}
    //             </small><br />
    //             <small className='text-muted'>
    //               { (produit.telephone ?? '')}
    //             </small>
    //           </div>
    //         </div>
    //       </>
    //     }
    //   }
    // },
    //********************collone de statut ***************************/
    //  {
    //   name: 'produit',
    //   label: 'Statut',
    //   options: {
    //     filter: false,
    //     sort: false,
    //     display: true,
    //     customBodyRender: (produit, tableMeta, updateValue) => {
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
    //                     {produit.statut}
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
        name: 'produit',
        label: "ID",
        options: {
          filter: false,
          sort: false,
          display: true,
          customBodyRender: (produit, tableMeta, updateValue) => {
            return produit.id?.toLocaleString('fr-FR')?? ''
        }
        }
      },
      {
    name: 'produit',
    label: 'Photos',
    options: {
      filter: false,
      sort: false,
      display: true,
      customBodyRender: (produit, tableMeta, updateValue) => {
        return <>
  <div className='flex items-center'>
  <Box onClick={() => fonctions.handleClickSurphoto(produit)}>
    <Button>
      <Avatar
        variant='rounded'
        className='w-48 h-48'
        src={
          serveur +

          produit.Media[0]?.fichier
        }
      />
    </Button>
  </Box>
  <Box onClick={() => fonctions.handleAjouterPhoto(produit)}>
    <AddAPhotoOutlined />
  </Box>
</div>
<small className='text-muted'>
  {(produit.Media.length)}
</small>
</>
}
}
},
    
    {
        name: 'produit',
        label: "Nom",
        options: {
          filter: false,
          sort: false,
          display: true,
          customBodyRender: (produit, tableMeta, updateValue) => {
            return  <Typography  style={{ width: '11rem'}}>{produit.nom  ?? ''}</Typography>  

        }
        }
      },

{
    name: 'produit',
    label: "Sous-categorie",
    options: {
      filter: false,
      sort: false,
      display: true,
      customBodyRender: (produit, tableMeta, updateValue) => {
        return produit.Souscategorie?.nom?? ''
    }
    }
  },

    
    {
        name: 'produit',
        label: "Description",
        options: {
          filter: false,
          sort: false,
          display: true,
          customBodyRender: (produit, tableMeta, updateValue) => {
            return  <Typography noWrap style={{ width: '11rem', wordWrap: '...',}}>{produit.description  ?? ''}</Typography>  

        }
        }
      },
    
    {
        name: 'produit',
        label: "Description longue",
        options: {
          filter: false,
          sort: false,
          display: true,
          customBodyRender: (produit, tableMeta, updateValue) => {
            return  <Typography noWrap style={{ width: '11rem', wordWrap: '...',}}>{produit.descriptionlongue  ?? ''}</Typography>  
     
        }
        }
      },
    
    {
        name: 'produit',
        label: "Actif?",
        options: {
          filter: false,
          sort: false,
          display: true,
          customBodyRender: (produit, tableMeta, updateValue) => {
            return <Checkbox
        checked={produit.actif}
        onChange={() =>
          fonctions.handleTogleactif(produit)
        }
    />

        }
        }
      },
    
    {
        name: 'produit',
        label: "En promo?",
        options: {
          filter: false,
          sort: false,
          display: true,
          customBodyRender: (produit, tableMeta, updateValue) => {
            return <Checkbox
        checked={produit.enpromo}
        onChange={() =>
          fonctions.handleTogleenpromo(produit)
        }
    />

        }
        }
      },
    
    {
        name: 'produit',
        label: "Prix de vente",
        options: {
          filter: false,
          sort: false,
          display: true,
          customBodyRender: (produit, tableMeta, updateValue) => {
            return produit.prixdevente?.toLocaleString('fr-FR')?? ''
        }
        }
      },
    
    {
        name: 'produit',
        label: "Prix promo",
        options: {
          filter: false,
          sort: false,
          display: true,
          customBodyRender: (produit, tableMeta, updateValue) => {
            return produit.prixpromo?.toLocaleString('fr-FR')?? ''
        }
        }
      },
    
    {
        name: 'produit',
        label: "Prix d'achat",
        options: {
          filter: false,
          sort: false,
          display: true,
          customBodyRender: (produit, tableMeta, updateValue) => {
            return produit.prixdachat?.toLocaleString('fr-FR')?? ''
        }
        }
      },
    
{
    name: 'produit',
    label: "fournisseur",
    options: {
      filter: false,
      sort: false,
      display: true,
      customBodyRender: (produit, tableMeta, updateValue) => {
        return produit.Fournisseur?.nom?? ''
    }
    }
  },

  
{
    name: 'produit',
    label: 'Actions',
    options: {
      filter: false,
      sort: false,
      display: true,
      customBodyRender: (produit, tableMeta, updateValue) => {
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

              {getOptionActions(produit).map((item) => (
                  <>
                    <MenuItem

                      onClick={() =>
                        item.action(produit)
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

