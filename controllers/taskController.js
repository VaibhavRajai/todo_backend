const Task=require('../models/Task');
//api for creating task
exports.createTask=async(req,res)=>{
    try{
        const {title,desc,dueDate}=req.body;
        const task=await Task.create({title,desc,dueDate});
        res.status(201).json("Task addedd Successfully")
    }catch(error){
        res.status(400).json({message:error.message});
    }
};

//api for gettimg all the tasks
exports.getAllTasks= async (req,res)=>{
    try{
        const tasks=await Task.find();
        res.json(tasks);
    }catch(error){
                res.status(400).json({message:error.message});
    }
};

//api for getting a specific task by id
exports.getTaskById=async(req,res)=>{
    try{
        const {id}=req.body;
        const task=await Task.findById(id)
        if(!task) return res.status(404).json({message:'Task not found'})
            res.json(task) 
    }catch(error){
                res.status(400).json({message:error.message});
    }
};

//api for updating status of an task
exports.updateTaskStatus=async(req,res)=>{
    try{
        const {id,status}=req.body; //current status
        const task=await Task.findByIdAndUpdate(
            id,{status},{new:true}
        )
        if(!task) return res.status(404).json({message:"Id not found"})
        res.json(task)
    }catch(error){        
        res.status(400).json({message:error.message});
    }
};

//api for deleting an task
exports.deleteTask=async(req,res)=>{
    try{
        const {id}=req.body;
        const task=await Task.findByIdAndDelete(id);
        if(!task) return res.status(404).json({message:"Task not found"})
        res.json({ message: 'Task deleted successfully' });
    }catch(error){
        res.status(400).json({message:error.message});
    }
}
