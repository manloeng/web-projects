const TaskBoardDragTask = (data, selected) => {
    if (!data) return {};
    if (!selected) return data
  
    const cardGroupObjArr = Object.entries(data).filter(cardGroup => {
      if (cardGroup[1].length) {
        return cardGroup
      }
    })
  
    const  taskObjArr = cardGroupObjArr[0][1].filter(task=>{
        if (task.id === selected){
          return task
        }
      })
  
      return taskObjArr[0]
  };
  
  module.exports = { TaskBoardDragTask };
  