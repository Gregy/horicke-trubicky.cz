function gel(id){
    return document.getElementById(id);
}
function slideshow(nazev, pocet, casZobrazeni, casPrechodu, sirka, vyska){
    document.write("<div id='"+nazev+"2' "+
        "style='margin: 0; padding: 0; border: none; width: "+sirka+"px; height: "+vyska+"px; "+
        "background-image: url(\"slideshow/"+nazev+"/2.jpg\");'>"+
        "<img src='slideshow/"+nazev+"/1.jpg' id='"+nazev+"' alt='1/"+pocet+"' "+
        "style='margin: 0; padding: 0; border: none;'></div>");
    setTimeout("zmizet('"+nazev+"', "+casZobrazeni+", "+casPrechodu+", 0)", casZobrazeni);
}
function zmizet(id, casZobrazeni, casPrechodu, krok){
    var pocetKroku=casPrechodu/25;
    var pruhlednost=1-krok/pocetKroku;
    gel(id).style.opacity=pruhlednost;
    gel(id).style.filter="alpha(opacity="+Math.round(pruhlednost*100)+")";
    if(krok>=pocetKroku){
        premen(id, casZobrazeni, casPrechodu);
    } else {
        krok++;
        setTimeout("zmizet('"+id+"', "+casZobrazeni+", "+casPrechodu+", "+krok+")", 40);
    }
}
function premen(id, casZobrazeni, casPrechodu){
    var pocet=gel(id).alt.split("/");
    var aktualni=pocet[0];
    var aktualniDiv=parseInt(aktualni)+1;
    var celkem=pocet[1];
    if(aktualni==celkem){
        aktualni=1;
        aktualniDiv=2;
    } else {
        aktualni++;
        if(aktualniDiv==celkem){
            aktualniDiv=1;
        } else {
            aktualniDiv++;
        }
    }
 
    gel(id).src="slideshow/"+id+"/"+aktualni+".jpg";
    gel(id).alt=aktualni+"/"+celkem;
    gel(id).style.opacity=1;
    gel(id).style.filter="alpha(opacity=100)";
    for(var i=0; i<100; i++);    // za tohle se všem zkušenìjším omlouvám, ale potøeboval jsem nìco jako sleep na malinkou chvilku a nic jednoduššího mì v tu chvíli nenapadlo
    gel(id+"2").style.backgroundImage="url('slideshow/"+id+"/"+aktualniDiv+".jpg')";
    setTimeout("zmizet('"+id+"', "+casZobrazeni+", "+casPrechodu+", 0)", casZobrazeni);
}