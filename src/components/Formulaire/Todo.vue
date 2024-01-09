<template>
  <div class="card mb-3"  style="background-color: #ACB2C6">
    <div class="card-body">
      <div class="form-group">
        <label class="form-label" for="name">Nom</label>
        <input v-model="newTodo.name" class="form-control" type="text" id="name">
      </div>
      <div class="form-group">
        <label class="form-label" for="type">Type</label>
        <select v-model="newTodo.type" class="form-control" id="type">
          <option value="" disabled>Choisissez un type</option>
          <option value="foot">Football</option>
          <option value="course">Course à pied</option>
          <option value="muscu">Musculation</option>
          <option value="poney">Poney</option>
        </select>
      </div>
      <div class="form-group">
        <label class="form-label" for="desc">Description</label>
        <textarea v-model="newTodo.description" class="form-control" id="desc"></textarea>
      </div>
      <div class="d-flex justify-content-end mt-3">
        <button v-if="!isEdition" class="btn btn-primary" @click="create()">Créer</button>
        <button v-else class="btn btn-primary" @click="cancelEditing()">Edition terminée</button>
      </div>
    </div>
  </div>
  <div class="row rounded mb-3 pt-3 pb-3"  style="background-color: #ACB2C6">
    <div class="col-3">
      <h3 class="text-center"><i class="fa-solid fa-football fa-beat"></i> Football </h3>
      <div v-for="foot in foots" class="card" style="width: 18rem;">
        <div class="card-body">
          <h5 class="card-title">{{ foot.name }}</h5>
          <p class="card-text">{{ foot.description }}</p>
          <div class="d-flex justify-content-end">
            <button @click="update(foot.name)" class="btn btn-warning me-2">
              <i class="fa-solid fa-pen-to-square"></i>
            </button>
            <button class="btn btn-danger" @click="deleteTodo(foot.name)">
              <i class="fa-solid fa-trash-can"></i>
            </button>
            <input class="ms-2 rounded" type="date">
          </div>
        </div>
      </div>
    </div>
    <div class="col-3">
      <h3 class="text-center"><i class="fa-solid fa-person-running fa-bounce"></i> Course à pied</h3>
      <div v-for="course in courses" class="card" style="width: 18rem;">
        <div class="card-body">
          <h5 class="card-title">{{ course.name }}</h5>
          <p class="card-text">{{ course.description }}</p>
          <div class="d-flex justify-content-end">
            <button @click="update(course.name)" class="btn btn-warning me-2">
              <i class="fa-solid fa-pen-to-square"></i>
            </button>
            <button class="btn btn-danger" @click="deleteTodo(course.name)">
              <i class="fa-solid fa-trash-can"></i>
            </button>
            <input class="ms-2 rounded" type="date">
          </div>
        </div>
      </div>
    </div>
    <div class="col-3">
      <h3 class="text-center"><i class="fa-solid fa-dumbbell fa-spin"></i> Musculation</h3>
      <div v-for="muscu in muscus" class="card" style="width: 18rem;">
        <div class="card-body">
          <h5 class="card-title">{{ muscu.name }}</h5>
          <p class="card-text">{{ muscu.description }}</p>
          <div class="d-flex justify-content-end">
            <button @click="update(muscu.name)" class="btn btn-warning me-2">
              <i class="fa-solid fa-pen-to-square"></i>
            </button>
            <button class="btn btn-danger" @click="deleteTodo(muscu.name)">
              <i class="fa-solid fa-trash-can"></i>
            </button>
            <input class="ms-2 rounded" type="date">
          </div>
        </div>
      </div>
    </div>
    <div class="col-3">
      <h3 class="text-center"><i class="fa-solid fa-horse fa-spin fa-spin-reverse"></i> Poney</h3>
      <div v-for="poney in poneys" class="card" style="width: 18rem;">
        <div class="card-body">
          <h5 class="card-title">{{ poney.name }}</h5>
          <p class="card-text">{{ poney.description }}</p>
          <div class="d-flex justify-content-end">
            <button @click="update(poney.name)" class="btn btn-warning me-2">
              <i class="fa-solid fa-pen-to-square"></i>
            </button>
            <button class="btn btn-danger" @click="deleteTodo(poney.name)">
              <i class="fa-solid fa-trash-can"></i>
            </button>
            <input class="ms-2 rounded" type="date">
          </div>
        </div>
      </div>
    </div>
  </div>

</template>

<script>
export default {
  data() {
    return {
      newTodo: {
        name: '',
        description: '',
        type: '',
      },
      todos: [],
      isEdition: false,
    };
  },
  methods: {
    create() {
      this.todos.push({
        name: this.newTodo.name,
        description: this.newTodo.description,
        type: this.newTodo.type,
      });
      this.newTodo = {
        name: '',
        description: '',
        type: '',
      };
    },
    deleteTodo(name) {
      let index = this.todos.findIndex(function (el) {
        return el.name === name;
      });
      this.todos.splice(index, 1);
    },
    update(name) {
      this.newTodo = this.todos.find(function (el) {
        return el.name === name;
      });
      this.isEdition = true;
    },
    cancelEditing() {
      this.isEdition = false;
      this.newTodo = {
        name: '',
        description: '',
        type: '',
      };
    }
  },
  computed: {
    foots() {
      return this.todos.filter(function (el) {
        return el.type === 'foot';
      });
    },
    courses() {
      return this.todos.filter(function (el) {
        return el.type === 'course';
      });
    },
    muscus() {
      return this.todos.filter(function (el) {
        return el.type === 'muscu';
      });
    },
    poneys() {
      return this.todos.filter(function (el) {
        return el.type === 'poney';
      });
    },
  }
}
</script>


