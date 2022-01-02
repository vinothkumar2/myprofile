// selecting the container
const projectContainer = document.querySelector(".project-temp");

// adding data to project Container
function loadData(project) {
  
    let project_card = document.createElement("div");
    let projectName = document.createElement("h2");
    let date = document.createElement("small");
    let content = document.createElement("p");
    let tags = document.createElement("small");
    let btn = document.createElement("div");
    let link = document.createElement("a");
    let repo = document.createElement("a");
  
    project_card.setAttribute("class", "project-description");
    btn.setAttribute("class", "button");
    repo.setAttribute("href", project.repo);
  
    projectName.textContent = project.projectname;
    date.textContent = project.projectDate;
    content.innerHTML = project.projectDescription;
    tags.innerHTML = "<b>Tech-Stack</b> : " + project.tags;
    repo.textContent = "Repo";
  
    if (project.link != "") {
      link.setAttribute("href", project.link);
      link.textContent = "Link";
      btn.appendChild(link);
    }
  
    btn.appendChild(repo);
  
    project_card.appendChild(projectName);
    project_card.appendChild(date);
    project_card.appendChild(content);
    project_card.appendChild(tags);
    project_card.appendChild(btn);
  
    projectContainer.appendChild(project_card);
  }

// project details array of object  
projectData =  [
    {
    "projectname": "Vaishali Video Streaming Bot",
    "projectDate": "2021",
    "projectDescription": "Help to Stream Live Videos in Telegram Group",
    "tags":"mark14, VanillaJS, Tailwind",
    "link":"https://telegram.me/vaishali_video_streaming_bot",
    "repo":""
},{
    "projectname": "Malar Audio Streaming",
    "projectDate": "2021",
    "projectDescription": "Help to Stream Audio in Telegram Group and Channels",
    "tags":"mark13, VanillaJS, Tailwind",
    "link":"https://telegram.me/malar_audio_streaming_bot",
    "repo":""
},{
    "projectname": "To find current Weather",
    "projectDate": "Aug 2021",
    "projectDescription": "Python Flash App to find Current Weather",
    "tags":"mark12, ReactJS, Tailwind",
    "link":"https://vijaywea.herokuapp.com/",
    "repo":""
},

{
    "projectname": "Shashaa OCR Bot",
    "projectDate": "Dec 2021",
    "projectDescription": "A Telegram bot to Extract text from images",
    "tags":"mark11, VanillaJS, Tailwind",
    "link":"https://telegram.me/shashaa_ocr_bot",
    "repo":""
},
    /* 
{
    "projectname": "Cash Register Manager",
    "projectDate": "Aug 2021",
    "projectDescription": "A cash register manager which gives you change in minimum number of notes.",
    "tags":"markTen, VanillaJS, Tailwind",
    "link":"https://cash-register-manager-neog.netlify.app/",
    "repo":"https://github.com/Logan1x/cashRegister"
},
{
    "projectname": "GoodBook",
    "projectDate": "Jan 2021",
    "projectDescription": "A book recommendation app, that gives different books for different genre",
    "tags":"markNine, ReactJS",
    "link":"https://csb-buhog.netlify.app/",
    "repo":"https://github.com/Logan1x/GoodBook"
},
{
    "projectname": "Emoji Meaning",
    "projectDate": "Dec 2020",
    "projectDescription": "A ReactJS Project to find meaning of several emoji's.",
    "tags":"markEight, ReactJS",
    "link":"https://knowthisemoji.netlify.app/",
    "repo":"https://github.com/Logan1x/emoji-meaning"
},
{
    "projectname": "Groot Translator",
    "projectDate": "Aug 2021",
    "projectDescription": "VanillaJS project with intregation of FunTranslation API's to make translator from English to groot language.",
    "tags":"markSeven, VanillaJS",
    "link":"https://groot-translator-neog.netlify.app/",
    "repo":"https://github.com/Logan1x/grootTranslator"
},

{
    "projectname": "Banana Translator",
    "projectDate": "Dec 2020",
    "projectDescription": "This project is vanilla javascript project which uses api from funtranslations.com to translate text into minion language.",
    "tags":"markSix, VanillaJS",
    "link":"https://banana-trans.netlify.app/",
    "repo":"https://github.com/Logan1x/banana_translator"
},
{
    "projectname": "My BLog",
    "projectDate": "July 2021",
    "projectDescription": "An hashnode blog which holds all of my written content.",
    "tags":"markFive",
    "link":"https://logan1x.hashnode.dev/",
    "repo":"#"
},
{
    "projectname": "Computer Quiz",
    "projectDate": "Aug 2021",
    "projectDescription": "Quiz about basic computer questions and test score based on that.",
    "tags":"markTwo, NodeJS",
    "link":"https://replit.com/@logan1x/quizComputer",
    "repo":"https://github.com/Logan1x/quizComputer"
},
{
    "projectname": "DoYouKnowMe Quiz",
    "projectDate": "Aug 2021",
    "projectDescription": "A CLI app that can quiz your friends on how well they know you.",
    "tags":"MarkOne, NodeJS",
    "link":"https://replit.com/@logan1x/DoYouKnowMe",
    "repo":"https://github.com/Logan1x/doYouKnowMeQuiz"
}, */
]

// Ma func to pass each object out of above array
projectData.map((project)=>{
    loadData(project)})
