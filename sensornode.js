module.exports = function(RED) {
    function SensorNode(config) {
        RED.nodes.createNode(this,config);
        var node = this;
        this.on('input', function(msg) {
            msg.payload = msg.payload;
            node.send(msg);
        });
    }
    RED.nodes.registerType("sensornode",SensorNode);
}