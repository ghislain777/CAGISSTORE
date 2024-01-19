$(function () { 

$("a[action=supprimer_adresse]").click(function (e) { 
    supprimerAdresse(e.target.attributes["ad"].value) ;
    
});


$("a[action=modifier_adresse]").click(function (e) { 
    modifierAdresse(e.target.attributes["ad"].value) ;
    
});

const supprimerAdresse = (id) => {
    $.ajax({
                type: "DELETE",
                url: `/api/adresses/${id}`,
                data: {},
                dataType: "application/json",
                statusCode: {
                    200: function (res, status, error) {
                        alert("Suppression réussie")
                        window.location.reload()
                    }
                }
            })
}

const modifierAdresse = (id) => {
    alert(`suppression de l'adresse ${id}`)
}


})