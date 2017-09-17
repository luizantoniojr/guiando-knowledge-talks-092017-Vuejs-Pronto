<template>
  <div class="hello">
    <input placeholder="O que precisa ser feito?" v-model="novaTarefa" v-on:keypress.enter="adicionarTarefa" />
    <ul>
      <li v-for="item in tarefas">
        <input type="checkbox" v-model="item.completa">
        <label v-bind:class="{'completa':item.completa}">{{item.texto}}</label>
        <a @click="removerTarefa(item)">
          <b>x</b>
        </a>
      </li>
    </ul>
  </div>
</template>

<script>

var STORAGE_KEY = 'todos-vuejs'
var todoStorage = {
  buscar: function () {
    var tarefas = JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]')
    tarefas.forEach(function (tarefa, index) {
      tarefa.id = index
    })
    todoStorage.id = tarefas.length
    return tarefas
  },
  salvar: function (tarefas) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(tarefas))
  }
}

export default {
  name: 'hello',
  data () {
    return {
      novaTarefa: null,
      tarefas: todoStorage.buscar()
    }
  },
  watch: {
    tarefas: function (tarefas) {
      todoStorage.salvar(tarefas)
    }
  },
  methods: {
    adicionarTarefa: function () {
      var texto = this.novaTarefa
      if (this.tarefa !== '') {
        this.tarefas.push({
          id: null,
          completo: false,
          texto: texto
        })
        this.novaTarefa = null
      }
    },
    removerTarefa: function (tarefa) {
      this.tarefas.splice(this.tarefas.indexOf(tarefa), 1)
    }
  }
}
</script>

<style scoped>
li {
  text-align: left;
  list-style-type: none;
}

.completa {
  text-decoration: line-through;
}
</style>
