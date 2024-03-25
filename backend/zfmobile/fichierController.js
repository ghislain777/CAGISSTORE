
const getContenuFichierController = (table) => {

    let contenuController = `
import 'dart:developer';
import 'package:flutter/material.dart';
import 'package:flutter_form_builder/flutter_form_builder.dart';
import 'package:get/get.dart';
`
table.champs.forEach(champ => {
    if(champ.estCle) {
        contenuController += `
        
import '/app/modules/${champ.nom}/controllers/${champ.nom}_controller.dart';
import '/app/modules/${champ.nom}/model/${champ.nom}.dart';
        `
    }
    
});

contenuController +=
`
import '../../../formulaires/formulaire_${table.nom}.dart';
import '/app/config/config.dart';
import '/app/fonctions/fonctions.dart';
import '/app/modules/${table.nom}/model/${table.nom}.dart';
import '/app/modules/${table.nom}/model/${table.nom}_model.dart';

class ${table.nom.ucfirst()}Controller extends GetxController {
  Rx<${table.nom.ucfirst()}> ${table.nom} = ${table.nom}0.obs;
  RxList<${table.nom.ucfirst()}> mes${table.nom.ucfirst()}s = <${table.nom.ucfirst()}>[].obs;
  RxBool isLoading = false.obs;
  var filtre = "".obs;

  var scaffoldKey = GlobalKey<ScaffoldState>();
  GlobalKey<FormBuilderState> formkey${table.nom.ucfirst()} = GlobalKey<FormBuilderState>();

  var mes${table.nom}sFltres = <${table.nom.ucfirst()}>[].obs;

  `

table.champs.forEach(champ => {
    if(champ.estCle) {
        contenuController += `
        var controller${champ.nom.ucfirst()} = TextEditingController();
        `
    }
    
});

  contenuController +=
  `
  void ouvrirFormulaire${table.nom.ucfirst()}({String mode = "ajout"}) {
    if (mode == "ajout") {
      ${table.nom}(${table.nom.ucfirst()}.fromMap(${table.nom}0.toMap()));
`

table.champs.forEach(champ => {
    if(champ.estCle) {
        contenuController += `
        ${table.nom}().${champ.nom} = Get.find<${champ.nom.ucfirst()}Controller>().mes${champ.nom.ucfirst()}s.first;
        controller${champ.nom.ucfirst()}.text =
            Get.find<${champ.nom.ucfirst()}Controller>().mes${champ.nom.ucfirst()}s.first.nom;
        `
    }
    
});

contenuController +=
`   } else {
`

table.champs.forEach(champ => {
if(champ.estCle) {
    contenuController += `
    controller${champ.nom.ucfirst()}.text = ${table.nom}().${champ.nom}.nom;
    `
}
    
});

contenuController +=
`
    }
    Get.bottomSheet(
        Container(
          height: 650,
          // ignore: sort_child_properties_last
          child: Padding(
            padding: const EdgeInsets.symmetric(horizontal: 25, vertical: 25),
            child: SingleChildScrollView(
              child: Column(
                children: [
                  Text(mode == "ajout"
                      ? "Ajout d'un nouveau ${table.nom}"
                      : "Mise à jour du ${table.nom}"),
                  const Divider(
                    thickness: 1,
                  ),
                  const SizedBox(
                    height: 10,
                  ),
                  Formulaire${table.nom.ucfirst()}(mode: mode)
                ],
              ),
            ),
          ),
          // ignore: prefer_const_constructors
          decoration: BoxDecoration(
              borderRadius: const BorderRadius.vertical(
                top: Radius.circular(25.0),
              ),
              color: Colors.white),
        ),
        isScrollControlled: true);
  }

  Future<void> ajout${table.nom.ucfirst()}({String operation = 'ajout'}) async {
    isLoading(true);
    if (formkey${table.nom.ucfirst()}.currentState!.saveAndValidate()) {
      try {
        ${table.nom.ucfirst()} retour =
            (await ${table.nom.ucfirst()}Model().save${table.nom.ucfirst()}(${table.nom}(), operation))!;

        //log(retour.toString());

        if (operation == "ajout") {
          mes${table.nom.ucfirst()}s().add(retour);
          mes${table.nom}sFltres(mes${table.nom.ucfirst()}s);
        } else {
          var index =
              mes${table.nom.ucfirst()}s().indexWhere((element) => element.id == retour.id);
          mes${table.nom.ucfirst()}s()[index] = retour;
          mes${table.nom}sFltres(mes${table.nom.ucfirst()}s());
        }
        mes${table.nom}sFltres.refresh();
        mes${table.nom.ucfirst()}s.refresh();
`

table.champs.forEach(champ => {
    if(champ.estCle) {
        contenuController += ` controller${champ.nom.ucfirst()}.clear();
        `
    }
});

contenuController +=
`

        dialogueSuccess(
            mode == "ajout"
                ? 'Enregistrement du ${table.nom}'
                : "Mise à jour du ${table.nom}",
            'Opération réussie', () {
          Get.back();
          Get.back();
        });
      } on Exception catch (e) {
        dialogueEchec("Echec d'enregistrement", e.toString(), () {
          Get.back();
          Get.back();
        });
      }
    }
    isLoading(false);
  }

  Future<void> getListe${table.nom.ucfirst()}s() async {
    isLoading(true);
    try {
      mes${table.nom.ucfirst()}s.value =
          (await ${table.nom.ucfirst()}Model().getListe${table.nom.ucfirst()}s()) as List<${table.nom.ucfirst()}>;
    } on Exception catch (e) {
      dialogueEchec("Echec d'enregistrement", e.toString(), () {
        Get.back();
        Get.back();
      });
    }
    isLoading(false);
  }

  void filtrer(String? valeur) {
    if (valeur == "") {
      mes${table.nom}sFltres(mes${table.nom.ucfirst()}s());
      mes${table.nom}sFltres.refresh();
      return;
    }
    mes${table.nom}sFltres([]);
    mes${table.nom}sFltres.value = mes${table.nom.ucfirst()}s()
        .where((element) => element.nom.toUpperCase().contains(valeur!.toUpperCase()))
        .toList();
    mes${table.nom}sFltres.refresh();
  }

  void setmes${table.nom}s(var liste) {
    mes${table.nom.ucfirst()}s(List.from(liste));
    mes${table.nom}sFltres(List.from(liste));
  }
}
  
`
return contenuController
        }
  
    


module.exports = getContenuFichierController