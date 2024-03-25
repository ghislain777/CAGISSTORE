

const getContenuFichierClass = (table) => {

    let contenuClass = `import 'dart:convert';`

    table.champs.forEach(champ => {

        if (champ.estCle) {
            contenuClass += `
import '../../${champ.nom}/model/${champ.nom}.dart';`
        }
    });
    if(table.contientMedia == true) {
        contenuClass+= `
import '../../media/model/media.dart';`
    }

    contenuClass += `

${table.nom.ucfirst()} ${table.nom}0 = ${table.nom.ucfirst()}(`
    table.champs.forEach(champ => {
        if (champ.estCle) {
            contenuClass += `
            ${champ.nom}:${champ.nom}0,`
        }
    });
    if(table.contientMedia == true) {
        contenuClass+= `medias: []
        `
    }
    contenuClass += `);
    class ${table.nom.ucfirst()}{
    `
    table.champs.forEach(champ => {
        let rendu = ''

        if (champ.estCle) {
            rendu = `${champ.nom.ucfirst()} ${champ.nom};`
        } else {

            if (champ.type == "ENTIER") {
                rendu = `int ${champ.nom};
    `
            }

            else if (champ.type == "BOOLEEN") {
                rendu = `bool ${champ.nom};
    `

            }
            else {
                rendu = `String ${champ.nom};
    `
            }

        }

        contenuClass += rendu

    });
    if(table.contientMedia == true) {
        contenuClass+=`late List<Media> medias;
        `
    }

    contenuClass += `
    
    ${table.model}({
        `

    table.champs.forEach(champ => {
        let rendu = ""
        if (champ.estCle) {
            rendu = `required this.${champ.nom}, 
`
        }
        else {

            if (champ.type == "ENTIER") {
                rendu = `this.${champ.nom} = 0,
    `
            }
            else if(champ.type == "BOOLEEN") {
                rendu = `this.${champ.nom} = true,
    `
            }
            else {
                rendu = `this.${champ.nom} = '',
    `
            }
        }
        contenuClass += rendu
    });
    if(table.contientMedia== true) {
        contenuClass+= `required this.medias
        `
    } 

    contenuClass += `});


Map<String, dynamic> toMap() {
    return {
`

    table.champs.forEach(champ => {
        let rendu = ''
        if (champ.estCle) {
            rendu = `'${champ.nom}': ${champ.nom}.toMap(),
        `
        }
        else {
            rendu = `'${champ.nom}': ${champ.nom},
        `
        }
        contenuClass += rendu
    });
    if(table.contientMedia == true) {
        contenuClass+= `'medias': medias.map((e) => e.toMap()).toList()
        `
    }

    contenuClass += `
};
}

Map<String, dynamic> toMapApi() {
  return {
`
    table.champs.forEach(champ => {
        let rendu = ''
        if (champ.estCle) {
            rendu = `'${champ.nom}': '${champ.nom}.id.toString()',
`
        }
        else {
            rendu = `'${champ.nom}': ${champ.nom},
        `
        }
        contenuClass += rendu
    });

    contenuClass += `
};
}

factory ${table.nom.ucfirst()}.fromMap(Map<String, dynamic>? map) {
  if (map == null) return ${table.nom}0;
  return ${table.nom.ucfirst()}(
`
    table.champs.forEach(champ => {
        let rendu = ""
        if (champ.estCle) {
            rendu = `${champ.nom}: ${champ.nom.ucfirst()}.fromMap(map['${champ.nom.ucfirst()}'] ?? ${champ.nom}0.toMap()),
        `
        } else {
            if (champ.type == "ENTIER") {
                rendu = `${champ.nom}: map['${champ.nom}'] ?? 0,
            `
            } else if(champ.type == "BOOLEEN") {
                rendu = `${champ.nom}: map['${champ.nom}'] ?? false,
                `

            } else {
                rendu = `${champ.nom}: map['${champ.nom}'] ?? '',
            `
            }
        }

        contenuClass += rendu
    });
    if(table.contientMedia == true) {
        contenuClass += `medias: map["Media"] == null
        ? <Media>[]
        : map["Media"]
            .map((mediaMap) => Media.fromMap(mediaMap))
            .toList()
            .cast<Media>()
            `
    }

    contenuClass += `
);
}

String toJson() => json.encode(toMap());

factory ${table.nom.ucfirst()}.fromJson(String source) =>
${table.nom.ucfirst()}.fromMap(json.decode(source));

@override
String toString() {
  return '''${table.nom.ucfirst()}(
`

    table.champs.forEach(champ => {

        contenuClass += `
${champ.nom}: $${champ.nom}, `

    });
    if(table.contientMedia == true) {
        contenuClass += `medias: $medias
        `
    }

    contenuClass += `
)''';
}

@override
bool operator ==(Object other) {
  if (identical(this, other)) return true;
  return other is ${table.nom.ucfirst()} &&
`
if(table.contientMedia == true) {
    contenuClass+=`other.medias == medias &&
    `
}

    table.champs.forEach(champ => {

        contenuClass += `
    other.${champ.nom} == ${champ.nom} &&`
    });
    contenuClass = contenuClass.slice(0, -2)

    contenuClass += `
;
  }

  @override
  int get hashCode {
    return `
    if(table.contientMedia == true) {
        contenuClass+=`medias.hashCode ^
        `
    }

    table.champs.forEach(champ => {
        contenuClass += `
    ${champ.nom}.hashCode ^`
    });
    contenuClass = contenuClass.slice(0, -1)

    contenuClass += `;
}
${table.model} copyWith({
`

    table.champs.forEach(champ => {

        let rendu = ''

        if (champ.estCle) {
            rendu = ` required ${champ.nom.ucfirst()} ${champ.nom},`
        } else {

            if (champ.type == "ENTIER") {
                rendu = `int? ${champ.nom},
`
            }

            else if (champ.type == "BOOLEEN") {
                rendu = `bool? ${champ.nom},
`
            }
            else {
                rendu = `String? ${champ.nom},
`
            }

        }

        contenuClass += rendu

    });



    contenuClass +=
        `
 }) {
   return ${table.model}(
`

table.champs.forEach(champ => {

    let rendu = ''

    if (champ.estCle) {
        rendu = `${champ.nom}: ${champ.nom},`
    } else {
        rendu = `${champ.nom}: ${champ.nom}?? this.${champ.nom},
`

    }

    contenuClass += rendu

});
if(table.contientMedia == true) {
    contenuClass+= `medias: <Media>[]
    `
}
    contenuClass +=
        `
   );
 }
}
`
    return contenuClass
}




module.exports = getContenuFichierClass