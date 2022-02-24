import React, { useState } from "react";
//import { connect } from "react-redux";
import {completeTasks,removeTasks,updateTasks} from "../redux/reducer";
import Task from "./Task";
import { AnimatePresence, motion } from "framer-motion";
import { useSelector, useDispatch } from 'react-redux';

// const mapStateToProps = (state) => {
//   return {
//     tasks: state,
//   };
// };

// const mapDispatchToProps = (dispatch) => {
//   return {
//     addTask: (obj) => dispatch(addTasks(obj)),
//     removeTask: (id) => dispatch(removeTasks(id)),
//     updateTask: (obj) => dispatch(updateTasks(obj)),
//     completeTask: (id) => dispatch(completeTasks(id)),
//   };
// };

const ListTasks = () => {

  const tasks = useSelector(state => state);
  const dispatch = useDispatch();
  const [sort, setSort] = useState("active");

  console.log(tasks);

  return (
    <div className="display-tasks">
      <div className="buttons">
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => setSort("active")}
        >
          Active
        </motion.button>
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => setSort("completed")}
        >
          Completed
        </motion.button>
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => setSort("all")}
        >
          All
        </motion.button>
      </div>
      
      <ul>
        <AnimatePresence>
          {tasks.length > 0 && sort === "active"
            ? tasks.map((item) => {
                return (
                  item.isDone === false && (
                    <Task
                      key={item.id}
                      item={item}
                      removeTask={(id) => dispatch(removeTasks(id))}
                      updateTask={(obj) => dispatch(updateTasks(obj))}
                      completeTask={(id) => dispatch(completeTasks(id))}
                    />
                  )
                );
              })
            : null}

          {/* for completed items */}
          {tasks.length > 0 && sort === "completed"
            ? tasks.map((item) => {
                return (
                  item.isDone === true && (
                    <Task
                      key={item.id}
                      item={item}
                      removeTask={(id) => dispatch(removeTasks(id))}
                      updateTask={(obj) => dispatch(updateTasks(obj))}
                      completeTask={(id) => dispatch(completeTasks(id))}
                    />
                  )
                );
              })
            : null}

          {/* for all items */}
          {tasks.length > 0 && sort === "all"
            ? tasks.map((item) => {
                return (
                  <Task
                    key={item.id}
                    item={item}
                    removeTask={(id) => dispatch(removeTasks(id))}
                    updateTask={(obj) => dispatch(updateTasks(obj))}
                    completeTask={(id) => dispatch(completeTasks(id))}
                  />
                );
              })
            : null}
        </AnimatePresence>
      </ul>
    </div>
  );
};

export default ListTasks;