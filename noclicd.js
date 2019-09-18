// Retourne... rien !
function rien()
{
    return false;
}

// Remplace l'événement "oncontextmenu" (typiquement un clic droit) sur toutes les balises IMG de la page
function noclicd()
{
    var imgs = document.getElementsByTagName("img");
    for(var i=0; i<imgs.length; i++)
        imgs[i].oncontextmenu = rien;
}