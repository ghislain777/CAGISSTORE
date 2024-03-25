$(function () {
  //  console.log("L'utilisateur abec livraison....")
   // console.log(utilisateur)
const commande = {
    id:0,
    panier:panier?? null,
    montantht:panier?.montantht?? 0,
    montantttc:panier?.montantttc?? 0,
    montanttaxe:panier?.montanttaxe?? "",
    montanttransport:0,
    delaisdelivraison:0,
    client:utilisateur?? null,
    livrerAladresseDeFacturation: true,
    nouvelleAdressefacturation:false,
    nouvelleadresselivraison: false,
    adressedelivraison:utilisateur?.Adresses[0]?? null,
    adressedefacturation:utilisateur?.Adresses[0]?? null,
    moyendepayement: moyendepayements.find((moyen) => moyen.defaut == true).id,
    transporteur: transporteurs.find((transporteur) => transporteur.defaut == true)
}

//*********** */
///****** Quartier par defaut dans les adresses */
$("#villedefacturation").val(utilisateur?.Quartier?.Commune?.Ville?.id?? 0);
$("#communedefacturation").append(`<option value=${utilisateur?.Quartier?.Commune?.id?? 0}>${utilisateur?.Quartier?.Commune?.nom?? ""}</option>`);
$("#communedefacturation").val(utilisateur?.Quartier?.Commune?.id?? "");
$("#quartierdefacturation").append(`<option value=${utilisateur?.Quartier?.id?? 0}>${utilisateur?.Quartier?.nom?? ""}</option>`);
$("#quartierdefacturation").val(utilisateur?.Quartier?.id?? 0);

$("#villedelivraison").val(utilisateur?.Quartier?.Commune?.Ville?.id?? 0);
$("#communedelivraison").append(`<option value=${utilisateur?.Quartier?.Commune?.id?? 0}>${utilisateur?.Quartier?.Commune?.nom?? ""}</option>`);
$("#communedelivraison").val(utilisateur?.Quartier?.Commune?.id?? "");
$("#quartierdelivraison").append(`<option value=${utilisateur?.Quartier?.id?? 0}>${utilisateur?.Quartier?.nom?? ""}</option>`);
$("#quartierdelivraison").val(utilisateur?.Quartier?.id?? 0);

//***** on remplit les fais de livraison par défaut */
$("#fraisdelivraison").text(`${livraison.fraisdelivraison.toLocaleString('fr-FR')} ${entreprise.devise}`);
$("#delaisdelivraison").text(`${livraison.delaisdelivraisonenheure} heures`);
$("#livraisoncommande").text(`${livraison.fraisdelivraison.toLocaleString('fr-FR')}`);
commande.montanttransport = livraison.fraisdelivraison
commande.delaisdelivraison = livraison.delaisdelivraisonenjour
if(commande.adressedelivraison != null) {
    commande.adressedefacturation.quartier =  utilisateur?.Quartier?.id?? 0
}
if(commande.adressedefacturation != null) {
    commande.adressedelivraison.quartier = utilisateur?.Quartier?.id?? 0
}

//*** On cache le formulaire d'adresse de livraison */
$('#nouvelleadresse').hide();
$('#nouvelleadresselivraison').hide();



///*****selection du quartier de facturation */

    $("#villedefacturation").change(function (e) {
        e.preventDefault();
        $("#communedefacturation").empty();
        $("#quartierdefacturation").empty();

        // on recupere toutes les communes de la ville...
        $.ajax({
            type: "GET",
            url: `/api/communes?ville=${e.target.value}`,
            data: {},
            dataType: "application/json",
            statusCode: {
                200: function (res, status, error) {
                    var lescommunes = JSON.parse(res.responseText)
                    $("#communedefacturation").append(`<option value="">Commune *</option>`)
                    lescommunes.rows.forEach((commune) => {
                        $("#communedefacturation").append(`<option value=${commune.id}>${commune.nom}</option>`);
                    });

                }
            }
        })

    });

    $("#communedefacturation").change(function (e) {
        e.preventDefault();
        $("#quartierdefacturation").empty();
        $.ajax({
            type: "GET",
            url: `/api/quartiers?commune=${e.target.value}`,
            data: {},
            dataType: "application/json",
            statusCode: {
                200: function (res, status, error) {
                    var lesquartuers = JSON.parse(res.responseText)
                    $("#quartierdefacturation").append(`<option value="">Quartier *</option>`)
                    lesquartuers.rows.forEach((quartier) => {
                        $("#quartierdefacturation").append(`<option value=${quartier.id}>${quartier.nom}</option>`);
                    });

                }
            }
        })


    });

    $("#quartierdefacturation").change(function (e) {
        e.preventDefault();
       
    $.ajax({
        type: "PUT",
        url: `/api/paniers/fraisdelivraison/${panier.id}`,
        data: {
            quartier: idQuartier
        },
        dataType: "application/json",
        statusCode: {
            200: function (res, status, error) {
                const fraisdelivraison = JSON.parse(res.responseText).fraisdelivraison
                const delaisdelivraisonenheure = JSON.parse(res.responseText).delaisdelivraisonenheure
                const delaisdelivraisonenjour = JSON.parse(res.responseText).delaisdelivraisonenjour
                $("#fraisdelivraison").text(`${fraisdelivraison.toLocaleString('fr-FR')} ${entreprise.devise}`);
                $("#delaisdelivraison").text(`${delaisdelivraisonenheure} heures`);
                $("#livraisoncommande").text(`${fraisdelivraison.toLocaleString('fr-FR')}`);
             
                commande.montanttransport = fraisdelivraison
                commande.delaisdelivraison = delaisdelivraisonenjour
                commande.adressedefacturation.quartier = e.target.value
                commande.adressedelivraison.quartier = e.target.value

            }
        }
    })
    });






    // capture du changement de transporteur ou de payement
    $('[name="payment_option"]').on('change', function() {
        var $value = $(this).attr('value');
        var id = $(this).attr('moyen');
        $('.payment-text').slideUp();
        $('[data-method="'+$value+'"]').slideDown();
        changementMoyendepayement(id)
        //alert($value);
    });
    
    $('[name="transporteur_option"]').on('change', function() {
        var $value = $(this).attr('value');
        var id = $(this).attr('transporteur');
        $('.transporteur-text').slideUp();
        $('[transporteur-data-method="'+$value+'"]').slideDown();
        changementTransporteur(id)
    });

//****Choix adress de facturation et de livraison */
//************************ */ */

$('[name="adressefacturation_option"]').on('change', function() {
    var $value = $(this).attr('value');
    var id = $(this).attr('adresse');
    $('.adressefacturation-text').slideUp();
    $('[adressefacturation-data-method="'+$value+'"]').slideDown();
   changementAdressefacturation(id)
});


$('[name="adresselivraison_option"]').on('change', function() {
    var $value = $(this).attr('value');
    var id = $(this).attr('adresse');
    $('.adresselivraison-text').slideUp();
    $('[adresselivraison-data-method="'+$value+'"]').slideDown();
   changementAdresselivraison(id)
});

////***Navigation dans le bloc de livraison (accordeon) */

$("#allerALivraison").click(function (e) { 
    e.preventDefault();
    $("#collapseFacturation").removeClass("show");
    $("#collapseLivraison").addClass("show");
    $("#collapseTransporteur").removeClass("show");
    
});

$("#allerATransporteur").click(function (e) { 
    e.preventDefault();
    $("#collapseFacturation").removeClass("show");
    $("#collapseLivraison").removeClass("show");
    $("#collapseTransporteur").addClass("show");
    
});

$("#allerAFacturation").click(function (e) { 
    e.preventDefault();
    $("#collapseFacturation").addClass("show");
    $("#collapseLivraison").removeClass("show");
    $("#collapseTransporteur").removeClass("show");
    
});

$("#retourALivraison").click(function (e) { 
    e.preventDefault();
    $("#collapseFacturation").removeClass("show");
    $("#collapseLivraison").addClass("show");
    $("#collapseTransporteur").removeClass("show");
    
});
// $('#nom').change(function (e) { 
//     e.preventDefault();
//     console.log("Changement du nom dans l'adresse de facturation")
//     console.log(e.target.value)
    
// });

    function changementTransporteur(transporteur) {
        commande.transporteur = transporteur
        
    }

function changementMoyendepayement(moyendepayement) {
    commande.moyendepayement = moyendepayement
    
}


function changementAdressefacturation(idAdresse) {
    if(idAdresse == 0) {
        $("#nouvelleadresse").slideDown();
        commande.nouvelleAdressefacturation = true
        commande.adressedelivraison = {
            ...commande.adressedefacturation,
            id:0
        }
    }
    else {
        $("#nouvelleadresse").slideUp();
        commande.nouvelleAdressefacturation = false
        commande.adressedefacturation = {
            ...commande.nouvelleAdressefacturation,
            id:idAdresse
        }
    }
   
}

function changementAdresselivraison(idAdresse) {
    if(idAdresse == 0) {
        $("#nouvelleadresselivraison").slideDown();
        commande.nouvelleadresselivraison = true
        commande.adressedelivraison = {
            ...commande.adressedelivraison,
            id:0
        }
    }
    else {
        $("#nouvelleadresselivraison").slideUp();
        commande.nouvelleadresselivraison = false,
        commande.adressedelivraison = {
            ...commande.adressedelivraison,
            id:idAdresse
        }
    }
   
}



///*** changements dans le formulaire de facturation */

$("input[formulaire=facturation]").change(function (e) { 
    e.preventDefault();
    handleChangeFacturation(e)
});

function handleChangeFacturation({target:{name, value}}) {
    console.log("changement dans l'afresse de facturation")
    console.log(`nom: ${name} valeur ${value}`)
    commande.adressedefacturation[name] = value
}

///*** changements dans le formulaire de livraison */

$("#differentaddress").on('change', function(e) {
    console.log(commande.livrerAladresseDeFacturation)
    commande.livrerAladresseDeFacturation = !commande.livrerAladresseDeFacturation
});


$("input[formulaire=livraison]").change(function (e) { 
    e.preventDefault();
    handleChangeLivraison(e)
});                     

function handleChangeLivraison({target:{name, value}}) {
    console.log("changement dans l'afresse de livraison")
    console.log(`nom: ${name} valeur ${value}`)
    commande.adressedelivraison[name] = value
}


///*****selection du quartier de livraison */

$("#villedelivraison").change(function (e) {
    e.preventDefault();
    $("#communedelivraison").empty();
    $("#quartierdelivraison").empty();

    // on recupere toutes les communes de la ville...
    $.ajax({
        type: "GET",
        url: `/api/communes?ville=${e.target.value}`,
        data: {},
        dataType: "application/json",
        statusCode: {
            200: function (res, status, error) {
                var lescommunes = JSON.parse(res.responseText)
                $("#communedelivraison").append(`<option value="">Commune *</option>`)
                lescommunes.rows.forEach((commune) => {
                    $("#communedelivraison").append(`<option value=${commune.id}>${commune.nom}</option>`);
                });

            }
        }
    })

});

$("#communedelivraison").change(function (e) {
    e.preventDefault();
    $("#quartierdelivraison").empty();
    $.ajax({
        type: "GET",
        url: `/api/quartiers?commune=${e.target.value}`,
        data: {},
        dataType: "application/json",
        statusCode: {
            200: function (res, status, error) {
                var lesquartuers = JSON.parse(res.responseText)
                $("#quartierdelivraison").append(`<option value="">Quartier*</option>`)
                lesquartuers.rows.forEach((quartier) => {
                    $("#quartierdelivraison").append(`<option value=${quartier.id}>${quartier.nom}</option>`);
                });

            }
        }
    })


});


$("#quartierdelivraison").change(function (e) {
    e.preventDefault();

    // calcul des fais de livraison d'un panier pour un quartier.

    $.ajax({
        type: "PUT",
        url: `/api/paniers/fraisdelivraison/${panier.id}`,
        data: {
            quartier: e.target.value
        },
        dataType: "application/json",
        statusCode: {
            200: function (res, status, error) {
                const fraisdelivraison = JSON.parse(res.responseText).fraisdelivraison
                const delaisdelivraisonenheure = JSON.parse(res.responseText).delaisdelivraisonenheure
                const delaisdelivraisonenjour = JSON.parse(res.responseText).delaisdelivraisonenjour
                $("#fraisdelivraison").text(`${fraisdelivraison.toLocaleString('fr-FR')} ${entreprise.devise}`);
                $("#delaisdelivraison").text(`${delaisdelivraisonenheure} heures`);
                $("#livraisoncommande").text(`${fraisdelivraison.toLocaleString('fr-FR')}`);
             
                commande.montanttransport = fraisdelivraison
                commande.delaisdelivraison = delaisdelivraisonenjour
                commande.adressedefacturation.quartier = e.target.value
                commande.adressedelivraison.quartier = e.target.value

            }
        }
    })

});

////***** click sur le bouton commander.... */
$("#commander").click(function (e) { 
    e.preventDefault();
console.log(`confirmation de la commande`)

$.ajax({
    type: "POST",
    url: `/api/commandes/`,
    data:commande,
    dataType: "application/json",
    statusCode: {
        201: function (res, status, error) {
          window.open('/confirmation_commande?statut=succes','self')
        },
        500: function (res, status, error) {
            window.open('/confirmation_commande?statut=echec','self')
          },
    }
})
    
});
});