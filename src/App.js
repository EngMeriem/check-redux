import "./css/main.css";
import ListTasks from "./components/ListTasks";
import AddTask from "./components/AddTask";
import { motion } from "framer-motion";

function App() {
  return (
    <div className="App">
      <motion.h1
        initial={{ y: -200 }}
        animate={{ y: 0 }}
        transition={{ type: "spring", duration: 0.5 }}
        whileHover={{ scale: 1.1 }}
      >
        Todo Application
      </motion.h1>
      <motion.div
        initial={{ y: 1000 }}
        animate={{ y: 0 }}
        transition={{ type: "spring", duration: 1 }}
      >
        <AddTask />
        <ListTasks />
      </motion.div>
    </div>
  );
}

export default App;
