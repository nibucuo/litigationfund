#!/bin/bash
echo '<----------VueWeb is ready to build!---------->'

set -e
# 更新系统级环境变量，NODE_ENV写在里面
source /etc/environment

# 定义变量
WORKING_DIR="/mnt/web/"
REPO_NAME="litigationfund"


cd $WORKING_DIR

# 1.从版本库获取文件
if [[ ! -d $REPO_NAME ]]; then
    echo '<----------begin to clone VueWeb.git!---------->'
    git clone -b master https://github.com/nibucuo/vue-demo.git
    echo '<----------Progress 20% , VueWeb clone task complete!---------->'
else
    cd $WORKING_DIR/$REPO_NAME
    echo '<----------begin to pull VueWeb.git!---------->'
    git pull origin master
    echo '<----------Progress 20% , VueWeb pull task complete!---------->'
fi

# 2.添加包依赖
echo '<----------begin to install package!---------->'
cd $WORKING_DIR/$REPO_NAME
npm install
echo '<----------Progress 40% , install package task complete!---------->'

# 3.如果www目录不存在，新建之；如果存在，清空目录
echo '<----------begin to create dist folder!---------->'
cd $WORKING_DIR
  cd $WORKING_DIR/www
  for f in `ls`
  do
    if [  -d $f  ]
    then  
      rm -rf $f
    else
      rm  $f
    fi  
  done
fi
echo '<----------Progress 65% , create dist folder task complete!---------->'

# 4.拷贝VueWeb目录到dist
echo '<----------begin to copy VueWeb to dist!---------->'
cd $WORKING_DIR/$REPO_NAME/dist
for f in `ls`
do                     
  if [  -d $f  ]
  then  
    cp -rf $f $WORKING_DIR/dist #拷贝文件夹
  else
    cp $f $WORKING_DIR/dist #拷贝文件
  fi                  
done 
echo '<----------Progress 80% , copy VueWeb task complete!---------->'        


echo '<----------Progress 100% , VueWeb build successfully!---------->'











