function(instance, context) {

    instance.data.isInitialized = false
	instance.data.icon = document.createElement('span')
    instance.data.icon.style.fontSize = "inherit"
    instance.data.icon.style.fontWeight = "inherit"
    instance.canvas.appendChild(instance.data.icon)

}