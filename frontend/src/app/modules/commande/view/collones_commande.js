
import React from 'react'
import { MatxMenu } from '../../../components'
import AddIcon from '@material-ui/icons/Add'
import { Delete, Edit, ArrowRightAlt, ArrowDropDown, Visibility, PostAdd, Check, Add, LocalShipping, EditOutlined, AddAPhotoOutlined, Print } from '@material-ui/icons'
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

export default function getcollonesCommande(fonctions) {

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


const getOptionActions = (commande) => {
    switch (commande.Statutcommande.id) {
      case 1:  // Nouvelle commande
        return [
          {
            id: 1,
            nom: 'Confirmer',
            action: (commande) => handleClickSurAction(commande, 2),
            icon: <Visibility color='primary' />
          },
          {
            id: 2,
            nom: 'Annuler',
            action: (commande) => handleClickSurAction(commande, 5),
            icon: <Visibility color='primary' />
          },
          {
            id: 3,
            nom: 'Imprimer',
            action: (commande) => handleClickSurAction(commande, "Imprimer"),
            icon: <Print color='primary' />
          },
          
        ]
      case 2:
        return [{
          id: 1,
          nom: 'Expédier',
          action: (commande) => handleClickSurAction(commande, 3),
          icon: <Visibility color='primary' />
        },
        {
          id: 2,
          nom: 'Annuler',
          action: (commande) => handleClickSurAction(commande, 5),
          icon: <Visibility color='primary' />
        },{
          id: 3,
          nom: 'Imprimer',
          action: (commande) => handleClickSurAction(commande, "Imprimer"),
          icon: <Print color='primary' />
        },
      ]
        case 3:
        return [{
          id: 1,
          nom: 'Livrer',
          action: (commande) => handleClickSurAction(commande, 4),
          icon: <Visibility color='primary' />
        },
        {
          id: 2,
          nom: 'Annuler',
          action: (commande) => handleClickSurAction(commande, 5),
          icon: <Visibility color='primary' />
        },
        {
          id: 3,
          nom: 'Imprimer',
          action: (commande) => handleClickSurAction(commande, "Imprimer"),
          icon: <Print color='primary' />
        },
      ]

        case 4:
          return [
            {
              id: 3,
              nom: 'Imprimer',
              action: (commande) => handleClickSurAction(commande, "Imprimer"),
              icon: <Print color='primary' />
            },
          ]
      default:
        return [
          {
            id: 3,
            nom: 'Imprimer',
            action: (commande) => handleClickSurAction(commande, "Imprimer"),
            icon: <Print color='primary' />
          },
        
        ]

    }
  }


  const getCouleurStatut = (commande) => {
    switch (commande.Statutcommande.id) {
      case 5:
        return 'bg-error'
      case 1:
        return 'bg-primary'
      case 2:
        return 'bg-green'
        case 3:
        return 'bg-gray'
        case 4:
          return 'bg-dark'

      default:
        return 'bg-primary'
    }
  }



  const handleClickSurAction = (commande, action) => {
   // console.log('Action sur une commande::::Action=' + action + ' commande :::' + commande.id);
   fonctions.handleClickSurAction(commande, action)

  }


  return [


    {
        name: 'commande',
        label: "ID",
        options: {
          filter: false,
          sort: false,
          display: true,
          customBodyRender: (commande, tableMeta, updateValue) => {
            return commande.id?.toLocaleString('fr-FR')?? ''
        }
        }
      },
    
    {
        name: 'commande',
        label: "Montant",
        options: {
          filter: false,
          sort: false,
          display: true,
          customBodyRender: (commande, tableMeta, updateValue) => {
            return <>
                        
                         <Typography style={{whiteSpace:"nowrap"}} variant='subtitle2'>
                          Montant Total: {commande.montantttc?.toLocaleString('fr-FR')?? ''}
                          </Typography> 
            
                        <Typography style={{whiteSpace:"nowrap"}} variant='caption'  >
                        Montant TTC: {commande.totalproduits?.toLocaleString('fr-FR')?? ''}
                            </Typography> 
                            <br/>
                         <Typography style={{whiteSpace:"nowrap"}} variant='caption' >
                         Transport: {commande.montanttransport?.toLocaleString('fr-FR')?? ''}
                           </Typography> 
                           
                      </>
        }
        }
      },

      {
        name: 'commande',
        label: "Adresse de livraison",
        options: {
          filter: false,
          sort: false,
          display: true,
          customBodyRender: (commande, tableMeta, updateValue) => {
            return <>
                        
                         <Typography style={{whiteSpace:"nowrap"}} variant='subtitle2'>
                          {commande.livraison?.nom ?? ""} {commande.livraison?.prenom ?? ""}
                          </Typography> 
                          <Typography style={{whiteSpace:"nowrap"}} variant='caption' >
                           {commande.livraison?.Quartier?.Commune?.nom?? ""}/{commande.livraison?.Quartier?.nom?? ""} 
                           </Typography> 
                           <br/>
                         <Typography style={{whiteSpace:"nowrap"}} variant='caption' >
                           {commande.livraison?.telephone?? ""} 
                           </Typography> 
                      <Typography style={{whiteSpace:"nowrap"}} variant='caption'  >
                           {commande.livraison?.adresse?? ""}
                            </Typography> 
                            <br/>
                       
                      </>
        }
        }
      },
    

    
    {
        name: 'commande',
        label: "Montant Taxe",
        options: {
          filter: false,
          sort: false,
          display: true,
          customBodyRender: (commande, tableMeta, updateValue) => {
            return  <>
                        
            <Typography style={{whiteSpace:"nowrap"}} variant='caption'>
             Montant HT: {commande.montantht?.toLocaleString('fr-FR')?? ''}
             </Typography> 
           <br/>
             <Typography style={{whiteSpace:"nowrap"}} variant='caption'>
             Montant Taxe: {commande.montanttaxe?.toLocaleString('fr-FR')?? ''}
             </Typography> 
              
         </>
        }
        }
      },
    
    {
        name: 'commande',
        label: "Montant HT",
        options: {
          filter: false,
          sort: false,
          display: "excluded",
          customBodyRender: (commande, tableMeta, updateValue) => {
            return commande.montantht?.toLocaleString('fr-FR')?? ''
        }
        }
      },
    
    {
        name: 'commande',
        label: "Remise",
        options: {
          filter: false,
          sort: false,
          display: "excluded",
          customBodyRender: (commande, tableMeta, updateValue) => {
            return commande.remise?.toLocaleString('fr-FR')?? ''
        }
        }
      },
    
    {
        name: 'commande',
        label: "Montant transport",
        options: {
          filter: false,
          sort: false,
          display: "exluded",
          customBodyRender: (commande, tableMeta, updateValue) => {
            return commande.montanttransport?.toLocaleString('fr-FR')?? ''
        }
        }
      },
    
    {
        name: 'commande',
        label: "Délais de livraison",
        options: {
          filter: false,
          sort: false,
          display: true,
          customBodyRender: (commande, tableMeta, updateValue) => {
            return commande.delaisdelivraison  ?? ''
        }
        }
      },

{
  name: 'commande',
  label: "Statut",
  options: {
    filter: false,
    sort: false,
    display: true,
    customBodyRender: (commande, tableMeta, updateValue) => {
    return  <div>
      <div>
             <MatxMenu
               menuButton={
                 <div className={classes.userMenu}>
                   <Hidden xsDown>
                     <Button
                       size='small'
                       variant='text'
                       color='primary'
                       endIcon={<ArrowDropDown />}
                     >
                       <small
                         className={'border-radius-4  text-white px-2 py-2px '+ getCouleurStatut(commande)}
                       >
                         {commande.Statutcommande?.nom?? ""}
                       </small>
                     </Button>
                   </Hidden>
                 </div>
               }
             >
             
             </MatxMenu>
           </div>
         </div>

                  }
                }
},
    
    {
        name: 'commande',
        label: "Message du client",
        options: {
          filter: false,
          sort: false,
          display: true,
          customBodyRender: (commande, tableMeta, updateValue) => {
            return commande.messageduclient  ?? ''
        }
        }
      },
    
    {
        name: 'commande',
        label: "Dates",
        options: {
          filter: false,
          sort: false,
          display: true,
          customBodyRender: (commande, tableMeta, updateValue) => {
            return <>
                               
                            <Typography style={{whiteSpace:"nowrap"}} variant='caption'  >
                               Commande:  { commande.datecommande == null? '': format(parseISO(commande.datecommande), 'dd/MM/yyyy HH:mm') } 
                             </Typography>   
                             <br/>
                               
                                {
                                  commande.datedeconfirmation &&  <Typography style={{whiteSpace:"nowrap"}} variant='caption' >
                                 Confirmation: {
                                   commande.datedeconfirmation == null ? '' : format(parseISO(commande.datedeconfirmation), 'dd/MM/yyyy HH:mm')
                                 }
                                    </Typography>
                                }

                                <br/>
                                {
                                  commande.datedexpedition &&  <Typography style={{whiteSpace:"nowrap"}} variant='caption' >
                                 Expédition:  { commande.datedexpedition == null? '': format(parseISO(commande.datedexpedition), 'dd/MM/yyyy HH:mm') } 
                                    </Typography>
                                }
                                  
                                <br/>
                                {
                                  commande.datedelivraison &&  <Typography style={{whiteSpace:"nowrap"}} variant='caption' >
                                 Livraison:  { commande.datedelivraison == null? '': format(parseISO(commande.datedelivraison), 'dd/MM/yyyy HH:mm') } 
                                    </Typography>
                                }
                                 
                                 <br/>
                                {
                                  commande.dateannulation &&  <Typography style={{whiteSpace:"nowrap"}} variant='caption' >
                                 Expédition:  { commande.dateannulation == null? '': format(parseISO(commande.dateannulation), 'dd/MM/yyyy HH:mm') } 
                                    </Typography>
                                }
                                 <br/>
                                {
                                  commande.datepayement &&  <Typography style={{whiteSpace:"nowrap"}} variant='caption' >
                                 Expédition:  { commande.datepayement == null? '': format(parseISO(commande.datepayement), 'dd/MM/yyyy HH:mm') } 
                                    </Typography>
                                }
                                </>
            
        }
        }
      },
    
   
    
    
    
{
    name: 'commande',
    label: "client",
    options: {
      filter: false,
      sort: false,
      display: true,
      customBodyRender: (commande, tableMeta, updateValue) => {
        return `${commande.Client?.nom?? ''} ${commande.Client?.prenom?? ''}`
    }
    }
  },

{
    name: 'commande',
    label: "panier",
    options: {
      filter: false,
      sort: false,
      display: "excluded",
      customBodyRender: (commande, tableMeta, updateValue) => {
        return commande.Panier?.nom?? ''
    }
    }
  },

{
    name: 'commande',
    label: "Options",
    options: {
      filter: false,
      sort: false,
      display: true,
      customBodyRender: (commande, tableMeta, updateValue) => {
        return   <>
                        
        <Typography style={{whiteSpace:"nowrap"}} variant='caption'>
         Transporteur: <strong>  {commande.Transporteur?.nom?? ''}</strong>
         </Typography> 
       <br/>
         <Typography style={{whiteSpace:"nowrap"}} variant='caption'>
         Payement: <strong>  {commande.Moyendepayement?.nom?? ''} </strong>
         </Typography> 
          
     </>
    }
    }
  },


{
    name: 'commande',
    label: "adresse",
    options: {
      filter: false,
      sort: false,
      display: true,
      customBodyRender: (commande, tableMeta, updateValue) => {
        return  <>
                        
        <Typography style={{whiteSpace:"nowrap"}} variant='caption'>
         {commande.Adresse?.alias?? ''}
         </Typography> 
       <br/>
         <Typography style={{whiteSpace:"nowrap"}} variant='caption'>
          {commande.Adresse?.nom?? ''} - {commande.Adresse?.telephone?? ''}
         </Typography> 
          
     </>
    }
    }
  },


{
    name: 'commande',
    label: 'Actions',
    options: {
      filter: false,
      sort: false,
      display: true,
      customBodyRender: (commande, tableMeta, updateValue) => {
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

              {getOptionActions(commande).map((item) => (
                  <>
                    <MenuItem

                      onClick={() =>
                        item.action(commande)
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

