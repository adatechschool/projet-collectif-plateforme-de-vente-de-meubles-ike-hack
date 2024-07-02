import React, { useEffect, useState } from 'react';   // Importation des hooks nécessaires depuis la bibliothèque REACT

  // Définition du component FetchApi
function FetchApi() {
  // Utilisation du hook useState pour créer une variable d'état 'data' et une fonction pour la mettre à jour 'setData', le null correspond à l'initialisation
    const [data, setData] = useState(null);   

  // Utilisation du hook 'useEffect' pour executer du code après le rendu du component
  useEffect(() => {   
    fetch('https://jsonplaceholder.typicode.com/albums')    // Faire un requête fetch() à l'API
      .then((response) => response.json())                  // Convertir la réponse en JSON
      .then((data) => setData(data))                        // Mettre à jour data avec les données reçues

      .catch((error) => console.error('Erreur: ', error));  // Gérer les erreurs éventuelles
  }, []);    // Le tableau vide en deuxième argument signifie que useEffect s'exécutera une fois après le premier rendu du component

  // Si 'data' est null (ce qui signifie que la requête n'a pas encore été résolue), afficher un message de chargement
  if(data === null) {
    return <div>Chargement...</div>;
  }

  // Une fois que les données sont disponibles, les afficher dans le rendu du component
  return (<div>
            <h1>Données récupérées</h1>
            {/* Parcourir les données (qui sont supposées être un tableau) et afficher chaque élément */}
            {data.map((id, albums) => (
              // 'key' est un attribut spécial requis lorsque l'on crée des éléments à partir d'un tableau
              // Les .userId et .title sont ici des infos présentes dans le JSON
              <p key={albums}>{id.id}: TITRE: {id.title}: ID DE L'UTILISATEUR: {id.userId}</p>
            ))}
          </div>);
}

export default FetchApi   // Permet d'exporter le component pour qu'il puisse être utilisé dans d'autres parties de l'application