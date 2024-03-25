

const getContenuFichierView = (table) => {

    let contenuView = `
    import 'package:flutter/material.dart';
    import 'package:flutter_form_builder/flutter_form_builder.dart';
    import 'package:get/get.dart';
    import 'package:getwidget/getwidget.dart';
    import '../controllers/${table.nom}_controller.dart';
    
    class ${table.model}View extends GetView<${table.model}Controller> {
      const ${table.model}View({Key? key}) : super(key: key);
      @override
      Widget build(BuildContext context) {
        //  MarchandController marchandController = Get.find();
    
        return Scaffold(
            floatingActionButton: FloatingActionButton(
              onPressed: () {
                controller.ouvrirFormulaire${table.model}(mode: "ajout");
              },
              child: const Icon(Icons.add),
            ),
            appBar: AppBar(
              title: const Text('Liste des ${table.nom}s'),
              centerTitle: true,
            ),
            body: Obx(
              () => Column(
                children: [
                  Padding(
                    padding: const EdgeInsets.all(8.0),
                    child: FormBuilderTextField(
                      name: "recherche",
                      keyboardType: TextInputType.text,
                      // initialValue: controller.filtre(),
                      maxLines: 1,
                      onChanged: (value) {
                        controller.filtrer(value);
                      },
                      textInputAction: TextInputAction.done,
                      decoration: const InputDecoration(
                        hintText: 'Filtrer les ${table.nom}s',
                        labelText: 'Filtrer les ${table.nom}s',
                      ),
                    ),
                  ),
                  SizedBox(
                    height: 10,
                  ),
                  SizedBox(
                      height: Get.height - 160,
                      child: ListView.separated(
                          itemBuilder: (context, index) => InkWell(
                                onTap: () {
                                  controller
                                      .${table.nom}(controller.mes${table.nom}sFltres[index]);
                                  controller.ouvrirFormulaire${table.model}(
                                      mode: "misajour");
                                },
                                child: GFListTile(
                                  avatar: Text(
                                    controller.mes${table.nom}sFltres[index].id
                                        .toString(),
                                    style: Get.textTheme.bodySmall,
                                  ),
                                  titleText:
                                      controller.mes${table.nom}sFltres[index].nom,
                                  subTitleText:
                                      "\${controller.mes${table.nom}sFltres[index].nom} (\${controller.mes${table.model}s[index].nom})",
                                ),
                              ),
                          separatorBuilder: (context, index) =>
                              const Divider(height: 1),
                          itemCount: controller.mes${table.nom}sFltres.length)),
                ],
              ),
            ));
      }
    }
    
    
`
return contenuView
        }
  
    


module.exports = getContenuFichierView