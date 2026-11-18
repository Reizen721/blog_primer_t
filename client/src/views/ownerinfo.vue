<template>
    <div class="page-container">
      <div class="author-info">
        <n-card>
          <template #header>
            <div class="author-header">
              <n-avatar
                round
                :style="{ width: '100px', height: '100px' }"
                src="https://avatars.githubusercontent.com/u/333226717?v=4"
              />
              <div class="author-name">{{ author.name }}</div>
            </div>
          </template>
          <div class="author-details">
            <p><strong>个人简介:</strong> {{ author.bio }}</p>
            <p><strong>联系邮箱:</strong> {{ author.contact }}</p>
            <p><strong>主页与开源项目:</strong></p>
            <n-space>
              <n-button v-for="link in author.socialLinks" :key="link.platform" :type="link.type" @click="openLink(link.url)">
                {{ link.platform }}
              </n-button>
            </n-space>
          </div>
          <n-button class="return-button" type="primary" @click="returnHome">返回主页</n-button>
        </n-card>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue'
  import { NCard, NAvatar, NSpace, NButton } from 'naive-ui'
  import { useRouter } from 'vue-router';
  
  const router = useRouter();
  const author = ref({
    name: 'David Z. Wang (Devil__Zero)',
    avatar: 'https://avatars.githubusercontent.com/u/333226717?v=4',
    bio: 'Machine Learning Engineer & Competitive Data Scientist | Kaggle @davidzwang | Kaggle 经典竞赛全排通关',
    contact: 'devilzerotop@gmail.com',
    socialLinks: [
      { platform: 'GitHub 个人主页', url: 'https://github.com/Reizen721', type: 'success' },
      { platform: 'Kaggle 竞赛主页', url: 'https://www.kaggle.com/davidzwang', type: 'info' },
      { platform: 'Kaggle Competitions 开源仓库', url: 'https://github.com/Reizen721/kaggle-competitions', type: 'primary' },
      { platform: 'Bilibili', url: 'https://space.bilibili.com/93869077', type: 'error' }
    ]
  })
  
  const openLink = (url) => {
    window.open(url, '_blank')
  }
  
  const returnHome = () => {
    router.push('/')
  }
  </script>
  
  <style scoped>
  .page-container {
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
    background-image: url('./circulateBanner/wallpaper.jpg');
    background-size: cover;
    background-position: center;
    padding: 20px;
  }
  
  .author-info {
    max-width: 900px;
    width: 100%;
    background-color: rgba(255, 255, 255, 0.9);
    border-radius: 15px;
    box-shadow: 0 8px 32px rgba(0, 0, 0, 0.2);
    position: relative;
  }
  
  .author-header {
    display: flex;
    align-items: center;
  }
  
  .author-name {
    margin-left: 20px;
    font-size: 26px;
    font-weight: bold;
    color: #2c3e50;
  }
  
  .author-details {
    margin-top: 15px;
    font-size: 15px;
    line-height: 1.8;
  }
  
  .return-button {
    margin-top: 25px;
  }
  </style>
