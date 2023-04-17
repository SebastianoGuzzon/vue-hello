let app = new Vue({

    el: '#container',
    data: {
        dim: 'size',
        message: 'Clicca sull\'immagine per ingrandirla',
        src: './img/Lion.jpg',
        title: 'lion'
    },
    methods: {
        clickImage() {
            (this.dim == 'size') ? this.dim = 'size-big' : this.dim = 'size';
        }
    }

});