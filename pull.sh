#!/usr/bin/env sh

# 确保脚本抛出遇到的错误
set -e

if [ -z "$GITHUB_TOKEN" ]; then
  msg='originCode'
  githubUrl=git@github.com:Zombie521/blog.github.io
else
  msg='来自github actions的自动部署'
  githubUrl=https://wuyiyao:${GITHUB_TOKEN}@github.com/Zombie521/blog.github.io
  git config --global user.name "wuyiyao"
  git config --global user.email "532117848@qq.com"
fi
git init
git add -A
git commit -m "${msg}"
git pull      #pull到本地仓库