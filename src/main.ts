import { createApp } from 'vue';
import App from './App.vue';
import { FOO_SYMBOL, foo } from './services/foo.service';

const app = createApp(App);

app.provide(FOO_SYMBOL, foo);

app.mount('#app');
