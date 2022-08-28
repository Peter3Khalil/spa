let items = document.querySelectorAll('nav ul li a');
const route = e=>{
    e = window.event;
    e.preventDefault();
    window.history.pushState({},'',e.target.href)
    handleLocation()
}
items.forEach(i=>{
    i.addEventListener('click',()=>{
        route();
    })
})
const routes = {
    "/home":"/home.html",
    "/about":"/about.html",
    "/":"/index.html",
    404:"404.html"
}
const handleLocation = async()=>{
    const path = window.location.pathname;
    const route = routes[path]||routes[404];
    const html = await fetch(route).then(data=>data.text())
    document.querySelector('.content').innerHTML = html;
}
