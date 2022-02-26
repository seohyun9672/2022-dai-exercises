//MUST HAVE - CREATE A TEMPLATE TAG
var template_particle = document.createElement("template"); //<template> </template> RULE

//To-do - CREATE THE UI HERE!
template_particle.innerHTML = `
<style>
  .particle {
    width: 25px;
    height: 25px;
    background-color: red;
    border-radius: 10px;
  }
</style>
<div class="particle">

</div>
`;

//MUST HAVE - CREATE A CLASS WITH HTMLELEMENT POWERS (interfaces/functionalities)
class TheParticle extends HTMLElement {

    //MUST HAVE - CREATE A CONSTRUCTOR TO DO INITAL ASSOCIATIONS
    constructor(){
        super(); //pass on the HTMLElement super powers!
        this.attachShadow({mode:"open"}) //Attach it to the shadowRoot

        //To-do - CREATE THE STATES FOR THE UI HERE!
    }

    //MUST HAVE - FUNCTION THAT RUNS AFTER IT'S CONNECTED
    connectedCallback(){
        this.shadowRoot.appendChild(template_particle.content.cloneNode(true)); //use the template to make a clone


    //To-do - CREATE THE FUNCTIONALITIES HERE!
}

    changeParticle(type = "snow"){
        if(type === "snow"){ 
            this.shadowRoot.querySelector(".particle").style.cssText= `
            background-color: blue;
            `
        }
        if(type ==="desert"){
            this.shadowRoot.querySelector(".particle").style.cssText= `
            background-color: white;
            `
        }
        if (type ==="valley"){
            this.shadowRoot.querySelector(".particle").style.cssText= `
            background-color: red;
            `
        }
        if (type ==="forest"){
            this.shadowRoot.querySelector(".particle").style.cssText= `
            background-color: yellow;
            `
        }
    
    }
}
//MUST HAVE - define the tag for the custom elements
customElements.define("the-particle", TheParticle)