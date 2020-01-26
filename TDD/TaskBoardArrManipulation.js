const getSelectedTask = (dataEntry, selected) => {
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
  return selectedTaskArr[0][0];
};

const getSelectedTaskIndex = (data, selected, selectedTask) => {
  return data[selectedTask.status].findIndex(task => {
    if (task.id === selected) {
      return task;
    }
  });
};

const getSelectedDropTask = (dataEntry, taskOndrop) => {
  const selectedDropTaskArr = dataEntry.filter(group => {
    const filterGroup = group[1].filter(task => {
      if (task.id === taskOndrop) {
        return task;
      }
    });
    if (filterGroup.length) {
      return filterGroup;
    }
  });

  return selectedDropTaskArr[0][1][0];
};

const getDropLocation = (
  data,
  taskOndrop,
  selectedOnDropTask,
  cardLocation,
) => {
  const newArr = data[selectedOnDropTask.status];
  let getIndexSelectedOnDropTask = newArr.findIndex(task => {
    if (task.id === taskOndrop) {
      return task;
    }
  });

  // the new drop location is defined by where the task is dropped on the card
  if (cardLocation === 'cardBottomHalf') {
    getIndexSelectedOnDropTask++;
  }

  return getIndexSelectedOnDropTask;
};

const taskBoardArrManipulation = (data, selected, newStatus, drop) => {
  selected = +selected;
  if (!data) return {};
  if (!selected) return data;

  const dataEntry = Object.entries(data);
  const selectedTask = getSelectedTask(dataEntry, selected);
  const getIndexSelectedTask = getSelectedTaskIndex(
    data,
    selected,
    selectedTask,
  );

  // deletes selected task of the list
  data[selectedTask.status].splice(getIndexSelectedTask, 1);

  // changes status of selected task
  selectedTask.status = newStatus;
  // // adds item into new task group
  data[selectedTask.status].splice(drop, 0, selectedTask);

  return data;
};

const taskBoardArrManipulationWithtaskOnDropId = (
  data,
  selected,
  taskOndrop,
  cardLocation,
) => {
  // regex is converting selected and taskOnDrop to a string
  selected = +selected;
  taskOndrop = +taskOndrop;
  if (!data) return {};
  if (!selected) return data;

  const dataEntry = Object.entries(data);
  const selectedTask = getSelectedTask(dataEntry, selected);
  const getIndexSelectedTask = getSelectedTaskIndex(
    data,
    selected,
    selectedTask,
  );

  const selectedOnDropTask = getSelectedDropTask(dataEntry, taskOndrop);
  const newDropLocation = getDropLocation(
    data,
    taskOndrop,
    selectedOnDropTask,
    cardLocation,
  );

  // deletes selected task of the list
  data[selectedTask.status].splice(getIndexSelectedTask, 1);

  // changes status of selected task
  const newStatus = selectedOnDropTask.status;
  selectedTask.status = newStatus;

  // // adds item into new task group
  data[selectedTask.status].splice(newDropLocation, 0, selectedTask);

  // found small bug - where item cannot be dropped on the first board
  // the data is changing correctly
  return data;
};

module.exports = {
  taskBoardArrManipulation,
  taskBoardArrManipulationWithtaskOnDropId,
};
