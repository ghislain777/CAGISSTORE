
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

export default function getcollonesTransporteur(fonctions) {

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


const getOptionActions = (transporteur) => {
    switch (transporteur.statut) {
      case 'Annulé':
        return [
          {
            id: 1,
            nom: 'Détails',
            action: (transporteur) => handleClickSurAction(transporteur, 'Détails'),
            icon: <Visibility color='primary' />

          },
        ]
      case 'Nouveau':
        return [
          {
            id: 1,
            nom: 'Détails',
            action: (transporteur) => handleClickSurAction(transporteur, 'Détails'),
            icon: <Visibility color='primary' />
          },
          {
            id: 2,
            nom: 'Modifier',
            action: (transporteur) => handleClickSurAction(transporteur, 'Modifier'),
            icon: <EditOutlined color='primary' />
          },
          {
            id: 3,
            nom: 'Supprimer',
            action: (transporteur) => handleClickSurAction(transporteur, 'Supprimer'),
            icon: <Delete color='error' />
          },


        ]

      default:
        return [
          //  {
          //    id: 1,
          //    nom: 'Détails',
          //    action: (transporteur) => handleClickSurAction(transporteur, 'Détails'),
          //    icon: <Visibility color='primary' />
          //  },
           {
             id: 2,
             nom: 'Modifier',
             action: (transporteur) => handleClickSurAction(transporteur, 'Modifier'),
             icon: <EditOutlined color='primary' />
           },
          // {
          //   id: 3,
          //   nom: 'Supprimer',
          //   action: (transporteur) => handleClickSurAction(transporteur, 'Supprimer'),
          //   icon: <Delete color='error' />
          // },
        ]

    }
  }



  const handleClickSurAction = (transporteur, action) => {
   // console.log('Action sur une transporteur::::Action=' + action + ' transporteur :::' + transporteur.id);
   fonctions.handleClickSurAction(transporteur, action)

  }


  return [

    // en commentaire les collones pour les champs complexes et les champs statuts
    //**************collone avec photo ***************************************/ */
    // {
    //   name: 'transporteur',
    //   label: 'Photo',
    //   options: {
    //     filter: false,
    //     sort: false,
    //     display: true,
    //     customBodyRender: (transporteur, tableMeta, updateValue) => {
    //       return <>

    //         <div className='flex items-center'>
    //           <Box onClick={() => fonctions.handleClickSurphoto(transporteur)}>
    //             <Button>
    //               <Avatar
    //                 variant='rounded'
    //                 className='w-48 h-48'
    //                 src={
    //                   serveur +
    //                   '/fichiers/' +
    //                   transporteur.photo
    //                 }
    //               />
    //             </Button>
    //           </Box>
    //           <div className='ml-3'>
    //             <h5 className='my-0 text-15'>{(transporteur.nom ?? '') + (' ') + (transporteur.prenom ?? '')}</h5>
    //             <small className='text-muted'>
    //               {  (transporteur.email ?? '') + '/' +   (transporteur.adresse ?? '')}
    //             </small><br />
    //             <small className='text-muted'>
    //               { (transporteur.telephone ?? '')}
    //             </small>
    //           </div>
    //         </div>
    //       </>
    //     }
    //   }
    // },
    //********************collone de statut ***************************/
    //  {
    //   name: 'transporteur',
    //   label: 'Statut',
    //   options: {
    //     filter: false,
    //     sort: false,
    //     display: true,
    //     customBodyRender: (transporteur, tableMeta, updateValue) => {
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
    //                     {transporteur.statut}
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
        name: 'transporteur',
        label: 'ID',
        options: {
          filter: false,
          sort: false,
          display: true,
          customBodyRender: (transporteur, tableMeta, updateValue) => {
            return transporteur.id?.toLocaleString('fr-FR')?? ''
        }
        }
      },
    
    {
        name: 'transporteur',
        label: 'Nom',
        options: {
          filter: false,
          sort: false,
          display: true,
          customBodyRender: (transporteur, tableMeta, updateValue) => {
            return transporteur.nom  ?? ''
        }
        }
      },
    
    {
        name: 'transporteur',
        label: 'Téléphone',
        options: {
          filter: false,
          sort: false,
          display: true,
          customBodyRender: (transporteur, tableMeta, updateValue) => {
            return transporteur.telephone  ?? ''
        }
        }
      },
    
    {
        name: 'transporteur',
        label: 'Adresse',
        options: {
          filter: false,
          sort: false,
          display: true,
          customBodyRender: (transporteur, tableMeta, updateValue) => {
            return transporteur.adresse  ?? ''
        }
        }
      },
    
    {
        name: 'transporteur',
        label: 'Actif?',
        options: {
          filter: false,
          sort: false,
          display: true,
          customBodyRender: (transporteur, tableMeta, updateValue) => {
            return <Checkbox
        checked={transporteur.actif}
        onChange={() =>
          fonctions.handleTogleactif(transporteur)
        }
    />

        }
        }
      },
    
    {
        name: 'transporteur',
        label: 'Description',
        options: {
          filter: false,
          sort: false,
          display: true,
          customBodyRender: (transporteur, tableMeta, updateValue) => {
            return transporteur.description  ?? ''
        }
        }
      },
    {
    name: 'transporteur',
    label: 'Photos',
    options: {
      filter: false,
      sort: false,
      display: true,
      customBodyRender: (transporteur, tableMeta, updateValue) => {
        return <>
  <div className='flex items-center'>
  <Box onClick={() => fonctions.handleClickSurphoto(transporteur)}>
    <Button>
      <Avatar
        variant='rounded'
        className='w-48 h-48'
        src={
          serveur +

          transporteur.Media[0]?.fichier
        }
      />
    </Button>
  </Box>
  <Box onClick={() => fonctions.handleAjouterPhoto(transporteur)}>
    <AddAPhotoOutlined />
  </Box>
</div>
<small className='text-muted'>
  {(transporteur.Media.length)}
</small>
</>
}
}
},
  
{
    name: 'transporteur',
    label: 'Actions',
    options: {
      filter: false,
      sort: false,
      display: true,
      customBodyRender: (transporteur, tableMeta, updateValue) => {
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

              {getOptionActions(transporteur).map((item) => (
                  <>
                    <MenuItem

                      onClick={() =>
                        item.action(transporteur)
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

