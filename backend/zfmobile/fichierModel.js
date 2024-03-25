

const getContenuFichierModel = (table) => {

    let contenuModel = `
    import 'dart:async';
    import 'dart:developer';
    import 'package:dio/dio.dart';
    import '../../../config/config.dart';
    import '${table.nom}.dart';
    
    class ${table.nom.ucfirst()}Model {
      Future<RetourHttp> getListe${table.nom.ucfirst()}s() async {
        try {
          Response response = await dio.get('/api/${table.nom}s/');
          return RetourHttp(response.statusCode ?? 404, 'ok',
              response.data.map((map) => ${table.nom.ucfirst()}.fromMap(map)));
        } on DioError catch (e) {
          // log(e.toString());
          return RetourHttp(
              e.response?.statusCode ?? 404,
              e.response?.data.toString() ??
                  'Impossible de se connecter au serveur, merci de verifier votre connexion Internet',
              e.response?.data.toString() ??
                  'Impossible de se connecter au serveur. Veuillez vérifier votre connxion internet');
        } catch (e) {
          log(e.toString());
          return RetourHttp(500, 'Une erreur interne sest produite', e.toString());
        }
      }
    
      FutureOr<${table.nom.ucfirst()}?> save${table.nom.ucfirst()}(${table.nom.ucfirst()} ${table.nom}, String operation) async {
        try {
          Response response = operation == 'ajout'
              ? await dio.post('/api/${table.nom}s/', data: ${table.nom}.toMapApi())
              : await dio.put('/api/${table.nom}s/\${${table.nom}.id}',
                  data: ${table.nom}.toMapApi());
          if (response.statusCode == 201 || response.statusCode == 200) {
            log("Retour de la mise a jour:::\${response.data.toString()}");
            return ${table.nom.ucfirst()}.fromMap(response.data);
          }
        } on DioError catch (e) {
          if (e.response?.statusCode == 404) {
            throw Exception('Resource introuvable, veuillez re-essayer');
          } else {
            throw Exception(e.response?.data.toString());
          }
        } catch (e) {
          throw Exception(e.toString());
        }
        return null;
      }
    }
    
    
`
return contenuModel
        }
  
    


module.exports = getContenuFichierModel