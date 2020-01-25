# Descriptif du projet

Porteur de projet : Région Pays de la Loire (Olivier Guillon)

Sujet : Transition Énergétique.

Nom d'équipe : GreenLight

Participants : 

- Sciencescom :
    - Nina Naulleau
    - Vinciane Le Borgne
- AGR :
    - Mathilde Mousset
    - Marine Boismain
- Polytech :  
    - Nathan Seva
    - Nicolas Vautier
    - Mathis Le Berrigaud
    - Julien Garcia
    - Xavier Tremillon


#Environnement de développement

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).


#Passage en production

- Se mettre dans la branche de sa fonctionnalité prête.
- Quand une fonctionnalité est prête faire : `git merge dev` et résoudre les conflits s'il y en a (faire un commit quand les conflits sont résolus).
- Merge la nouvelle fonctionnalité dans dev : `git merge ma_fonctionnalité`.
- Merge dev dans release : `git checkout release` puis `git merge dev`.
- Créer le nouveau build : `npm run build`.
- Commit le nouveau build dans release.
- Se connecter sur [L'espace SSH du projet](https://hyblab.polytech.univ-nantes.fr/ssh/) avec l'identifiant **region-pdl** et le mot de passe **story4region-pdl**.
- Lancer simplement la commande : `./sync_with_release_branch`
