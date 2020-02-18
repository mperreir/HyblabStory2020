//On cache tous les popups
$(".popup").hide();
$("#popupRessourceContainer").hide();

var hideBool = {
    "logoMedia" : true,
    "Maison" : true,
    "Bar" : false,
    "Lycee" : false,
    "Piscine" : false,
};

//variables générales
var sexe = "";
var lieu = "";
var jsonMem = "";
var etat = 0;

var nbLieuVisites = 0; // Quand on visite les 4 lieux on arrive directement sur la page finale "popupMedia"

//variables spécifiques
var sexeLieu = {
    "Piscine" : "Femme",
    "Bar" : "Femme",
    "Lycee" : "Homme",
    "Maison" : "Homme"
};


/*Positionnement dynamique des bulles*/

var jsonCSS = {
    "Piscine" : [
        {
            "selecteur" : ".arrow-down-ado",
            "attribut" : "top",
            "valeur" : "98%"
        },
        {
            "selecteur" : ".arrow-down-ado",
            "attribut" : "left",
            "valeur" : "86%"
        },
        {
            "selecteur" : ".arrow-down-ado",
            "attribut" : "border-left",
            "valeur" : "20px solid transparent"
        },
        {
            "selecteur" : ".arrow-down-ado",
            "attribut" : "border-right",
            "valeur" : "0px solid transparent"
        },
        {
            "selecteur" : ".arrow-down-ado",
            "attribut" : "border-top",
            "valeur" : "20px solid #FFFFFF"
        },
        {
            "selecteur" : ".bulleado-text",
            "attribut" : "left",
            "valeur" : "4%",
        },
        {
            "selecteur" : ".bulleado-text",
            "attribut" : "top",
            "valeur" : "41%",
        },
        {
            "selecteur" : ".arrow-down-parent",
            "attribut" : "top",
            "valeur" : "98%",
        },
        {
            "selecteur" : ".arrow-down-parent",
            "attribut" : "left",
            "valeur" : "3%",
        },
        {
            "selecteur" : ".arrow-down-parent",
            "attribut" : "border-left",
            "valeur" : "0px solid transparent",
        },
        {
            "selecteur" : ".arrow-down-parent",
            "attribut" : "border-right",
            "valeur" : "20px solid transparent",
        },
        {
            "selecteur" : ".arrow-down-parent",
            "attribut" : "border-top",
            "valeur" : "20px solid #FFFFFF",
        },
        {
            "selecteur" : ".bulleparent-text",
            "attribut" : "left",
            "valeur" : "31%"
        },
        {
            "selecteur" : ".bulleparent-text",
            "attribut" : "top",
            "valeur" : "41%"
        },
        {
            "selecteur" : ".bulledepensee",
            "attribut" : "width",
            "valeur" : "21%"
        },
        {
            "selecteur" : ".bulledepensee",
            "attribut" : "left",
            "valeur" : "-2%"
        },
        {
            "selecteur" : ".bulledepensee",
            "attribut" : "top",
            "valeur" : "51%"
        },
        {
            "selecteur" : ".penseeAdo",
            "attribut" : "transform",
            "valeur" : "rotate(180deg)"
        },
        {
            "selecteur" : ".penseeAdo",
            "attribut" : "top",
            "valeur" : "50%"
        },
        {
            "selecteur" : ".penseeAdo",
            "attribut" : "left",
            "valeur" : "2%"
        },
        {
            "selecteur" : "#penseeAdo",
            "attribut" : "left",
            "valeur" : "18%"
        },
        {
            "selecteur" : "#penseeAdo",
            "attribut" : "width",
            "valeur" : "63%"
        }
    ],
    "Maison" : [
        {
            "selecteur" : ".bulleado-text",
            "attribut" : "left",
            "valeur" : "33%"
        },
        {
            "selecteur" : ".bulleado-text",
            "attribut" : "top",
            "valeur" : "57%"
        },
        {
            "selecteur" : ".arrow-down-ado",
            "attribut" : "top",
            "valeur" : "98%"
        },
        {
            "selecteur" : ".arrow-down-ado",
            "attribut" : "left",
            "valeur" : "3%"
        },
        {
            "selecteur" : ".arrow-down-ado",
            "attribut" : "border-left",
            "valeur" : "0px solid transparent"
        },
        {
            "selecteur" : ".arrow-down-ado",
            "attribut" : "border-right",
            "valeur" : "20px solid transparent"
        },
        {
            "selecteur" : ".arrow-down-ado",
            "attribut" : "border-top",
            "valeur" : "20px solid #FFFFFF"
        },
        {
            "selecteur" : ".arrow-down-parent",
            "attribut" : "top",
            "valeur" : "98%"
        },
        {
            "selecteur" : ".arrow-down-parent",
            "attribut" : "left",
            "valeur" : "3%"
        },
        {
            "selecteur" : ".arrow-down-parent",
            "attribut" : "border-left",
            "valeur" : "0px solid transparent"
        },
        {
            "selecteur" : ".arrow-down-parent",
            "attribut" : "border-right",
            "valeur" : "20px solid transparent"
        },
        {
            "selecteur" : ".arrow-down-parent",
            "attribut" : "border-top",
            "valeur" : "20px solid #FFFFFF"
        },
        {
            "selecteur" : ".bulleparent-text",
            "attribut" : "left",
            "valeur" : "18%"
        },
        {
            "selecteur" : ".bulleparent-text",
            "attribut" : "top",
            "valeur" : "40%"
        },
        {
            "selecteur" : ".bulledepensee",
            "attribut" : "left",
            "valeur" : "35%"
        },
        {
            "selecteur" : ".bulledepensee",
            "attribut" : "width",
            "valeur" : "21%"
        },
        {
            "selecteur" : ".bulledepensee",
            "attribut" : "top",
            "valeur" : "65%"
        },
        {
            "selecteur" : ".penseeAdo",
            "attribut" : "transform",
            "valeur" : "scaleX(-1) rotate(180deg)"
        },
        {
            "selecteur" : ".penseeAdo",
            "attribut" : "top",
            "valeur" : "50%"
        },{
            "selecteur" : ".penseeAdo",
            "attribut" : "left",
            "valeur" : "2%"
        },{
            "selecteur" : "#penseeAdo",
            "attribut" : "left",
            "valeur" : "24%"
        },
        {
            "selecteur" : "#penseeAdo",
            "attribut" : "width",
            "valeur" : "63%"
        },
    ],
    "Lycee" : [
        {
            "selecteur" : ".bulleparent-text",
            "attribut" : "left",
            "valeur" : "35%"
        },
        {
            "selecteur" : ".bulleparent-text",
            "attribut" : "top",
            "valeur" : "50%"
        },
        {
            "selecteur" : ".arrow-down-parent",
            "attribut" : "top",
            "valeur" : "98%"
        },
        {
            "selecteur" : ".arrow-down-parent",
            "attribut" : "left",
            "valeur" : "3%"
        },
        {
            "selecteur" : ".arrow-down-parent",
            "attribut" : "border-left",
            "valeur" : "0px solid transparent"
        },
        {
            "selecteur" : ".arrow-down-parent",
            "attribut" : "border-right",
            "valeur" : "20px solid transparent"
        },
        {
            "selecteur" : ".arrow-down-parent",
            "attribut" : "border-top",
            "valeur" : "20px solid #FFFFFF"
        },
        {
            "selecteur" : ".arrow-down-ado",
            "attribut" : "top",
            "valeur" : "98%"
        },
        {
            "selecteur" : ".arrow-down-ado",
            "attribut" : "left",
            "valeur" : "86%"
        },
        {
            "selecteur" : ".arrow-down-ado",
            "attribut" : "border-left",
            "valeur" : "20px solid transparent"
        },
        {
            "selecteur" : ".arrow-down-ado",
            "attribut" : "border-right",
            "valeur" : "0px solid transparent"
        },
        {
            "selecteur" : ".arrow-down-ado",
            "attribut" : "border-top",
            "valeur" : "20px solid #FFFFFF"
        },
        {
            "selecteur" : ".bulleado-text",
            "attribut" : "left",
            "valeur" : "9%"
        },
        {
            "selecteur" : ".bulleado-text",
            "attribut" : "top",
            "valeur" : "48%"
        },
        {
            "selecteur" : ".bulledepensee",
            "attribut" : "left",
            "valeur" : "4%"
        },
        {
            "selecteur" : ".bulledepensee",
            "attribut" : "width",
            "valeur" : "21%"
        },
        {
            "selecteur" : ".bulledepensee",
            "attribut" : "top",
            "valeur" : "59%"
        },
        {
            "selecteur" : ".penseeAdo",
            "attribut" : "transform",
            "valeur" : "scaleX(1) rotate(180deg)"
        },
        {
            "selecteur" : ".penseeAdo",
            "attribut" : "top",
            "valeur" : "50%"
        },{
            "selecteur" : ".penseeAdo",
            "attribut" : "left",
            "valeur" : "2%"
        },
        {
            "selecteur" : "#penseeAdo",
            "attribut" : "left",
            "valeur" : "24px"
        },
        {
            "selecteur" : "#penseeAdo",
            "attribut" : "width",
            "valeur" : "84%"
        }
    ],
    "Bar" : [
        {
            "selecteur" : ".bulleparent-text",
            "attribut" : "left",
            "valeur" : "36%",
        },
        {
            "selecteur" : ".bulleparent-text",
            "attribut" : "top",
            "valeur" : "44%",
        },
        {
            "selecteur" : ".arrow-down-parent",
            "attribut" : "top",
            "valeur" : "98%",
        },
        {
            "selecteur" : ".arrow-down-parent",
            "attribut" : "left",
            "valeur" : "3%",
        },
        {
            "selecteur" : ".arrow-down-parent",
            "attribut" : "border-left",
            "valeur" : "0px solid transparent",
        },
        {
            "selecteur" : ".arrow-down-parent",
            "attribut" : "border-right",
            "valeur" : "20px solid transparent",
        },
        {
            "selecteur" : ".arrow-down-parent",
            "attribut" : "border-top",
            "valeur" : "20px solid #FFFFFF",
        },
        {
            "selecteur" : ".bulledepensee",
            "attribut" : "left",
            "valeur" : "-2%",
        },
        {
            "selecteur" : ".bulledepensee",
            "attribut" : "width",
            "valeur" : "19%",
        },
        {
            "selecteur" : ".bulledepensee",
            "attribut" : "top",
            "valeur" : "62%",
        },
        {
            "selecteur" : ".penseeAdo",
            "attribut" : "transform",
            "valeur" : "rotate(180deg)",
        },
        {
            "selecteur" : ".penseeAdo",
            "attribut" : "top",
            "valeur" : "50%",
        },
        {
            "selecteur" : ".penseeAdo",
            "attribut" : "left",
            "valeur" : "2%",
        },
        {
            "selecteur" : "#penseeAdo",
            "attribut" : "left",
            "valeur" : "18%",
        },
        {
            "selecteur" : "#penseeAdo",
            "attribut" : "width",
            "valeur" : "63%",
        },
        {
            "selecteur" : ".arrow-down-ado",
            "attribut" : "top",
            "valeur" : "98%",
        },
        {
            "selecteur" : ".arrow-down-ado",
            "attribut" : "left",
            "valeur" : "86%",
        },
        {
            "selecteur" : ".arrow-down-ado",
            "attribut" : "border-left",
            "valeur" : "20px solid transparent",
        },
        {
            "selecteur" : ".arrow-down-ado",
            "attribut" : "border-right",
            "valeur" : "0px solid transparent",
        },
        {
            "selecteur" : ".arrow-down-ado",
            "attribut" : "border-top",
            "valeur" : "20px solid #FFFFFF",
        },
        {
            "selecteur" : ".bulleado-text",
            "attribut" : "left",
            "valeur" : "2%",
        },
        {
            "selecteur" : ".bulleado-text",
            "attribut" : "top",
            "valeur" : "47%",
        }
    ]
};

