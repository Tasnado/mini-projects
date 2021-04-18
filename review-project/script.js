const reviews = [
    {
        name: "Daniel Gowngl",
        src: "./assets/daniel.PNG",
        job: "Senior Analyst",
        text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Unde minima vero obcaecati distinctio, tempore impedit debitis quaerat tempora quidem. Dignissimos architecto quae qui doloribus. Et consequuntur expedita officia consequatur. Libero!"
    },
    {
        name: "Spencer Ywonfs",
        src: "./assets/spencer.PNG",
        job: "Web Developer",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium ad rem nostrum odio est beatae? Eaque, nemo ad dolorum dignissimos atque adipisci natus veniam illo numquam corporis! Commodi, explicabo veniam!"
    },
    {
        name: "Tony Spwan",
        src: "./assets/tony.PNG",
        job: "Teacher",
        text: "Soluta quam eos corrupti distinctio nisi earum, temporibus ad labore quisquam voluptates cumque non corporis ut veritatis voluptas quia et doloribus cum voluptate a in consectetur hic. Quae, neque atque!"
    },
    {
        name: "Tarzine Pensa",
        src: "./assets/tarzine.PNG",
        job: "Police Officer",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore cum laboriosam vero, recusandae nam corrupti sed nostrum, distinctio architecto sint, odit maiores in itaque molestiae eaque veniam molestias eius magnam!"
    }
];

const reviewApp = {};
reviewApp.profileNumber = 0;

reviewApp.displayProfile = () => {
    console.log(reviewApp.profileNumber);
    const profile = reviews[reviewApp.profileNumber];
    
    $('h2').html(profile.name);
    $('img').attr('src', profile.src);
    $('h3').html(profile.job);
    $('p').html(profile.text);
};

reviewApp.scroll = (clickedButton) => {
    if(clickedButton === "leftClick") {
        if(reviewApp.profileNumber <= 0) {
            reviewApp.profileNumber = reviews.length - 1;
        } else {
            reviewApp.profileNumber = reviewApp.profileNumber - 1;
        }
    } else if(clickedButton === "rightClick") {
        if(reviewApp.profileNumber >= reviews.length - 1) {
            reviewApp.profileNumber = 0;
        } else {
            reviewApp.profileNumber = reviewApp.profileNumber + 1;
        }
    }
    console.log(reviewApp.profileNumber);
    reviewApp.displayProfile();
};

reviewApp.init = () => {
    $('button').on('click', function() {
        let clickedButton = $(this).attr("id");
        reviewApp.scroll(clickedButton);
    });
};

$(() => {
    reviewApp.init();
});