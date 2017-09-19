<template>
  <div class="hero-body">
    <div class="container has-text-centered">
    <div class="columns">
      <div class="column is-half is-offset-one-quarter">
        <div class="field">
          <div class="control">
            <input class="input" type="text" placeholder="O que precisa ser feito?" v-model="novaTarefa" v-on:keypress.enter="adicionarTarefa">
          </div>
        </div>
        <div class="level-left">
          <p class="level-item">
            <a v-bind:class="{'filtro-selecionado':visibilidade=='todas'}" v-on:click="visibilidade='todas'">Todas</a>
          </p>
          <p class="level-item">
            <a v-bind:class="{'filtro-selecionado':visibilidade=='ativas'}" v-on:click="visibilidade='ativas'">Ativas</a>
          </p>
          <p class="level-item">
            <a v-bind:class="{'filtro-selecionado':visibilidade=='completas'}" v-on:click="visibilidade='completas'">Completas</a>
          </p>
        </div>
      </div>
    </div>
    <div class="columns">
      <div class="column is-half is-offset-one-quarter">
        <ul>
          <li v-for="item in tarefasFiltradas">
            <input type="checkbox" v-model="item.completa">
            <label v-bind:class="{'completa':item.completa}">{{item.texto}}</label>
            <a v-on:click="removerTarefa(item)">
              <i class="fa fa-times-circle-o" aria-hidden="true"></i>
            </a>
          </li>
        </ul>
      </div>
    </div>
  </div>
  </div>
</template>
<script>

var STORAGE_KEY = 'todos-vuejs'
var storage = {
  buscar: function () {
    var tarefas = JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]')
    tarefas.forEach(function (tarefa, index) {
      tarefa.id = index
    })
    storage.id = tarefas.length
    return tarefas
  },
  salvar: function (tarefas) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(tarefas))
  }
}

var filtros = {
  todas: function (tarefas) {
    return tarefas
  },
  ativas: function (tarefas) {
    return tarefas.filter(function (tarefa) {
      return !tarefa.completa
    })
  },
  completas: function (tarefas) {
    return tarefas.filter(function (tarefa) {
      return tarefa.completa
    })
  }
}

export default {
  name: 'list',
  data () {
    return {
      novaTarefa: null,
      tarefas: storage.buscar(),
      visibilidade: 'todas'
    }
  },
  computed: {
    tarefasFiltradas: function () {
      return filtros[this.visibilidade](this.tarefas)
    }
  },
  watch: {
    tarefas: function (tarefas) {
      storage.salvar(tarefas)
    }
  },
  methods: {
    adicionarTarefa: function () {
      var texto = this.novaTarefa
      if (this.tarefa !== '') {
        this.tarefas.push({
          id: null,
          completa: false,
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

<style>
  li {
    text-align: left;
    list-style-type: none;
  }

  .completa {
    text-decoration: line-through;
  }

  .fa {
    vertical-align: bottom;
  }

  .filtro-selecionado {
    font-size: 19px;
    font-weight: bold;
  }
</style>
