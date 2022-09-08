import "./App.css";

function App() {
  return (
    // Container 
    <div className="h-96 w-80 absolute m-auto left-0 right-0 top-0 bottom-0">

      {/* shape-1 */}
      <div className="h-56 w-56 rounded-full bg-gradient-to-r from-fuchsia-600 to-pink-600 absolute -bottom-28 -left-20 "></div>

      {/* shape-2 */}
      <div className="h-52 w-52 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 absolute -top-28 -right-16"></div>

      {/* Card */}
      <div className="card font-sans bg-slate-700 absolute m-auto left-0 right-0 top-0 bottom-0 rounded-xl shadow-2xl shadow-slate-900">

        {/* Card-Image */}
        <div className="card-img h-32 w-32 absolute left-0 right-0 mx-auto mt-7 mb-4 rounded-full bg-slate-500">
          <img
            src="./profile-picture.jpg"
            alt="profile"
            className="h-4/5 rounded-full m-3"
          />
        </div>

        {/* Description */}
        <div className="w-full text-center absolute top-40">
          <h6 className="primary-text text-slate-50 text-lg font-semibold tracking-wide my-1">
            Mayur Devle
          </h6>
          <h6 className="secondary-text text-slate-300 font-medium text-base tracking-widest my-1">
            Front-End Developer
          </h6>
        </div>
        
        <a href="https://www.linkedin.com/in/mayur-dev/" target="_blank" rel="noopener noreferrer">
        <button className="primary-text text-slate-50 text-base font-semibold tracking-wide my-1 absolute w-4/5 left-8 top-60 rounded-md py-3 hover:text-red-400 transition duration-300 hover:scale-90">
          View Profile          
        </button></a>

        {/* Details */}
        <div className="details grid grid-cols-2 w-full max-h-16 absolute bottom-0 rounded-b-xl py-1 bg-slate-500">
          <div className="rating text-center border-r-2 border-solid border-slate-600">
            <h6 className="primary-text text-slate-50 text-base font-semibold tracking-wide my-1">
              85%
            </h6>
            <h6 className="secondary-text text-slate-300 font-medium text-sm tracking-widest my-1">
              Rating
            </h6>
          </div>
          <div className="activity text-center">
            <h6 className="primary-text text-slate-50 text-base font-semibold tracking-wide my-1">
              92%
            </h6>
            <h6 className="secondary-text text-slate-300 font-medium text-sm tracking-widest my-1">
              Activity
            </h6>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
