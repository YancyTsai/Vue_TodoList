new Vue({
  el: "#app",
  data: {
    todoList: ["I have a pen", "I have an apple", "ahh apple-pen"],
    todo: ""
  },
  methods: {
    Add() {
      if (this.todo !== "") {
        this.todoList.push(this.todo);
        this.todo = "";
      }
    },
    Romove(index) {
      this.todoList.splice(index, 1);
    }
  }
});
