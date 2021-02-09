Vue.component('showform', {
    template: '#show-form',
    data(){
        return{
            data: {namaTim: '', 
                   player1: '',
                   player2: '',
                   player3: '',
                   player4: '',
                   cadangan: ''
                  }
        }
    },
    methods:{
        simpan: function(){
            this.$emit('send-data', this.data);
            this.data.namaTim = "";
            this.data.player1 = "";
            this.data.player2 = "";
            this.data.player3 = "";
            this.data.player4 = "";
            this.data.cadangan = "";
        }
    }
})
Vue.component('showdata', {
    template: '#show-data',
    props: ['data']
})
var app = new Vue({
    el : '#app',
    data: {
        peserta: {}
    },
    methods: {
        getData: function (value){
            this.peserta = {
                namaTim: value.namaTim,
                player1: value.player1,
                player1: value.player1,
                player2: value.player2,
                player3: value.player3,
                player4: value.player4,
                cadangan : value.cadangan
            }
        }
    }
})