import React, { useState } from "react";
//import { connect } from "react-redux";
import { addTasks } from "../redux/reducer";
import { GoPlus } from "react-icons/go";
import { motion } from "framer-motion";
import { useDispatch } from 'react-redux'

const AddTask = () => {

  //const tasks = useSelector(state => state);
  const dispatch = useDispatch();
  const [task, setTask] = useState("");

  const handleChange = (e) => {
    setTask(e.target.value);
  };

  const add = () => {
    if (task === "") {
      alert("Input is Empty");
    } else {
      dispatch(addTasks({
        id: Math.floor(Math.random() * 1000),
        description: task,
        isDone: false,
      }))
      setTask("");
    }
    };
  
  //console.log("props from store", props);

  return (
    <div className="addTasks">
      <input
        type="text"
        onChange={(e) => handleChange(e)}
        className="task-input"
        value={task}
      />

      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="add-btn"
        onClick={() => add()}
      >
        <GoPlus />
      </motion.button>
      <br />
    </div>
  );
};
//we can use connect method to connect this component with redux store
export default AddTask;
