const counterApp = {};

// // attach event listeners to the buttons
// counterApp.init = () => {
//     let counter = 0;
//     $('#add').on('click', () => {
//         counter = counter + 1;
//         console.log(counter);
//         $('p').html(counter);
//     });

//     $('#subtract').on('click', () => {
//         counter = counter - 1;
//         console.log(counter);
//         $('p').html(counter);
//     });

//     $('#reset').on('click', () => {
//         counter = 0;
//         console.log(counter);
//         $('p').html(counter);
//     });
// }

// set initial value
let counter = 0;

// update the counter number on page
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

// use the id to add, subtract or reset
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

// another way using elicked button's id
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