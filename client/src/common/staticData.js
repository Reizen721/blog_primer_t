/**
 * Static fallback dataset for GitHub Pages deployment
 * Allows blog_primer_t to render completely and beautifully without a live Express/SQLite backend
 */

export const staticCategories = [
    { id: 1, name: "Kaggle 竞赛" },
    { id: 2, name: "机器学习算法" },
    { id: 3, name: "个人博客随笔" }
];

export const staticBlogs = [
    {
        id: "kaggle-portfolio-2026",
        category_id: 1,
        title: "Kaggle学习记录",
        create_time: 1731911400000, // 2026-11-18
        previewContent: "系统梳理在 Kaggle 官方平台上独立完成的 4 项经典竞赛（Disaster Tweets、House Prices、Spaceship Titanic、Store Sales）的建模架构、高阶特征工程创新与 Leaderboard 官方评测成果，附公开在线交互式 Notebook 与开源工程代码仓库。",
        content: `
<h2>前言与成果概览</h2>
<p>在数据科学与机器学习实践中，Kaggle 的 Getting Started 与经典官方赛题覆盖了文本 NLP、高维表格回归、二分类以及多表关联时间序列等最核心的应用范式。近期我系统通关了其中 4 项具有代表性的挑战，并在官方 Leaderboard 上斩获了稳居前排的优异成绩。</p>
<p>所有比赛的实验流程、特征工程管道均已沉淀为工程化代码，并同步开源至 GitHub 仓库，同时在 Kaggle 官方平台上发布了可直接交互复现的公开 Jupyter Notebook：</p>
<ul>
    <li><strong>GitHub 开源项目仓库</strong>：<a href="https://github.com/Reizen721/kaggle-competitions" target="_blank">Reizen721/kaggle-competitions</a></li>
    <li><strong>Kaggle 个人主页</strong>：<a href="https://www.kaggle.com/davidzwang" target="_blank">@davidzwang on Kaggle</a></li>
</ul>

<hr/>

<h2>官方竞赛成绩与在线 Notebook 直达表</h2>
<table border="1" style="width:100%; border-collapse: collapse; margin: 15px 0; text-align: left;">
    <thead>
        <tr style="background-color: #f2f5f9;">
            <th style="padding: 10px;">竞赛名称</th>
            <th style="padding: 10px;">赛道任务</th>
            <th style="padding: 10px;">官方评估指标</th>
            <th style="padding: 10px;">最终得分</th>
            <th style="padding: 10px;">Leaderboard 排名</th>
            <th style="padding: 10px;">在线交互式 Notebook</th>
            <th style="padding: 10px;">源码路径</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td style="padding: 8px;"><strong><a href="https://www.kaggle.com/competitions/nlp-getting-started" target="_blank">NLP Disaster Tweets</a></strong></td>
            <td style="padding: 8px;">文本分类 / NLP</td>
            <td style="padding: 8px;">F1-Score</td>
            <td style="padding: 8px; color: #18a058; font-weight: bold;">0.84431</td>
            <td style="padding: 8px;"><strong>Rank 66 / 602</strong> (Top 10.96%)</td>
            <td style="padding: 8px;"><a href="https://www.kaggle.com/code/davidzwang/nlp-disaster-tweets-ensemble-denoised" target="_blank">查看 Kaggle Notebook</a></td>
            <td style="padding: 8px;"><a href="https://github.com/Reizen721/kaggle-competitions/tree/main/kaggle-nlp-disaster" target="_blank">源码目录</a></td>
        </tr>
        <tr>
            <td style="padding: 8px;"><strong><a href="https://www.kaggle.com/competitions/house-prices-advanced-regression-techniques" target="_blank">House Prices</a></strong></td>
            <td style="padding: 8px;">高维表格回归</td>
            <td style="padding: 8px;">RMSLE</td>
            <td style="padding: 8px; color: #18a058; font-weight: bold;">0.12047</td>
            <td style="padding: 8px;"><strong>Rank 650 / 4,929</strong> (Top 13.19%)</td>
            <td style="padding: 8px;"><a href="https://www.kaggle.com/code/davidzwang/house-prices-slsqp-stacking-regression" target="_blank">查看 Kaggle Notebook</a></td>
            <td style="padding: 8px;"><a href="https://github.com/Reizen721/kaggle-competitions/tree/main/kaggle-house-prices" target="_blank">源码目录</a></td>
        </tr>
        <tr>
            <td style="padding: 8px;"><strong><a href="https://www.kaggle.com/competitions/spaceship-titanic" target="_blank">Spaceship Titanic</a></strong></td>
            <td style="padding: 8px;">表格二分类</td>
            <td style="padding: 8px;">Accuracy</td>
            <td style="padding: 8px; color: #18a058; font-weight: bold;">0.80734</td>
            <td style="padding: 8px;"><strong>Rank 504 / 2,168</strong> (Top 23.25%)</td>
            <td style="padding: 8px;"><a href="https://www.kaggle.com/code/davidzwang/spaceship-titanic-calibrated-trio-ensemble" target="_blank">查看 Kaggle Notebook</a></td>
            <td style="padding: 8px;"><a href="https://github.com/Reizen721/kaggle-competitions/tree/main/kaggle-spaceship-titanic" target="_blank">源码目录</a></td>
        </tr>
        <tr>
            <td style="padding: 8px;"><strong><a href="https://www.kaggle.com/competitions/store-sales-time-series-forecasting" target="_blank">Store Sales Forecasting</a></strong></td>
            <td style="padding: 8px;">多表时序预测</td>
            <td style="padding: 8px;">RMSLE</td>
            <td style="padding: 8px; color: #18a058; font-weight: bold;">0.44282</td>
            <td style="padding: 8px;"><strong>Rank 349 / 666</strong></td>
            <td style="padding: 8px;"><a href="https://www.kaggle.com/code/davidzwang/store-sales-forecasting-histgbm-ensemble" target="_blank">查看 Kaggle Notebook</a></td>
            <td style="padding: 8px;"><a href="https://github.com/Reizen721/kaggle-competitions/tree/main/kaggle-store-sales" target="_blank">源码目录</a></td>
        </tr>
    </tbody>
</table>

<hr/>

<h2>四大核心项目实战方案精解</h2>

<h3>1. NLP Disaster Tweets：文本去噪与多模态堆叠</h3>
<p><strong>核心挑战</strong>：Twitter 社交文本存在大量口语化缩写、拼写错误、歧义修辞（如“that party was a bomb”并非真实爆炸），且训练集中存在相同推文却因标注员主观偏好产生相互矛盾的标签冲突。</p>
<p><strong>关键技术方案</strong>：</p>
<ul>
    <li><strong>标签冲突共识清洗（Label Denoising）</strong>：发现训练集中存在多处文本完全一致但标签冲突的脏数据，引入分组多数表决机制，系统性消除了训练标签的固有噪声。</li>
    <li><strong>双尺度 N-gram 与元语言特征挖掘</strong>：构建词级别（1–3 gram）与字符级别（3–5 gram）的联合 TF-IDF 特征空间，有效捕捉俚语词根与未登录词；并提取 URL、@用户标记、标点惊叹号密度、大写字母比例等强元特征。</li>
    <li><strong>5 折分层堆叠集成架构</strong>：联合 Logistic Regression（L2 正则）、RidgeClassifier、Complement Naive Bayes（应对类别失衡）与 SGDClassifier（平滑 Huber 损失），动态搜索最优判决阈值并应用完全一致测试样本覆写。</li>
</ul>

<h3>2. House Prices：微区地块校准与 SLSQP 凸优化 Stacking</h3>
<p><strong>核心挑战</strong>：包含 79 维异构特征，涉及极值离群点、具有特定业务含义的“结构性缺失”、以及局部空间地理溢价与房屋物理折旧之间的复杂非线性关系。</p>
<p><strong>关键技术方案</strong>：</p>
<ul>
    <li><strong>离群点甄别</strong>：遵循 Ames 数据集作者建议，剔除 Id 524 与 Id 1299 两处生活面积超过 4000 平方英尺却因非正常交易低价出售的致命异常样本。</li>
    <li><strong>语义填补与微观地块校准</strong>：将 15 个缺失代表“无设施”的字段映射为专属类别 <code>'None'</code> 与数值 0.0；对测试集 <code>IDOTRR</code> 社区缺失的规划分区精准填补当地主导的 <code>RM</code>，避免使用全局众数（<code>RL</code>）产生严重高估。</li>
    <li><strong>地理价值阶梯与高阶物理交互</strong>：构建 6 级 <code>Neighborhood_Tier</code> 指标；构造 <code>TotalSF</code>（地上+地下总建面）、综合卫浴系数与 <code>OverallQual × TotalSF</code> 交互项。</li>
    <li><strong>10 折 SLSQP 凸优化约束集成</strong>：通过序列最小二乘规划（SLSQP）在约束条件 \(w_i \ge 0, \sum w_i = 1\) 下求解 CatBoost、GBR、Ridge、Lasso、ElasticNet 的最优融合权重，取得 0.12047 顶尖成绩。</li>
</ul>

<h3>3. Spaceship Titanic：领域先验物理规则与先验概率对齐</h3>
<p><strong>核心挑战</strong>：科幻背景下的多维表格分类，各特征之间存在隐蔽的物理逻辑依赖。</p>
<p><strong>关键技术方案</strong>：</p>
<ul>
    <li><strong>强物理规则填补</strong>：发掘确定性约束（处于冷冻休眠 <code>CryoSleep == True</code> 或年龄 $\le 12$ 岁的乘客，所有奢侈消费项目必须严格为 0；有消费产生则休眠必为 False；特定甲板 A/B/C/T 严格对应母星 Europa，甲板 G 严格对应 Earth）。</li>
    <li><strong>客舱与社交关系解构</strong>：将 Cabin 分解为甲板（Deck）、舷号（Num）与侧翼（Side，左舷/右舷）；通过 PassengerId 聚合计算同行团体规模与家族大小。</li>
    <li><strong>10 折 GBDT 三重奏与测试集先验校准</strong>：集成 CatBoost、XGBoost 与 HistGradientBoosting，并根据测试集真实传送先验概率（~50.36%）校准判决门限，斩获 80.73% 准确率。</li>
</ul>

<h3>4. Store Sales：厄瓜多尔零售领域洞察与防穿越时序预测</h3>
<p><strong>核心挑战</strong>：预测 54 家门店在 33 种商品品类上的 16 天未来销售额（共 28,512 项）。涉及石油宏观经济指标、国家/省/市三级假期体系，以及严格的内存与无穿越时序限制。</p>
<p><strong>关键技术方案</strong>：</p>
<ul>
    <li><strong>多表宏观融合</strong>：双向线性插值补齐国际原油 WTI 价格并提取 7 日滚动趋势；排除调休假日后建立国家、省份、城市三级空间无污染假期匹配。</li>
    <li><strong>“Quincena” 双周发薪日脉冲与终身零销售掩码</strong>：建模每月 15 日与月底发薪日的客流爆发；识别出 53 个历史累计销售为 0 的休眠品类并硬性过滤，消除预测底噪。</li>
    <li><strong>严格防穿越滞后与轻量双 HistGBM</strong>：因预测步长为 16 天，所有滞后特征严格限制为 $\ge 16$ 天（<code>lag_16</code> 至 <code>lag_28</code>）；采用紧凑直方图分箱梯度提升网络，在几十兆内存限制下实现秒级高效拟合与预测。</li>
</ul>

<hr/>

<h2>总结与后续规划</h2>
<p>通过本系列竞赛实践，不仅深化了针对复杂结构化数据、多模态时序以及文本自然语言处理的端到端特征工程能力，也锤炼了严格的防穿越验证体系（Stratified K-Fold / Holdout）与高阶堆叠集成技巧。后续将进一步探索计算机视觉（CV）与多模态大模型在垂直领域的竞赛应用！</p>
`
    },
    {
        id: "welcome-to-blog",
        category_id: 3,
        title: "欢迎来到 David Z. Wang 的个人技术网站与博客",
        create_time: 1730884000000,
        previewContent: "本站基于 Vue 3 + Naive UI + Vite 构建，记录机器学习、深度学习、算法竞赛以及全栈软件开发的技术心得与项目成果。",
        content: `
<h2>关于本站</h2>
<p>欢迎访问我的个人技术博客！本网站采用 Vue 3 + Naive UI 前端框架搭建，设计极简清爽，旨在分享与交流前沿计算机科学技术成果。</p>
<h3>博主简介</h3>
<ul>
    <li><strong>姓名</strong>：David Z. Wang (Devil__Zero)</li>
    <li><strong>专注领域</strong>：机器学习（Machine Learning）、数据科学（Data Science）、时序分析与自然语言处理</li>
    <li><strong>Kaggle 主页</strong>：<a href="https://www.kaggle.com/davidzwang" target="_blank">@davidzwang</a></li>
    <li><strong>GitHub 主页</strong>：<a href="https://github.com/Reizen721" target="_blank">@Reizen721</a></li>
</ul>
<p>欢迎阅读顶部的最新文章，或通过作者页面了解更多联系方式！</p>
`
    }
];

export function getStaticBlogs(keyword = "", categoryId = 0, page = 1, pageSize = 5) {
    let rows = staticBlogs.slice();
    
    if (categoryId && categoryId !== 0) {
        rows = rows.filter(b => b.category_id === categoryId);
    }
    
    if (keyword && keyword.trim()) {
        const kw = keyword.toLowerCase().trim();
        rows = rows.filter(b => 
            b.title.toLowerCase().includes(kw) || 
            b.previewContent.toLowerCase().includes(kw) ||
            b.content.toLowerCase().includes(kw)
        );
    }
    
    const count = rows.length;
    const start = (page - 1) * pageSize;
    const pagedRows = rows.slice(start, start + pageSize);
    
    return {
        rows: pagedRows,
        count: count
    };
}

export function getStaticBlogDetail(id) {
    return staticBlogs.find(b => b.id.toString() === id.toString()) || staticBlogs[0];
}
