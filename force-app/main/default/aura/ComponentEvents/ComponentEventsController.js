({
    handleClick : function(cmp, event) {
        var attributeValue = cmp.get("v.text");
        console.log("current text: " + attributeValue);

        var target = event.getSource();
        cmp.set("v.text", target.get("v.label"));
       
        
    },
    
    handleClick1 : function(cmp, event) {
        alert('Flawan Button Clicked');
    }
})