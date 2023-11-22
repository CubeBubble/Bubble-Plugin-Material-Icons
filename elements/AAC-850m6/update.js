function(instance, properties, context) {
    
    if(!instance.data.isInitialized) {
		
        let className = "material-icons"
        if (properties.type === "Round") { className = "material-icons-round" }
        else if (properties.type === "Outlined") { className = "material-icons-outlined" }
        instance.data.icon.classList.add(className)
        instance.data.icon.innerText = properties.name
        
    }

}