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
        previewContent: "记录最近在 Kaggle 上做的 4 个 Getting Started 入门比赛（Disaster Tweets、House Prices、Spaceship Titanic、Store Sales）的思路、踩坑过程以及最终提交成绩，附上在线 Notebook 和代码仓库。",
        content: `
<h2>前言</h2>
<p>最近花了点时间把 Kaggle 上的几个经典 Getting Started 比赛过了一遍，主要涵盖了 NLP 文本分类、表格回归、表格二分类以及时间序列预测这四个常见方向。这几个比赛虽然是入门向的，但真要往上刷分，数据清洗和特征工程里还是有不少细节值得琢磨的。</p>
<p>代码和整理好的 Notebook 我都放到了 GitHub 和 Kaggle 上，方便后面自己回顾参考：</p>
<ul>
    <li>GitHub 仓库：<a href="https://github.com/Reizen721/kaggle-competitions" target="_blank">Reizen721/kaggle-competitions</a></li>
    <li>Kaggle 主页：<a href="https://www.kaggle.com/davidzwang" target="_blank">@davidzwang</a></li>
</ul>

<hr/>

<h2>比赛成绩与 Notebook 汇总</h2>
<table border="1" style="width:100%; border-collapse: collapse; margin: 15px 0; text-align: left;">
    <thead>
        <tr style="background-color: #f2f5f9;">
            <th style="padding: 10px;">竞赛名称</th>
            <th style="padding: 10px;">任务类型</th>
            <th style="padding: 10px;">评估指标</th>
            <th style="padding: 10px;">最终得分</th>
            <th style="padding: 10px;">Leaderboard 排名</th>
            <th style="padding: 10px;">Kaggle Notebook</th>
            <th style="padding: 10px;">源码</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td style="padding: 8px;"><a href="https://www.kaggle.com/competitions/nlp-getting-started" target="_blank">NLP Disaster Tweets</a></td>
            <td style="padding: 8px;">文本分类 / NLP</td>
            <td style="padding: 8px;">F1-Score</td>
            <td style="padding: 8px; color: #18a058;">0.84431</td>
            <td style="padding: 8px;">66 / 602</td>
            <td style="padding: 8px;"><a href="https://www.kaggle.com/code/davidzwang/nlp-disaster-tweets-ensemble-denoised" target="_blank">Notebook 链接</a></td>
            <td style="padding: 8px;"><a href="https://github.com/Reizen721/kaggle-competitions/tree/main/kaggle-nlp-disaster" target="_blank">源码目录</a></td>
        </tr>
        <tr>
            <td style="padding: 8px;"><a href="https://www.kaggle.com/competitions/house-prices-advanced-regression-techniques" target="_blank">House Prices</a></td>
            <td style="padding: 8px;">表格回归</td>
            <td style="padding: 8px;">RMSLE</td>
            <td style="padding: 8px; color: #18a058;">0.12047</td>
            <td style="padding: 8px;">650 / 4,929</td>
            <td style="padding: 8px;"><a href="https://www.kaggle.com/code/davidzwang/house-prices-slsqp-stacking-regression" target="_blank">Notebook 链接</a></td>
            <td style="padding: 8px;"><a href="https://github.com/Reizen721/kaggle-competitions/tree/main/kaggle-house-prices" target="_blank">源码目录</a></td>
        </tr>
        <tr>
            <td style="padding: 8px;"><a href="https://www.kaggle.com/competitions/spaceship-titanic" target="_blank">Spaceship Titanic</a></td>
            <td style="padding: 8px;">表格二分类</td>
            <td style="padding: 8px;">Accuracy</td>
            <td style="padding: 8px; color: #18a058;">0.80734</td>
            <td style="padding: 8px;">504 / 2,168</td>
            <td style="padding: 8px;"><a href="https://www.kaggle.com/code/davidzwang/spaceship-titanic-calibrated-trio-ensemble" target="_blank">Notebook 链接</a></td>
            <td style="padding: 8px;"><a href="https://github.com/Reizen721/kaggle-competitions/tree/main/kaggle-spaceship-titanic" target="_blank">源码目录</a></td>
        </tr>
        <tr>
            <td style="padding: 8px;"><a href="https://www.kaggle.com/competitions/store-sales-time-series-forecasting" target="_blank">Store Sales Forecasting</a></td>
            <td style="padding: 8px;">时间序列预测</td>
            <td style="padding: 8px;">RMSLE</td>
            <td style="padding: 8px; color: #18a058;">0.44282</td>
            <td style="padding: 8px;">349 / 666</td>
            <td style="padding: 8px;"><a href="https://www.kaggle.com/code/davidzwang/store-sales-forecasting-histgbm-ensemble" target="_blank">Notebook 链接</a></td>
            <td style="padding: 8px;"><a href="https://github.com/Reizen721/kaggle-competitions/tree/main/kaggle-store-sales" target="_blank">源码目录</a></td>
        </tr>
    </tbody>
</table>

<hr/>

<h2>四个比赛的做法记录</h2>

<h3>1. NLP Disaster Tweets</h3>
<p>任务：判断一条推文是在描述真实的灾难事件，还是只是用灾难相关的词汇做比喻（比如 "that party was a bomb" 这种）。</p>
<p>方案思路：</p>
<ul>
    <li>看数据时我发现训练集里有一些一模一样的推文，但标签居然是矛盾的，估计是人工标注时的噪声。所以我先按文本分组做了一遍多数表决，把冲突标签先清洗统一了。</li>
    <li>在特征上，我考虑推文里有很多拼写不规范和缩写，单纯做词级别的切分可能会漏掉信息，所以把词级别（1–3 gram）和字符级别（3–5 gram）的 TF-IDF 拼在了一起，另外加上了文本长度、感叹号数量、大写字母比例以及 URL/@用户 的统计特征。</li>
    <li>模型部分我用了 5 折交叉验证，把 Logistic Regression、RidgeClassifier、Complement Naive Bayes 和 SGDClassifier 做了平均融合，然后在验证集上搜索最佳分类阈值，最后对测试集里和训练集完全重合的句子直接用训练标签覆写，最终分数到了 0.84431（排名 66 / 602）。</li>
</ul>

<h3>2. House Prices</h3>
<p>任务：根据 79 个房屋属性特征（结构、地段、装修质量等）来预测房价。</p>
<p>方案思路：</p>
<ul>
    <li>我先参考数据集作者 Dean De Cock 的说明，把训练集里那两套居住面积大于 4000 平方英尺但价格异常便宜的离群样本（Id 524 和 1299）剔除了，不然线性模型和树模型都会被拉偏。</li>
    <li>缺失值处理上我考虑得比较细：像泳池、车库、地下室这些字段的缺失其实代表“没有该设施”，不能用众数去填，而是统一设为 <code>'None'</code> 或 0；另外我注意到测试集里 <code>IDOTRR</code> 社区有几条记录缺了 <code>MSZoning</code>，如果按全局众数填 <code>RL</code> 会高估房价，所以改成了按该社区实际的 <code>RM</code> 填补。</li>
    <li>之后我把不同社区的中位数房价分了 6 个档位做成 <code>Neighborhood_Tier</code>，又构造了总面积 <code>TotalSF</code>、总卫生间数以及品质与面积的乘积项。模型上我用 10 折交叉验证训练了 CatBoost、GBR、Ridge、Lasso 和 ElasticNet，最后用 SLSQP 求解非负权重做 Stacking 融合，拿到了 0.12047 的成绩（排名 650 / 4,929）。</li>
</ul>

<h3>3. Spaceship Titanic</h3>
<p>任务：预测宇宙飞船碰撞事故中哪些乘客被传送到了异次元。</p>
<p>方案思路：</p>
<ul>
    <li>在做 EDA 的时候，我发现数据里藏着不少硬性的逻辑关系：比如处于冷冻休眠（<code>CryoSleep == True</code>）或者年龄 ≤ 12 岁的乘客，在船上的所有消费项目肯定都是 0；反过来只要有消费，就不可能处于休眠状态；还有 A/B/C/T 甲板的乘客基本都来自 Europa。我先用这些规则把能推出来的缺失值尽量补全。</li>
    <li>特征方面，我把 <code>Cabin</code> 拆成了甲板、房间号和左右舷侧，同时根据 <code>PassengerId</code> 前缀的编号和姓氏统计了同行人数和家族规模。</li>
    <li>模型上我考虑单模型在表格数据上容易过拟合，所以用 10 折分层抽样训练了 CatBoost、XGBoost 和 HistGradientBoosting 三个模型做加权平均。提交前我根据训练集与测试集的传送比例先验（约 50.36%）微调了分类阈值，最终准确率 0.80734（排名 504 / 2,168）。</li>
</ul>

<h3>4. Store Sales Forecasting</h3>
<p>任务：结合油价、节假日和门店信息，预测厄瓜多尔 54 家连锁超市 33 个品类未来 16 天的日销售额（一共 28,512 条预测序列）。</p>
<p>方案思路：</p>
<ul>
    <li>这题的数据比较大（三百多万行），本地跑全量数据直接爆内存了。我考虑太早之前的年份宏观环境差异很大，还有新开门店的零值噪声，所以只截取了 2017 年的数据来做训练，并把所有数值列压缩成了 <code>float32</code> 和 <code>int16</code>。</li>
    <li>业务特征上，我把原油价格做了线性插值并算了 7 天均值；节假日表剔除了调休转移的日期后，分别按国家、省、市三级去匹配对应门店；另外厄瓜多尔发薪日是在每月 15 号和月底，我专门加了发薪日标记来捕捉客流高峰。同时我发现有 53 个门店-品类组合历史上从来没卖出去过一件商品，在预测结果里直接把对应的 848 条数据置零。</li>
    <li>因为测试集要一次往后预测 16 天，为了防止数据穿越，所有销售额滞后特征我只敢取 ≥ 16 天以前的值（比如 <code>lag_16</code> 到 <code>lag_28</code>）。最后训练了两个不同参数的 HistGradientBoosting 模型做融合，提交拿到了 0.44282（排名 349 / 666）。中间提交第一版时还踩过一次坑：排序算完滞后特征忘了按原始 <code>id</code> 对齐回去，直接交上去得分变成了 3.5，排查对齐之后才恢复正常。</li>
</ul>

<hr/>

<h2>小结</h2>
<p>做完这四个比赛最大的感受是，很多时候调参带来的提升远不如把数据里的业务逻辑和脏数据搞清楚来得实在。后面打算继续看看图像（CV）或者更复杂一些的推荐系统赛题。</p>
`
    },
    {
        id: "welcome-to-blog",
        category_id: 3,
        title: "欢迎来到 David Z. Wang 的个人技术网站与博客",
        create_time: 1730884000000,
        previewContent: "本站基于 Vue 3 + Naive UI + Vite 构建，记录平时学习机器学习、做竞赛以及写全栈代码过程中的一些笔记和想法。",
        content: `
<h2>关于这里</h2>
<p>这是我的个人博客，平时主要用来记录机器学习、算法竞赛还有写代码时碰到的一些问题和总结。</p>
<ul>
    <li>姓名：David Z. Wang (Devil__Zero)</li>
    <li>Kaggle 主页：<a href="https://www.kaggle.com/davidzwang" target="_blank">@davidzwang</a></li>
    <li>GitHub 主页：<a href="https://github.com/Reizen721" target="_blank">@Reizen721</a></li>
</ul>
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
