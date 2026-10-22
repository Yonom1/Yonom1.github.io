# 刘晓睿的个人主页

基于 [Jekyll](https://jekyllrb.com/) 与 [Minimal Mistakes](https://mmistakes.github.io/minimal-mistakes/)，由 GitHub Pages 托管。中英文页面共用项目、近况与教育数据。

## 内容维护

| 内容 | 文件 |
| --- | --- |
| 姓名、侧栏、联系方式与主题 | `_config.yml`、`_data/authors.yml` |
| 首页介绍、入学去向、兴趣、教育 | `_data/profile.yml` |
| 近况（日期倒序） | `_data/news.yml` |
| 项目排序、摘要、封面与首页精选 | `_data/projects.yml` |
| 荣誉 | `_data/honors.yml` |
| 中文与英文项目详情 | `project/*.md`、`en/project/*.md` |
| 导航 | `_data/navigation.yml` |
| 首页和项目列表模板 | `_includes/home.html`、`_includes/project-list.html` |
| 样式 | `assets/css/main.scss` |
| 网页使用的轻量图片 | `img/optimized/` |

双语数据在同一条记录中填写 `zh` / `en`，避免两份列表遗漏更新。项目记录的 `selected: true` 控制是否在首页展示；文件顺序就是展示顺序。新增页面时填写 `description`、`lang` 和互相对应的 `translation_url`。

3DGS 是基于组内 Pointrix/msplat 的入组训练项目，代码链接应指向 `my-change-branch`。个人工作、继承的框架能力及实验结论分别按项目记录说明。

## 图片

原图保留在 `img/`。页面使用 `img/optimized/` 内的 WebP：头像为 400 × 400；项目列表使用约 640px 宽的缩略图，详情使用较清晰的版本。更新图片时保留图中信息，填写真实的 `width` / `height`，非首屏图片使用 `loading="lazy"`。

## 本地预览

安装 Ruby 与 Bundler 后，在仓库根目录运行：

```bash
bundle install
bundle exec jekyll serve
```

打开 `http://127.0.0.1:4000/`。发布前检查中文、英文首页与项目详情，以及手机宽度下的内容卡片、导航和图片。

## 发布

确认修改后提交并推送到 `main`，GitHub Pages 会自动构建：

```bash
git add .
git commit -m "Update homepage"
git push origin main
```
