<template>
<div class="w-full h-fit p-4 flex flex-col space-y-4 justify-start text-sm">
    
    <div class="w-full h-fit flex flex-col justify-start">
        <label for="cam_pos_x" class="w-fit h-fit">Положение X</label>
        <input id="cam_pos_x" type="number" class="w-full h-fit px-4 py-2 border rounded-md"
        v-model="camera.posX"/>
    </div>

    <div class="w-full h-fit flex flex-col justify-start">
        <label for="cam_pos_y" class="w-fit h-fit">Положение Y</label>
        <input id="cam_pos_y" type="number" class="w-full h-fit px-4 py-2 border rounded-md"
        v-model="camera.posY"/>
    </div>

    <div class="w-full h-fit flex flex-col justify-start">
        <label for="cam_pos_z" class="w-fit h-fit">Положение Z</label>
        <input id="cam_pos_z" type="number" class="w-full h-fit px-4 py-2 border rounded-md"
        v-model="camera.posZ"/>
    </div>

    <div class="w-full h-fit flex flex-col justify-start">
        <label for="cam_rot_x" class="w-fit h-fit">Вращение X</label>
        <input id="cam_rot_x" type="number" class="w-full h-fit px-4 py-2 border rounded-md"
        v-model="camera.rotX"/>
    </div>

    <div class="w-full h-fit flex flex-col justify-start">
        <label for="cam_rot_y" class="w-fit h-fit">Вращение Y</label>
        <input id="cam_rot_y" type="number" class="w-full h-fit px-4 py-2 border rounded-md"
        v-model="camera.rotY"/>
    </div>

    <div class="w-full h-fit flex flex-col justify-start">
        <label for="cam_rot_z" class="w-fit h-fit">Вращение Z</label>
        <input id="cam_rot_z" type="number" class="w-full h-fit px-4 py-2 border rounded-md"
        v-model="camera.rotZ"/>
    </div>

    <div class="w-full h-fit flex flex-row space-x-4">
        <button class="w-full h-fit px-4 py-2 border rounded-md bg-blue-200 hover:bg-blue-300"
        @click="applyCamera"
        >Применить</button>
    </div>

</div>
</template>

<script setup lang="ts">
import { onDeactivated, onMounted, onUnmounted, ref } from 'vue';
import { useCamera } from '../composables/useCamera';
import { Scene } from 'three';

const { camera } = useCamera();

onMounted(()=>{
    console.log('on mounted')
    window.addEventListener( 'message', onFigmaMessage )
})

onUnmounted(()=>{
    console.log('on unmounted')
    window.removeEventListener( 'message', onFigmaMessage )
})

onDeactivated(()=>{
    console.log('on deaactivated')
    window.removeEventListener( 'message', onFigmaMessage )
})

function onFigmaMessage( message: MessageEvent<SceneNode> ){
    console.log('vue receive message: ', message.data)
    console.log('camera', camera.value)
}

function applyCamera(){
    
    parent.postMessage({
        pluginMessage: {
            type: 'camera',
            camera: JSON.stringify(camera.value),
        }
    }, '*');
}
</script>