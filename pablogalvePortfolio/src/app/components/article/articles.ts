import { Article } from "./Article";
export const articles: Article[] = [
    { 
        id: 0, 
        title: "To do list", 
        image: "assets/img/todolist/01.png", 
        repository: "https://github.com/PablGalveGR/TodoListAngular", 
        webLink: "https://todolistangular-3e83e.web.app",
        technologies:["NodeJS", "Angular", "JS"], 
        description: "This project contains a web application which allows to create a list of errands.", 
        listFeatures: ["Create, update and delete an errand", "List and filter errands by status"] 
    },
    { 
        id: 1, title: "Heroes tour", 
        image: "assets/img/heroesTour/01.png", 
        repository: "https://github.com/PablGalveGR/TourOfHeroes", 
        webLink: "https://heroeslistpablogalve.web.app", 
        technologies:["NodeJS", "Angular", "JS"], 
        description: "This project contains a web application which allows list heroes and update them", 
        listFeatures: ["Page navigation using Angular routing", "Dashboard with the principal heroes", "List of all the heroes", "Detailed view for each hero"] 
    },
    { 
        id: 2, title: "FoddieLife", 
        image: "assets/img/foddieLife/01.png", 
        repository: "https://github.com/PablGalveGR/foodieLifeWeb", 
        webLink: "https://foddielife.web.app/", 
        technologies:["NodeJS", "Angular", "JS"], 
        description: "An application about managing recipes and ingredients", 
        listFeatures: ["This Web App is on early development!"] 
    }
]