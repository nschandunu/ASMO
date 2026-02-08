import { TaskCreatorForm } from './task-creator-form'

export default function TaskCreator() {
  return (
    <div>
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-white">Task Creator</h1>
        <p className="text-gray-400 mt-1">Create new sustainability tasks for users</p>
      </div>

      <div className="max-w-2xl">
        <TaskCreatorForm />
      </div>
    </div>
  )
}
