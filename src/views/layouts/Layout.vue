<template>
    <div>
        <div>
            <ul class="nav justify-content-center text-bg-dark align-items-center" style="height: 5rem;">
                <li class="nav-item">
                    <a class="nav-link active" aria-current="page" href="/home">Anasayfa</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="/nothing">not</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="/nothing">hiç</a>
                </li>
            </ul>
        </div>
    </div>
    <router-view></router-view>
</template>
<script>
import {defineComponent} from "vue";

export default defineComponent({
    name: "Autlayout",
});
</script>
    