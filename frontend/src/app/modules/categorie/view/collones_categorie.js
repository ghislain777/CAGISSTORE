
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

export default function getcollonesCategorie(fonctions) {

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


const getOptionActions = (categorie) => {
    switch (categorie.statut) {
      case 'Annulé':
        return [
          {
            id: 1,
            nom: 'Détails',
            action: (categorie) => handleClickSurAction(categorie, 'Détails'),
            icon: <Visibility color='primary' />

          },
        ]
      case 'Nouveau':
        return [
          {
            id: 1,
            nom: 'Détails',
            action: (categorie) => handleClickSurAction(categorie, 'Détails'),
            icon: <Visibility color='primary' />
          },
          {
            id: 2,
            nom: 'Modifier',
            action: (categorie) => handleClickSurAction(categorie, 'Modifier'),
            icon: <EditOutlined color='primary' />
          },
          {
            id: 3,
            nom: 'Supprimer',
            action: (categorie) => handleClickSurAction(categorie, 'Supprimer'),
            icon: <Delete color='error' />
          },


        ]

      default:
        return [
          //  {
          //    id: 1,
          //    nom: 'Détails',
          //    action: (categorie) => handleClickSurAction(categorie, 'Détails'),
          //    icon: <Visibility color='primary' />
          //  },
           {
             id: 2,
             nom: 'Modifier',
             action: (categorie) => handleClickSurAction(categorie, 'Modifier'),
             icon: <EditOutlined color='primary' />
           },
          // {
          //   id: 3,
          //   nom: 'Supprimer',
          //   action: (categorie) => handleClickSurAction(categorie, 'Supprimer'),
          //   icon: <Delete color='error' />
          // },
        ]

    }
  }



  const handleClickSurAction = (categorie, action) => {
   // console.log('Action sur une categorie::::Action=' + action + ' categorie :::' + categorie.id);
   fonctions.handleClickSurAction(categorie, action)

  }


  return [

    // en commentaire les collones pour les champs complexes et les champs statuts
    //**************collone avec photo ***************************************/ */
    // {
    //   name: 'categorie',
    //   label: 'Photo',
    //   options: {
    //     filter: false,
    //     sort: false,
    //     display: true,
    //     customBodyRender: (categorie, tableMeta, updateValue) => {
    //       return <>

    //         <div className='flex items-center'>
    //           <Box onClick={() => fonctions.handleClickSurphoto(categorie)}>
    //             <Button>
    //               <Avatar
    //                 variant='rounded'
    //                 className='w-48 h-48'
    //                 src={
    //                   serveur +
    //                   '/fichiers/' +
    //                   categorie.photo
    //                 }
    //               />
    //             </Button>
    //           </Box>
    //           <div className='ml-3'>
    //             <h5 className='my-0 text-15'>{(categorie.nom ?? '') + (' ') + (categorie.prenom ?? '')}</h5>
    //             <small className='text-muted'>
    //               {  (categorie.email ?? '') + '/' +   (categorie.adresse ?? '')}
    //             </small><br />
    //             <small className='text-muted'>
    //               { (categorie.telephone ?? '')}
    //             </small>
    //           </div>
    //         </div>
    //       </>
    //     }
    //   }
    // },
    //********************collone de statut ***************************/
    //  {
    //   name: 'categorie',
    //   label: 'Statut',
    //   options: {
    //     filter: false,
    //     sort: false,
    //     display: true,
    //     customBodyRender: (categorie, tableMeta, updateValue) => {
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
    //                     {categorie.statut}
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
        name: 'categorie',
        label: 'ID',
        options: {
          filter: false,
          sort: false,
          display: true,
          customBodyRender: (categorie, tableMeta, updateValue) => {
            return categorie.id?.toLocaleString('fr-FR')?? ''
        }
        }
      },
    
    {
        name: 'categorie',
        label: 'Nom',
        options: {
          filter: false,
          sort: false,
          display: true,
          customBodyRender: (categorie, tableMeta, updateValue) => {
            return categorie.nom  ?? ''
        }
        }
      },
    
    {
        name: 'categorie',
        label: 'Actif?',
        options: {
          filter: false,
          sort: false,
          display: true,
          customBodyRender: (categorie, tableMeta, updateValue) => {
            return <Checkbox
        checked={categorie.actif}
        onChange={() =>
          fonctions.handleTogleactif(categorie)
        }
    />

        }
        }
      },
    
    {
        name: 'categorie',
        label: 'Description',
        options: {
          filter: false,
          sort: false,
          display: true,
          customBodyRender: (categorie, tableMeta, updateValue) => {
            return categorie.description  ?? ''
        }
        }
      },
    {
    name: 'categorie',
    label: 'Photos',
    options: {
      filter: false,
      sort: false,
      display: true,
      customBodyRender: (categorie, tableMeta, updateValue) => {
        return <>
  <div className='flex items-center'>
  <Box onClick={() => fonctions.handleClickSurphoto(categorie)}>
    <Button>
      <Avatar
        variant='rounded'
        className='w-48 h-48'
        src={
          serveur +

          categorie.Media[0]?.fichier
        }
      />
    </Button>
  </Box>
  <Box onClick={() => fonctions.handleAjouterPhoto(categorie)}>
    <AddAPhotoOutlined />
  </Box>
</div>
<small className='text-muted'>
  {(categorie.Media.length)}
</small>
</>
}
}
},
  
{
    name: 'categorie',
    label: 'Actions',
    options: {
      filter: false,
      sort: false,
      display: true,
      customBodyRender: (categorie, tableMeta, updateValue) => {
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

              {getOptionActions(categorie).map((item) => (
                  <>
                    <MenuItem

                      onClick={() =>
                        item.action(categorie)
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

