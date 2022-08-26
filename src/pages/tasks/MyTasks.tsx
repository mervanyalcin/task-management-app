import { Pill, Status, Table } from '@fluentui/react-northstar';
import TaskDeleteDialog from './components/TaskDeleteDialog';

import TaskDetailDialog from './components/TaskDetailDialog';
import UpdateZoomContent from './components/TaskUpdateDialog';


const header = {
  key: 'header',
  className: 'table-header',
  items: [
    { content: 'Created by', key: 'name' },
    { content: 'Created Department by', key: 'credep' },
    { content: 'Assigned Department', key: 'assigneddep' },
    { content: 'Title', key: 'title' },
    { content: 'Task Status', key: 'taskstatus' },
    { content: 'See Detail', key: 'seedetail' },
    { content: 'Update Task', key: 'updatetask' },
    { content: 'Delete Task', key: 'deletetask' },
  ],
};

const rowsPlain = [
  {
    key: 1,
    items: [
      { content: 'John Doe', key: '1-0' },
      { content: 'Sales Department', key: '2-0' },
      { content: 'Human REsources Management', key: '3-0' },
      { content: 'Department Employee List', key: '4-0' },
      {
        content: <Pill appearance="outline">
          <Status color="orange" size="medium" state="warning" />
          {' '} Pending
        </Pill>, key: '5-0'
      },
      {
        content: <TaskDetailDialog />, key: '6-0'
      },
      {
        content: <UpdateZoomContent />, key: '7-0'
      },
      {
        content: <TaskDeleteDialog />, key: '8-0'
      },
    ],
  },

];

const MyTasks = () => (
  <Table variables={{ cellContentOverflow: 'none' }} header={header} rows={rowsPlain} aria-label="Static table" />
);

export default MyTasks;