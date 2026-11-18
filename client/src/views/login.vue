<template>
    <div class="wrapper">
        <div class="login-panel">
            <n-card>
                <template #header>
                    <div class="title-card">
                        后台登录
                    </div>
                </template>
                <n-card title="管理员登录">
                    <n-form :rules="rules" :model="admin">
                        <n-form-item path="account" label="用户名">
                            <n-input v-model:value="admin.account" placeholder="请输入用户名 (演示: admin)" />
                        </n-form-item>
                        <n-form-item path="password" label="密码">
                            <n-input v-model:value="admin.password" type="password" placeholder="请输入密码 (演示: 123456)" />
                        </n-form-item>
                    </n-form>
                    <div style="font-size: 12px; color: #888; margin-bottom: 12px;">
                        💡 静态演示账号：<code>admin</code> / <code>123456</code>（在线体验后台）
                    </div>
                    <template #footer>
                        <div class="footer-content">
                            <n-checkbox v-model:checked="admin.rember" label="记住我" />
                            <n-button type="success" @click="login">登录</n-button>
                            <n-button type="default" @click="goHome">返回首页</n-button>
                        </div>
                    </template>
                </n-card>
            </n-card>
        </div>
    </div>
</template>

<script setup>
import { ref, reactive, inject } from 'vue'
import { AdminStore } from '../stores/AdminStore'
import { useRouter } from 'vue-router';
import { NCard, NForm, NFormItem, NInput, NCheckbox, NButton } from 'naive-ui'

const router = useRouter();
const axios = inject("axios")
const message = inject("message")
const adminStore = AdminStore()

let rules = {
    account: [
        { required: true, message: "请输入账号", trigger: "blur" },
        { min: 3, max: 12, message: "账号长度在 3 到 12 个字符", trigger: "blur" },
    ],
    password: [
        { required: true, message: "请输入密码", trigger: "blur" },
        { min: 6, max: 18, message: "密码长度在 6 到 18 个字符", trigger: "blur" },
    ],
};

const admin = reactive({
    account: localStorage.getItem("account") || "admin",
    password: localStorage.getItem("password") || "123456",
    rember: localStorage.getItem("rember") == 1 || true
})

const login = async () => {
    // 1. Try backend API first if running locally
    try {
        let result = await axios.post("/admin/login", {
            account: admin.account,
            password: admin.password
        }, { timeout: 1500 });
        if (result && result.data && result.data.code == 200) {
            adminStore.token = result.data.data.token;
            adminStore.account = result.data.data.account;
            adminStore.id = result.data.data.id;
            if (admin.rember) {
                localStorage.setItem("account", admin.account);
                localStorage.setItem("password", admin.password);
                localStorage.setItem("rember", admin.rember ? 1 : 0);
            }
            router.push("/dashboard");
            message.success("登录成功！");
            return;
        }
    } catch (e) {
        // Fallback for static GitHub Pages
        if ((admin.account === 'admin' && admin.password === '123456') || 
            (admin.account === 'admin' && admin.password === 'admin123')) {
            adminStore.token = 'demo-admin-token-' + Date.now();
            adminStore.account = admin.account;
            adminStore.id = 1;
            if (admin.rember) {
                localStorage.setItem("account", admin.account);
                localStorage.setItem("password", admin.password);
                localStorage.setItem("rember", admin.rember ? 1 : 0);
            }
            router.push("/dashboard");
            message.success("登录成功！（静态/演示模式）");
            return;
        }
    }
    message.error("登录失败！用户名或密码错误");
}

const goHome = () => {
    router.push("/");
}
</script>

<style lang="scss" scoped>
.wrapper {
    width: 100vw;
    height: 100vh;
    background: url('../../image/bg-login.png') no-repeat center center;
    background-size: cover;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
}

.wrapper::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
    backdrop-filter: blur(5px);
}

.login-panel {
    position: relative;
    width: 450px;
    z-index: 1;
}

.title-card {
    text-align: center;
    font-size: 24px;
    font-weight: bold;
    color: #333;
}

.footer-content {
    display: flex;
    justify-content: space-between;
    align-items: center;
}
</style>
