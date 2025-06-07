const express=require('express')
const router=express.Router()
const taskController=require('../controllers/taskController')

router.post('/createTask',taskController.createTask)
router.get('/getAllTasks',taskController.getAllTasks)
router.get('/getTaskById',taskController.getTaskById)
router.put('/updateStatus',taskController.updateTaskStatus)
router.delete('/deleteTask',taskController.deleteTask)

module.exports=router;
