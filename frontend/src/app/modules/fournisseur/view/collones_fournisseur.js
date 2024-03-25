
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

export default function getcollonesFournisseur(fonctions) {

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


const getOptionActions = (fournisseur) => {
    switch (fournisseur.statut) {
      case 'Annulé':
        return [
          {
            id: 1,
            nom: 'Détails',
            action: (fournisseur) => handleClickSurAction(fournisseur, 'Détails'),
            icon: <Visibility color='primary' />

          },
        ]
      case 'Nouveau':
        return [
          {
            id: 1,
            nom: 'Détails',
            action: (fournisseur) => handleClickSurAction(fournisseur, 'Détails'),
            icon: <Visibility color='primary' />
          },
          {
            id: 2,
            nom: 'Modifier',
            action: (fournisseur) => handleClickSurAction(fournisseur, 'Modifier'),
            icon: <EditOutlined color='primary' />
          },
          {
            id: 3,
            nom: 'Supprimer',
            action: (fournisseur) => handleClickSurAction(fournisseur, 'Supprimer'),
            icon: <Delete color='error' />
          },


        ]

      default:
        return [
          //  {
          //    id: 1,
          //    nom: 'Détails',
          //    action: (fournisseur) => handleClickSurAction(fournisseur, 'Détails'),
          //    icon: <Visibility color='primary' />
          //  },
           {
             id: 2,
             nom: 'Modifier',
             action: (fournisseur) => handleClickSurAction(fournisseur, 'Modifier'),
             icon: <EditOutlined color='primary' />
           },
          // {
          //   id: 3,
          //   nom: 'Supprimer',
          //   action: (fournisseur) => handleClickSurAction(fournisseur, 'Supprimer'),
          //   icon: <Delete color='error' />
          // },
        ]

    }
  }



  const handleClickSurAction = (fournisseur, action) => {
   // console.log('Action sur une fournisseur::::Action=' + action + ' fournisseur :::' + fournisseur.id);
   fonctions.handleClickSurAction(fournisseur, action)

  }


  return [

    // en commentaire les collones pour les champs complexes et les champs statuts
    //**************collone avec photo ***************************************/ */
    // {
    //   name: 'fournisseur',
    //   label: 'Photo',
    //   options: {
    //     filter: false,
    //     sort: false,
    //     display: true,
    //     customBodyRender: (fournisseur, tableMeta, updateValue) => {
    //       return <>

    //         <div className='flex items-center'>
    //           <Box onClick={() => fonctions.handleClickSurphoto(fournisseur)}>
    //             <Button>
    //               <Avatar
    //                 variant='rounded'
    //                 className='w-48 h-48'
    //                 src={
    //                   serveur +
    //                   '/fichiers/' +
    //                   fournisseur.photo
    //                 }
    //               />
    //             </Button>
    //           </Box>
    //           <div className='ml-3'>
    //             <h5 className='my-0 text-15'>{(fournisseur.nom ?? '') + (' ') + (fournisseur.prenom ?? '')}</h5>
    //             <small className='text-muted'>
    //               {  (fournisseur.email ?? '') + '/' +   (fournisseur.adresse ?? '')}
    //             </small><br />
    //             <small className='text-muted'>
    //               { (fournisseur.telephone ?? '')}
    //             </small>
    //           </div>
    //         </div>
    //       </>
    //     }
    //   }
    // },
    //********************collone de statut ***************************/
    //  {
    //   name: 'fournisseur',
    //   label: 'Statut',
    //   options: {
    //     filter: false,
    //     sort: false,
    //     display: true,
    //     customBodyRender: (fournisseur, tableMeta, updateValue) => {
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
    //                     {fournisseur.statut}
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
        name: 'fournisseur',
        label: 'ID',
        options: {
          filter: false,
          sort: false,
          display: true,
          customBodyRender: (fournisseur, tableMeta, updateValue) => {
            return fournisseur.id?.toLocaleString('fr-FR')?? ''
        }
        }
      },
    
    {
        name: 'fournisseur',
        label: 'Nom',
        options: {
          filter: false,
          sort: false,
          display: true,
          customBodyRender: (fournisseur, tableMeta, updateValue) => {
            return fournisseur.nom  ?? ''
        }
        }
      },
    
    {
        name: 'fournisseur',
        label: 'Téléphone',
        options: {
          filter: false,
          sort: false,
          display: true,
          customBodyRender: (fournisseur, tableMeta, updateValue) => {
            return fournisseur.telephone  ?? ''
        }
        }
      },
    
    {
        name: 'fournisseur',
        label: 'Adresse',
        options: {
          filter: false,
          sort: false,
          display: true,
          customBodyRender: (fournisseur, tableMeta, updateValue) => {
            return fournisseur.adresse  ?? ''
        }
        }
      },
    
    {
        name: 'fournisseur',
        label: 'Email',
        options: {
          filter: false,
          sort: false,
          display: true,
          customBodyRender: (fournisseur, tableMeta, updateValue) => {
            return fournisseur.email  ?? ''
        }
        }
      },
    
    {
        name: 'fournisseur',
        label: 'Actif?',
        options: {
          filter: false,
          sort: false,
          display: true,
          customBodyRender: (fournisseur, tableMeta, updateValue) => {
            return <Checkbox
        checked={fournisseur.actif}
        onChange={() =>
          fonctions.handleTogleactif(fournisseur)
        }
    />

        }
        }
      },
    
    {
        name: 'fournisseur',
        label: 'Description',
        options: {
          filter: false,
          sort: false,
          display: true,
          customBodyRender: (fournisseur, tableMeta, updateValue) => {
            return fournisseur.description  ?? ''
        }
        }
      },
    {
    name: 'fournisseur',
    label: 'Photos',
    options: {
      filter: false,
      sort: false,
      display: true,
      customBodyRender: (fournisseur, tableMeta, updateValue) => {
        return <>
  <div className='flex items-center'>
  <Box onClick={() => fonctions.handleClickSurphoto(fournisseur)}>
    <Button>
      <Avatar
        variant='rounded'
        className='w-48 h-48'
        src={
          serveur +

          fournisseur.Media[0]?.fichier
        }
      />
    </Button>
  </Box>
  <Box onClick={() => fonctions.handleAjouterPhoto(fournisseur)}>
    <AddAPhotoOutlined />
  </Box>
</div>
<small className='text-muted'>
  {(fournisseur.Media.length)}
</small>
</>
}
}
},
  
{
    name: 'fournisseur',
    label: 'Actions',
    options: {
      filter: false,
      sort: false,
      display: true,
      customBodyRender: (fournisseur, tableMeta, updateValue) => {
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

              {getOptionActions(fournisseur).map((item) => (
                  <>
                    <MenuItem

                      onClick={() =>
                        item.action(fournisseur)
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

