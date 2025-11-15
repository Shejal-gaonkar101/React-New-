function customRender(reactelement, conatiner){
    const docElement = document.createElement(reactElement.type)
docElement.innerHTML = reactElement.children 
docElement.setAttribute('href', reactElement.props.href)
docElement.setAttribute('target', reactElement.props.target)
conatiner.appendChild(docElement)
}
const reactElement=  {
    type :'a',
    props:{
        href :'https://www.google.com',
        target : '_blank'
    }, 
    children :"click here to visit google"
}
const mainConatiner = document.querySelector('#root')

