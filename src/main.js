import Vue from 'vue'
import HelloWorld from './components/HelloWorld.vue'

Vue.config.productionTip = false

Vue.component('HelloWorld', HelloWorld)

;(function (){
  const autoMountVueComponents = function () {
    document.querySelectorAll('.auto-load-vue-components').forEach(el => {
      el.classList.replace('auto-load-vue-components', 'auto-vue-components-loaded')

      new Vue({
        template: el.outerHTML,
      }).$mount(el);
    });
  }

  setTimeout(autoMountVueComponents, 100);

  setInterval(autoMountVueComponents, 1000);
}());
