class draggable {
    constructor(options) {
        this.setuplist(options);

        for (let listItem of options.el.children) {
            this.addDnDHandlers(listItem)
        }
    }



    setuplist(options) {
        let { list, el: element, template } = options;


        if (!element) throw Error('the list is not exist');
        if (!list) throw Error('the item is not exist');
        if (!Array.isArray(list)) throw Error('please insert correct array')
        if (!template) throw Error('please add a template function')
        if (typeof template !== "function") throw Error('please add a function as template')


        list.forEach(item => element.innerHTML += template(item))
    }


    addDnDHandlers(element) {
        element.setattributes('draggable', true);


        element.addEventlistener('dragstart' , this.handlerdragstart)
        element.addEventlistener('dragenter' , this.handlerdragenter)
        element.addEventlistener('dragover' , this.handlerdragover)
        element.addEventlistener('dragleave' , this.handlerdragleave)
        element.addEventlistener('drop' , this.handlerdrop)
        element.addEventlistener('dragend' , this.handlerdragend)
    }


    handlerdragstart(e){

    }

    handlerdragenter(e){

    }

    handlerdragover(e){

    }

    handlerdragleave(e){

    }

    handlerdrop(e){

    }

    handlerdragend(e){

    }
    
}


