class draggable {
    constructor(options) {
        this.setuplist(options)
    }



    setuplist(options) {
        let { list, el: element, template } = options;


        if(!element) throw Error('the list is not exist');
        if(!list) throw Error('the item is not exist');
        if(!Array.isArray(list)) throw Error('please insert correct array')
        if(!template) throw Error('please add a template function')
        if(typeof template !== "function") throw Error('please add a function as template')


        list.forEach(item => element.innerHTML += template(item))
    }
}


