

const getContenuFichierModel = (table) => {

    let contenuModel = `

import {instanceAxios} from '../../../../model/config'

export default  class ${table.model}Model {

 async  getTousles${table.model}s(page, rowsPerPage, recherche, filtre) {
    page=page+1
  const response = await instanceAxios.get(\`/${table.nom}s?itemsPerPage=\${rowsPerPage}&page=\${page}&id=\${recherche} \`)
  return response.data
  }

async ajout${table.model}(${table.nom}) {
    const response = await instanceAxios.post('/${table.nom}s', ${table.nom})
    return response.data
  
  }

   async  miseajour${table.model}(${table.nom}) {
    const response = await instanceAxios.put('/${table.nom}s/'+${table.nom}.id, ${table.nom})
    return response.data
  }
  
 async  suppression${table.model} (${table.nom}) {
    const response = await instanceAxios.delete('/${table.nom}s/'+${table.nom}.id,{
      method: 'DELETE',
      herdears: {
        Accept:'application/json'
      },
      
    })  
    return response.data
  
  }
`
    table.champs.forEach((champ) => {
      //  console.log(champ.type)
        if (champ.type == "BOOLEEN") {
            contenuModel += `  
 async  togle${champ.nom}${table.model}(${table.nom}) {
    const response = await instanceAxios.put('/${table.nom}s/'+${table.nom}.id, {${champ.nom}: !${table.nom}.${champ.nom}})
    return response.data
  }    
`
        }

        if (champ.type == "STATUT") {
            contenuModel += `
async misajour${champ.nom.ucfirst()}${table.model}(${table.nom}) {
    const response = await instanceAxios.put('${table.nom}s/'+${table.nom}.id, {${champ.nom}:${table.nom}.${champ.nom}})
    return response.data
  }
`
        }
    })

if(table.champImageExiste) {
  contenuModel+= `
  async  suppressionImage(image) {
    const response = await instanceAxios.post(\`/medias/delete/\${image.id}/${table.nom}\`,{})  
    return response.data
  }
  `
}
contenuModel+= '}'
    return contenuModel
}


module.exports = getContenuFichierModel