import{u as o,r as i,j as s}from"./index-DjCAYS1Q.js";import{c as a}from"./api-FiDfY0LA.js";function l(){const{movieId:t}=o(),[r,n]=i.useState([]);return i.useEffect(()=>{a(t).then(e=>n(e.data.results)).catch(e=>console.error(e))},[t]),s.jsxs("div",{className:"reviews",children:[s.jsx("h2",{children:"Reviews"}),s.jsx("ul",{children:r.length>0?r.map(e=>s.jsxs("li",{children:[s.jsx("h3",{children:e.author}),s.jsx("p",{children:e.content})]},e.id)):s.jsx("p",{children:"We don't have any reviews for this movie."})})]})}export{l as default};