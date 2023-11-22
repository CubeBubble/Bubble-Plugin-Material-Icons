function(instance, properties) {

    const link = document.createElement('link')
    link.href = 'https://fonts.googleapis.com/icon?family=Material+Icons|Material+Icons+Round|Material+Icons+Outlined'
    link.rel = 'stylesheet'
    document.head.appendChild(link)
    
    let className = "material-icons"
    if (properties.type === "Round") { className = "material-icons-round" }
    else if (properties.type === "Outlined") { className = "material-icons-outlined" }
    
    const icon = document.createElement('span')
    icon.classList.add(className)
    icon.style.fontSize = properties.bubble.font_size() + "px"
    icon.style.color = properties.bubble.font_color()
    icon.innerText = properties.name
    document.body.style.overflow = "hidden"
    
    instance.canvas.appendChild(icon)
    

}