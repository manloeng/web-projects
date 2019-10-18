const taskBoardArrManipulation = (data, selected, newStatus, drop) => {
  if (!data) return [];
  if (!selected) return data;

  const newObj = {}
  // creates a new object with the task keys
  data.forEach(task => {
    if (!(task.status in newObj)) newObj[task.status] = []
  })

  // populate data into the correct keys
  data.forEach(task => {
    if (task.status in newObj) newObj[task.status].push(task) 
  })

  // update selected item - use selectedTask[0]
  const selectedTask = data.filter(task => {
    if (task.id === selected) {
      task.status = newStatus;
      return task;
    }
  });

  const selectedTaskStatus = selectedTask[0].status
  const taskIndex = newObj[selectedTaskStatus].findIndex(task => {
    if (task.id === selected) {
      return task;
    }
  });

  const TaskGroup = newObj[selectedTaskStatus]
  // deletes item
  TaskGroup.splice(taskIndex, 1)
  // adds item
  TaskGroup.splice(drop, 0, selectedTask[0]);
  console.log(newObj)
  return newObj;
};

module.exports = { taskBoardArrManipulation };
