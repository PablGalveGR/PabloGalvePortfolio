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
        description: "", 
        listFeatures: ["Create, update and delete an errand", "List and filter errands by status"] 
    }
]