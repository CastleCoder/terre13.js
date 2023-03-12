// Créez un programme qui transforme une heure affichée en format 12h en une heure affichée au format 24h.


// Exemples d’utilisation :
// $> ruby exo.rb 11:40PM
// 23:40

// Attention : midi et minuit.



const args = process.argv.slice(2);

if (args.length !==2){
  console.log("Ecrire une heure au format HH:MM AM/PM");
}

function getTime(arg1, arg2){

  let separation = arg1.split(":");
  let a = separation[0];
  let b = separation[1];;

  let c = arg2;


  console.log(a+" arg1");
  console.log(b+" arg2");
  console.log(c+" arg3");

  if (isNaN(a) || isNaN(b) || args.length!==2){
    console.log("Erreur 2!")
  } else {
    if (a < 0 || a > 12 || b < 0 || b > 59){
      console.log("Erreur 3!")
    } else if (c === "AM" || c === "PM") {
      if (c === "PM"){
        a = parseInt(a)+12
      }
      if (a === 24){
        a = 00
      }
      console.log(a + ":" + b)
    }
  }
  console.log(args.length);
}
getTime(args[0],args[1]);