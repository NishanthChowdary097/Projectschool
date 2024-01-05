//Home
import {home,greet,study,logout, subjects} from './components.js'
function homeload(){
    home();
    greet();
    // subjects();
}

//Study
function studyload(){
    study();
}

//logout
function log(){
    logout()
}

//window function
window.homeload=homeload;
window.studyload=studyload;
window.log=log;
// window.onload=function(){
//     homeload();
// }