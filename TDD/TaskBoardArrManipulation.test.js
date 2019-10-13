const data = require('./task-groups')

const {
  TaskBoardDragTask,
} = require('./TaskBoardArrManipulation.js');

describe('TaskBoardDragTask()', () => {
  it('returns an empty Object when there are no tasks to drag', () => {
    const expected = TaskBoardDragTask();
    expect(expected).toEqual({});
  });
  it('returns the original Object containing keys and arrays when no task is selected', () => {
    const input = data
    const expected = TaskBoardDragTask(input);
    expect(expected).toEqual(data);
  });
  it('returns the selected task when a task is selected', () => {
    const input = data.Todo
    const selected = 1
    const expected = TaskBoardDragTask(input, selected);
    expect(expected).toEqual(  {
      id: 1,
      task: 'Tasks',
      length: '2 weeks',
      startDate: '01/03/2019',
      colour: 'blue',
    });
  });
  it('returns the selected task in an nested object when a task is selected', () => {
    const input = data
    const selected = 1
    const expected = TaskBoardDragTask(input, selected);
    expect(expected).toEqual(  {
      id: 1,
      task: 'Tasks',
      length: '2 weeks',
      startDate: '01/03/2019',
      colour: 'blue',
    });
  });
});
