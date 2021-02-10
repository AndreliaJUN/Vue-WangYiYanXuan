<template>
  <div class="titleDiv">
    <van-row type="flex" justify="space-between">
      <van-col span="21">
        <van-field
          class="searchDiv"
          v-model="search_value"
          size="large"
          @input="inputValFn"
          placeholder="好货内部价"
					@keyup.enter='submitFn'
        >
          <!-- 搜索框放大镜icon -->
          <template v-slot:left-icon>
            <van-icon name="search" class="searchIconLeft" />
          </template>

          <!-- 清空搜索框 -->
          <template #button>
            <van-icon
              v-show="isCloseShow"
              @click="clear_search_inputFn"
              name="close"
              class="search_close_r"
            />
          </template>
        </van-field>
      </van-col>
      <van-col span="3">
        <van-button class="cancelBtn" type="primary" size="mini"
          >取消</van-button
        >
      </van-col>
    </van-row>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "searchPage",
  data() {
    return {
      search_value: "",
      input_v: "",
      isCloseShow: false
    };
  },
  watch: {
    input_v() {
      this.isCloseShow = true;
    }
  },
  created() {
    // axios.get("http://localhost:3344/aa").then(_d => {
    //   console.log(_d.data);
    // });
  },
  methods: {
    // 获得焦点
    inputValFn(v) {
      console.log(v);
      this.input_v = v;
    },
    // 清空搜索框按钮
    clear_search_inputFn() {
      this.search_value = "";
      this.isCloseShow = false;
		},
		submitFn(){
			axios.get('http://localhost:3344/search',{
				params:{
						search_key : this.input_v
					}
			}).then(res =>{
					console.log( res.data );
				})
		}
  }
};
</script>

<style scoped>
.titleDiv {
  padding: 0.2rem 0.4rem;
}
.cancelBtn {
  width: 0.98667rem;
  height: 0.53333rem;
  line-height: 0.53333rem;
  text-align: center;
  color: #333;
  border: 0;
  margin-left: 0.21333rem;
  font-size: 0.37333rem;
  background: #fff;
  margin-top: 0.1rem;
}
.searchDiv {
  border: 0;
  background-color: #f4f4f4;
  height: 0.74667rem;
  line-height: 0.45rem;
  border-radius: 4px;
  font-size: 0.37333rem;
}
.searchIconLeft {
  font-size: 0.5rem;
}
</style>