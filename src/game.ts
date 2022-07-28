import * as utils from '@dcl/ecs-scene-utils'
import { movePlayerTo } from '@decentraland/RestrictedActions'

//Ground
const _scene = new Entity('_scene')
engine.addEntity(_scene)
const transform = new Transform({
  position: new Vector3(0, 0, 0),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
_scene.addComponentOrReplace(transform)

const darkCobblestone = new Entity('darkCobblestone')
engine.addEntity(darkCobblestone)
darkCobblestone.setParent(_scene)
const gltfShape = new GLTFShape("models/ground/FloorBasePebbles_01/FloorBasePebbles_01.glb")
gltfShape.withCollisions = true
gltfShape.isPointerBlocker = true
gltfShape.visible = true
darkCobblestone.addComponentOrReplace(gltfShape)
const transform2 = new Transform({
  position: new Vector3(8, 0, 8),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
darkCobblestone.addComponentOrReplace(transform2)

const darkCobblestone2 = new Entity('darkCobblestone2')
engine.addEntity(darkCobblestone2)
darkCobblestone2.setParent(_scene)
darkCobblestone2.addComponentOrReplace(gltfShape)
const transform3 = new Transform({
  position: new Vector3(24, 0, 8),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
darkCobblestone2.addComponentOrReplace(transform3)

const darkCobblestone3 = new Entity('darkCobblestone3')
engine.addEntity(darkCobblestone3)
darkCobblestone3.setParent(_scene)
darkCobblestone3.addComponentOrReplace(gltfShape)
const transform4 = new Transform({
  position: new Vector3(40, 0, 8),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
darkCobblestone3.addComponentOrReplace(transform4)

const darkCobblestone4 = new Entity('darkCobblestone4')
engine.addEntity(darkCobblestone4)
darkCobblestone4.setParent(_scene)
darkCobblestone4.addComponentOrReplace(gltfShape)
const transform5 = new Transform({
  position: new Vector3(56, 0, 8),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
darkCobblestone4.addComponentOrReplace(transform5)

const darkCobblestone5 = new Entity('darkCobblestone5')
engine.addEntity(darkCobblestone5)
darkCobblestone5.setParent(_scene)
darkCobblestone5.addComponentOrReplace(gltfShape)
const transform6 = new Transform({
  position: new Vector3(72, 0, 8),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
darkCobblestone5.addComponentOrReplace(transform6)

const darkCobblestone6 = new Entity('darkCobblestone6')
engine.addEntity(darkCobblestone6)
darkCobblestone6.setParent(_scene)
darkCobblestone6.addComponentOrReplace(gltfShape)
const transform7 = new Transform({
  position: new Vector3(88, 0, 8),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
darkCobblestone6.addComponentOrReplace(transform7)

const darkCobblestone7 = new Entity('darkCobblestone7')
engine.addEntity(darkCobblestone7)
darkCobblestone7.setParent(_scene)
darkCobblestone7.addComponentOrReplace(gltfShape)
const transform8 = new Transform({
  position: new Vector3(8, 0, 24),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
darkCobblestone7.addComponentOrReplace(transform8)

const darkCobblestone8 = new Entity('darkCobblestone8')
engine.addEntity(darkCobblestone8)
darkCobblestone8.setParent(_scene)
darkCobblestone8.addComponentOrReplace(gltfShape)
const transform9 = new Transform({
  position: new Vector3(24, 0, 24),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
darkCobblestone8.addComponentOrReplace(transform9)

const darkCobblestone9 = new Entity('darkCobblestone9')
engine.addEntity(darkCobblestone9)
darkCobblestone9.setParent(_scene)
darkCobblestone9.addComponentOrReplace(gltfShape)
const transform10 = new Transform({
  position: new Vector3(40, 0, 24),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
darkCobblestone9.addComponentOrReplace(transform10)

const darkCobblestone10 = new Entity('darkCobblestone10')
engine.addEntity(darkCobblestone10)
darkCobblestone10.setParent(_scene)
darkCobblestone10.addComponentOrReplace(gltfShape)
const transform11 = new Transform({
  position: new Vector3(56, 0, 24),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
darkCobblestone10.addComponentOrReplace(transform11)

const darkCobblestone11 = new Entity('darkCobblestone11')
engine.addEntity(darkCobblestone11)
darkCobblestone11.setParent(_scene)
darkCobblestone11.addComponentOrReplace(gltfShape)
const transform12 = new Transform({
  position: new Vector3(72, 0, 24),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
darkCobblestone11.addComponentOrReplace(transform12)

const darkCobblestone12 = new Entity('darkCobblestone12')
engine.addEntity(darkCobblestone12)
darkCobblestone12.setParent(_scene)
darkCobblestone12.addComponentOrReplace(gltfShape)
const transform13 = new Transform({
  position: new Vector3(88, 0, 24),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
darkCobblestone12.addComponentOrReplace(transform13)

const darkCobblestone13 = new Entity('darkCobblestone13')
engine.addEntity(darkCobblestone13)
darkCobblestone13.setParent(_scene)
darkCobblestone13.addComponentOrReplace(gltfShape)
const transform14 = new Transform({
  position: new Vector3(8, 0, 40),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
darkCobblestone13.addComponentOrReplace(transform14)

const darkCobblestone14 = new Entity('darkCobblestone14')
engine.addEntity(darkCobblestone14)
darkCobblestone14.setParent(_scene)
darkCobblestone14.addComponentOrReplace(gltfShape)
const transform15 = new Transform({
  position: new Vector3(24, 0, 40),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
darkCobblestone14.addComponentOrReplace(transform15)

const darkCobblestone15 = new Entity('darkCobblestone15')
engine.addEntity(darkCobblestone15)
darkCobblestone15.setParent(_scene)
darkCobblestone15.addComponentOrReplace(gltfShape)
const transform16 = new Transform({
  position: new Vector3(40, 0, 40),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
darkCobblestone15.addComponentOrReplace(transform16)

const darkCobblestone16 = new Entity('darkCobblestone16')
engine.addEntity(darkCobblestone16)
darkCobblestone16.setParent(_scene)
darkCobblestone16.addComponentOrReplace(gltfShape)
const transform17 = new Transform({
  position: new Vector3(56, 0, 40),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
darkCobblestone16.addComponentOrReplace(transform17)

const darkCobblestone17 = new Entity('darkCobblestone17')
engine.addEntity(darkCobblestone17)
darkCobblestone17.setParent(_scene)
darkCobblestone17.addComponentOrReplace(gltfShape)
const transform18 = new Transform({
  position: new Vector3(72, 0, 40),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
darkCobblestone17.addComponentOrReplace(transform18)

const darkCobblestone18 = new Entity('darkCobblestone18')
engine.addEntity(darkCobblestone18)
darkCobblestone18.setParent(_scene)
darkCobblestone18.addComponentOrReplace(gltfShape)
const transform19 = new Transform({
  position: new Vector3(88, 0, 40),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
darkCobblestone18.addComponentOrReplace(transform19)

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
  }))
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
  }))
engine.addEntity(respawner2)
