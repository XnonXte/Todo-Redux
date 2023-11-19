const App = () => {
  return (
    <div className="h-screen text-white bg-blue-800">
      <div className="container p-4 mx-auto">
        {/* Title and text */}
        <header className="mb-3">
          <h2 className="mb-4 text-2xl font-bold">Hey there!</h2>
          <p>Today's Goal</p>
        </header>

        {/* Todo list */}
        <section className="mb-6">
          <ul className="flex flex-col gap-3">
            <li className="flex items-center justify-between p-4 bg-blue-900 rounded-xl">
              <div className="space-x-3">
                <input type="checkbox" name="finished" id="finished" checked />
                <label htmlFor="finished" className="text-sm line-through">
                  Build a blog with Gridsome
                </label>
              </div>
              <button type="button">
                <i className="text-lg bi bi-trash"></i>
              </button>
            </li>
            <li className="flex items-center justify-between p-4 bg-blue-900 rounded-xl">
              <div className="space-x-3">
                <input type="checkbox" name="finished" id="finished" checked />
                <label htmlFor="finished" className="text-sm line-through">
                  Build a GraphQL API with Strapi
                </label>
              </div>
              <button type="button">
                <i className="text-lg bi bi-trash"></i>
              </button>
            </li>
            <li className="flex items-center justify-between p-4 bg-blue-900 rounded-xl">
              <div className="space-x-3">
                <input type="checkbox" name="finished" id="finished" />
                <label htmlFor="finished" className="text-sm">
                  Fry Fish
                </label>
              </div>
              <button type="button">
                <i className="text-lg bi bi-trash"></i>
              </button>
            </li>
            <li className="flex items-center justify-between p-4 bg-blue-900 rounded-xl">
              <div className="space-x-3">
                <input type="checkbox" name="finished" id="finished" />
                <label htmlFor="finished" className="text-sm">
                  Cook banga
                </label>
              </div>
              <button type="button">
                <i className="text-lg bi bi-trash"></i>
              </button>
            </li>
          </ul>
        </section>

        {/* New todo entry */}
        <section className="mb-4">
          <form className="flex flex-col gap-4">
            <input
              type="text"
              name="newTodo"
              id="newTodo"
              placeholder="Add new goals"
              className="p-4 bg-blue-600 shadow-xl rounded-2xl"
            />
            <button
              type="submit"
              className="flex items-center justify-center p-3 bg-black rounded-xl"
            >
              <i className="text-4xl bi bi-plus"></i>
              <span className="text-sm">Add New Todo</span>
            </button>
          </form>
        </section>

        {/* Todo status */}
        <section className="mb-6">
          <div className="space-y-2 text-center">
            <h4>Completed Tasks: 2</h4>
            <h4>Pending Tasks: 2</h4>
          </div>
        </section>

        {/* Footer */}
        <footer>
          <h6>&copy; 2023 XnonXte</h6>
        </footer>
      </div>
    </div>
  );
};

export default App;
