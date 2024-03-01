const { todoService } = require("../services");

// get todo
const readtodo = async (req, res) => {
  try {
    const resBody = await todoService.todoRead();
    if (!resBody) {
      throw new Error("data not Found");
    }

    res.status(200).json({
      message: "data get",
      data: resBody,
    });
  } catch (err) {
    res.status(400).json({
      message: "error found",
      err: err.message,
    });
  }
};

// get user todo

const getUsertodo = async (req , res) =>{
    try {
        const {id} = req.params
        
        if(!id){
            throw new Error('id not get')
        }

        const resBody = await todoService.getUsertodo(id)
console.log(resBody,'resBody');
        if(!resBody){
            throw new Error(' data not found')
        }

        res.status(200).json({
            message:'data get scusses',
            data : resBody
        })
    } catch (error) {
        res.status(400).json({
            message:'Error found',
            error:error.message
        })
    }
}


// todo create

const createTodo = async (req, res) => {
  try {
    const body = req.body;
    if (!body) {
      throw new Error("data not get");
    }

    const resBody = await todoService.todoCreate(body);

    if (!resBody) {
      throw new Error("data not created");
    }

    res.status(201).json({
      message: "data created",
      data: resBody,
    });
  } catch (err) {
    res.status(400).json({
      message: "error found",
      err: err.message,
    });
  }
};

// todo update

const updateTodo = async (req, res) => {
  try {
    const body = req.body;
    const { id } = req.params;

    if (!body || !id) {
      throw new Error("data not get");
    }

    const resId = await todoService.checkId(id);

    if (!resId) {
      throw new Error(" todo data not found");
    }

    const resBody = await todoService.todoUpdate(id , body);

    if (!resBody) {
      throw new Error(" data not update");
    }

    res.status(201).json({
      message: "update scusses",
      data: resBody,
    });
  } catch (err) {
    res.status(400).json({
      message: "error found",
      err: err.message,
    });
  }
};

// todo delete

const deleteTodo = async (req, res) => {
  try {
    const { id } = req.params;

    if (!id) {
      throw new Error("id not get");
    }

    const resId = await todoService.checkId(id);

    if (!resId) {
      throw new Error("id not found");
    }

    const resBody = await todoService.todoDelete(id);

    if (!resBody) {
      throw new Error("data not Delete");
    }

    res.status(200).json({
      message: "delete scusses",
      data: resBody,
    });
  } catch (err) {
    res.status(400).json({
      message: "Error found",
      err: err.message,
    });
  }
};


module.exports = {readtodo , createTodo , deleteTodo , updateTodo ,getUsertodo}