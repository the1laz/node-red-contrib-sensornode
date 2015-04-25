module.exports = function(RED) {
    function SensorNodeIn(config) {
        RED.nodes.createNode(this,config);
        var node = this;
    	node.sensor = {time:0,timer:{},timeout:5000};
	console.log(node.sensor.timeout);
        this.on('input', function(msg) {
            msg.payload = msg.payload;
            clearTimeout(node.sensor.timer);
	        node.sensor.timer = setTimeout(function(){node.send({payload:node.sensor.timeout});console.log(node.sensor.timeout);},node.sensor.timeout);
            node.send(msg);
        });
    }


    
    RED.nodes.registerType("sensor-node-in",SensorNodeIn);
}

