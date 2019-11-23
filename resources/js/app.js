/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');

window.Vue = require('vue');

/**
 * The following block of code may be used to automatically register your
 * Vue components. It will recursively scan this directory for the Vue
 * components and automatically register them with their "basename".
 *
 * Eg. ./components/ExampleComponent.vue -> <example-component></example-component>
 */

// const files = require.context('./', true, /\.vue$/i)
// files.keys().map(key => Vue.component(key.split('/').pop().split('.')[0], files(key).default))

Vue.component('example-component', require('./components/ExampleComponent.vue').default);

/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */
Vue.component('addorder',{
    template:`
    <form>
        <p v-if="errors.length">
            <b>Please correct the following error(s):</b>
            <ul>
                <li v-for="error in errors">{{ error }}</li>
            </ul>
        </p>

        <p>
            <label for="name">Name</label>
            <input id="name" v-model="newForm.name" type="text" name="name" >
        </p>

        <p>
            <label for="province">Province</label>
            <input id="province" v-model="newForm.province" type="text" name="province" min="0" >
        </p>

        <p>
            <label for="city">City</label>
            <input id="city" v-model="newForm.city" type="text" name="city" min="0" >
        </p>

        <p>
            <label for="shipping_address">Shipping Address</label>
            <input id="shipping_address" v-model="newForm.shipping_address" type="number" name="shipping_address" min="0" >
        </p>

        <p>
            <label for="billing_address">Billing Address</label>
            <input id="billing_address" v-model="newForm.billing_address" type="number" name="billing_address" min="0" >
        </p>

        <p>
            <label for="calf_size">Calf Size</label>
            <input id="calf_size" v-model="newForm.calf_size" type="number" name="calf_size" min="0" >
        </p>

        <p>
            <label for="leg_length">Leg Length</label>
            <input id="leg_length" v-model="newForm.leg_length" type="number" name="leg_length" min="0" >
        </p>

        <p>
            <label for="foot_size">Foot Size</label>
            <input id="foot_size" v-model="newForm.foot_size" type="number" name="foot_size" min="0" >
        </p>


        <p>
            <input type="submit" value="Submit" >
        </p>
    </form>
    `,

    data(){
        return{
            newForm:{
                name: "",

                province: "",

                city: "",

                shipping_address: "",

                billing_address: "",

                calf_size: "",

                leg_length: "",

                foot_size: ""
            }
        }
    },

    methods:{
        addOrder(addorder){
                var self=this;
                axios({
                    method:'post',
                    url: '/orderpage/add',
                    data: addorder,
                });
            }
    }

});

const app = new Vue({
    el: '#app',
});
