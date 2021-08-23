var ecran = document.querySelector("div#screen");

document.querySelector("div.battery").style.visibility="hidden";
function run(){
    document.querySelector("div.battery").style.visibility="visible";
    ecran.style.background = "linear-gradient(to top left,black, blue,black)";
    var load = document.querySelector("div.charge");
    var i = 1;
    var park = setInterval(function(){
        i++;
        if(i == 151)
        {
            load.style.marginTop = 150+"px";
            i=1;
        }
        else
        {
            load.style.marginTop =150-i+"px";
        }
       
    },23);

    var j = 1;
    var duree = setInterval(function(){
        document.getElementById("p").innerHTML=j+"%";
        if(j == 100)
        {
            clearInterval(duree);
            clearInterval(park);
            load.style.marginTop ="0px";
            document.getElementById("h2").innerHTML = "Fully Charged";
        }
        j++;
    },100);
  
}