$.get("data/test.json",(data)=>{

    //On force la MAISON en premier
    $("#Piscine").hide();
    $("#Bar").hide();
    $("#Lycee").hide();
    $(".sexeMaison").hide();

    /*Choix du LIEU*/

    $(".lieu").on("click",(evt)=> {
        var classes = evt.target.classList;
        lieu = classes[0];

        if (hideBool[lieu]){
            //hide les sexes des autres lieux
            if (lieu != "Piscine"){
                $(".sexePiscine").hide();
            }
            if (lieu != "Bar"){
                $(".sexeBar").hide();
            }
            if (lieu != "Lycee"){
                $(".sexeLycee").hide();
            }
            if (lieu != "Maison"){
                $(".sexeMaison").hide();
            }

            //show les sexe du lieu séléctioné
            $(".sexe"+lieu).show();
        }

    });

    $(".sexe").on("click",(evt)=> {
        var classes = evt.target.classList;
        sexeLieu[classes[0]] = classes[2];
        $(this).css("opacity","0.5"); //On indique que le lieu à été visité

        $("#popupLieu").hide();
        lieu = classes[0];

        if (hideBool[lieu]){
            //  $("#"+lieu).hide();
            $("#"+lieu).css("opacity","0.5");
            hideBool[lieu]=false;
            nbLieuVisites++;

            if (lieu=="Maison"){
                $("#Piscine").show();
                $("#Bar").show();
                $("#Lycee").show();
                hideBool["Piscine"] = true;
                hideBool["Lycee"] = true;
                hideBool["Bar"] = true;
            }

            //Popup CONTEXTE
            $("#contexte_texte").text(data["sexe"][sexeLieu[classes[0]]][lieu]["contexte"]);
            if (sexeLieu[classes[0]]=="Femme"){
                $("#contexteNomAdo").text("Louise");
                $("#contexteImgAdo").attr("src","images/fille_contexte.png");
            }
            else{
                $("#contexteNomAdo").text("Arthur");
                $("#contexteImgAdo").attr("src","images/gars_contexte.png");
            }
            $("#contexteGif").attr("src","images/"+lieu+".gif");
            if (lieu=="Lycee"){
                $("#contexteGif").css("left","1060px");
            }
            else{
                $("#contexteGif").css("left","1010px");
            }
            $("#popupContexte").show();
            hideBool["logoMedia"] = false;
            $("#annonceClique").hide();

            //popup DIALOGUE
            $("#boutonFinContexte").on("click",()=>{
                $("#popupContexte").hide();
                $("#popupDialogue").show();
                $(".bulleado").hide();
                $(".bulleparent").hide();
                $(".bulledepensee").hide();
                $(".EnteteLieu").text(lieu);
                $("#btnRep1").hide();
                $("#btnRep2").hide();

                //Affichage des images
                $("#contexte").html(data["sexe"][sexeLieu[classes[0]]][lieu]["contexte"]);
                $("#btn"+classes[0]).attr("disabled", true);
                $("#btnFemme"+classes[0]).hide();
                $("#btnHomme"+classes[0]).hide();
                $(".imageScene").attr("src","images/"+data["sexe"][sexeLieu[classes[0]]][lieu]["imgBackground"]);

                //positions des bulles
                for (const element of jsonCSS[lieu]){
                    //console.log("select : "+element["selecteur"]+" attr : "+element["attribut"]+" val : "+element["valeur"]);
                    $(element["selecteur"]).css(element["attribut"],element["valeur"]);
                }

                //remplissage de la première bulle
                console.log("lieu: "+lieu+" sexeLieu[lieu]: "+[sexeLieu[lieu]]);
                $("#btnPasserDialogue").click();
            });
        }
    });



    //On rentre dans le dialogue associé au lieu
    var i = 0;
    $("#btnPasserDialogue").on("click",()=>{
        console.log("etat: "+etat+"\ni: "+i);

        if(etat==0){
            jsonMem = data["sexe"][sexeLieu[lieu]][lieu];
        }
        $(".imageScene").attr("src","images/"+jsonMem["imgBackground"]);
        if (i<jsonMem["dialogue"].length){
            // alert("i: "+i);
            //alert(jsonMem["dialogue"][i][Object.keys(jsonMem["dialogue"][i])]);
            $("#"+Object.keys(jsonMem["dialogue"][i])).text(jsonMem["dialogue"][i][Object.keys(jsonMem["dialogue"][i])]);
            //alert("#"+Object.keys(jsonMem["dialogue"][i]));

            if ($("#paroleAdo").text()==""){
                $(".bulleado").hide();
            }
            else {$(".bulleado").show();}
            if ($("#paroleParent").text()==""){
                $(".bulleparent").hide();
            }
            else {
                //alert("pute");
                $(".bulleparent").show();
            }
            if ($("#penseeAdo").text()==""){
                $(".bulledepensee").hide();
            }
            else {$(".bulledepensee").show();}
        }

        if (i>=jsonMem["dialogue"].length) {
            etat += 1;
            i = -1;
            if (etat < 3) {
                $("#btnPasserDialogue").hide();

                $("#btnRep1").show();
                $("#contenuRep1").text(jsonMem["rep1"]["contenu"]);
                $("#btnRep2").show();
                $("#contenuRep2").text(jsonMem["rep2"]["contenu"]);
                /*
                $("#paroleParent").text("");
                $("#paroleAdo").text("");
                $("#penseeAdo").text("");
                 */
                $(".bulleado").hide();
                $(".bulleparent").hide();
                $(".bulledepensee").hide();
            }
            else{
                $("#popupDialogue").hide();
                $("#popupRessource").show();
                //   $("#textRessource").text(jsonMem["ressource"]); //GESTION DE LA RESSOURCE

                $("#popupRessourceContainer").show()
                $("#ressourceTitreArticleNom").html(jsonMem["ressource"]["titre"]);
                $("#texteRessource h2").text(jsonMem["ressource"]["texte"]);
                $("#lienRessource a").text(jsonMem["ressource"]["source"]);
                $("#lienRessource a").attr("href",jsonMem["ressource"]["url"]);
                if (sexeLieu[lieu] == "Femme"){
                    $("#autreHistoire").attr("src","images/gars2.png");
                }
                else{
                    $("#autreHistoire").attr("src","images/fille2.png");
                }
                etat=0;
                jsonMem=data["sexe"][sexeLieu[lieu]][lieu];
            }
            $("#paroleParent").text("");
            $("#paroleAdo").text("");
            $("#penseeAdo").text("");
        }
        i++;
    });

    $("#btnRep1").on("click",()=>{
        jsonMem = jsonMem["rep1"];
        $("#btnRep1").hide();
        $("#btnRep2").hide();
        $("#btnPasserDialogue").show();
        $("#btnPasserDialogue").click();
    });
    $("#btnRep2").on("click",()=>{
        jsonMem = jsonMem["rep2"];
        $("#btnRep1").hide();
        $("#btnRep2").hide();
        $("#btnPasserDialogue").show();
        $("#btnPasserDialogue").click();
    });

    //Refaire l'histoire avec l'autre ado
    $("#autreHistoire").on("click",()=>{
        if (sexeLieu[lieu] == "Femme"){
            sexeLieu[lieu] = "Homme";
        }
        else{
            sexeLieu[lieu] = "Femme";
        }
        $("#popupRessource").hide();
        $("#popupRessourceContainer").hide();
        /*
        $(".imageAdo").attr("src","images/ado"+sexeLieu["Maison"]+".png");
        $(".imageParent").attr("src","images/parent"+sexeLieu["Maison"]+".png");
         */
        $(".imageScene").attr("src","images/"+data["sexe"][sexeLieu[lieu]][lieu]["imgBackground"]);
        //  $("#contexte").text(data["sexe"][sexeLieu["Maison"]][lieu]["contexte"]);
        $("#popupDialogue").hide();
        $("#contexte_texte").text(data["sexe"][sexeLieu[lieu]][lieu]["contexte"]);
        if (sexeLieu[lieu]=="Femme"){
            $("#contexteNomAdo").text("Louise");
            $("#contexteImgAdo").attr("src","images/fille_contexte.png");
        }
        else{
            $("#contexteNomAdo").text("Arthur");
            $("#contexteImgAdo").attr("src","images/gars_contexte.png");
        }

        $("#popupContexte").show();
        $("#annonceClique").hide();

        $(".bulleado").hide();
        $(".bulleparent").hide();
        $(".bulledepensee").hide();
    });

});

