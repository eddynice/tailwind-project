import img1 from "../img/img-01.jpg"
import img2 from "../img/img-02.jpg"
import app from "../img/app.png"
import mmm from "../img/img-05.jpg"
export default 
    {
    nav:{
        logo:'CC',
        links:[
            { text:'work', to:'mywork'},
            { text:'contact', to:'mycontact'},


        ],
       
    },
    header:{
        img:img2,
        text: ['HI', 'it is me Random', 'i am '],
        typical:[
            'web developer', 
            2000,
            'youtuber', 
            2000,
            'mobile Developer', 
            2000,
        ],
        btnText: 'Discover Mover ',
    },

    stack:{
        title:'Stack',
        tech:[
            {
                img: img1,
                alt:'mongodb',
            },
            {
                img: img2,
                alt:'react',
            },
            {
                img: app,
                alt:'react',
            },
            {
                img:mmm,
                alt:'react',
            },
        ],
        desc: 'testing testing'
    },
}
