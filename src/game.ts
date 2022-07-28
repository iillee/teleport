import * as utils from '@dcl/ecs-scene-utils'
import { movePlayerTo } from '@decentraland/RestrictedActions'

// Door 1
let door1Path:string = "models/stone_door_baalbek/scene03.glb"
const door1 = new Entity()
door1.addComponent(new GLTFShape(door1Path))
door1.addComponent(new Transform({
    position: new Vector3(16, 0, 21.5),
    scale: new Vector3(.1, .1, .1),
    rotation: Quaternion.Euler(0, 90, 0)
  }))
engine.addEntity(door1)

//Respawner 1
const respawner1 = new Entity()
let triggerBox1 = new utils.TriggerBoxShape()
respawner1.addComponent(new BoxShape())
respawner1.getComponent(BoxShape).withCollisions = false
respawner1.getComponent(BoxShape).visible = false
respawner1.addComponent(new Transform({
  position: new Vector3(16, 1, 24),
  scale: new Vector3 (.1, 3, 4)
  }))
respawner1.addComponent(
  new utils.TriggerComponent(triggerBox1, {
    onCameraEnter: () => {
      movePlayerTo({ x: 81.5, y: 0, z: 24 })
  }}))
engine.addEntity(respawner1)


// Door 2
let door2Path:string = "models/stone_door_baalbek/scene03.glb"
const door2 = new Entity()
door2.addComponent(new GLTFShape(door2Path))
door2.addComponent(new Transform({
    position: new Vector3(81, 0, 21.5),
    scale: new Vector3(.1, .1, .1),
    rotation: Quaternion.Euler(0, 90, 0)
  }))
engine.addEntity(door2)

//Respawner 2
const respawner2 = new Entity()
let triggerBox2 = new utils.TriggerBoxShape()
respawner2.addComponent(new BoxShape())
respawner2.getComponent(BoxShape).withCollisions = false
respawner2.getComponent(BoxShape).visible = false
respawner2.addComponent(new Transform({
  position: new Vector3(80, 1, 24),
  scale: new Vector3 (.1, 3, 4)
  }))
respawner2.addComponent(
  new utils.TriggerComponent(triggerBox2, {
    onCameraEnter: () => {
      movePlayerTo({ x: 14.5, y: 0, z: 24 })
  }}))
engine.addEntity(respawner2)
