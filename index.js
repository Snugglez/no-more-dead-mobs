module.exports = function nomoredeadshit(d) {
d.hook('S_DESPAWN_NPC', 3, (e) =>{if(e.type == 5){e.type = 1; return true}})
}
