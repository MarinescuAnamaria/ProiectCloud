

PROIECT CLOUD COMPUTING
-FUDDI-




Student: Marinescu Anamaria
Grupa 1120, SIMPRE
      Mai 2023

CUPRINS


1.	INTRODUCERE	3
2.	DESCRIERE PROBLEMA	4
3.	DESCRIERE API	4



1.	INTRODUCERE

Domeniul informatic a înregistrat evoluții masive în ultimele decenii și se află în prezent în plină expansiune. Obiceiurile noastre, nevoile, interesele și percepția noastră asupra lumii în general se schimbă continuu odată cu inovațiile tehnologice. Un factor cheie în aceste schimbări semnificative este reprezentat de Cloud Computing.
Cloud computing-ul își pune amprenta în tehnologie, revoluționând felul în care sunt utilizate și gestionate resursele hardware și software locale. Astfel, sistemele de calcul și alte dispozitive fizice sunt înlocuite cu sisteme virtuale. Cloud-ul furnizează servicii de stocare și gestionare a datelor într-un server remote care poate fi accesat de pe orice dispozitiv, de oriunde și de oricine are acces la internet. Aceasta facilitează colaborarea rapidă și eficientă între oameni din orice colț al lumii.
Unul dintre avantajele financiare ale cloud-ului constă în faptul că utilizatorii plătesc doar pentru resursele pe care le utilizează, în funcție de capacitatea și spațiul ocupat, ceea ce este mai puțin costisitor decât întreținerea unor dispozitive fizice. Un alt avantaj major este securitatea sporită a datelor oferită de serviciile cloud, asigurând confidențialitatea și integritatea informațiilor.
Cele trei servicii principale în cadrul cloud computing-ului sunt:
•	"Software-as-a-Service" (SaaS): oferă o interfață finală prin intermediul căreia utilizatorii interacționează cu aplicațiile și software-ul furnizate de cloud.
•	"Platform-as-a-Service" (PaaS): furnizează un mediu în care utilizatorii pot dezvolta și implementa propriile programe și aplicații fără a se preocupa de infrastructura subiacentă.
•	"Infrastructure-as-a-Service" (IaaS): permite utilizatorilor să gestioneze și să controleze propriile lor mașini virtuale, rețele și sisteme de stocare, beneficiind de infrastructura hardware virtualizată pusă la dispoziție de furnizorii de servicii cloud.
Cloud computing-ul aduce numeroase avantaje, inclusiv flexibilitate, scalabilitate și accesibilitate globală, contribuind la transformarea modului în care utilizăm și gestionăm tehnologia în era digitală.
Proiectul meu are ca scop crearea unei aplicații care să utilizeze două servicii de cloud și să faciliteze astfel interacțiunea utilizatorilor cu informațiile de pe internet. Această aplicație își propune să extragă date relevante de pe internet și să le pună la dispoziția utilizatorului în funcție de nevoile sale.
Tehnologiile utilizate sunt: Next.js, MongoDBCompass, Github, Netlifty si VSCode.

2.	DESCRIERE PROBLEMA

Oamenii își doresc să economisească cât mai mult timp, iar prepararea felurilor de mâncare devine treptat o provocare tot mai mare pentru cei care sunt mereu pe fugă. Nu este de mirare că serviciile de livrare a mâncării au devenit alegerea preferată a multor consumatori. Fie că lipsește inspirația, fie că nu au ingredientele necesare sau pur și simplu preferă să se odihnească, din ce în ce mai mulți oameni optează pentru astfel de servicii. Cu toate acestea, este important să menționăm că această soluție nu este sustenabilă pe termen lung din punct de vedere financiar, motiv pentru care oamenii sunt totuși nevoiți să gătească din când în când.
Aplicația FUDDI vine în întâmpinarea persoanelor care sunt în pană de idei, oferind o gamă variată de rețete potrivite pentru toate gusturile. Mai mult decât atât, aceasta generează variante de preparate culinare în funcție de ingredientele introduse de utilizator. Așadar, dacă aveți poftă de anumite ingrediente, dar nu știți în ce combinație să le folosiți, FUDDI este locul ideal în care puteți descoperi soluții.
Una dintre cele mai mari probleme la nivel global, cu impact social, economic și de mediu, este risipa alimentară. Statistic vorbind, o proporție semnificativă din mâncarea cumpărată (aproximativ 1,3 miliarde de tone pe an) nu ajunge să fie consumată. Cu siguranță, vi s-a întâmplat, și nu doar o dată, să aruncați mâncarea pe care ați uitat-o și a expirat sau care a rămas în plus. Mulțumită aplicației FUDDI, acum puteți transforma ingredientele rămase în frigider într-o masă delicioasă.

