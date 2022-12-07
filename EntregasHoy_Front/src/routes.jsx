import react from 'react'


const Envio = react.lazy(()=>import('./views/Envio'))
const Tracking = react.lazy(()=>import('./views/Tracking'))

const routes = [
    {path: '/', exact:true , name:'Home' },
    {path:'/Envio', name:'Envio', element:Envio },
    {path:'/Seguimiento', name:'Seguimiento', element:Tracking},
]

export default routes