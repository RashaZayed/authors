const Author = require("../models/author.model");

module.exports.createAuthor = (req, res) => {
  const { name } = req.body;
  Author.create({name: name })
    .then((author) => res.json(author))
    .catch((err) => res.status(400).json(err));
};
module.exports.getAllAuthors = (req,res)=> {
    Author.find()
    .then(authors => res.json(authors))
    .catch(err => res.json(authors))
}
module.exports.getAuthor = (req,res)=> {
    Author.findById({_id: req.params.id})
    .then(author => res.json(author))
    .catch(err=> res.json(err))
}
module.exports.updateAuthor = (req,res)=> {
    const {name} = req.body;
    Author.findByIdAndUpdate({_id: req.params.id}, {name} , {new:true,  runValidators: true})
    .then(author => res.json(author))
    .catch(err=> res.status(400).json(err))
}
module.exports.deleteAuthor = (req,res)=> {
    Author.findOneAndDelete({_id: req.params.id})
    .then(author => res.json(author))
    .catch(err=> res.json(err))
}