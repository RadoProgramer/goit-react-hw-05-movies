import{r as o,u as l,a as h,j as t,L as d}from"./index-ar6K9toW.js";import{s as m}from"./api-FiDfY0LA.js";function f(){const[s,r]=o.useState(""),[i,n]=o.useState([]);l();const a=h();o.useEffect(()=>{var e;(e=a.state)!=null&&e.query&&(r(a.state.query),n(a.state.movies))},[a.state]);const c=()=>{s.trim()&&m(s).then(e=>n(e.data.results)).catch(e=>console.error(e))},u=e=>{e.key==="Enter"&&c()};return t.jsxs("div",{className:"movies",children:[t.jsx("h1",{children:"Search Movies"}),t.jsx("input",{type:"text",value:s,onChange:e=>r(e.target.value),onKeyDown:u}),t.jsx("button",{onClick:c,children:"Search"}),t.jsx("ul",{children:i.map(e=>t.jsx("li",{children:t.jsx(d,{to:`/movies/${e.id}`,state:{from:{pathname:"/movies",query:s,movies:i}},children:e.title})},e.id))})]})}export{f as default};
