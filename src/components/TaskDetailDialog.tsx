import * as React from 'react';
import { Dialog } from '@fluentui/react-northstar';
import TaskForm from './TaskForm';
import { TaskStore } from '../pages/tasks/stores/TaskStore';
import { observer } from 'mobx-react-lite';
interface ITaskDetailFormProps {
  taskStore: TaskStore
}
const TaskDetailDialog: React.FC<ITaskDetailFormProps> = observer(({ taskStore }) => {
  const { selectedTask, changeDetailPopupVisibility } = taskStore;
  return (
    <Dialog
      open={taskStore.isDetailFormOpen}
      cancelButton="Close"
      onCancel={() => {
        changeDetailPopupVisibility(false)
      }}
      content={
        <TaskForm selectedTask={selectedTask!} isEditableForm={false} />
      }
      header="See Detail"
    />
  )
});

export default TaskDetailDialog;