const { playerService } = require("../services");

// create player
const createPlayer = async (req, res) => {
  try {
      const body = req.body;
      console.log(body , 'createPlayer 0');
      const email = body.email;
      console.log(email , 'createPlayer 1');
    if (!body) {
      throw new Error("body not found");
    }
    if (!email) {
      throw new Error("email not found");
    }

    const resEmail = await playerService.checkEmail(email);

    if (resEmail) {
      throw new Error("email must be unique");
    }

    const resBody = await playerService.postPlayer(body);

    if (!resBody) {
      throw new Error("player not created");
    }

    res.status(200).json({
      message: "create sucsses",
      data: resBody,
    });
  } catch (err) {
    res.status(400).json({
        message: "get Error",
        err: err.message,
      });
  }
};

// readAll player
const readAll = async (req, res) => {
  try {
    const resBody = await playerService.getAllPlayer();

    if (!resBody) {
      throw new Error("response not get");
    }

    res.status(200).json({
      message: "get Scusses",
      data: resBody,
    });
  } catch (err) {
    res.status(400).json({
      message: "error found",
      err: err.message,
    });
  }
};

// update player

const updatePlayer = async (req, res) => {
  try {
    const body = req.body;
    const email = body.email;
    const { id } = req.params;
    if (!body) {
      throw new Error("body not found");
    }
    if (!email) {
      throw new Error("email not found");
    }
    const resEmail = await playerService.checkEmail(email);

    if (resEmail) {
      throw new Error("email must be unique");
    }

    if (!id) {
      throw new Error("id not get");
    }

    const resId = await playerService.checkId(id);

    if (!resId) {
      throw new Error("id not found");
    }

    const resBody = await playerService.putPlayer(id, body);

    if (!resBody) {
      throw new Error("player not created");
    }

    res.status(200).json({
      message: "update scusses",
      data: resBody,
    });
  } catch (err) {
    res.status(400).json({
      Message: "error Found",
      err: err.message,
    });
  }
};

// delete player

const deletePlayer = async (req, res) => {
  try {
    const { id } = req.params;
    if (!id) {
      throw new Error("id not get");
    }
    const resId = await playerService.checkId(id);
    if (!resId) {
      throw new Error("id not Found");
    }
    const resBody = await playerService.deletePlayerFun(id);
    if (!resBody) {
      throw new Error(" player not delete");
    }
    res.status(200).json({
      message: "delete scusses",
      data: resBody,
    });
  } catch (err) {
    res.status(400).json({
      message: "error found",
      err: err.message,
    });
  }
};

module.exports = { createPlayer , readAll , updatePlayer , deletePlayer };
