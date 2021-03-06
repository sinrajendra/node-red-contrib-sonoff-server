module.exports = function (RED) {
    function SonoffOff(config) {
        const node = this;
        RED.nodes.createNode(node, config);
        
        node.server = RED.nodes.getNode(config.server);
        const sonoffServer = node.server.sonoffServer;

        node.on('input', function (msg) {
            msg.topic = config.device_id;
            msg.payload = sonoffServer.turnOffDevice(config.device_id);
            node.send(msg);
        });
    }
    RED.nodes.registerType("sonoff-off", SonoffOff);
}