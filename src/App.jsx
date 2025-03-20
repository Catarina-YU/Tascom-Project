import AppRoutes from "./routes/AppRoutes.jsx";
import "./App.css";



// import Grifinoria from "./components/Content/grifinoria";

function App() {
  return (
    <div className="App">
      <AppRoutes/>
    </div>
  );
}

// // function Hou () {
//   return (
//     <Router>
//       <Routes>
//         <Route path="/" element={<App/>} />
//         <Route path= "/grifinoria" element={<Grifinoria/>} />
//       </Routes>
//     </Router>
//   )
// }

export default App;
