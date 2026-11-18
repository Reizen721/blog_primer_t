<template>
    <div class="container">
        <div style="margin-top: 20px; margin-bottom: 20px;">
            <n-button type="primary" ghost @click="back">← 返回主页</n-button>
        </div>

        <!-- 标题 -->
        <n-h1 style="margin-bottom: 8px;">{{ blogInfo.title }}</n-h1>
        <div style="color: #8c8c8c; margin-bottom: 25px; font-size: 14px;">
            <span>发布日期：{{ publishTime }}</span>
        </div>
        <n-divider />

        <!-- 文章内容 -->
        <div class="blog-content">
            <div v-html="blogInfo.content"></div>
        </div>

        <n-divider />
        <div style="margin-top: 30px; margin-bottom: 40px; text-align: center;">
            <n-button type="primary" size="large" @click="back">返回博客文章列表</n-button>
        </div>
    </div>
</template>

<script setup>
import { ref, inject, onMounted, computed } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import { NButton, NH1, NDivider } from 'naive-ui'
import { getStaticBlogDetail } from '../common/staticData'

const router = useRouter()
const route = useRoute()
const blogInfo = ref({})
const axios = inject("axios")

onMounted(() => {
    loadBlog()
})

const publishTime = computed(() => {
    if (!blogInfo.value.create_time) return ''
    let d = new Date(blogInfo.value.create_time)
    return `${d.getFullYear()}年${d.getMonth() + 1}月${d.getDate()}日`
})

/**
 * 读取文章详情
 */
const loadBlog = async () => {
    try {
        let res = await axios.get("/blog/detail?id=" + route.query.id, { timeout: 2000 })
        if (res && res.data && res.data.rows && res.data.rows.length > 0) {
            blogInfo.value = res.data.rows[0];
            return;
        }
    } catch (e) {}
    // Fallback to static articles
    blogInfo.value = getStaticBlogDetail(route.query.id);
}

const back = () => {
    router.push("/")
}

</script>

<style>
.blog-content {
    font-size: 16px;
    line-height: 1.8;
    color: #2c3e50;
}
.blog-content img {
    max-width: 100% !important;
    border-radius: 6px;
}
.blog-content table {
    border-collapse: collapse;
    margin: 20px 0;
    width: 100%;
}
.blog-content th, .blog-content td {
    border: 1px solid #e2e8f0;
    padding: 10px 14px;
}
.blog-content pre, .blog-content code {
    background-color: #f7fafc;
    border-radius: 4px;
    font-family: 'Fira Code', monospace;
}
.blog-content a {
    color: #18a058;
    text-decoration: underline;
}
.blog-content a:hover {
    color: #36ad6a;
}
</style>

<style lang="scss" scoped>
.container {
    max-width: 1100px;
    width: 92%;
    margin: 0 auto;
    padding-bottom: 50px;
}
</style>
