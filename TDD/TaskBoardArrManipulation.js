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
  let selectedTaskInitialStatus = null
  const selectedTask = data.filter(task => {
    if (task.id === selected) {
      selectedTaskInitialStatus = task.status
      task.status = newStatus;
      return task;
    }
  });
  if (!(selectedTask[0].status in newObj)) newObj[selectedTask[0].status] = []

  const selectedTaskStatus = selectedTask[0].status
  // console.log(selectedTaskStatus)
  const taskIndex = newObj[selectedTaskInitialStatus].findIndex(task => {
    if (task.id === selected) {
      return task;
    }
  });

  const taskGroup = newObj[selectedTaskInitialStatus]
  // deletes item
  taskGroup.splice(taskIndex, 1)


  const newTaskGroup = newObj[selectedTaskStatus]
  // adds item into new task group
  newTaskGroup.splice(drop, 0, selectedTask[0]);

  return newObj;
};

module.exports = { taskBoardArrManipulation };
