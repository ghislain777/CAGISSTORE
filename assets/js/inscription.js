$(function () {
    var formulaireClient = $("#formulaire_client")

// villes est une vatiabl ejs à retrouver dans le fichier inscription_component.html
    const lesvilles = JSON.parse(villes)

    $("#ville").change(function () {
        const ville = $("#ville").val();
        // on cherche la ville
        let index = lesvilles.findIndex((v) => v.id == ville)
        const laville = lesvilles[index]
        $("#commune").empty();
        laville.Communes.forEach((commune) => {
            $("#commune").append(
                `<option value= "${commune.id}" >${commune.nom}</option>`
            );
        });
    });


    $("#enregistrer").click(function (e) {
        e.preventDefault();
        validerFormulaire()

        // chargement des villes et communes

        if (formulaireClient.valid()) {
            formulaireClient.submit()

            //alert("le formulaire est valide")
        } else {
            //alert("Le formulaire n'est pas valide")
        }

    });

    function validerFormulaire() {
        formulaireClient.validate({
            rules: {
                nom: {
                    required: true
                },
                prenom: {
                    required: true
                },
                telephone: {
                    required: true
                },
                email: {
                    required: false,
                    email: true
                },
                motdepasse: {
                    required: true

                }

            },
            messages: {
                nom: "Le nom est requis",
                prenom: "Le prénom est requis",
                telephone: "Le téléphone est requis",
                motdepasse: "Mot de passe requis",
                email: {
                    required: "l'adresse email est requise",
                    email: "format de mail non valide"
                }
            }
        })
    }



})