




let data = [

    { id: 1, title: 'آیتم شماره 1', text: 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است' },
    { id: 2, title: 'آیتم شماره 2', text: 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است' },
    { id: 3, title: 'آیتم شماره 3', text: 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است' },
    { id: 4, title: 'آیتم شماره 4', text: 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است' },
    { id: 5, title: 'آیتم شماره 5', text: 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است' },
    { id: 6, title: 'آیتم شماره 6', text: 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است' },
    { id: 7, title: 'آیتم شماره 7', text: 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است' },

]


new draggable({
    el: document.querySelector('#list'),
    list: data,
    template: (item) => {
        return `
        <div class="list-item" id="${item.id}">
        <div class="list-item-head">
            <span class="head-id">${item.id}</span>
        </div>
        <div class="list-item-content">
            <span class="item-title">${item.title}</span>
            <p>${item.text}</p>
        </div>
    </div>
        `



        update: (list) => {
            console.log(list)
        }
    }
})