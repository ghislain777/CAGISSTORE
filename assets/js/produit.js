// entreprise est une variable recuperée du fichier heder_botom.html
$(function () { 
retirer = (lignepanier) => {
enlever(lignepanier)
}
// evenement pour supprimer un produit dans le panier
    $(".ion-close").click(function (e) {
        const lignepanier = $(this).attr("id")
        enlever(lignepanier)
    });

 // click sur ajout dans le panier
    $('.add-to-cart').click(function (e) {
        const produit = $(this).attr("id")
        ajouter(produit)
    });

    $("#boutonAjouter").click(function (e) { 
        e.preventDefault();
const produit = $("#produit").val();
const quantite = $("#quantite").val();
alert(`ajout du produit ${produit} en quantite ${quantite}`)  
ajouter(produit, quantite)


    });


            const ajouter = (produit, quantite = 1) => {
                $.ajax({
                    type: "POST",
                    url: `/ajoutdanspanier/${produit}`,
                    data: {
                        produit: produit,
                        quantite: quantite
                    },
                    dataType: "application/json",
                    accept: "application/json",
                    statusCode: {
                      
                        200: function (res, status, error) {
                            $("#totalPanier").text(JSON.parse(res.responseText).totalproduits);
                            $("#prixTotal").text(JSON.parse(res.responseText).montantht.toLocaleString("fr-FR")+ ' '+ lentreprise.devise);
                            $("#panier").empty();
                            JSON.parse(res.responseText).Lignepaniers.forEach((ligne) => {
                                $("#panier").append(` <li> <a href="#" class="item_remove"><i onclick="retirer(${ligne.id})" class="ion-close" id="${ligne.id}"></i></a>
                                   <a href="#"><img src="${ligne.Produit.Media[0].fichier}" alt="cart_thumb1">${ligne.Produit.nom} </a>
                                   <span class="cart_quantity">  ${ligne.quantite} x <span class="cart_amount">  <span class="price_symbole"></span></span>${ligne.prixunitaire.toLocaleString("fr-FR")} </span>
                                  </li>`)
                            });
    
                            ;
                            alert(`Produit ajouté avec succès dans votre panier`)
    
                        }
                    }
    
                }).done(function (data) {
                    //console.log(data)
    
                })
                .fail(function (jqXHR, textStatus) {
                    // alert('Something went wrong: ' + textStatus);
                })
                .always(function (jqXHR, textStatus) {
                    // alert('Ajax request was finished')
                });
            }


            const enlever = (lignepanier) => {
                $.ajax({
                    type: "POST",
                    url: `/enleverdupanier/${lignepanier}`,
                    data: {
                    },
                    dataType: "application/json",
                    accept: "application/json",
                    statusCode: {
                       
                        200: function (res, status, error) {
        
                            $("#totalPanier").text(JSON.parse(res.responseText).totalproduits);
                            $("#prixTotal").text(JSON.parse(res.responseText).montantht);
                            $("#panier").empty();
                            JSON.parse(res.responseText).Lignepaniers.forEach((ligne) => {
                                $("#panier").append(` <li> <a href="#" class="item_remove"><i class="ion-close croix" id="${ligne.id}"></i></a>
                                   <a href="#"><img src="${ligne.Produit.Media[0].fichier}" alt="cart_thumb1">${ligne.Produit.nom} </a>
                                   <span class="cart_quantity">  ${ligne.quantite} x <span class="cart_amount">  <span class="price_symbole"></span></span>${ligne.prixunitaire} GNF</span>
                                  </li>`)
                            });
                            alert(`Produit supprimé du panier avec succès`)
        
                        }
                    }
        
                }).done(function (data) {
                    //console.log(data)
        
                })
                .fail(function (jqXHR, textStatus) {
                    // alert('Something went wrong: ' + textStatus);
                })
                .always(function (jqXHR, textStatus) {
                    // alert('Ajax request was finished')
                });
            }


   



    


})