3.	DESCRIERE API

API-ul Spoonacular este o platformă puternică de gestionare a rețetelor și informațiilor nutriționale, care oferă acces la o bază de date extinsă de rețete culinare, informații despre alimente și funcționalități avansate de analiză a nutriției. Este un instrument ideal pentru proiectele care implică dezvoltarea de aplicații sau site-uri web cu tematică culinară, planificarea dietelor, generarea de rețete personalizate și multe altele.
Cu ajutorul API-ului Spoonacular, puteți accesa și căuta rapid peste 365.000 de rețete, cu opțiuni de filtrare și sortare, pentru a găsi exact ceea ce căutați. Puteți obține informații detaliate despre ingredientele și instrucțiunile de preparare, precum și valori nutriționale, așa cum ar fi conținutul de calorii, macronutrienți și alergeni.

4.	FLUX DE DATE

EXEMPLE DE REQUEST/RESPONSE

Acesta este un exemplu de request/response. Folosindu-mă de identificatorul unic al rețetei, am făcut o cerere către API-ul Spoonacular pentru a îmi returna instrucțiunile corespunzătoare reteti pe care utilizatorul da click. Am afișat apoi pașii rețetei intr-un mesaj de tip pop-up.
 {recipes.length > 0 ? 'Available recipes: ' : ''}
          {recipes.map((recipe) => (
            <p
              key={recipe.id}
              style={{cursor: 'pointer'}}
              onClick={async () => {
                const response = await axios.get(`https://api.spoonacular.com/recipes/${recipe.id}/analyzedInstructions?apiKey=${'06f40317e7ad43dab1814bd7d70504fe'}`);
                const instructions = response.data[0].steps.map(step => step.step);
                alert(`Instructions for ${recipe.title}:\n${instructions.join('\n')}`);
              }}
            >
              {recipe.title}
              
            </p>
          ))}

Un alt exemplu de request/response este cel de jos.
 async function getRecipesByIngredients(ingredients) {
    const url = `https://api.spoonacular.com/recipes/findByIngredients?ingredients=${ingredients}&apiKey=${'06f40317e7ad43dab1814bd7d70504fe'}`;
    const response = await axios.get(url);
    return response.data;
  }

In funcția getRecipesByIngredients, cu ajutorul parametrului „ingredients” care este un array ce conține toate ingredientele introduse de utilizator de la tastatura, trimit o solicitare catre API-UL Spoonacular pentru a imi returna toate denumirile rețetelor care au valorile din „ingredients” in compoziție.
METODE HTTP

In cadrul proiectului am folosit metode de preluare a datelor din baza de date MongoDB precum GET, POST, PUT si DELETE.
const getRecord = async (id) => {
    const collection = await getCollection(COLLECTION_NAME);
    return collection.findOne({_id: new ObjectId(id)});
}

const postRecord = async (record) => {
    const collection = await getCollection(COLLECTION_NAME);
    return collection.insertOne(record);
}

Cu ajutora acestora le permit utilizatorilor sa își salveze manual rețete într-o baza de date si sa le revizuiască ulterior.

AUTENTIFICARE SI AUTORIZARE SERVICII UTILIZATE

Pentru a trimite request-uri catre API-ul Spoonacular, am avut nevoie de o cheie de acces privata pe care am obținut-o prin crearea unui cont gratuit. Am declarat aceasta cheie ca variabila globala in fișierul .env si am folosit-o ulterior in cod.
SPOONACULAR_API_KEY=14207be918ab44ff9267c71136ebab96

De asemenea, a fost necesar sa permit tuturor IP-urilor sa acceseze baza de date online MongoDB ca aplicația web sa funcționeze optim.

 

5.	CAPTURI ECRAN APLICATIE

 
Ecranul principal al aplicației

 
Generarea rețetelor pe baza ingredientelor introduse de utilizator
 
Afișarea instrucțiunilor pentru o rețeta selectata


 
Afișarea rețetelor salvate in baza de date cloud
 
Afișarea formularului in care utilizatorul își poate introduce propriile rețete

6.	REFERINTE

Link Youtube:
Link Github: https://github.com/MarinescuAnamaria/ProiectCloud
Link Site Netlifty: https://main--marvelous-tulumba-b5b8db.netlify.app/
Link Site Vercel: https://fuddi.vercel.app/
Link Spoonacular: https://spoonacular.com/food-api
Link Netlifty: https://app.netlify.com/
Link MongoDBCloud: https://cloud.mongodb.com/
