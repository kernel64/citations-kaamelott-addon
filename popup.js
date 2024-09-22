document.addEventListener('DOMContentLoaded', function() {
    const jokeElement = document.getElementById('joke');
    const loaderElement = document.getElementById('loader');
    const refreshButton = document.getElementById('refresh');
    const jkIcon = document.getElementById('jk-icon');
  
    // Fonction pour récupérer une blague depuis l'API
    function fetchJoke() {
      // Afficher le loader et masquer la blague
      loaderElement.style.display = 'block';
      jokeElement.style.display = 'none';
      jkIcon.style.display = 'none';
  
      fetch('https://kaamelott.chaudie.re/api/random')
        .then(response => response.json())
        .then(data => {
            // Masquer le loader et afficher la blague
            loaderElement.style.display = 'none';
            jokeElement.style.display = 'block';
            jokeElement.textContent = data.citation.citation; // Afficher la blague
            var pers = data.citation.infos.personnage;
            jkIcon.src = 'https://kaamelott.chaudie.re/api/personnage/' + pers+ '/pic';
            jkIcon.style.display = 'block';
        })
        .catch(error => {
          loaderElement.style.display = 'none';
          jkIcon.style.display = 'none';
          jokeElement.style.display = 'block';
          jokeElement.textContent = "Error loading the joke";
          console.error('Error:', error);
        });
    }
  
    // Récupérer une blague lors du chargement de la popup
    fetchJoke();
  
    // Rafraîchir la blague quand on clique sur le bouton
    refreshButton.addEventListener('click', fetchJoke);
  });
  