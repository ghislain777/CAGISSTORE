
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

export default function getcollonesSouscategorie(fonctions) {

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


const getOptionActions = (souscategorie) => {
    switch (souscategorie.statut) {
      case 'Annulé':
        return [
          {
            id: 1,
            nom: 'Détails',
            action: (souscategorie) => handleClickSurAction(souscategorie, 'Détails'),
            icon: <Visibility color='primary' />

          },
        ]
      case 'Nouveau':
        return [
          {
            id: 1,
            nom: 'Détails',
            action: (souscategorie) => handleClickSurAction(souscategorie, 'Détails'),
            icon: <Visibility color='primary' />
          },
          {
            id: 2,
            nom: 'Modifier',
            action: (souscategorie) => handleClickSurAction(souscategorie, 'Modifier'),
            icon: <EditOutlined color='primary' />
          },
          {
            id: 3,
            nom: 'Supprimer',
            action: (souscategorie) => handleClickSurAction(souscategorie, 'Supprimer'),
            icon: <Delete color='error' />
          },


        ]

      default:
        return [
          //  {
          //    id: 1,
          //    nom: 'Détails',
          //    action: (souscategorie) => handleClickSurAction(souscategorie, 'Détails'),
          //    icon: <Visibility color='primary' />
          //  },
           {
             id: 2,
             nom: 'Modifier',
             action: (souscategorie) => handleClickSurAction(souscategorie, 'Modifier'),
             icon: <EditOutlined color='primary' />
           },
          // {
          //   id: 3,
          //   nom: 'Supprimer',
          //   action: (souscategorie) => handleClickSurAction(souscategorie, 'Supprimer'),
          //   icon: <Delete color='error' />
          // },
        ]

    }
  }



  const handleClickSurAction = (souscategorie, action) => {
   // console.log('Action sur une souscategorie::::Action=' + action + ' souscategorie :::' + souscategorie.id);
   fonctions.handleClickSurAction(souscategorie, action)

  }


  return [

    // en commentaire les collones pour les champs complexes et les champs statuts
    //**************collone avec photo ***************************************/ */
    // {
    //   name: 'souscategorie',
    //   label: 'Photo',
    //   options: {
    //     filter: false,
    //     sort: false,
    //     display: true,
    //     customBodyRender: (souscategorie, tableMeta, updateValue) => {
    //       return <>

    //         <div className='flex items-center'>
    //           <Box onClick={() => fonctions.handleClickSurphoto(souscategorie)}>
    //             <Button>
    //               <Avatar
    //                 variant='rounded'
    //                 className='w-48 h-48'
    //                 src={
    //                   serveur +
    //                   '/fichiers/' +
    //                   souscategorie.photo
    //                 }
    //               />
    //             </Button>
    //           </Box>
    //           <div className='ml-3'>
    //             <h5 className='my-0 text-15'>{(souscategorie.nom ?? '') + (' ') + (souscategorie.prenom ?? '')}</h5>
    //             <small className='text-muted'>
    //               {  (souscategorie.email ?? '') + '/' +   (souscategorie.adresse ?? '')}
    //             </small><br />
    //             <small className='text-muted'>
    //               { (souscategorie.telephone ?? '')}
    //             </small>
    //           </div>
    //         </div>
    //       </>
    //     }
    //   }
    // },
    //********************collone de statut ***************************/
    //  {
    //   name: 'souscategorie',
    //   label: 'Statut',
    //   options: {
    //     filter: false,
    //     sort: false,
    //     display: true,
    //     customBodyRender: (souscategorie, tableMeta, updateValue) => {
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
    //                     {souscategorie.statut}
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
        name: 'souscategorie',
        label: "ID",
        options: {
          filter: false,
          sort: false,
          display: true,
          customBodyRender: (souscategorie, tableMeta, updateValue) => {
            return souscategorie.id?.toLocaleString('fr-FR')?? ''
        }
        }
      },
    
    {
        name: 'souscategorie',
        label: "Nom",
        options: {
          filter: false,
          sort: false,
          display: true,
          customBodyRender: (souscategorie, tableMeta, updateValue) => {
            return souscategorie.nom  ?? ''
        }
        }
      },
    
    {
        name: 'souscategorie',
        label: "Actif?",
        options: {
          filter: false,
          sort: false,
          display: true,
          customBodyRender: (souscategorie, tableMeta, updateValue) => {
            return <Checkbox
        checked={souscategorie.actif}
        onChange={() =>
          fonctions.handleTogleactif(souscategorie)
        }
    />

        }
        }
      },
    
    {
        name: 'souscategorie',
        label: "Description",
        options: {
          filter: false,
          sort: false,
          display: true,
          customBodyRender: (souscategorie, tableMeta, updateValue) => {
            return souscategorie.description  ?? ''
        }
        }
      },
    
{
    name: 'souscategorie',
    label: "categorie",
    options: {
      filter: false,
      sort: false,
      display: true,
      customBodyRender: (souscategorie, tableMeta, updateValue) => {
        return souscategorie.Categorie?.nom?? ''
    }
    }
  },
{
    name: 'souscategorie',
    label: 'Photos',
    options: {
      filter: false,
      sort: false,
      display: true,
      customBodyRender: (souscategorie, tableMeta, updateValue) => {
        return <>
  <div className='flex items-center'>
  <Box onClick={() => fonctions.handleClickSurphoto(souscategorie)}>
    <Button>
      <Avatar
        variant='rounded'
        className='w-48 h-48'
        src={
          serveur +

          souscategorie.Media[0]?.fichier
        }
      />
    </Button>
  </Box>
  <Box onClick={() => fonctions.handleAjouterPhoto(souscategorie)}>
    <AddAPhotoOutlined />
  </Box>
</div>
<small className='text-muted'>
  {(souscategorie.Media.length)}
</small>
</>
}
}
},
  
{
    name: 'souscategorie',
    label: 'Actions',
    options: {
      filter: false,
      sort: false,
      display: true,
      customBodyRender: (souscategorie, tableMeta, updateValue) => {
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

              {getOptionActions(souscategorie).map((item) => (
                  <>
                    <MenuItem

                      onClick={() =>
                        item.action(souscategorie)
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

