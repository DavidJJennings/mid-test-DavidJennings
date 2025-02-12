import { RouteObject } from 'react-router-dom'
import HomePage from '@/pages/TaskOne/TaskOne'
import TaskTwo from '@/pages/TaskTwo/TaskTwo'
import Root from '@/pages/Root'
import { RouteName } from './constants/RouteName'

export const routes: RouteObject[] = [
  {
    path: RouteName.TASKONE,
    element: <Root />,
    children: [
      {
        path: RouteName.TASKONE,
        element: <HomePage />
      },
      {
        path: RouteName.TASKTWO,
        element: <TaskTwo />
      }
    ]
  }
]
