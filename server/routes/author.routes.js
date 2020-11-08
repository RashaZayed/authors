const authorController = require("../controllers/author.controller")

module.exports = (app)=> {
    app.get("/home", authorController.getAllAuthors);
    app.post("/home/new", authorController.createAuthor);
    app.get("/home/:id", authorController.getAuthor);
    app.put("/home/edit/:id" , authorController.updateAuthor);
    app.delete("/home/:id" , authorController.deleteAuthor);
  
}