/*
* File Created: 2020-01-29 14:11:00
* Author: Pierre MAUPIN
* Copyright - 2020 Pierre MAUPIN
*/


var points = document.getElementsByClassName("point");

function scrollPosition(int){
    for(var i = 0; i < points.length; i++)
        {
            if(points[i].getAttribute("data-place") < int - 1){
                points[i].className = "point selected";
            }
            else if(points[i].getAttribute("data-place") == int - 1){
                points[i].className = "point selected beforeLast";
            }
            else if(points[i].getAttribute("data-place") == int){
                points[i].className = "point selected last";
            }
            else if(points[i].getAttribute("data-place") > int){
                points[i].className = "point";
            }           
        }

}