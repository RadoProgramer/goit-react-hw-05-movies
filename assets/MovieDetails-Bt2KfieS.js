import{b as j,r,u as p,a as b,j as e,$ as g,L as f,O as w}from"./index-DDtUfF_n.js";import{a as k}from"./api-FiDfY0LA.js";function L(){var m,u;const{movieId:o}=j(),[s,v]=r.useState(null),[n,l]=r.useState(!0),[x,c]=r.useState(!1),d=p(),a=b();r.useEffect(()=>{const t=setTimeout(()=>{n&&c(!0)},5e3);return k(o).then(i=>{v(i.data),l(!1),clearTimeout(t)}).catch(i=>{console.error(i),l(!1),c(!0)}),()=>clearTimeout(t)},[o]);const h=()=>{var t;(t=a.state)!=null&&t.from?d(a.state.from.pathname,{state:{query:a.state.from.query,movies:a.state.from.movies}}):d("/")};return x?e.jsxs("div",{className:"not-found",children:[e.jsx("h1",{children:"The movie not found"}),e.jsx("button",{onClick:h,children:"Go back"})]}):n?e.jsx("div",{className:"loader-container",children:e.jsx(g,{height:"80",width:"80",color:"#4fa94d",ariaLabel:"blocks-loading",wrapperStyle:{},wrapperClass:"blocks-wrapper",visible:!0})}):e.jsxs("div",{className:"movie-details",children:[e.jsx("button",{onClick:h,children:"Go back"}),e.jsxs("div",{className:"movie-header",children:[e.jsx("img",{src:`https://image.tmdb.org/t/p/w500/${s.poster_path}`,alt:s.title}),e.jsxs("div",{children:[e.jsxs("h1",{children:[s.title," (",s.release_date.split("-")[0],")"]}),e.jsxs("p",{children:["User Score: ",s.vote_average*10,"%"]}),e.jsx("h2",{children:"Overview"}),e.jsx("p",{children:s.overview}),e.jsx("h3",{children:"Genres"}),e.jsx("p",{children:s.genres.map(t=>t.name).join(", ")})]})]}),e.jsxs("div",{className:"additional-info",children:[e.jsx("h3",{children:"Additional information"}),e.jsxs("ul",{children:[e.jsx("li",{children:e.jsx(f,{to:"cast",state:{from:(m=a.state)==null?void 0:m.from},preventScrollReset:!0,children:"Cast"})}),e.jsx("li",{children:e.jsx(f,{to:"reviews",state:{from:(u=a.state)==null?void 0:u.from},preventScrollReset:!0,children:"Reviews"})})]})]}),e.jsx(w,{})]})}export{L as default};
