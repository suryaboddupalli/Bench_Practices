import { userController } from '../controllers/userController';

const controller = new userController();

export const userRoutes = [
	{
		method: 'Get',
		path: '/get-users',
		handler: controller.getUsersData,
	},
	{
		method: 'post',
		path: '/add-user',
		handler: controller.postUsersData,
	},
	{
		method: 'put',
		path: `/update-user/{id}`,
		handler: controller.updateUsersData,
	},
	{
		method: 'delete',
		path: `/delete-user/{id}`,
		handler: controller.deleteUsersData,
	},
];
