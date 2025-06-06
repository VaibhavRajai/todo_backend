const express=require('express')
const router=express.Router()
const taskController=require('../controllers/taskController')

router.post('/',taskController.createTask)
router.get('/',taskController.getAllTasks)
router.get('/',taskController.getTaskById)
router.put('/',taskController.updateTaskStatus)
router.delete('/',taskController.deleteTask)

module.exports=router;
