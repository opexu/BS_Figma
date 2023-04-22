import { ref } from "vue";

export function useCamera(){

    const camera = ref({
        posX: 0,
        posY: 0,
        posZ: 0,
        rotX: 0,
        rotY: 0,
        rotZ: 0,
    })

    return { camera }
}