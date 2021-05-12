<template>
  <el-container>
    <el-aside>
      <el-menu
        default-active="1-4-1"
        class="el-menu-vertical-demo"
        @open="handleOpen"
        @close="handleClose"
        :collapse="isCollapse"
      >
        <template v-for="(route, index) in $router.options.routes">
          <!-- 含有子菜单 -->
          <el-submenu
            v-if="route.children && route.children.length &&route.meta.isMenu"
            :index="String(index)"
            :key="index"
          >
            <template slot="title">
              <i class="el-icon-location"></i>
              <span slot="title">{{ route.meta.title }}</span>
            </template>
            <template>
              <el-menu-item
                v-for="(child, i) in route.children"
                :key="i"
                :index="String(`${index}-${i}`)"
                @click="goLink(child)"
                >{{ child.meta.title }}
              </el-menu-item>
            </template>
          </el-submenu>
          <!-- 没有子菜单 -->
          <el-menu-item
            :index="String(index)"
            :key="index"
            @click="goLink(route)"
            v-else-if="route.meta.isMenu"
          >
            <i class="el-icon-menu"></i>
            <span slot="title">{{ route.meta.title }}</span>
          </el-menu-item>
        </template>
      </el-menu>
    </el-aside>
    <el-container>
      <el-header>
        <i
          :class="[isCollapse ? 'el-icon-s-unfold' : 'el-icon-s-fold', 'icon']"
          @click="collapseChange"
        ></i>
        <el-menu
          default-active="/"
          router
          class="el-header-menu"
          mode="horizontal"
          @select="handleSelect"
          active-text-color="#409EFF"
        >
          <el-menu-item index="/">首页</el-menu-item>
        </el-menu>
        <el-avatar icon="el-icon-user-solid"></el-avatar>
        <el-dropdown trigger="click">
          <span class="el-dropdown-link">
            个人中心<i class="el-icon-caret-bottom el-icon--right"></i>
          </span>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item class="clearfix">
              注销
            </el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </el-header>
      <el-main><router-view /></el-main>
    </el-container>
  </el-container>
</template>

<script>
// @ is an alias to /src
import { login } from "@/utils/api";
export default {
  name: 'Home',
  components: {
  },
  data () {
    return {
      isCollapse: false
    }
  },
  created () {
    console.log(this.$router.options.routes);
    this.axioss()
  },
  methods: {
    collapseChange () {
      this.isCollapse = !this.isCollapse
    },
    axioss () {
      login().then().catch(res => {
        console.log(res);
      })
    },
    handleOpen (key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose (key, keyPath) {
      console.log(key, keyPath);
    },
    goLink (item) {
      console.log(item);
      this.$router.push({
        path: item.path
      })
    },
    handleSelect (key, keyPath) {
      console.log(key, keyPath);
    }
  }
}
</script>
<style lang="less" scoped>
.el-header {
  display: flex;
  align-items: center;
  color: #333;
  text-align: center;
  line-height: 60px;
  padding: 0;
  .el-header-menu {
    flex: 1;
  }
  .icon {
    font-size: 20px;
    cursor: pointer;
    margin: 0 15px;
  }
  .el-avatar,.el-dropdown{
    margin-right:15px;
    cursor: pointer;
  }
}

.el-aside {
  width: auto !important;
  background-color: #d3dce6;
  color: #333;
}
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
  height: 100%;
}
.el-main {
  background-color: #e9eef3;
  color: #333;
  text-align: center;
  line-height: 160px;
}

.el-container {
  margin-bottom: 40px;
  height: 100%;
}

.el-container:nth-child(5) .el-aside,
.el-container:nth-child(6) .el-aside {
  line-height: 260px;
}

.el-container:nth-child(7) .el-aside {
  line-height: 320px;
}
</style>
