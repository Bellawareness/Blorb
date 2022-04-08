
  /* paste this line in verbatim */
  window.formbutton=window.formbutton||function(){(formbutton.q=formbutton.q||[]).push(arguments)};
  /* customize formbutton below*/   
formbutton("create", {
    action: "https://formspree.io/f/mdoblqka",
    title: "Any questions ?",
    fields: [
      { 
        type: "email", 
        label: "Email:", 
        name: "email",
        required: true,
        placeholder: "your@email.com"
      },
      {
        type: "textarea",
        label: "Message:",
        name: "message",
        placeholder: "What would you like to know?",
      },
      { type: "submit" }      
    ],
    styles: {
      title: {
        backgroundColor: "aqua"
      },
      button: {
        backgroundColor: "aqua"
      }
    }
  });


//created an object with list of attributes 
const Iam = {
  Name: "Bella",
  Skills : "CSS, HTML, Javascript and Git/Github.",

  //a function to call list and input info needed for homework 
  //considering translating in spanish 
  myPortfoilo : function() {
    return "Hi, it's Bella I am enhancing my skills by participating in Google's UX Designer Certificate course. I recently learned " + this.Skills + " You may see my potfolio at the link below" ; 
  }
};


//print to console t
//console.log(Iam.myPortfoilo());



//code to take log answers to html in a typewriter effect

var i = 0;
var txt = Iam.myPortfoilo();
var speed = 50;

function typeWriter() {
  if (i < txt.length) {
    document.getElementById("thediv").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}