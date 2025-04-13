

function App() {
  
  return (
    <div className="bg-gray-100 min-h-screen flex flex-col">
        {/* Header Section */}
        <header className="bg-white shadow-md py-4">
            <div className="container mx-auto flex justify-between items-center px-4">
                <img src="./Lab_01/Group 9.png" alt="" />
                <div className="flex items-center justify-start gap-3">
                  <input type="text" placeholder="What would you like to cook?" size={30}/>
                </div>
                <nav className="hidden md:flex space-x-6">
                    <a href="#" className="text-gray-700 hover:text-orange-500 transition-colors">What to cook</a>
                    <a href="#" className="text-gray-700 hover:text-orange-500 transition-colors">Recipes</a>
                    <a href="#" className="text-gray-700 hover:text-orange-500 transition-colors">Ingredients</a>
                    <a href="#" className="text-gray-700 hover:text-orange-500 transition-colors">Occasions</a>
                    <a href="#" className="text-gray-700 hover:text-orange-500 transition-colors">About Us</a>
                </nav>
                <div className="flex space-x-4">
                    <a href="#" className="text-gray-700 hover:text-orange-500 transition-colors">Login</a>
                    <button className="bg-orange-500 text-white px-6 py-2 rounded hover:bg-orange-600 transition-colors">
                        Subscribe
                    </button>
                </div>
            </div>
        </header>

        {/* Main Content Section */}
        <main className="container mx-auto flex flex-col md:flex-row items-center justify-center px-4 py-8 flex-grow
        bg-[url('./Lab_01/Image 73.png')]">
            {/* Text Content */}
            <div className="md:w-1/2 md:pr-8 flex flex-col items-start">
                <div className="bg-white rounded-lg shadow-lg p-6 mt-8 md:mt-0">
                    <h2 className="text-xl font-semibold text-orange-500 mb-2">Recipe of the day</h2>
                    <h3 className="text-2xl font-bold text-gray-800 mb-2">Salad Caprese</h3>
                    <p className="text-gray-600 mb-4">
                        Classic Italian Salad Caprese: ripe tomatoes, fresh mozzarella, herbs, olive oil, and balsamic vinegar
                        create a refreshing dish for lunch or appetizer.
                    </p>
                    <a href="#" className="text-orange-500 hover:text-orange-600 transition-colors font-semibold flex items-center">
                        View now →
                    </a>
                </div>
            </div>

            {/* Image Content */}
            <div className="md:w-1/2">
                {/* The image URL should be replaced with a real URL. */}
                <img
                    src="./Lab_01/Image 73.png"
                    alt="Chef preparing Salad Caprese"
                    className="rounded-lg shadow-lg w-full"
                />
            </div>
        </main>

                    {/* This Summer Recipes Section */}
                    <section className="bg-gray-100 py-8">
                <div className="container mx-auto px-4">
                    <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">This Summer Recipes</h2>
                    <p className="text-gray-600 text-center mb-8">We have all your Independence Day sweets covered.</p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
                        {/* Recipe Card 1 */}
                        <div className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col">
                            <div className="relative">
                                <img
                                    src="https://plus.unsplash.com/premium_photo-1664647312019-b9f195808479?q=80&w=3270&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                                    alt="Italian-style tomato salad"
                                    className="w-full h-48 object-cover"
                                />
                                 <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-40 p-2 text-white text-xs">Italian tomato salad</div>
                            </div>
                            <div className="p-4 flex-grow flex items-end">
                                <a href="#" className="text-gray-700 hover:text-orange-500 transition-colors font-semibold">View Recipe</a>
                            </div>
                        </div>

                        {/* Recipe Card 2 */}
                        <div className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col">
                            <div className="relative">
                                <img
                                    src="https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?q=80&w=3270&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                                    alt="Spaghetti with vegetables and shrimp"
                                    className="w-full h-48 object-cover"
                                />
                                 <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-40 p-2 text-white text-xs">Spaghetti with vegetables</div>
                            </div>
                            <div className="p-4 flex-grow flex items-end">
                                 <a href="#" className="text-gray-700 hover:text-orange-500 transition-colors font-semibold">View Recipe</a>
                            </div>
                        </div>

                        {/* Recipe Card 3 */}
                        <div className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col">
                            <div className="relative">
                                 <img
                                    src="https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?q=80&w=3280&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                                    alt="Lotus delight salad"
                                    className="w-full h-48 object-cover"
                                />
                                <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-40 p-2 text-white text-xs">Lotus delight salad</div>
                            </div>
                            <div className="p-4 flex-grow flex items-end">
                                <a href="#" className="text-gray-700 hover:text-orange-500 transition-colors font-semibold">View Recipe</a>
                            </div>
                        </div>

                        {/* Recipe Card 4 */}
                        <div className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col">
                            <div className="relative">
                                <img
                                    src="https://images.unsplash.com/photo-1563720385-f1551557579c?q=80&w=3270&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                                    alt="Snack cakes"
                                    className="w-full h-48 object-cover"
                                />
                                <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-40 p-2 text-white text-xs">Snack cakes</div>
                            </div>
                            <div className="p-4 flex-grow flex items-end">
                                <a href="#" className="text-gray-700 hover:text-orange-500 transition-colors font-semibold">View Recipe</a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

             {/* Recipes with Videos Section */}
             <section className="bg-gray-100 py-8">
                <div className="container mx-auto px-4">
                    <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">Recipes With Videos</h2>
                    <p className="text-gray-600 text-center mb-8">Cooking Up Culinary Creations with Step-by-Step Videos</p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
                        {/* Recipe Card 1 */}
                         <div className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col">
                            <div className="relative">
                                <img
                                    src="https://images.unsplash.com/photo-1512621776951-a57141f2eefd?q=80&w=3270&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                                    alt="Salad with cabbage and shrimp"
                                    className="w-full h-48 object-cover"
                                />
                            </div>
                            <div className="p-4 flex-grow flex items-end">
                                <a href="#" className="text-gray-700 hover:text-orange-500 transition-colors font-semibold">View Recipe</a>
                            </div>
                        </div>

                        {/* Recipe Card 2 */}
                        <div className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col">
                            <div className="relative">
                                <img
                                    src="https://images.unsplash.com/photo-1594282405331-f1cd11b49279?q=80&w=3270&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                                    alt="Salad of cove beans, shrimp and potatoes"
                                    className="w-full h-48 object-cover"
                                />
                            </div>
                            <div className="p-4 flex-grow flex items-end">
                                 <a href="#" className="text-gray-700 hover:text-orange-500 transition-colors font-semibold">View Recipe</a>
                            </div>
                        </div>

                        {/* Recipe Card 3 */}
                        <div className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col">
                            <div className="relative">
                                <img
                                    src="https://images.unsplash.com/photo-1555081534-5f5159491a65?q=80&w=3270&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                                    alt="Sunny-side up fried egg"
                                    className="w-full h-48 object-cover"
                                />
                            </div>
                             <div className="p-4 flex-grow flex items-end">
                                <a href="#" className="text-gray-700 hover:text-orange-500 transition-colors font-semibold">View Recipe</a>
                            </div>
                        </div>

                        {/* Recipe Card 4 */}
                        <div className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col">
                            <div className="relative">
                                <img
                                    src="https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?q=80&w=3280&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                                    alt="Lotus delight salad"
                                    className="w-full h-48 object-cover"
                                />
                            </div>
                            <div className="p-4 flex-grow flex items-end">
                                <a href="#" className="text-gray-700 hover:text-orange-500 transition-colors font-semibold">View Recipe</a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        {/* Editor's Pick Section */}
        <section className="bg-gray-100 py-8">
                <div className="container mx-auto px-4">
                    <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">Editor's Pick</h2>
                    <p className="text-gray-600 text-center mb-8">Curated Culinary Delights: Handpicked Favorites by Our Expert Editors!</p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
                        {/* Recipe Card 1 */}
                        <div className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col">
                            <div className="relative">
                                <img
                                    src="https://images.unsplash.com/photo-1627645164744-4542d774b117?q=80&w=3174&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                                    alt="Stuffed sticky rice ball"
                                    className="w-full h-48 object-cover"
                                />
                            </div>
                            <div className="p-4">
                                <h3 className="text-lg font-semibold text-gray-800 mb-2">Stuffed sticky rice ball</h3>
                                <p className="text-gray-600 text-sm mb-2">34 minutes</p>
                                <p className="text-gray-700 text-sm">Jennifer King</p>
                                <p className="text-gray-600 text-sm mt-2">
                                    A delightful Asian treat with chewy, glutinous rice and a flavorful surprise filling.
                                </p>
                            </div>
                        </div>

                        {/* Recipe Card 2 */}
                        <div className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col">
                            <div className="relative">
                                <img
                                    src="https://images.unsplash.com/photo-1505253716362-afaea1d3d1af?q=80&w=3270&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                                    alt="Strawberry smoothie"
                                    className="w-full h-48 object-cover"
                                />
                            </div>
                            <div className="p-4">
                                <h3 className="text-lg font-semibold text-gray-800 mb-2">Strawberry smoothie</h3>
                                <p className="text-gray-600 text-sm mb-2">40 minutes</p>
                                <p className="text-gray-700 text-sm">Matthew Martinez</p>
                                <p className="text-gray-600 text-sm mt-2">
                                    Savor the refreshing delight of a strawberry smoothie. Made with ripe strawberries...
                                </p>
                            </div>
                        </div>

                        {/* Recipe Card 3 */}
                        <div className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col">
                            <div className="relative">
                                <img
                                    src="https://images.unsplash.com/photo-1586040235942-5f317514e598?q=80&w=3270&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                                    alt="Latte Art"
                                    className="w-full h-48 object-cover"
                                />
                            </div>
                            <div className="p-4">
                                <h3 className="text-lg font-semibold text-gray-800 mb-2">Latte Art</h3>
                                <p className="text-gray-600 text-sm mb-2">15 minutes</p>
                                <p className="text-gray-700 text-sm">Sarah Hill</p>
                                <p className="text-gray-600 text-sm mt-2">
                                    Latte art is the skillful craft of creating captivating designs on the surface of a latte...
                                </p>
                            </div>
                        </div>

                        {/* Recipe Card 4 */}
                        <div className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col">
                            <div className="relative">
                                <img
                                    src="https://images.unsplash.com/photo-1626080308404-1779871595ff?q=80&w=3270&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                                    alt="Butter fried noodles"
                                    className="w-full h-48 object-cover"
                                />
                            </div>
                            <div className="p-4">
                                <h3 className="text-lg font-semibold text-gray-800 mb-2">Butter fried noodles</h3>
                                <p className="text-gray-600 text-sm mb-2">20 minutes</p>
                                <p className="text-gray-700 text-sm">Julia Lopez</p>
                                <p className="text-gray-600 text-sm mt-2">
                                    Butter fried noodles: Savory noodles cooked in butter for a delicious and satisfying meal...
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* About Us and Footer Section */}
            <footer className="bg-gray-800 py-6">
                <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8 text-white">
                    {/* About Us Section */}
                    <div>
                        <h3 className="text-lg font-semibold mb-4">About Us</h3>
                        <p className="text-gray-300 text-sm mb-4">
                            Welcome to our website, a wonderful place to explore and learn how to cook like a pro.
                        </p>
                        <div className="flex items-center mb-4">
                            <input
                                type="email"
                                placeholder="Enter your email"
                                className="bg-gray-700 text-white text-sm rounded-l-md px-4 py-2 focus:outline-none w-3/4"
                            />
                            <button className="bg-orange-500 text-white rounded-r-md px-4 py-2 text-sm hover:bg-orange-600 transition-colors">
                                Send
                            </button>
                        </div>
                        <p className="text-gray-400 text-xs">
                            © {new Date().getFullYear()} Chefify Company. <a href="#" className="text-orange-500 hover:underline">Terms of Service</a> / <a href="#" className="text-orange-500 hover:underline">Privacy Policy</a>
                        </p>
                    </div>

                    {/* Learn More Section */}
                    <div>
                        <h3 className="text-lg font-semibold mb-4">Learn More</h3>
                        <ul className="text-gray-300 text-sm space-y-2">
                            <li><a href="#" className="hover:text-orange-500 transition-colors">Our Cooks</a></li>
                            <li><a href="#" className="hover:text-orange-500 transition-colors">See Our Features</a></li>
                            <li><a href="#" className="hover:text-orange-500 transition-colors">FAQ</a></li>
                            <li><a href="#" className="hover:text-orange-500 transition-colors">Shop</a></li>
                            <li><a href="#" className="hover:text-orange-500 transition-colors">Gift Subscription</a></li>
                            <li><a href="#" className="hover:text-orange-500 transition-colors">Send Us Feedback</a></li>
                        </ul>
                    </div>

                    {/* Recipes Section */}
                    <div>
                        <h3 className="text-lg font-semibold mb-4">Recipes</h3>
                        <ul className="text-gray-300 text-sm space-y-2">
                            <li><a href="#" className="hover:text-orange-500 transition-colors">What to Cook This Week</a></li>
                            <li><a href="#" className="hover:text-orange-500 transition-colors">Pasta</a></li>
                            <li><a href="#" className="hover:text-orange-500 transition-colors">Dinner</a></li>
                            <li><a href="#" className="hover:text-orange-500 transition-colors">Healthy</a></li>
                            <li><a href="#" className="hover:text-orange-500 transition-colors">Vegetarian</a></li>
                             <li><a href="#" className="hover:text-orange-500 transition-colors">Vegan</a></li>
                            <li><a href="#" className="hover:text-orange-500 transition-colors">Christmas</a></li>
                        </ul>
                    </div>
                </div>
            </footer>
    </div>
);
}

export default App
