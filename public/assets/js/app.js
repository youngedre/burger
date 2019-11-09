$(document).ready(function(){

    $("submit").on("click", function(event) {
        var newBurger = {
            burger_name:  $("#burger").val().trim(),
    devoured: false
};

    // Send the POST request.
    $.ajax("/api/burgers", {
        type: "POST",
        data: newBurger
    }).then(
        function(data) {
            console.log("Added Burger");
            location.reload();
    }
    );
});
$(".container").on("click", "#devour", function(event) {
    console.log($(this))
    var id = $(this).data("burgerid")
    var newDevoured = 1;
    
    console.log(id);
    
    var newBurgerState = {
        id: id,
        devoured: newDevoured
    };
    console.log(newBurgerState)

    $.ajax(`/api/burgers/${id}`, {
        type: "PUT",
        data: newBurgerState
    }).then(
        function(data){
            location.reload();
        }
    )
});
$(".container").on("click", "#undevour", function(event) {
    console.log($(this))
    var id = $(this).data("burgerid")
    var newDevoured = 0;
    
    console.log(id);
    
    var newBurgerState = {
        id: id,
        devoured: newDevoured
    };
    console.log(newBurgerState)

    $.ajax(`/api/burgers/${id}`, {
        type: "PUT",
        data: newBurgerState
    }).then(
        function(data){
            location.reload();
        }
    )
});
});
