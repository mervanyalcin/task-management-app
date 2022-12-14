import * as React from 'react';
import { Button, Dropdown, ExpandIcon, Table, tableHeaderCellBehavior } from '@fluentui/react-northstar';
import { store } from './stores/TaskStore';

import TaskDetailDialog from '../../components/TaskDetailDialog';
import { observer } from 'mobx-react-lite';

const inputItems = [
  'Reject Task',
  'Complete Task',
  'Pending Task'
];

const PendingTasks: React.FC<any> = observer(() => {

  const { pendingTasks, getDepartmentAsString } = store;

  React.useEffect(() => {
    store.initializesPendingTasks();
  }, [])

  return (
    <React.Fragment>
      <Table aria-label="table">
        <Table.Row header className='table-header'>
          <Table.Cell content="Title" accessibility={tableHeaderCellBehavior} />
          <Table.Cell content="Created By" accessibility={tableHeaderCellBehavior} />
          <Table.Cell content="Assigned Department" accessibility={tableHeaderCellBehavior} />
          <Table.Cell content="See Detail" accessibility={tableHeaderCellBehavior} />
          <Table.Cell content="Status" accessibility={tableHeaderCellBehavior} />
        </Table.Row>
        {pendingTasks.map((task, index) => {
          return (
            <Table.Row>
              <Table.Cell content={task.title} />
              <Table.Cell content={task.user.name} />
              <Table.Cell content={getDepartmentAsString(task.assignedDepartment)} />
              <Table.Cell content={<Button content="Detail Task" icon={<ExpandIcon />} iconPosition="after" onClick={() => {
                store.setSelectedTask(task)
                store.changeDetailPopupVisibility(true)
              }} />} />
              <Table.Cell content={<Dropdown fluid
                items={inputItems}
                placeholder="Pending Task"
                checkable
              />} />
            </Table.Row>
          )
        })
        }
      </Table>

      <TaskDetailDialog taskStore={store} />
    </React.Fragment>

  )
})


export default PendingTasks;