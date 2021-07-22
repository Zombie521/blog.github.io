#!/usr/bin/env sh

# ȷ���ű��׳������Ĵ���
set -e

if [ -z "$GITHUB_TOKEN" ]; then
  msg='originCode'
  githubUrl=git@github.com:Zombie521/blog.github.io
else
  msg='����github actions���Զ�����'
  githubUrl=https://wuyiyao:${GITHUB_TOKEN}@github.com/Zombie521/blog.github.io
  git config --global user.name "wuyiyao"
  git config --global user.email "532117848@qq.com"
fi
git init
git add -A
git commit -m "${msg}"
git pull
git push -f $githubUrl master:master # 推送到仓库github master分支
