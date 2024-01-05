function study(){
    document.getElementById('nav-frame').innerHTML=`<div id="maped-subs" >hello</div>
    <div id="sub-content" >world</div>`
}
//home
function home(){
    document.getElementById('nav-frame').innerHTML=`
    <div id="topframe">
            <div id="pAg">
                <div id="greet"> Greeting </div>
                <div id="profile"> 
                    <div id="profile-pic">pic</div>
                    <div id="profile-details">details</div>    
                </div>
            </div>
            <div id="quote" > QUOTE OR SMTG </div>
        </div>
        <div id="downframe" >
            <div id="subs" > MAPPED SUBJECTS </div>
            <div id="updats" > LATEST UPLOADS </div>
        </div>`
}
function greet(){
    document.getElementById("greet").innerHTML=`Welcome `+localStorage.getItem('name');
    document.getElementById("")
}
function subjects(){
    fetech(url,{}).then(res=>res.json()).then(d=>{
        var txt=""
        for(i in d){
            document.getElementById('subs').innerHTML="hello"
        }
    })
}
//logout
function logout(){
    window.localStorage.clear;
    window.location.href="/login.html";
}
export {home,greet,study,logout,subjects}