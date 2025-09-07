<template>
  
<div class="bg-white dark:bg-gray-800 p-8">
    <div class="p-6 max-w-sm mx-auto bg-white rounded-xl shadow-md flex items-center space-x-4">
      <div class="flex item-center">
        <img class="h-12 w-12 mr-4" src="https://cdn.icon-icons.com/icons2/2699/PNG/512/nasa_logo_icon_170926.png" alt="logo vite">
        <h2 class="text-lg font-semibold mb-2">NASA</h2>
      </div>
    </div>
  <div class="p-10">
    <div class="max-w-md mx-auto bg-gray-50 rounded-xl shadow-lg overflow-hidden md:max-w-2xl h-80">
      <div v-for="image in images" :key="image.date" class="md:flex flex-row">
        <div class="md:flex-shrink-0">
          <img :src="image.url" :alt="image.title" class="h-48 w-full object-cover md:h-full md:w-48" >
          <p>lore</p>
        </div>
        <div class="p-8">
          <div class="uppercase tracking-wide text-sm text-indigo-500 font-semibold">
            <h2 class="text-lg font-semibold mb-2">{{ image.title }}</h2>
          </div>
          <a href="#" class="block mt-1 text-lg leading-tight font-medium text-black hover:underline">La NASA es genial!!</a>
          <p class="mt-2 text-gray-500">{{ image.explanation }}</p>
        </div>
      </div>
    </div>
  </div>
  <div class="p-10">
    <div class="max-w-md mx-auto bg-gray-50 rounded-xl shadow-lg overflow-hidden md:max-w-2xl h-80">
      <div v-for="image in images" :key="image.date" class="md:flex flex-row">
        <div class="md:flex-shrink-0">
          <img :src="image.url" :alt="image.title" class="h-48 w-full object-cover md:h-full md:w-48" >
        </div>
        <div class="p-8">
          <div class="uppercase tracking-wide text-sm text-indigo-500 font-semibold">
            <h2 class="text-lg font-semibold mb-2">{{ image.title }}</h2>
          </div>
          <a href="#" class="block mt-1 text-lg leading-tight font-medium text-black hover:underline">La NASA es genial!!</a>
          <p class="mt-2 text-gray-500">{{ image.explanation }}</p>
        </div>
      </div>
    </div>
    <div class="overflow-x-auto p-28">
      <table class="table-auto min-w-full border-collapse border border-gray-200">
        <thead class="bg-gray-50">
          <tr>
            <th class="px-4 py-2 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">Clase</th>
            <th class="px-4 py-2 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">Descripción</th>
          </tr>
        </thead>
        <tbody class="bg-white divide-y divide-gray-200">
          <!-- Fondo y color de texto -->
          <tr>
            <td class="px-4 py-2 whitespace-nowrap">bg-{color}</td>
            <td class="px-4 py-2 whitespace-nowrap">Fondo con el color especificado</td>
          </tr>
          <tr>
            <td class="px-4 py-2 whitespace-nowrap">text-{color}</td>
            <td class="px-4 py-2 whitespace-nowrap">Color de texto especificado</td>
          </tr>
          <!-- Padding y Margen -->
          <tr>
            <td class="px-4 py-2 whitespace-nowrap">p-{size}</td>
            <td class="px-4 py-2 whitespace-nowrap">Padding</td>
          </tr>
          <tr>
            <td class="px-4 py-2 whitespace-nowrap">m-{size}</td>
            <td class="px-4 py-2 whitespace-nowrap">Margin</td>
          </tr>
          <!-- Ancho y Alto -->
          <tr>
            <td class="px-4 py-2 whitespace-nowrap">w-{size}</td>
            <td class="px-4 py-2 whitespace-nowrap">Ancho</td>
          </tr>
          <tr>
            <td class="px-4 py-2 whitespace-nowrap">h-{size}</td>
            <td class="px-4 py-2 whitespace-nowrap">Alto</td>
          </tr>
          <!-- Otros -->
          <tr>
            <td class="px-4 py-2 whitespace-nowrap">font-{weight}</td>
            <td class="px-4 py-2 whitespace-nowrap">Peso de la fuente (light, normal, semibold, bold)</td>
          </tr>
          <tr>
            <td class="px-4 py-2 whitespace-nowrap">text-{size}</td>
            <td class="px-4 py-2 whitespace-nowrap">Tamaño de texto</td>
          </tr>
          <tr>
            <td class="px-4 py-2 whitespace-nowrap">text-center</td>
            <td class="px-4 py-2 whitespace-nowrap">Texto centrado</td>
          </tr>
          <tr>
            <td class="px-4 py-2 whitespace-nowrap">italic</td>
            <td class="px-4 py-2 whitespace-nowrap">Texto en cursiva</td>
          </tr>
          <tr>
            <td class="px-4 py-2 whitespace-nowrap">uppercase</td>
            <td class="px-4 py-2 whitespace-nowrap">Texto en mayúsculas</td>
          </tr>
          <tr>
            <td class="px-4 py-2 whitespace-nowrap">truncate</td>
            <td class="px-4 py-2 whitespace-nowrap">Recorta el texto si es demasiado largo</td>
          </tr>
          <tr>
            <td class="px-4 py-2 whitespace-nowrap">overflow-{value}</td>
            <td class="px-4 py-2 whitespace-nowrap">Controla el comportamiento del desbordamiento (visible, hidden, scroll, auto)</td>
          </tr>
          <tr>
            <td class="px-4 py-2 whitespace-nowrap">border</td>
            <td class="px-4 py-2 whitespace-nowrap">Añade un borde</td>
          </tr>
          <tr>
            <td class="px-4 py-2 whitespace-nowrap">border-{side}-{size}</td>
            <td class="px-4 py-2 whitespace-nowrap">Tamaño del borde en un lado específico (side: top, right, bottom, left)</td>
          </tr>
          <tr>
            <td class="px-4 py-2 whitespace-nowrap">rounded-{size}</td>
            <td class="px-4 py-2 whitespace-nowrap">Bordes redondeados</td>
          </tr>
          <tr>
            <td class="px-4 py-2 whitespace-nowrap">shadow-{size}</td>
            <td class="px-4 py-2 whitespace-nowrap">Sombra</td>
          </tr>
          <tr>
            <td class="px-4 py-2 whitespace-nowrap">cursor-{type}</td>
            <td class="px-4 py-2 whitespace-nowrap">Tipo de cursor (type: pointer, move, grab, etc.)</td>
          </tr>
          <tr>
            <td class="px-4 py-2 whitespace-nowrap">hover:{class}</td>
            <td class="px-4 py-2 whitespace-nowrap">Aplicar una clase cuando se pasa el ratón</td>
          </tr>
          <tr>
            <td class="px-4 py-2 whitespace-nowrap">focus:{class}</td>
            <td class="px-4 py-2 whitespace-nowrap">Aplicar una clase cuando un elemento obtiene foco</td>
          </tr>
          <tr>
            <td class="px-4 py-2 whitespace-nowrap">active:{class}</td>
            <td class="px-4 py-2 whitespace-nowrap">Aplicar una clase cuando un elemento está activo (haciendo clic)</td>
          </tr>
          <tr>
            <td class="px-4 py-2 whitespace-nowrap">disabled:{class}</td>
            <td class="px-4 py-2 whitespace-nowrap">Aplicar una clase cuando un elemento está deshabilitado</td>
          </tr>
          <!-- Agrega más filas según sea necesario -->
        </tbody>
      </table>
      <div class="flex flex-row justify-center gap-10 p-5">
        <div class="bg-white shadow-lg rounded-lg overflow-hidden">
          <img class="w-full h-64 object-cover object-center" src="https://via.placeholder.com/500x300" alt="Placeholder image">
          <div class="p-4">
            <h2 class="text-xl font-semibold text-gray-800">Título del componente</h2>
            <p class="mt-2 text-gray-600">Descripción corta del componente.</p>
            <div class="mt-4 flex items-center justify-between">
              <span class="text-sm font-semibold text-gray-600">Categoría</span>
              <button class="px-3 py-1 bg-brand-primary text-white text-sm font-semibold rounded hover:bg-blue-600 focus:outline-none focus:bg-blue-600">Acción</button>
            </div>
          </div>
        </div>
        <div class="bg-white shadow-lg rounded-lg overflow-hidden">
          <img class="w-full h-64 object-cover object-center" src="https://via.placeholder.com/500x300" alt="Placeholder image">
          <div class="p-4">
            <h2 class="text-xl font-semibold text-gray-800">Título del componente</h2>
            <p class="mt-2 text-gray-600">Descripción corta del componente.</p>
            <div class="mt-4 flex items-center justify-between">
              <span class="text-sm font-semibold text-gray-600">Categoría</span>
              <button class="px-3 py-1 bg-brand-secondary text-white text-sm font-semibold rounded hover:bg-blue-600 focus:outline-none focus:bg-blue-600">Acción</button>
            </div>
          </div>
        </div>
        <div class="bg-white shadow-lg rounded-lg overflow-hidden">
          <img class="w-full h-64 object-cover object-center" src="https://via.placeholder.com/500x300" alt="Placeholder image">
          <div class="p-4">
            <h2 class="text-xl font-semibold text-gray-800">Título del componente</h2>
            <p class="mt-2 text-gray-600">Descripción corta del componente.</p>
            <div class="mt-4 flex items-center justify-between">
              <span class="text-sm font-semibold text-gray-600">Categoría</span>
              <button class="myButton">Acción</button>
            </div>
          </div>
        </div>
        <div class="bg-white shadow-lg rounded-lg overflow-hidden">
          <img class="w-full h-64 object-cover object-center" src="https://via.placeholder.com/500x300" alt="Placeholder image">
          <div class="p-4">
            <h2 class="text-xl font-semibold text-gray-800">Título del componente</h2>
            <p class="mt-2 text-gray-600">Descripción corta del componente.</p>
            <div class="mt-4 flex items-center justify-between">
              <span class="text-sm font-semibold text-gray-600">Categoría</span>
              <button class="myButton bg-brand-primary">Acción</button>
            </div>
          </div>
        </div>
      </div>
    
    </div>
  </div>
</div>


<div class="p-4 border border-gray-200 rounded shadow hover:border-gray-300 hover:shadow-md">Este elemento es un footer</div>

</template>

<script lang="ts">
import { defineComponent } from 'vue';
import axios from 'axios';

interface NASAImage {
  date: string;
  url: string;
  title: string;
  explanation: string;
}

export default defineComponent({
  name: 'NASAImages',
  data() {
    return {
      images: [] as NASAImage[],
      error: null as string | null
    };
  },
  mounted() {
    this.fetchNASAImages();
  },
  methods: {
    async fetchNASAImages() {
      try {
        const response = await axios.get<any>('https://api.nasa.gov/planetary/apod', {
          params: {
            api_key: 'oaA9HrUMeVrwDLEWP5NABp3CS6136Vtm6aF1Kzv8'
          }
        });
        this.images.push(response.data);
      } catch (error) {
        this.error = 'Error al cargar las imágenes de la NASA';
        console.error(error);
      }
    }
  }
});

</script>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
