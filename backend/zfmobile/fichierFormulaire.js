

const getContenuFichierFormulaire = (table) => {

    let contenuFormulaire = `
import 'package:auto_size_text/auto_size_text.dart';
import 'package:intl/intl.dart';
import 'package:getwidget/getwidget.dart';
import '../components/espace.dart';
import 'package:easy_autocomplete/easy_autocomplete.dart';
import 'package:flutter/material.dart';
import 'package:flutter_form_builder/flutter_form_builder.dart';
import 'package:form_builder_validators/form_builder_validators.dart';
import 'package:get/get.dart';
import 'package:mission/app/config/config.dart';
import '/app/components/default_button.dart';
import '/app/modules/${table.nom}/controllers/${table.nom}_controller.dart';

`

    table.champs.forEach(champ => {
        if (champ.estCle) {

            contenuFormulaire += `
import '/app/modules/${champ.nom}/controllers/${champ.nom}_controller.dart';
import '/app/modules/${champ.nom}/model/${champ.nom}.dart';
    `
        }

    });

    contenuFormulaire +=
        `


class Formulaire${table.nom.ucfirst()} extends GetView<${table.nom.ucfirst()}Controller> {
  const Formulaire${table.nom.ucfirst()}({super.key, required this.mode});
  final String mode;

  @override
  Widget build(BuildContext context) {
        `

    table.champs.forEach(champ => {
        if (champ.estCle) {

            contenuFormulaire += `
            List<${champ.nom.ucfirst()}> liste${champ.nom.ucfirst()}s =
            Get.find<${champ.nom.ucfirst()}Controller>().mes${champ.nom.ucfirst()}s();
            `
        }

    });

    contenuFormulaire +=
        `

    return SizedBox(
      height: 800,
      child: Padding(
        padding: const EdgeInsets.all(8.0),
        child: FormBuilder(
          key: controller.formkey${table.nom.ucfirst()},
          child: SingleChildScrollView(
            child: Column(
              children: [
                const SizedBox(
                  height: 20,
                ),

                `

    table.champs.forEach(champ => {
        if (champ.estCle) {

            contenuFormulaire += `
                    EasyAutocomplete(
                        // initialValue: controller.${table.nom}().${champ.nom}.nom,
                        validator: FormBuilderValidators.compose([
                          FormBuilderValidators.required(
                              errorText: "${champ.nom.ucfirst()} requis"),
                          (value) => value == "" ? " ${champ.nom.ucfirst()} requis" : null
                        ]),
                        controller: controller.controller${champ.nom.ucfirst()},
                        suggestionBuilder: (data) => Column(
                          crossAxisAlignment: CrossAxisAlignment.start,
                          children: [
                            Divider(),
                            Text(
                              data,
                              style: TextStyle(fontSize: 18),
                            ),
                          ],
                        ),
                       
                        suggestions: liste${champ.nom.ucfirst()}s.map((e) => e.nom).toList(),
                        onChanged: (value) {
                          var index = liste${champ.nom.ucfirst()}s
                              .indexWhere((element) => element.nom == value);
                          controller.${table.nom}().${champ.nom} = liste${champ.nom.ucfirst()}s[index];
                        },
                        decoration: InputDecoration(
                          suffixIcon: IconButton(
                            onPressed: () {
                              controller.controller${champ.nom.ucfirst()}.clear();
                              controller.${table.nom}().${champ.nom} = ${champ.nom}0;
                            },
                            icon: Icon(Icons.cancel),
                          ),
                          isDense: true,
                          hintText: '${champ.titre}',
                          labelText: 'Saisir le ${champ.titre}',
                          border: const OutlineInputBorder(
                              borderRadius: BorderRadius.all(Radius.circular(15))),
                        ),
                      ),
                      Espace(),
      
                    `
        } else {

            if (champ.type == "TEXTELONG" || champ.type == "TEXTE") {
                contenuFormulaire +=  `
                            FormBuilderTextField(
                                initialValue: controller.${table.nom}().${champ.nom},
                                validator: FormBuilderValidators.compose([
                                  FormBuilderValidators.required(
                                    errorText: ' ${champ.nom.ucfirst()} est requis',
                                  )
                                ]),
                                textInputAction: TextInputAction.next,
                                name: '${champ.nom}',
                                onSaved: (value) =>
                                    controller.${table.nom}().${champ.nom} = value!,
                                style: Theme.of(context).textTheme.bodyText2?.copyWith(
                                      color: Theme.of(context).textTheme.headline6?.color,
                                    ),
                                keyboardType: TextInputType.text,
                                decoration: InputDecoration(
                                  isDense: true,
                                  border: OutlineInputBorder(
                                    borderRadius: BorderRadius.circular(10),
                                    // ignore: prefer_const_constructors
                                    borderSide: BorderSide(width: 1, style: BorderStyle.none),
                                  ),
                                  hintText: '${champ.titre}',
                                  labelText: '${champ.titre}',
                                ),
                              ),
                              Espace(),
                            `
            }

            if (champ.type == "DATE" || champ.type == "DATEHEURE") {
                contenuFormulaire += `
                            FormBuilderDateTimePicker(
                                initialValue: DateTime.parse(controller.${table.nom}().${champ.nom}),
                                autovalidateMode: AutovalidateMode.always,
                                decoration:
                                    const InputDecoration(labelText: '${champ.titre}'),
                                inputType: InputType.both,
                                name: '${champ.nom}',
                                firstDate: DateTime.now(),
                                format: DateFormat('dd/MM/yyyy hh:mm'),
                                onChanged: (value) => controller.${table.nom}().${champ.nom} =
                                    DateFormat('yyyy-MM-dd hh:mm').format(value!),
                              ),
                              const Espace(),
                            
                            `
            }
            if (champ.type == "ENTIER") {
                contenuFormulaire += champ.nom === "id"? "": `
                            FormBuilderTextField(
                                initialValue: controller.${table.nom}().${champ.nom}.toString(),
                                validator: FormBuilderValidators.compose([
                                  FormBuilderValidators.required(
                                    errorText: ' ${champ.nom.ucfirst()} est requis',
                                  )
                                ]),
                                textInputAction: TextInputAction.next,
                                name: '${champ.nom}',
                                onSaved: (value) =>
                                    controller.${table.nom}().${champ.nom} = int.parse(value!),
                                style: Theme.of(context).textTheme.bodyText2?.copyWith(
                                      color: Theme.of(context).textTheme.headline6?.color,
                                    ),
                                keyboardType: TextInputType.number,
                                decoration: InputDecoration(
                                  isDense: true,
                                  border: OutlineInputBorder(
                                    borderRadius: BorderRadius.circular(10),
                                    // ignore: prefer_const_constructors
                                    borderSide: BorderSide(width: 1, style: BorderStyle.none),
                                  ),
                                  hintText: '${champ.titre}',
                                  labelText: '${champ.titre}',
                                ),
                              ),
                              Espace(),
                            
                            `
            }

            if (champ.type == "BOOLEEN") {
                contenuFormulaire += `
                            
 GFToggle(
    onChanged: (value) => controller.${table.nom}().${champ.nom} = value!,
    value: controller.${table.nom}().${champ.nom},
    type: GFToggleType.ios,
 ),
 Espace(),
                            
                            `
            }



        }

    });

    contenuFormulaire +=
        `

                Obx(
                  () => DefaultButton(
                    icon: const Icon(Icons.send),
                    isLoading: controller.isLoading(),
                    text: mode == "ajout" ? 'Enregistrer' : "Mettre à jour",
                    press: () {
                      controller.ajout${table.nom.ucfirst()}(operation: mode);
                    },
                  ),
                ),
              ],
            ),
          ),
        ),
      ),
    );
  }
}

    
`
    return contenuFormulaire
}




module.exports = getContenuFichierFormulaire