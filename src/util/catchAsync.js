
// Fonction de gestion des erreurs asynchrones
const catchAsync = (fn) => (req, res, next) => {
  // Exécution de la fonction passée en paramètre en utilisant la promesse, 
  // et gestion des erreurs grâce à la méthode catch
  Promise.resolve(fn(req, res, next)).catch((err) => next(err));
};
// Exportation de la fonction pour l'utiliser dans les autres fichiers
module.exports = catchAsync;
