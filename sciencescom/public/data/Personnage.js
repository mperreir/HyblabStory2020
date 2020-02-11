let Personnage = {
  "Emma": {
    "personnage": "img/personnages/Emma.png",
    "boite_dialogue": "img/boite_dialogue/Emma.png",
    "personnage_periode_1": "img/personnages/Emma_periode_1.png",
    "boite_dialogue_periode_1": "img/boite_dialogue/Emma_periode_1.png",
    "personnage_periode_2": "img/boite_dialogue/Emma_periode_2.png",
    "boite_dialogue_periode_2": "img/boite_dialogue/Emma_periode_2.png",
    "dialogues": {
      "0": [
        {
          "texte": ["^1000Bonjour et bienvenue aux portes ouvertes d'Audencia !^300 Je suis Emma.^300 Je suis en Master 1 à Audencia,^150 je peux t’aider?^500"],
          "suivant": {"personnage": "Pablo", "slide": "0", "paragraphe": "0"}
        },
        {
          "texte": ["Bien sûr,^150 je suis là pour ça et mes camarades aussi !^300", "Alors si tu me permets,^150 je vais te faire voyager dans le temps à travers l’histoire d’Audencia,^150 suis-moi !^500"]
        }
      ],
      "1": [
        {
          "texte": ["^1500Super,^150 on vient d’arriver,^150 pile à l’endroit où je voulais !^500"],
          "suivant": {"personnage": "Pablo", "slide": "1", "paragraphe": "0"}
        },
        {
          "texte": ["Toujours Nantes.^150 Nous n’avons pas changé de lieu,^150 mais de période !^500"],
          "suivant": {"personnage": "Pablo", "slide": "1", "paragraphe": "1"}
        },
        {
          "texte": ["Mais non,^150 ce sera très instructif tu vas voir.^150 On va commencer par le commencement,^150", "lors des premières décennies de l’école,^150 au début du XXème siècle.^300", "Je te laisse choisir quel témoignage tu souhaites découvrir…"]
        }
      ],
      "4": [
        {
          "texte": ["Alors Pablo, j’espère que tu as pu découvrir un peu plus ce qu’était Audencia à ses débuts.^500", " C’est une grande école avec une longue histoire comme tu as pu le remarquer.^500"," Mais ce n’est pas fini ! ^300Je vais t’emmener rencontrer d’autres personnes,^150 elles pourront t’en dire davantage.^300 Continuons.^500"],
          "suivant": {"personnage": "Pablo", "slide": "4", "paragraphe": "0"}
        },
        {
          "texte": ["Bon, on a fait un petit bond dans le temps, et on est en^150 …. 1974 !^500"],
          "suivant": {"personnage": "Pablo", "slide": "4", "paragraphe": "1"}
        },
        {
          "texte": ["Pas mal !^300 Et tu vas voir, l’école a aussi fait son bond en avant, et pas des moindres !^500"," Mais je suis convaincue que d’autres pourront mieux te l’expliquer que moi…^500"]
        }
      ],
      "7": [
        {
          "texte": ["^1500Tu en sais un peu plus maintenant.^300 J’ai encore une période à te faire découvrir.^500", "Tu verras tu ne seras pas déçu.^300 C’est peut-être celle qui te parlera le plus.^500"],
          "suivant": {"personnage": "Pablo", "slide": "7", "paragraphe": "0"}
        },
        {
          "texte": ["À présent,^150 nous sommes déjà sur la période contemporaine de l’école.^500", "Beaucoup des éléments de cette époque existent toujours d’ailleurs !^500"],
          "suivant": {"personnage": "Pablo", "slide": "7", "paragraphe": "1"}
        },
        {
          "texte": ["Exactement !^300 Et tu vas voir,^150 l’école a beaucoup changé ces 20 dernières années…^500"]
        }
      ],
      "10": [
        {
          "texte": ["Bon,^150 je pense que tu en as déjà vu beaucoup !^300 Je vais te ramener à notre époque,^150 le temps que tu digères tout ça !"],
          "suivant": {"personnage": "Pablo", "slide": "10", "paragraphe": "0"}
        },
        {
          "texte": ["Ça marche !"],
          "suivant": {"personnage": "Emma", "slide": "10", "paragraphe": "2"}
        },
        {
          "texte": ["^1500Félicitations,^150 maintenant tu en sais un peu plus sur l’histoire d’Audencia !^300 Alors, ça t’a plu?^500"],
          "suivant": {"personnage": "Pablo", "slide": "10", "paragraphe": "1"}
        },
        {
          "texte": ["J’en suis ravie !^300 J’espère que ça t’a motivé pour nous rejoindre l’année prochaine !^500"],
          "suivant": {"personnage": "Pablo", "slide": "10", "paragraphe": "2"}
        },
        {
          "texte": ["Super !^300 Bonne chance alors et à bientôt !^300"]
        }
      ]
    }
  },

  "Pablo": {
    "personnage": "img/personnages/Pablo.png",
    "boite_dialogue": "img/boite_dialogue/Pablo.png",
    "personnage_periode_1": "img/personnages/Pablo_periode_1.png",
    "boite_dialogue_periode_1": "img/boite_dialogue/Pablo_periode_1.png",
    "dialogues": {
      "0": [
        {
          "texte": ["Bonjour,^150 moi c’est Pablo,^150 je suis à la recherche d’une école pour l’année prochaine,^300", "et je voulais avoir quelques renseignements au sujet de celle-ci.^500"],
          "suivant": {"personnage": "Emma", "slide": "0", "paragraphe": "1"}
        }
      ],
      "1": [
        {
          "texte": ["Et cet endroit, c’est…^500"],
          "suivant": {"personnage": "Emma", "slide": "1", "paragraphe": "1"}
        },
        {
          "texte": ["Ok, donc on est dans Retour vers le futur là ?^150 C’est un peu vieux jeu non ?^500"],
          "suivant": {"personnage": "Emma", "slide": "1", "paragraphe": "2"}
        }
      ],
      "4": [
        {
          "texte": ["J’ai hâte !^300"],
          "suivant": {"personnage": "Emma", "slide": "4", "paragraphe": "1"}
        },
        {
          "texte": ["Plutôt grand comme bond !^300 Fin des Trentes Glorieuses,^100 VGE président,^100 les premières télés en couleur…  je vois le dessin !^800"],
          "suivant": {"personnage": "Emma", "slide": "4", "paragraphe": "2"}
        }
      ],
      "5": [
        {
          "texte": ["Bonjour !^200 je m’appelle Pablo,^100 enchanté,^100 je suis intéressé par l’école que tu as fait et je voulais savoir :^500"," comment tes années à l’école se sont passées ? Pas trop compliqué ?^500"],
          "suivant": {"personnage": "Alain", "slide": "5", "paragraphe": "0"}
        },
        {
          "texte": ["D’accord,^150 c’était vraiment le bon moment, alors !^500"],
          "suivant": {"personnage": "Alain", "slide": "5", "paragraphe": "1"}
        },
        {
          "texte": ["J’imagine !^300 Et tous ces équipements t’ont aidés pendant tes années d’étudiant ?^500"],
          "suivant": {"personnage": "Alain", "slide": "5", "paragraphe": "2"}
        },
        {
          "texte": ["Très bien !^300 Et depuis, tes années à l’école t’ont aidé pour le monde du travail ?^500"],
          "suivant": {"personnage": "Alain", "slide": "5", "paragraphe": "3"}
        },
        {
          "texte": ["Plutôt oui !^300 En tout cas,^100 merci beaucoup d’avoir pris le temps de discuter avec moi,^150 j’ai beaucoup appris !^500"],
          "suivant": {"personnage": "Alain", "slide": "5", "paragraphe": "4"}
        }
      ],
      "6": [
        {
          "texte": ["Bonjour,^100 je m’appelle Pablo et je suis très intéressé par l’école.^500"," J’ai pu en apprendre un peu plus sur ses débuts et je ne pensais pas qu’elle pouvait avoir une telle histoire !^500"," J’aimerais m’informer un peu plus.^400"],
          "suivant": {"personnage": "Martine", "slide": "6", "paragraphe": "0"}
        },
        {
          "texte": ["Pouvez-vous m'expliquer ce qu’est un MBA ?^300 c’est assez flou pour moi.^500"],
          "suivant": {"personnage": "Martine", "slide": "6", "paragraphe": "1"}
        },
        {
          "texte": ["je comprends,^150 cela a dû être très intéressant à vivre.^500"],
          "suivant": {"personnage": "Martine", "slide": "6", "paragraphe": "2"}
        },
        {
          "texte": ["Je vous remercie de m’avoir consacré un peu de temps.^500"," Encore une fois l’histoire m’épate et me donne envie d’étudier dans cet établissement.^500"],
          "suivant": {"personnage": "Martine", "slide": "6", "paragraphe": "3"}
        }
      ],
      "7": [
        {
          "texte": ["Je ne m’attendais pas à une telle histoire,^150 je suis ravi de la découvrir et de la connaître un peu plus.^500"],
          "suivant": {"personnage": "Emma", "slide": "7", "paragraphe": "1"}
        },
        {
          "texte": ["Cool,^150 donc un peu plus proche de ce que je pourrais faire à Audencia,^150 non ?^500"],
          "suivant": {"personnage": "Emma", "slide": "7", "paragraphe": "2"}
        }
      ],
      "10": [
        {
          "texte": ["Déjà ?^300 Mince,^150 c’est passé si vite !^300 Dans ce cas, retournons chez nous !^500"],
          "suivant": {"personnage": "Emma", "slide": "10", "paragraphe": "1"}
        },
        {
          "texte": ["Oui !^150 Je dois dire que je suis plutôt impressionné !^300", "Je ne pensais pas qu’il y aurait autant d’histoires pour cette école !^500"],
          "suivant": {"personnage": "Emma", "slide": "10", "paragraphe": "3"}
        },
        {
          "texte": ["Évidemment !^150 J’ai hâte maintenant !^500"],
          "suivant": {"personnage": "Emma", "slide": "10", "paragraphe": "4"}
        }
      ]
    }
  },

  "Alain": {
    "personnage": "img/personnages/Alain.png",
    "boite_dialogue": "img/boite_dialogue/Alain.png",
    "dialogues": {
      "5": [
        {
          "texte": ["Non,^150 pas tant que ça !^300 Il faut dire que j’ai eu de la chance^500","Je suis arrivé dans des locaux flambant neufs,^150 sur le campus des facultés de Nantes !^500", "Et l’année d’après,^150 de nouveaux ordinateurs ont été installés !^500"],
          "suivant": {"personnage": "Pablo", "slide": "5", "paragraphe": "1"}
        },
        {
          "texte": ["Oui,^150 un très bon timing !^300", "Surtout que le premier mini-ordinateur est arrivé dans l’école pendant ma dernière année !^700", "Bon,^150 à l’époque,^150 ça n’avait de “mini” que le nom mais autant dire que j’ai accueilli ça à bras ouverts !^500"],
          "suivant": {"personnage": "Pablo", "slide": "5", "paragraphe": "2"}
        },
        {
          "texte": ["Évidemment !^300 Je suis diplômé de la promo 1975 au sein du cursus “Finance-Comptabilité”^500", "donc forcément,^150 un ordinateur est un outil plus qu’important pour travailler dans les meilleures conditions.^500"],
          "suivant": {"personnage": "Pablo", "slide": "5", "paragraphe": "3"}
        },
        {
          "texte": ["Bien sûr !^300", "Cela fait 2 ans que je suis diplômé et j’ai toujours eu un poste à responsabilités depuis que je suis sorti de l’école.^700", "Aujourd’hui, je travaille au service comptabilité de KPMG à Paris.^300 Ça te parle ?^500"],
          "suivant": {"personnage": "Pablo", "slide": "5", "paragraphe": "4"}
        },
        {
          "texte": ["Au plaisir,^150 et bon courage !^500"]
        }
      ]
    }
  },

  "Martine": {
    "personnage": "img/personnages/Martine.png",
    "boite_dialogue": "img/boite_dialogue/Martine.png",
    "dialogues": {
      "6": [
        {
          "texte": ["Bonjour Pablo,^150 moi c’est Martine.^300", "Et je serais ravie de t’expliquer mon parcours ainsi que l’histoire de l’école,^150 en tout cas l’histoire que j’ai pu voir.^500", "J’ai été diplômée en 1980 du cursus “distribution - commerce  extérieur”.^400", "Ce fut une très belle expérience pour moi.^500"," J’ai eu la chance de faire partie de la première promotion diplômée de la MBA de l’Oregon State University.^600"],
          "suivant": {"personnage": "Pablo", "slide": "6", "paragraphe": "1"}
        },
        {
          "texte": ["Bien sûr,^300 il s’agit d’un diplôme international d’études supérieures de haut niveau", "dans le domaine de la gestion et du management des entreprises.^500", "Faire partie des diplômés fut vraiment une fierté pour moi ainsi que mes parents.^500"],
          "suivant": {"personnage": "Pablo", "slide": "6", "paragraphe": "2"}
        },
        {
          "texte": ["En effet mais ce n’est pas tout,^150 la période que j’ai vécu en tant qu’étudiante à Audencia fut très riche en innovations.^500", "Ce qui m’a particulièrement plu,^150 c’est l’ouverture à l’international.^500", "Quel chance pour nous ainsi que les futurs étudiants!^400","Une promotion entière est partie au Polytechnic Central London.^500", "Pour nous ce fut une nouveauté et une opportunité incroyable.^500", "Puis l’ouverture d’un MBA à Audencia et d’un institut des relations internationales^500", "a fait d’Audencia une école moderne.^500", "Et c’est sur cette note positive que j’ai terminé mes études.^500"],
          "suivant": {"personnage": "Pablo", "slide": "6", "paragraphe": "3"}
        },
        {
          "texte": ["Je te souhaite de trouver ta voie.^300 Bonne continuation Pablo.^500"]
        }
      ]
    }
  }
};
