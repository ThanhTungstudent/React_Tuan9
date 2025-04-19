function App() {
  return (
    <div className="bg-gray-100 min-h-screen flex flex-col">
      {/* Header Section */}
      <header className="bg-white shadow-md py-4">
        <div className="mx-auto flex justify-between items-center px-4">
          <img src="./Lab_01/Group 9.png" alt="" />
          <div className="flex items-center justify-start gap-3">
            <img src="./Lab_01/search.png" alt="" />
            <input
              type="text"
              placeholder="What would you like to cook?"
              size={30}
            />
          </div>
          <nav className="hidden md:flex space-x-6">
            <a
              href="#"
              className="text-gray-700 hover:text-orange-500 transition-colors"
            >
              What to cook
            </a>
            <a
              href="#"
              className="text-gray-700 hover:text-orange-500 transition-colors"
            >
              Recipes
            </a>
            <a
              href="#"
              className="text-gray-700 hover:text-orange-500 transition-colors"
            >
              Ingredients
            </a>
            <a
              href="#"
              className="text-gray-700 hover:text-orange-500 transition-colors"
            >
              Occasions
            </a>
            <a
              href="#"
              className="text-gray-700 hover:text-orange-500 transition-colors"
            >
              About Us
            </a>
          </nav>
          <div className="flex space-x-5 items-center justify-center">
            <div className="bg-pink-100 px-6 py-2 rounded-xl">
              <button>
                <a
                  href="#"
                  className="text-pink-400 hover:text-orange-500 transition-colors"
                >
                  Login
                </a>
              </button>
            </div>
            <div>
              <button
                className="bg-pink-600 text-white px-6 py-2 rounded-xl hover:bg-orange-600 
                    transition-colors"
              >
                <a
                  href="#"
                  className="text-white hover:text-orange-500 transition-colors"
                >
                  Subscribe
                </a>
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content Section */}
      <main className="w-full min-h-[670px] bg-[url('/Lab_01/Image73.png')] bg-cover bg-center relative">
        {/* Text Content */}
        <div
          className="flex flex-col items-start relative top-30 left-30 w-120 bg-white p-5 rounded-xl border-2
        border-dotted border-pink-400"
        >
          <div className="bg-yellow-500 rounded-lg shadow-lg p-3 relative -top-12 left-18 w-[70%]">
            <h2 className="text-xl font-semibold text-orange-500 mb-2 text-center">
              Recipe of the day
            </h2>
          </div>
          <div className="flex items-center justify-center w-full mt-5">
            <h3 className="text-2xl font-bold text-pink-600 mb-2">
              Salad Caprese
            </h3>
          </div>
          <div className="w-full flex items-center justify-between mt-5">
            <p className="text-gray-600 mb-4 text-center">
              Classic Italian Salad Caprese: ripe tomatoes, fresh mozzarella,
              herbs, olive oil, and balsamic vinegar create a refreshing dish
              for lunch or appetizer.
            </p>
          </div>
          <div className="w-full flex flex-col space-y-5 items-center justify-center mt-20">
            <img src="/Lab_01/avatar.png" alt="" />
            <p>Salad Caprese</p>
            <button className="bg-pink-500 p-2 rounded-xl">
              <a
                href="#"
                className="text-white hover:text-orange-600 transition-colors 
                    font-semibold flex items-center"
              >
                View now →
              </a>
            </button>
          </div>
        </div>
      </main>

      {/* This Summer Recipes Section */}
      <section className="bg-gray-100 py-8">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold text-pink-600 mb-6 text-center">
            This Summer Recipes
          </h2>
          <p className="text-gray-600 text-center mb-8">
            We have all your Independence Day sweets covered.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            {/* Recipe Card 1 */}
            <div
              className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col
            h-95 "
            >
              <div>
                <img
                  src="/Lab_01/Italian-style tomato.png"
                  alt="Italian-style tomato salad"
                  className="w-full h-48 object-cover"
                />
              </div>
              <div className="grid grid-cols-4 mt-3">
                <div className="col-span-3 flex items-center pl-3">
                  <p className="text-xl text-black font-bold">
                    Italian-style tomato salad
                  </p>
                </div>
                <div className="col-span-1 flex items-start justify-center">
                  <img src="/Lab_01/Icon Button 73.png" alt="" />
                </div>
              </div>
              <div
                className="p-2 flex items-end bg-pink-300 w-25 rounded-xl relative 
              -bottom-17 left-2"
              >
                <p className="text-pink-600">14 minutes</p>
              </div>
            </div>

            {/* Recipe Card 2 */}
            <div
              className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col
            h-95 "
            >
              <div>
                <img
                  src="/Lab_01/Vegetable and shrimp spaghetti.png"
                  alt="Italian-style tomato salad"
                  className="w-full h-48 object-cover"
                />
              </div>
              <div className="grid grid-cols-4 mt-3">
                <div className="col-span-3 flex items-start pl-3">
                  <p className="text-xl text-black font-bold">
                    Spaghetti with vegetables and shrimp
                  </p>
                </div>
                <div className="col-span-1 flex items-start justify-center">
                  <img src="/Lab_01/Icon Button 73.png" alt="" />
                </div>
              </div>
              <div
                className="p-2 flex items-end bg-pink-300 w-25 rounded-xl relative 
              -bottom-10 left-2"
              >
                <p className="text-pink-600">15 minutes</p>
              </div>
            </div>

            {/* Recipe Card 3 */}
            <div
              className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col
            h-95 "
            >
              <div>
                <img
                  src="/Lab_01/Lotus delight salad.png"
                  alt="Italian-style tomato salad"
                  className="w-full h-48 object-cover"
                />
              </div>
              <div className="grid grid-cols-4 mt-3">
                <div className="col-span-3 flex items-center pl-3 pr-10">
                  <p className="text-xl text-black font-bold">
                    Lotus delight salad
                  </p>
                </div>
                <div className="col-span-1 flex items-start justify-center">
                  <img src="/Lab_01/Icon Button 73.png" alt="" />
                </div>
              </div>
              <div
                className="p-2 flex items-end bg-pink-300 w-25 rounded-xl relative 
              -bottom-17 left-2"
              >
                <p className="text-pink-600">20 minutes</p>
              </div>
            </div>

            {/* Recipe Card 4 */}
            <div
              className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col
            h-95 "
            >
              <div>
                <img
                  src="/Lab_01/Snack cakes.png"
                  alt="Italian-style tomato salad"
                  className="w-full h-48 object-cover"
                />
              </div>
              <div className="grid grid-cols-4 mt-3">
                <div className="col-span-3 flex items-start pl-3">
                  <p className="text-xl text-black font-bold">Snack cakes</p>
                </div>
                <div className="col-span-1 flex items-start justify-center">
                  <img src="/Lab_01/Icon Button 73.png" alt="" />
                </div>
              </div>
              <div
                className="p-2 flex items-end bg-pink-300 w-25 rounded-xl relative 
              -bottom-22 left-2"
              >
                <p className="text-pink-600">21 minutes</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Recipes with Videos Section */}
      <section className="bg-gray-100 py-8">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold text-pink-600 mb-6 text-center">
            Recipes With Videos
          </h2>
          <p className="text-gray-600 text-center mb-8">
            Cooking Up Culinary Creations with Step-by-Step Videos
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            {/* Recipe Card 1 */}
            <div
              className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col
            h-95 "
            >
              <div>
                <img
                  src="/Lab_01/Salad with cabbage.png"
                  alt="Italian-style tomato salad"
                  className="w-full h-48 object-cover"
                />
              </div>
              <div className="grid grid-cols-4 mt-3">
                <div className="col-span-3 flex items-start pl-3">
                  <p className="text-xl text-black font-bold">
                    Salad with cabbage and shrimp
                  </p>
                </div>
                <div className="col-span-1 flex items-start justify-center">
                  <img src="/Lab_01/Icon Button 73.png" alt="" />
                </div>
              </div>
              <div
                className="p-2 flex items-end bg-pink-300 w-25 rounded-xl relative 
              -bottom-17 left-2"
              >
                <p className="text-pink-600">32 minutes</p>
              </div>
            </div>

            {/* Recipe Card 2 */}
            <div
              className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col
            h-95 "
            >
              <div>
                <img
                  src="/Lab_01/Bean, shrimp, and potato salad.png"
                  alt="Italian-style tomato salad"
                  className="w-full h-48 object-cover"
                />
              </div>
              <div className="grid grid-cols-4 mt-3">
                <div className="col-span-3 flex items-start pl-3">
                  <p className="text-xl text-black font-bold">
                    Salad of cove beans, shrimp and potatoes
                  </p>
                </div>
                <div className="col-span-1 flex items-start justify-center">
                  <img src="/Lab_01/Icon Button 73.png" alt="" />
                </div>
              </div>
              <div
                className="p-2 flex items-end bg-pink-300 w-25 rounded-xl relative 
              -bottom-17 left-2"
              >
                <p className="text-pink-600">20 minutes</p>
              </div>
            </div>

            {/* Recipe Card 3 */}
            <div
              className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col
            h-95 "
            >
              <div>
                <img
                  src="/Lab_01/Sunny-side up fried eggs.png"
                  alt="Italian-style tomato salad"
                  className="w-full h-48 object-cover"
                />
              </div>
              <div className="grid grid-cols-4 mt-3">
                <div className="col-span-3 flex items-start pl-3">
                  <p className="text-xl text-black font-bold">
                    Sunny-side up fried eggs
                  </p>
                </div>
                <div className="col-span-1 flex items-start justify-center">
                  <img src="/Lab_01/Icon Button 73.png" alt="" />
                </div>
              </div>
              <div
                className="p-2 flex items-end bg-pink-300 w-25 rounded-xl relative 
              -bottom-17 left-2"
              >
                <p className="text-pink-600">15 minutes</p>
              </div>
            </div>

            {/* Recipe Card 4 */}
            <div
              className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col
            h-95 "
            >
              <div>
                <img
                  src="/Lab_01/Lotus delight salad_01.png"
                  alt="Italian-style tomato salad"
                  className="w-full h-48 object-cover"
                />
              </div>
              <div className="grid grid-cols-4 mt-3">
                <div className="col-span-3 flex items-start pl-3">
                  <p className="text-xl text-black font-bold">
                    Lotus delight salad
                  </p>
                </div>
                <div className="col-span-1 flex items-start justify-center">
                  <img src="/Lab_01/Icon Button 73.png" alt="" />
                </div>
              </div>
              <div
                className="p-2 flex items-end bg-pink-300 w-25 rounded-xl relative 
              -bottom-22 left-2"
              >
                <p className="text-pink-600">20 minutes</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Editor's Pick Section */}
      <section className="bg-gray-100 py-8">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold text-pink-600 mb-6 text-center">
            Editor's Pick
          </h2>
          <p className="text-gray-600 text-center mb-8">
            Curated Culinary Delights: Handpicked Favorites by Our Expert
            Editors!
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-1 md:grid-cols-2 gap-6">
            {/* Recipe Card 1 */}
            <div
              className="bg-white rounded-xl border border-dashed border-gray-300 p-4 flex items-start 
            gap-4 h-60"
            >
              <img
                src="https://img.buzzfeed.com/thumbnailer-prod-us-east-1/video-api/assets/223567.jpg"
                alt="Stuffed sticky rice ball"
                className="w-50 h-50 rounded-lg object-cover"
              />
              <div className="flex flex-col justify-between flex-1 space-y-3">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="text-md font-semibold text-gray-800">
                      Stuffed sticky rice ball
                    </h3>
                    <p className="text-sm text-gray-500">34 minutes</p>
                  </div>
                  <img src="/Lab_01/Icon Button 73.png" alt="" />
                </div>
                <div className="flex items-center gap-2 mt-2">
                  <img
                    src="https://randomuser.me/api/portraits/women/1.jpg"
                    alt="Jennifer King"
                    className="w-6 h-6 rounded-full"
                  />
                  <span className="text-sm text-gray-700">Jennifer King</span>
                </div>
                <p className="text-sm text-gray-600 mt-2">
                  A delightful Asian treat with chewy, glutinous rice and a
                  flavorful surprise filling.
                </p>
              </div>
            </div>

            {/* Recipe Card 2 */}
            <div
              className="bg-white rounded-xl border border-dashed border-gray-300 p-4 flex items-start 
            gap-4 h-60"
            >
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLfrA6std0HcGmRQBx2MpTqC42jO0LBE0pwg&s"
                alt="Stuffed sticky rice ball"
                className="w-50 h-50 rounded-lg object-cover"
              />
              <div className="flex flex-col justify-between flex-1 space-y-3">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="text-md font-semibold text-gray-800">
                      Strawberry smoothie
                    </h3>
                    <p className="text-sm text-gray-500">40 minutes</p>
                  </div>
                  <img src="/Lab_01/Icon Button 73.png" alt="" />
                </div>
                <div className="flex items-center gap-2 mt-2">
                  <img
                    src="https://randomuser.me/api/portraits/women/1.jpg"
                    alt="Jennifer King"
                    className="w-6 h-6 rounded-full"
                  />
                  <span className="text-sm text-gray-700">
                    Matthew Martinez
                  </span>
                </div>
                <p className="text-sm text-gray-600 mt-2">
                  A delightful Asian treat with chewy, glutinous rice and a
                  flavorful surprise filling.
                </p>
              </div>
            </div>

            {/* Recipe Card 3 */}
            <div
              className="bg-white rounded-xl border border-dashed border-gray-300 p-4 flex items-start 
            gap-4 h-60"
            >
              <img
                src="https://chefjob.vn/wp-content/uploads/2018/07/latte.jpg"
                alt="Stuffed sticky rice ball"
                className="w-50 h-50 rounded-lg object-cover"
              />
              <div className="flex flex-col justify-between flex-1 space-y-3">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="text-md font-semibold text-gray-800">
                      Latte Art
                    </h3>
                    <p className="text-sm text-gray-500">19 minutes</p>
                  </div>
                  <img src="/Lab_01/Icon Button 73.png" alt="" />
                </div>
                <div className="flex items-center gap-2 mt-2">
                  <img
                    src="https://randomuser.me/api/portraits/women/1.jpg"
                    alt="Jennifer King"
                    className="w-6 h-6 rounded-full"
                  />
                  <span className="text-sm text-gray-700">Sarah Hill</span>
                </div>
                <p className="text-sm text-gray-600 mt-2">
                  A delightful Asian treat with chewy, glutinous rice and a
                  flavorful surprise filling.
                </p>
              </div>
            </div>

            {/* Recipe Card 4 */}
            <div
              className="bg-white rounded-xl border border-dashed border-gray-300 p-4 flex items-start 
            gap-4 h-60"
            >
              <img
                src="https://c.ndtvimg.com/2023-08/g2fc7edg_noodles_625x300_11_August_23.jpg"
                alt="Stuffed sticky rice ball"
                className="w-50 h-50 rounded-lg object-cover"
              />
              <div className="flex flex-col justify-between flex-1 space-y-3">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="text-md font-semibold text-gray-800">
                      Butter fried noodles
                    </h3>
                    <p className="text-sm text-gray-500">16 minutes</p>
                  </div>
                  <img src="/Lab_01/Icon Button 73.png" alt="" />
                </div>
                <div className="flex items-center gap-2 mt-2">
                  <img
                    src="https://randomuser.me/api/portraits/women/1.jpg"
                    alt="Jennifer King"
                    className="w-6 h-6 rounded-full"
                  />
                  <span className="text-sm text-gray-700">Julia Lopez</span>
                </div>
                <p className="text-sm text-gray-600 mt-2">
                  A delightful Asian treat with chewy, glutinous rice and a
                  flavorful surprise filling.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* About Us and Footer Section */}
      <footer className="bg-gray-800 py-6">
        <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8
         text-white">
          {/* About Us Section */}
          <div className="col-span-2">
            <h3 className="text-lg font-semibold mb-4">About Us</h3>
            <p className="text-gray-300 text-sm mb-4">
              Welcome to our website, a wonderful place to explore and learn how
              to cook like a pro.
            </p>
            <div className="flex items-center mb-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="bg-gray-700 text-white text-sm rounded-l-md px-4 py-2 
                                focus:outline-none w-3/4"
              />
              <button
                className="bg-orange-500 text-white rounded-r-md px-4 py-2 text-sm
                             hover:bg-orange-600 transition-colors"
              >
                Send
              </button>
            </div>
            <div className="flex items-center gap-2 text-gray-400 text-xs mt-20">
              <img
                src="/Lab_01/white_chefify.png"
                alt="Chefify logo"
                className="w-30 h-10"
              />
              <span className="ml-5">
                {new Date().getFullYear()} Chefify Company.{" "}
                <a href="#" className="text-orange-500 hover:underline ml-5">
                  Terms of Service
                </a>{" "}
                /{" "}
                <a href="#" className="text-orange-500 hover:underline">
                  Privacy Policy
                </a>
              </span>
            </div>
          </div>

          {/* Learn More Section */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Learn More</h3>
            <ul className="text-gray-300 text-sm space-y-2">
              <li>
                <a href="#" className="hover:text-orange-500 transition-colors">
                  Our Cooks
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-orange-500 transition-colors">
                  See Our Features
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-orange-500 transition-colors">
                  FAQ
                </a>
              </li>
              <li className="mt-8">
                <a href="#" className="hover:text-orange-500 transition-colors font-bold
                text-lg text-white">
                  Shop
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-orange-500 transition-colors">
                  Gift Subscription
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-orange-500 transition-colors">
                  Send Us Feedback
                </a>
              </li>
            </ul>
          </div>

          {/* Recipes Section */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Recipes</h3>
            <ul className="text-gray-300 text-sm space-y-2">
              <li>
                <a href="#" className="hover:text-orange-500 transition-colors">
                  What to Cook This Week
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-orange-500 transition-colors">
                  Pasta
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-orange-500 transition-colors">
                  Dinner
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-orange-500 transition-colors">
                  Healthy
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-orange-500 transition-colors">
                  Vegetarian
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-orange-500 transition-colors">
                  Vegan
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-orange-500 transition-colors">
                  Christmas
                </a>
              </li>
            </ul>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
