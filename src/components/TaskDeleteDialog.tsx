import * as React from 'react';
import { Dialog } from '@fluentui/react-northstar';
import { observer } from 'mobx-react-lite';
import TaskForm from './TaskForm';
import { TaskStore } from '../pages/tasks/stores/TaskStore';

interface ITaskDeleteFormProps {
    taskStore: TaskStore
}

const TaskDeleteDialog: React.FC<ITaskDeleteFormProps> = observer(({ taskStore }) => {

    const { selectedTask, changeDeletePopupVisibility, deleteSelectedTaskFromList } = taskStore;

    return (
        <Dialog
            open={taskStore.isDeleteFormOpen}
            cancelButton="Cancel"
            onCancel={() => {
                changeDeletePopupVisibility(false)
            }}
            confirmButton="Delete"
            onConfirm={() => {
                deleteSelectedTaskFromList()
            }}
            content={
                <TaskForm selectedTask={selectedTask!} isEditableForm={false} />
            }
            header="Are you sure?"
        />
    )
});


export default TaskDeleteDialog;

