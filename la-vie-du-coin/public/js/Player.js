class Player {
    
    constructor(idPlayer) {
        this.idPlayer = idPlayer;

        if(this.idPlayer == 1)this.name = "Camille";
        
        if(this.idPlayer == 2) this.name = "Sam";
        
        else this.name = "Alex";


        this.listImage = new Map();
        this.listText = new Map();
        this.listBackground = new Map();
        this.listSon = new Map();
    }    

    loadBackground(playerImage) {
        //On ajoute chaque image à la map en mettant comme key le nom du fichier et comme value l'url de l'image
        this.listBackground.set(playerImage.idImage, this.idPlayer+"/"+playerImage.URL);

    }

    loadImage(playerImage)
    {
        this.listImage.set(playerImage.idImage, this.idPlayer+"/"+playerImage.URL);
    }

    loadSon(playerSon)
    {
        this.listSon.set(playerSon.idSon, this.idPlayer+"/"+playerSon.URL);
    }



    loadTextes()
    {
        var req_ajax = $.ajax({
            url: "./textes/"+this.idPlayer+"/Dialogues.json",
            type: 'GET',
            async: false,
            error: function(){
                return true;
            },
            success: function(_data){ 
               return _data;
            }
        });
        var data = JSON.parse(req_ajax.responseText);
        console.log(data);

        for(var i = 0; i < data.dialogues.length; i++)
        {   
            this.listText.set(data.dialogues[i].id, data.dialogues[i].texte);
        }
        
    }
    
    build() {
        for (var [key, value] of this.listBackground) {
            $('#'+key).css("background-image","url('./image/"+value+"')");            
        }

        for (var [key, value] of this.listSon) {
            $('#'+key).attr("src", "./son/"+value);
        }

        for(var [key, value] of this.listImage)
        {
            $('#'+key).attr("src", "./image/"+value);
        }

        for (var [key, value] of this.listText) {
            $('#'+key).html(value);                    
          }
    }
}