//Popup ressource -> le clique sur retour carte redirige vers le popup lieu
$("#btnRetourCarte").on("click",()=>{
    $("#popupRessource").hide();
    $("#popupRessourceContainer").hide();
    $("#popupLieu").show();
    $("#annonceClique").show();
    $(".popup_logo").attr("disabled",false);

    hideBool["logoMedia"] = true;

    if (nbLieuVisites==4){
        $('#popupMedia').show();
    }
});

$('.bouton').on('click',function(){
    $('.fullpage').addClass('scroll');
});

var is_media_popup_open = false;
$(".popup_logo").on("click",function(){
    if (hideBool["logoMedia"]){
        if(is_media_popup_open) {
            $("#popupLieu").hide();
            $('#popupMedia').hide();

            is_media_popup_open = false;
        } else {
            $("#popupLieu").hide();
            $('#popupMedia').show();
            is_media_popup_open = true;
        }
    }


});
$(".popupMedia_Croix").on("click",function(){
    $('#popupMedia').hide();
    is_media_popup_open = false;
    $("#popupLieu").show();
});

$("#Question_1").on("click",function(){
    var son = new Audio();
    son.src="audio/Me_parle_pas_sur_ce_ton__.m4a" ;
    son.play();
});

$("#Question_2").on("click",function(){
    var son = new Audio();
    son.src="audio/Tu_as_eu_des_notes___.m4a" ;
    son.play();
});

