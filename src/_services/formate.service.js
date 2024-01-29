export function formaterDate(inputDate) {
    // Créer un objet Date à partir de la chaîne de date
    const dateObj = new Date(inputDate);

    // Tableau des noms des mois
    const mois = [
        "janv", "fév", "mars", "avr", "mai", "juin",
        "juil", "août", "sept", "oct", "nov", "déc"
    ];

    // Extraire le jour, le mois et l'année
    const jour = dateObj.getDate();
    const moisIndex = dateObj.getMonth();
    const annee = dateObj.getFullYear();

    // Formater la date
    const dateFormatee = `${jour} ${mois[moisIndex]} ${annee}`;

    return dateFormatee;
}

export function formaterPrix(nombre) {
    // Vérifier si la valeur est définie et est un nombre
    if (typeof nombre === 'number' && !isNaN(nombre)) {
        // Utiliser la fonction toLocaleString pour formater le nombre avec séparateur de milliers
        const nombreFormate = nombre.toLocaleString('fr-FR');

        return nombreFormate+" Ar";
    } else {
        // Retourner une chaîne vide ou une valeur par défaut si la valeur n'est pas un nombre défini
        return "0 Ar";
    }
}

export function getNomMois(numeroMois) {
    const mois = [
      'Jan',
      'Fev',
      'Mar',
      'Avr',
      'Mai',
      'Juin',
      'Juil',
      'Août',
      'Sept',
      'Oct',
      'Nov',
      'Dec'
    ];
  
    // Vérifie si le numéro de mois est valide
    if (numeroMois >= 1 && numeroMois <= 12) {
      return mois[numeroMois - 1];
    } else {
      return 'Mois invalide';
    }
  }

