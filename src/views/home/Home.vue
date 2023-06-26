<template>
    <div>
        <div class="card col-3 rounded-0 text-bg-dark" style="height: 40rem; position: absolute;">
                <span class="card"></span>
                <h3 class="d-flex justify-content-center" style="margin: 5% 0;"> Username, Hoş geldiniz </h3>
                <span class="card"></span>
                <span class="btn btn-success col-10" @click="goto" style="margin: 3% 8%;">Profil</span>
                <span class="btn btn-danger col-10" @click="goto" style="margin: 3% 8%;">Trendler</span>
                <button class="btn btn-info col-10" style="margin: 3% 8%;" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasExample" aria-controls="offcanvasExample">Yeni gönderi oluştur</button>
            </div>
            <div class="offcanvas offcanvas-start" tabindex="-1" id="offcanvasExample" aria-labelledby="offcanvasExampleLabel">
                <div class="offcanvas-header">
                    <h5 class="offcanvas-title" id="offcanvasExampleLabel">Yeni gönderi oluştur</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                </div>
                <div class="offcanvas-body">
                    <div class="dropdown mt-3">
                        <div class="input-group flex-nowrap" style="margin: 3% 0;">
                            <span class="input-group-text" id="addon-wrapping">@</span>
                            <input type="text" v-model="newPost.sender" class="form-control" placeholder="Username" aria-label="Username" aria-describedby="addon-wrapping">
                        </div>
                        <div class="input-group flex-nowrap" style="margin: 3% 0;">
                            <span class="input-group-text" id="addon-wrapping">-></span>
                            <input type="text" v-model="newPost.post_title" class="form-control" placeholder="Başlık" aria-label="Username" aria-describedby="addon-wrapping">
                        </div>
                        <div class="input-group flex-nowrap" style="margin: 3% 0;">
                            <span class="input-group-text" id="addon-wrapping">-></span>
                            <input type="text" v-model="newPost.post_text" class="form-control" placeholder="Metin" aria-label="Username" aria-describedby="addon-wrapping">
                        </div>
                        <button class="btn btn-success" @click="addPost">Gönderi Ekle</button>
                    <ul class="dropdown-menu">
                        <li><a class="dropdown-item" href="#">Action</a></li>
                        <li><a class="dropdown-item" href="#">Another action</a></li>
                        <li><a class="dropdown-item" href="#">Something else here</a></li>
                    </ul>
                    </div>
                </div>
                </div>
            <div class="card rounded-0 col-9 float-end" style="height: 40rem; background-color: #cacaca;">
                <div class="container">
                    <div class="row">
                        <div class="col-md-12 offset-md-0">
                            <div class="" style="height: 40rem; overflow-y: scroll;">
                                <div v-for="post in reversedPosts" data-spy="scroll" data-target="#productList" data-offset="0">
                                    <div class="card  text-bg-secondary shadow list-group-item" style="min-height: 8rem;max-height: 11rem; margin: 2% 3%;" id="product1">
                                        <h2 class="mb-1" style="position: absolute; margin: 1% 1%;">{{ post.post_title }}</h2>
                                        <p class="d-flex justify-content-end mb-1" style="margin:1% 1%;">by. {{ post.sender }}</p>
                                        <h6 class="mb-1" style="margin: 3% 2%;">{{ post.post_text }}</h6>
                                    </div>

                                    
                                    
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
            <div class="card rounded-0 col-12 text-bg-dark" style="margin-top: 42.1%; height: 15rem;">
                <h2 class="d-flex justify-content-center">Code by Berat Karaca</h2>
                <p class="d-flex justify-content-center"> Bu sitenin amacı kendimi vuejs de kendimi geliştirmemdir o yüzden görüntüye fazla özenmedim. </p>
                <p class="d-flex justify-content-center"> Site mantığı gönderi paylaşa biliyor olmanız bu kadar :D </p>
            </div>
    </div>
</template>
<script>
    import { ref, computed  } from "vue";
    import { useRouter } from "vue-router";

    export default {
    name: "post",
    components: {
        reversedPosts() {
            return this.posts.slice().reverse();
        }
    },
    setup() {
    
    
    const router = useRouter();
    const message = ref('deneme')
    const reversedPosts = computed(() => {
      return posts.value.slice().reverse();
    });

    const addPost = () => {
        if (newPost.value.sender && newPost.value.post_title && newPost.value.post_text) {
            posts.value.push(newPost.value);
            newPost.value = {};
        }
        };
        const newPost = ref({
        sender: "",
        post_title: "",
        post_text: ""
        });
    const posts = ref([
        {
            sender: "Berat",
            post_title: "Yeni Vue dersleri",
            post_text: "Merhaba yeni siteye hoş geldin:)",
        },
        ])
    const goto = () =>{
        router.push({name:"page404"})
    }

    return {
        posts,
        newPost,
        addPost,
        goto,
        reversedPosts,
        message,
    };
    },
    };
</script>