$("#Question_3").on("click",function(){
    var son = new Audio();
    son.src="audio/Tu_parles_à_qui__.m4a" ;
    son.play();
});

$("#Question_4").on("click",function(){
    var son = new Audio();
    son.src="audio/Ranges_ta_chambre.m4a" ;
    son.play();
});

$("#Question_5").on("click",function(){
    var son = new Audio();
    son.src="audio/Répond-moi_quand_je_te_parle__.m4a" ;
    son.play();
});


//Animation Bouton
$('.bouton').hover(function(){
        $('.image_arrow').attr('src','images/Arrow_3.png');
        $(this).css('background-color', '#FC5938');
    },
    function()
    {
        $('.image_arrow').attr('src','images/Arrow_2.png');
        $(this).css('background-color', 'transparent');
    }
);


$('#btnRep1').hover(function(element){
        $("#arrowRep1").attr('src','images/Arrow_3.png');
        $(this).css('background-color', '#FC5938');
    },
    function()
    {
        $("#arrowRep1").attr('src','images/Arrow_2.png');
        $(this).css('background-color', 'transparent');
    }
);
$('#btnRep2').hover(function(element){
        $("#arrowRep2").attr('src','images/Arrow_3.png');
        $(this).css('background-color', '#FC5938');
    },
    function()
    {
        $("#arrowRep2").attr('src','images/Arrow_2.png');
        $(this).css('background-color', 'transparent');
    }
);


