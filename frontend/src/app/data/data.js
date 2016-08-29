var $ = require('jquery')

module.exports = function recipeService () {

    var findById = function (id) {
            var deferred = $.Deferred();
            var recipe = null;
            var l = recipes.length;
            for (var i = 0; i < l; i++) {
                if (recipes[i].id == id) {
                    recipe = recipes[i];
                    break;
                }
            }
            deferred.resolve(recipe);
            return deferred.promise();
        },

        findByName = function (searchKey) {
            var deferred = $.Deferred();
            var results = searchKey.lenght == 0? recipes : recipes.filter(function (element) {
                var fullName = element.name + " " + element.chef;
                return fullName.toLowerCase().indexOf(searchKey.toLowerCase()) > -1;
            });
            deferred.resolve(results);
            return deferred.promise();
        },

        findByCategory = function (category) {
            var deferred = $.Deferred();
            console.log("data.js find by cat "+category);
            var results = category === "All recipes"? recipes : recipes.filter(function (element) {
                return element.category === category;
            });
            deferred.resolve(results);
            return deferred.promise();
        },

        recipes = [
            {id: 1, name: "Home Made Bolognese Pasta",  category: "Pasta", chef: "Roger Rabit", preparation: "Chop the tomatoes, mix the water with the flour…..enjoy",
            	ingredients:[{ingredient:"Tomatoes", amount:"3"},
            				   {ingredient:"Water", amount:"1L"},
            				   {ingredient:"Flour", amount:"500g"},
            	]},
            {id: 2, name: "Cheesy Pizza",  category: "Pasta", chef: "Moot", preparation: "Put cheese on the pizza",
            	ingredients:[{ingredient:"Cheese", amount:"A lot"},
            				   {ingredient:"Pizza", amount:"1"},
            	]},
            {id: 3, name: "Penne en salsa",  category: "Pasta", chef: "Roger Rabit", preparation: "Dip the pennes in the slsa",
            	ingredients:[{ingredient:"Pennes", amount:"3"},
            				   {ingredient:"Salsa", amount:"1L"},
            				   {ingredient:"Cheese", amount:"500g"},
            	]},
            {id: 4, name: "Cabage salad",  category: "Salad", chef: "Lord Saladin", preparation: "salad the cabage",
            	ingredients:[{ingredient:"Cabages", amount:"3"},
            				   {ingredient:"Water", amount:"1L"},
            				   {ingredient:"Flour", amount:"500g"},
            	]},
            {id: 5, name: "Tomato Salad",  category: "Salad", chef: "Lord Saladin", preparation: "salad the tomatoes",
            	ingredients:[{ingredient:"Tomatoes", amount:"3"},
            				   {ingredient:"Water", amount:"1L"},
            				   {ingredient:"Flour", amount:"500g"},
            	]},
            {id: 6, name: "People Salad",  category: "Salad", chef: "Lord Saladin", preparation: "salad the people",
            	ingredients:[{ingredient:"People", amount:"a lot"},
            	]},
            {id: 7, name: "Beef",  category: "Meat", chef: "Beefy", preparation: "chop the cow",
            	ingredients:[{ingredient:"Cow", amount:"1"},
            	]},
            {id: 8, name: "Fish",  category: "Meat", chef: "Fishy", preparation: "Chop the fish",
            	ingredients:[{ingredient:"Fish", amount:"1"},
            	]},
            {id: 9, name: "Chicken",  category: "Meat", chef: "Chicken", preparation: "Chop the chicken",
            	ingredients:[{ingredient:"Chicken", amount:"3"},
            	]},
            {id: 10, name: "Brownies",  category: "Dessert", chef: "Roger Rabit", preparation: "brownies or something",
            	ingredients:[{ingredient:"Chocolate", amount:"3"},
            				   {ingredient:"Water", amount:"1L"},
            				   {ingredient:"Flour", amount:"500g"},
            	]},
            {id: 11, name: "Cake",  category: "Dessert", chef: "Roger Rabit", preparation: "cake or something",
            	ingredients:[{ingredient:"Sugar", amount:"3 cups"},
            				   {ingredient:"Water", amount:"1L"},
            				   {ingredient:"Flour", amount:"500g"},
            	]},
        ];

    // The public API
    return {
        findById: findById,
        findByName: findByName,
        findByCategory: findByCategory
    };

};
