<template>
    <v-container>
      <!-- Add Task Section -->
      <v-row justify="center">
        <v-col cols="12" md="8">
          <v-card class="elevation-2">
            <v-card-text>
              <v-text-field
                outlined
                v-model="newItem"
                @keyup.enter.prevent="addItem"
              ></v-text-field>
            </v-card-text>
            <v-card-actions>
              <v-btn color="primary" @click="addItem">Add</v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
  
      <!-- Task List Section -->
      <v-row justify="center">
        <v-col cols="12" md="8">
          <v-card class="elevation-2">
            <v-card-title>Shopping List</v-card-title>
            <v-list>
              <v-list-item-group v-model="selectedItem">
                <v-list-item
                  v-for="todo in sortedToDos"
                  :key="todo.id"
                  @click="toggleComplete(todo)"
                >
                  <v-list-item-action>
                    <v-checkbox
                      v-model="todo.status"
                      color="primary"
                      hide-details
                    ></v-checkbox>
                  </v-list-item-action>
                  <v-list-item-content>
                    <v-list-item-title :class="{ 'completed': todo.status === 'complete' }">
                      {{ todo.name }}
                    </v-list-item-title>
                    <v-list-item-subtitle>{{ todo.label }}</v-list-item-subtitle> <!-- Add label display -->
                  </v-list-item-content>
                  <v-list-item-action>
                    <v-btn icon @click.stop="deleteToDo(todo.id)">
                      <v-icon>mdi-delete</v-icon>
                    </v-btn>
                  </v-list-item-action>
                </v-list-item>
              </v-list-item-group>
            </v-list>
            <v-divider></v-divider>
            <v-card-actions>
              <v-btn color="primary" @click="sortComplete">Sort by Complete</v-btn>
              <v-btn color="primary" @click="sortIncomplete">Sort by Incomplete</v-btn>
              <v-spacer></v-spacer>
              <v-btn color="primary" @click="clearCompleted">Clear Completed</v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </template>
  
  <script>
  import { db } from "../firebase/db";
  
  export default {
    data() {
      return {
        ToDos: [],
        newItem: "",
        selectedItem: null
      };
    },
    methods: {
      async addItem() {
        if (this.newItem) {
          await db.collection("ToDos").add({ name: this.newItem, status: 'incomplete', label: 'Grocery' }); // Add label property
          this.newItem = "";
        }
      },
      async toggleComplete(todo) {
        todo.status = todo.status === 'complete' ? 'incomplete' : 'complete';
        await db.collection("ToDos").doc(todo.id).update({ status: todo.status });
      },
      deleteToDo(id) {
        db.collection("ToDos").doc(id).delete();
      },
      sortComplete() {
        this.ToDos.sort((todo1) => {
          return todo1.status === "complete" ? 1 : -1;
        });
      },
      sortIncomplete() {
        this.ToDos.sort((todo1) => {
          return todo1.status === "incomplete" ? 1 : -1;
        });
      },
      clearCompleted() {
        const completedTodos = this.ToDos.filter(todo => todo.status === 'complete');
        completedTodos.forEach(todo => {
          db.collection("ToDos").doc(todo.id).delete();
        });
      },
    },
    computed: {
      sortedToDos() {
        return this.ToDos.slice();
      },
    },
  };
  </script>
  
  <style scoped>
  .completed {
    text-decoration: line-through;
  }
  </style>
  