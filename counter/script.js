const counterApp = {};

// set initial value
let counter = 0;

// display the counter number on page
counterApp.display = () => {
    if(counter < 0) {
        $('p').css('color', 'red');
    } else if (counter > 0) {
        $('p').css('color', 'blue');
    } else {
        $('p').css('color', 'mediumvioletred');
    }

    $('p').html(counter);
}

// use the id to add, subtract or reset counter
counterApp.calculate = (queryId) => {
    console.log(queryId);
    if(queryId === "add") {
        counter = counter + 1;
    } else if(queryId === "reset") {
        counter = 0;
    } else if(queryId === "subtract") {
        counter = counter - 1;
    };
    counterApp.display();
};

// get the id of the clicked button
counterApp.init = () => {
    // add event listener to the buttons
    $('button').on('click', function() {
        // get the id of the selected button
        let queryId = $(this).attr("id");
        counterApp.calculate(queryId);
    });
};


$(() => {
    counterApp.init();
})
