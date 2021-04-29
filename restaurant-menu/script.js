// menu items

const menu = [
    {
        title: "Butter Cake",
        category: "cake",
        price: 8.99,
        img: "./assets/butter-cake.png",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta, maiores! Voluptatem corrupti numquam ipsum ea nam, maxime. Qui, hic ullam?"
    },
    {
        title: "Strawberry Slice",
        category: "cake",
        price: 8.99,
        img: "./assets/strawberry-cake.png",
        description: "Facere impedit sint dolore cum odio. Quasi illo voluptatem veritatis animi maiores molestiae at expedita, ipsum exercitationem doloribus aliquam!"
    },
    {
        title: "Choco-Cheese Cake",
        category: "cake",
        price: 8.99,
        img: "./assets/choco-cheese-cake.png",
        description: "Minima incidunt ex eveniet minus expedita ad labore id itaque, sunt cum, accusamus excepturi sed vero tempora adipisci nesciunt reiciendis."
    },
    {
        title: "Warm Brownie",
        category: "iceCream",
        price: 7.99,
        img: "./assets/brownie.png",
        description: "Accusamus perferendis soluta aut molestias velit rem earum laborum ut, vel possimus accusantium pariatur sunt laboriosam quaerat?"
    },
    {
        title: "The Four Seasons",
        category: "iceCream",
        price: 16.99,
        img: "./assets/four-seasons.png",
        description: "Earum quae a autem laborum commodi placeat labore in. Odit alias at nostrum possimus!"
    },
    {
        title: "Donut Sundae",
        category: "iceCream",
        price: 12.99,
        img: "./assets/donut-sundae.png",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis soluta reiciendis nulla autem optio. Dolorum suscipit corrupti voluptatibus veniam enim velit fuga."
    },
    {
        title: "Matcha",
        category: "drink",
        price: 5.99,
        img: "./assets/matcha-tea.png",
        description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquam natus debitis repellat consequuntur unde!"
    },
    {
        title: "Honey Lemon Tea",
        category: "drink",
        price: 5.99,
        img: "./assets/lemon-tea.png",
        description: "Officiis sapiente molestiae exercitationem cum perspiciatis at id rerum aut enim, nobis repudiandae, dolorum."
    },
    {
        title: "Hot Chocolate",
        category: "drink",
        price: 5.99,
        img: "./assets/hot-chocolate.png",
        description: "Iusto eum ut perferendis culpa id natus illo. At ut nisi voluptatum dicta harum quia quaerat, accusantium minima quae!"
    },
    {
        title: "Coffee",
        category: "drink",
        price: 5.99,
        img: "./assets/coffee.png",
        description: "Dignissimos amet, modi similique quia officia, explicabo dolores doloribus aspernatur sed tempore ex! Doloremque voluptatibus ratione deleniti quisquam velit, ea facilis!"
    },
    {
        title: "Limited-edition Soda",
        category: "limited",
        price: 14.99,
        img: "./assets/limited.jpg",
        description: "Dolore repellendus necessitatibus doloribus reiciendis eligendi. Qui reprehenderit debitis voluptates laborum ratione error id voluptas culpa molestias!"
    }
];

const displayMenuItems = (menu) => {
    
    menu.forEach((menu) => {
        const menuDisplay = `
            <div class="item">
                <img src="${menu.img}" alt=${menu.title}.>
                <div class="menuInfo">
                    <div class="title">
                        <h3>${menu.title}</h3>
                        <h3 class="price">$${menu.price}</h3>
                    </div>
                    <p>${menu.description}</p>
                </div>
            </div>
        `

        $('.menuItem').append(menuDisplay);
    });


};

const filterMenu = (userCategory) => {
    // FILTER method
        // returns a new array which satisfies a condition
    const menuCategory = menu.filter((menuItem) => {
        if (userCategory === menuItem.category) {
            return menuItem;
        }
    });
    // console.log(menuCategory);
    if (userCategory === 'showAll') {
        displayMenuItems(menu);
    } else {
        displayMenuItems(menuCategory);
    }
};

const init = () => {
    displayMenuItems(menu);
    $('button').on('click', function() {
        $('.menuItem').empty();
        let buttonId = $(this).attr('id');
        filterMenu(buttonId);
    });
};

$(() => {
    init();
});