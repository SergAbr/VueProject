<template>
  <h1
    :style="{
      color: inputValue.length < 5 ? 'darkred' : 'darkblue',
      fontSize: inputValue.length < 6 ? '24px' : '50px',
    }"
  >
    Заметки
  </h1>
  <div class="form-control">
    <my-input
      type="text"
      class="input"
      :placeholder="myPlaceholder"
      v-model="inputValue"
      @keypress.enter="addNewNote"
    />
    <my-button @click="addNewNote">Добавить</my-button>
    <hr />
    <ul class="list" v-if="notes.length !== 0">
      <li class="list-item" v-for="(note, index) in notes">
        ({{ index + 1 }}){{ toUpperCase(note) }}
        <my-button @click="deleteNote(index)">Удалить</my-button>
      </li>
      <hr />
      <li>
        <strong>Общее кол-во: {{ notes.length }}</strong> | Удвоенное:
        {{ doubleCountComputed }}
      </li>
    </ul>
    <div v-else>Список заметок пуст. Добавьте первую.</div>
  </div>
</template>

<script>
import MyButton from '../UI/MyButton.vue';
export default {
  components: { MyButton },
  data() {
    return {
      myPlaceholder: 'Введите заметку',
      inputValue: '',
      notes: [],
    };
  },
  methods: {
    // inputChangeHandler(event) {
    //   this.inputValue = event.target.value;
    // },
    addNewNote() {
      if (this.inputValue !== '') {
        this.notes.push(this.inputValue);
        this.inputValue = '';
      }
    },
    toUpperCase(item) {
      return item.toUpperCase();
    },
    deleteNote(index, event) {
      this.notes.splice(index, 1);
    },
  },
  computed: {
    doubleCountComputed() {
      return this.notes.length * 2;
    },
  },
  watch: {
    inputValue(value) {
      if (value.length > 1000) {
        this.inputValue = '';
      }
      console.log('input value changed', value);
    },
  },
};
</script>

<style>
hr {
  margin: 20px auto;
}
.list {
  list-style: none;
}
/* .my-button {
  display: inline-flex;
  flex-direction: row;
} */
</style>
