# 刘晓睿的个人主页

这是一个基于 [Jekyll](https://jekyllrb.com/) 与 [Minimal Mistakes](https://mmistakes.github.io/minimal-mistakes/) 的静态个人网站，由 GitHub Pages 托管。

## 内容放在哪里

- `_config.yml`：站点名称、简介、头像、联系方式与主题设置
- `_data/navigation.yml`：顶部导航
- `index.md`：中文主页
- `project.md`：中文项目列表
- `project/*.md`：中文项目详情
- `en/*.md`：英文页面
- `img/`：头像、项目封面与友链头像
- `assets/css/main.scss`：少量个性化样式

## 日常更新

直接编辑相应的 Markdown 文件，保存后提交并推送到 `main` 分支。GitHub Pages 会自动运行 Jekyll 并更新网站。

```bash
git add .
git commit -m "Update homepage"
git push origin main
```

本地文件夹的位置不会影响 GitHub 推送。只要 `.git` 文件夹仍在且 `git remote -v` 指向正确仓库，推送关系就会保留。

## 本地预览（可选）

安装 Ruby 与 Bundler 后运行：

```bash
bundle install
bundle exec jekyll serve
```

随后打开 `http://127.0.0.1:4000/`。
