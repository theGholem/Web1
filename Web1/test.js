
/**
 * Presentation du User.
 * Celui-ci devra saisir son nom et son age lorsqu'il cliquera sur le bouton "presentation"
 */
var name,old;
/**
 * 
 * @param {*} name 
 * @param {*} old 
 * @returns  chaine de caractere qui donne le nom et l'age du user
 */
function IdPerson(name,old){
    var name=prompt("Saisir votre nom svp");
    var old=Number(prompt("Saisir votre age svp"));
    var rst="Vous etes "+name+" et vous avez "+old+" ans";
    return rst;
}

/**
 * authentification de personne.
 * Si son age est inf à 18, il n'est pas authentifié, 
 * dans le cas contraire, il l'est
 */
var age,nom;
/**
 * 
 * @param {*} age 
 * @param {*} nom 
 */
function idAuthentificator(age,nom){
    nom=prompt("Saisir votre nom svp");
    age=Number(prompt("Saisir votre age svp"));
    while(age<18){
        age=Number(prompt("svp "+nom+", vous devez avoir un age superieur ou egale à 18 ans.\nVeuillez reesayer svp"));
        
    }
        alert("Super vous pouvez entrez ici.\nVous avez été authentifié par votre age");
}

/**
 * Calcul moyenne pour un User.
 * On demande un nombre de note à le User et ensuite on calcule la moyenne
 * Si sa moyenne est sup à 11, on considère qu'il est admit, dans 
 * le cas contraire, c'est l'echec
 * 
 */


var n,sum=0, moy;
/**
 * 
 * @param {*} n 
 * @param {*} sum 
 * @param {*} moy 
 * @returns la moyenne n fonction de la somme des notes
 */
function sumElementTab(n,sum,moy){
    n=Number(prompt("Saisir le nombre total de note svp"));
    let tab=new Array(parseInt(n)); //initialisation d'un tableau dynamique

    for(let i=0;i<n;i++){
    tab[i]=parseFloat(prompt("Entrez la note numero "+(i+1)+" sur 20 svp : ")); //remplissage des élements du tableau
    }


    for(let i=0;i<n;i++){
    sum+=tab[i]; // sum=sum+tab[i] ;  calcule la somme de nos élements
    }

    moy=sum/n; // Calcul de la moyenne
    return moy;
}

/**
 * 
 * @param {*} moy 
 * @returns si notre user est admis ou pas
 */
function testAdmit(moy){

    if(moy>=11){
    var test1= "Bravo vous etes admis";
    return test1;
    }else{
     var test2="Desolé vous n'etes pas admis" ;
     return test2;
    }
}

//robot ou pas

var n1,n2;
function testNumber(n1,n2){
    var info=alert("Bienvenu !\nOn veux verifier si vous etes un robot ou pas.")
    n1=Number(prompt("Saisir un nombre"));
    n2=Number(prompt("Saisir le double de ce nombre svp"));
    while(n2!=2*n1){
        alert("Votre session est interrompu.\nVous etes probablement un robot\Fermez le site et partez");
        console.log("L'utilisateur n'as pas pu saisir le double du premier nombre saisi par lui. Il est certainement un robot")
    }
        alert("Vous n'etes pas un robot\nVous l'avez prouvé");
        console.log("L'utilisateur à saisi correctement le double de son premier nombre saisi");
    
}



 








