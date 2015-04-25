module.exports = function(RED) {
    function SensorNodeConfig(n) {
        RED.nodes.createNode(this,n);
        this.id = n.id;
    }
    RED.nodes.registerType("sensor-node-config",SensorNodeConfig);
}