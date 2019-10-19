const taskBoardArrManipulation = (data, selected, newStatus, drop) => {
  if (!data) return {};
  if (!selected) return data;

  const dataEntry = Object.entries(data);

  // gets the selected task in arr
  const selectedTaskArr = dataEntry.map(group => {
    const filterGroup = group[1].filter(task => {
      if (task.id === selected) {
        return task;
      }
    });
    if (filterGroup.length) {
      return filterGroup;
    }
  });

  // gets selected task
  let selectedTask = selectedTaskArr[0][0];
  const getIndexSelectedTask = data[selectedTask.status].findIndex(task => {
    if (task.id === selected) {
      return task;
    }
  });

  // deletes selected task of the list
  data[selectedTask.status].splice(getIndexSelectedTask, 1);

  // changes status of selected task
  selectedTask.status = newStatus;

  // // adds item into new task group
  data[selectedTask.status].splice(drop, 0, selectedTask);

  return data;
};

module.exports = { taskBoardArrManipulation };
