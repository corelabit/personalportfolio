$(document).ready(function(){

    //portfolio start..................................................................................
    $(".button-2, .button-3, .button-4").click(function(){
        $(".focus").css({
            "position": "relative",
            "display": "flex",
            "justify-content": "center",
            "width": "100%",
            "height": "30px",
            "color": "white",
            "padding": "0px 0px",
            "margin": "12px",
            "margin-bottom": "2px",
            "background": "#131419",
            "border": "none",
            "border-radius": "25px",
            "font-family": "Arial, black",
            "font-weight": "600",
            "font-size": "15px !important",
            "padding-top": "4px !important",
            "outline": "none !important",
            "border-style": "none",
            "box-shadow": "-2px -2px 6px rgba(255, 255, 255, 0.1),2px 2px 6px rgba(0, 0, 0, 0.8)" 
        });
    });




    $(".button-1").click(function(){
        $(".js-1, .js-2, .js-3, .js-4, .js-5, .js-6").css({
            "opacity" : "1"
        });

        $(".focus").css({
            "outline": "0",
            "color": "#212529",
            "box-shadow": "none",
            "box-shadow": "inset -2px -2px 6px rgba(255, 255, 255, 0.1),inset 2px 2px 6px rgba(0, 0, 0, 0.8)",    
            "transform": "scale(0.99) !important",
            "color" : "#5b758f"
        });
    });

    
    $(".button-2").click(function(){
        $(".js-5, .js-6").css({
            "opacity" : "0.3"
        });
        $(".js-1, .js-2, .js-3, .js-4").css({
            "opacity" : "1"
        });
        
    });


    $(".button-3").click(function(){
        $(".js-4, .js-2").css({
            "opacity" : "0.3"
        });

        $(".js-5, .js-1, .js-3, .js-6").css({
            "opacity" : "1"
        });

    });


    $(".button-4").click(function(){
        $(".js-2, .js-5, .js-3").css({
            "opacity" : "0.3"
        });
        
        $(".js-1, .js-4, .js-6").css({
            "opacity" : "1"
        });

    });





    //for tooltip..........................................................................................................
    $('[data-toggle="tooltip"]').tooltip();




    //main menu............................................................................................................
    $("#b1, #b2, #b3, #b4, #b5, #b6").click(function(){
        $(this).css({
            "box-shadow":"inset -2px -2px 6px rgba(255, 255, 255, 0.1), inset 2px 2px 6px rgba(0, 0, 0, 0.8)",
            "outline": "none !important",
            "color": "#5b758f",
            "box-shadow": "none",
            "box-shadow":" 0 0 10px #1DA1F2",
            "transform": "scale(0.99) !important"
        });
    });

    $("#b1").click(function(){
        
        $("#b2, #b3, #b4, #b5, #b6").css({
            "position": "relative",
            "display": "flex",
            "justify-content": "space-between",
            "width": "100%",
            "height": "29px",
            "color": "white",
            "padding": "0px 0px",
            "margin": "5px",
            "background": "#131419",
            "border": "none",
            "border-radius": "25px",
            "font-family": "Arial, black",
            "font-weight": "100",
            "font-size": "20px !important",
            "padding-bottom": "2px !important",
            "outline": "none !important",
            "border-style": "none",
            "box-shadow": "-2px -2px 6px rgba(255, 255, 255, 0.1),2px 2px 6px rgba(0, 0, 0, 0.8)",
            "transform": "scale(0.97) !important"
        });
        
    });

    //second button.......................................................................................
    $("#b2").click(function(){
        
        $("#b1, #b3, #b4, #b5, #b6").css({
            "position": "relative",
            "display": "flex",
            "justify-content": "space-between",
            "width": "100%",
            "height": "29px",
            "color": "white",
            "padding": "0px 0px",
            "margin": "5px",
            "background": "#131419",
            "border": "none",
            "border-radius": "25px",
            "font-family": "Arial, black",
            "font-weight": "100",
            "font-size": "20px !important",
            "padding-bottom": "2px !important",
            "outline": "none !important",
            "border-style": "none",
            "box-shadow": "-2px -2px 6px rgba(255, 255, 255, 0.1),2px 2px 6px rgba(0, 0, 0, 0.8)",
            "transform": "scale(0.97) !important"
        });
    });

    //third button...........................................................................................
    $("#b3").click(function(){
        
        $("#b1, #b2, #b4, #b5, #b6").css({
            "position": "relative",
            "display": "flex",
            "justify-content": "space-between",
            "width": "100%",
            "height": "29px",
            "color": "white",
            "padding": "0px 0px",
            "margin": "5px",
            "background": "#131419",
            "border": "none",
            "border-radius": "25px",
            "font-family": "Arial, black",
            "font-weight": "100",
            "font-size": "20px !important",
            "padding-bottom": "2px !important",
            "outline": "none !important",
            "border-style": "none",
            "box-shadow": "-2px -2px 6px rgba(255, 255, 255, 0.1),2px 2px 6px rgba(0, 0, 0, 0.8)",
            "transform": "scale(0.97) !important"
        });
    });

    //fourth button...........................................................................................
    $("#b4").click(function(){
        
        $("#b1, #b2, #b3, #b5, #b6").css({
            "position": "relative",
            "display": "flex",
            "justify-content": "space-between",
            "width": "100%",
            "height": "29px",
            "color": "white",
            "padding": "0px 0px",
            "margin": "5px",
            "background": "#131419",
            "border": "none",
            "border-radius": "25px",
            "font-family": "Arial, black",
            "font-weight": "100",
            "font-size": "20px !important",
            "padding-bottom": "2px !important",
            "outline": "none !important",
            "border-style": "none",
            "box-shadow": "-2px -2px 6px rgba(255, 255, 255, 0.1),2px 2px 6px rgba(0, 0, 0, 0.8)",
            "transform": "scale(0.97) !important"
        });
    });

    //fifth button.............................................................................................
    $("#b5").click(function(){
        
        $("#b1, #b2, #b3, #b4, #b6").css({
            "position": "relative",
            "display": "flex",
            "justify-content": "space-between",
            "width": "100%",
            "height": "29px",
            "color": "white",
            "padding": "0px 0px",
            "margin": "5px",
            "background": "#131419",
            "border": "none",
            "border-radius": "25px",
            "font-family": "Arial, black",
            "font-weight": "100",
            "font-size": "20px !important",
            "padding-bottom": "2px !important",
            "outline": "none !important",
            "border-style": "none",
            "box-shadow": "-2px -2px 6px rgba(255, 255, 255, 0.1),2px 2px 6px rgba(0, 0, 0, 0.8)",
            "transform": "scale(0.97) !important"
        });
        
    });

    //sixth button................................................................................................
    $("#b6").click(function(){
        
        $("#b1, #b2, #b3, #b4, #b5").css({
            "position": "relative",
            "display": "flex",
            "justify-content": "space-between",
            "width": "100%",
            "height": "29px",
            "color": "white",
            "padding": "0px 0px",
            "margin": "5px",
            "background": "#131419",
            "border": "none",
            "border-radius": "25px",
            "font-family": "Arial, black",
            "font-weight": "100",
            "font-size": "20px !important",
            "padding-bottom": "2px !important",
            "outline": "none !important",
            "border-style": "none",
            "box-shadow": "-2px -2px 6px rgba(255, 255, 255, 0.1),2px 2px 6px rgba(0, 0, 0, 0.8)",
            "transform": "scale(0.97) !important"
        });
        
    });

    

    
});
