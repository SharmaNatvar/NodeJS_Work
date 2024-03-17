const { postService } = require("../services");

const postCreate = async (req, res) => {
  try {
    if (!req.body || !req.file) {
      throw new Error("data not get");
    }
    const { _id , username ,posts} = req.user;

    if(!username){
      throw new Error('user name not found')
    }
    const body = {
      postText: req.body.postText,
      image: req.file.filename,
      userId: _id,
    };
    const resBody = await postService.postCreate(body);

    if (!resBody) {
      throw new Error("user not created");
    }
    const id = resBody.userId;

    const resUser = await postService.findUserId(id);
    resUser.posts.push(resBody._id);
    const updateUser = await resUser.save();

    if (!updateUser) {
      throw new Error("res user id not found");
    }

    res.redirect('/profile')
  } catch (err) {
    res.status(400).json({
      message: "error found",
      data: err.message,
    });
  }
};

const getAllPost = async (req, res) => {
  try {
    const resBody = await postService.getAllPost();

    if (!resBody) {
      throw new Error("data not get");
    }
    res.redirect('/feed',{ user : resBody})
  } catch (err) {
    res.status(400).json({
      message: "error found",
      data: err.message,
    });
  }
};

module.exports = { postCreate, getAllPost };