$('#btnPasserDialogue').hover(function(element){
        $("#arrowPasserDialogue").attr('src','images/Arrow_3.png');
        $(this).css('background-color', '#FC5938');
    },
    function()
    {
        $("#arrowPasserDialogue").attr('src','images/Arrow_2.png');
        $(this).css('background-color', 'transparent');
    }
);

$('#boutonFinContexte').hover(function(element){
        // console.log(element.target.id);

        $('.image_arrow').attr('src','images/Arrow_3.png');
        $(this).css('background-color', '#FC5938');
    },
    function()
    {
        $('.image_arrow').attr('src','images/Arrow_2.png');
        $(this).css('background-color', 'transparent');
    }
);

//Survol lieu
$(".lieu").hover((elt)=> {
        var lieuActuel = $("#"+elt.target.id).parent().attr("id");
        if (hideBool[lieuActuel]){
            $("#legende"+lieuActuel).text(lieuActuel);
        }
    },
    (elt)=>{
        var lieuActuel = $("#"+elt.target.id).parent().attr("id");
        $("#legende"+lieuActuel).text("");
    }
);

//Poopup Credit
$("#realisation").on("click",()=>{
    $("#popupCredit").show();
    $("#popupMedia").hide();
    hideBool["logoMedia"] = false;
});

//PopupCredit croix
$(".popupCredit_Croix").on("click",function(){
    $('#popupCredit').hide();
    $("#popupLieu").show();
    hideBool["logoMedia"] = true;
});