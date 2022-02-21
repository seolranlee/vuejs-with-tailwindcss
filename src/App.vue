<template>
  <div id="app">
    <HelloWorld v-show="false" msg="Welcome to Your Vue.js App" />

    <!-- blog  -->
    <div class="wrapper p-4">
      <ul class="posts">
        <li class="item py-8 border-t border-gray-100">
          <div>
            <h3 class="font-sans text-base font-medium text-primary">Tech</h3>
            <h2
              class="font-sans text-2xl font-bold text-black line-clamp-3 md:line-clamp-2"
            >
              <a href="#">애자일의 근본 알아보기</a>
            </h2>
            <p>
              <span class="date text-sm text-gray-400">2021.12.20</span>
              <span class="author text-sm text-gray-400"
                ><a href="#">Jimmy</a></span
              >
            </p>
            <ul class="tag flex flex-wrap mt-8 gap-2">
              <li>
                <a href="#">
                  <div
                    class="rounded-2xl py-1 px-3 border border-gray-200 text-tag leading-tag"
                  >
                    #DesignSystem
                  </div>
                </a>
              </li>
              <li>
                <a href="#">
                  <div
                    class="rounded-2xl py-1 px-3 border border-gray-200 text-tag leading-tag"
                  >
                    #Agile
                  </div>
                </a>
              </li>
              <li>
                <a href="#">
                  <div
                    class="rounded-2xl py-1 px-3 border border-gray-200 text-tag leading-tag"
                  >
                    #CI/CD
                  </div>
                </a>
              </li>
            </ul>
          </div>
        </li>
        <li class="item py-8 border-t border-gray-100">
          <div>
            <h3 class="font-sans text-base font-medium text-primary">Tech</h3>
            <h2
              class="font-sans text-2xl font-bold text-black line-clamp-3 md:line-clamp-2"
            >
              <a href="#"
                >애자일의 근본 알아보기 애자일의 근본 알아보기 애자일의 근본
                알아보기 애자일의 근본 알아보기 애자일의 근본 알아보기 애자일의
                근본 알아보기</a
              >
            </h2>
            <p>
              <span class="date text-sm text-gray-400">2021.12.20</span>
              <span class="author text-sm text-gray-400"
                ><a href="#">Jimmy</a></span
              >
            </p>
            <ul class="tag flex flex-wrap mt-8 gap-2">
              <li>
                <a href="#">
                  <div
                    class="rounded-2xl py-1 px-3 border border-gray-200 text-tag leading-tag"
                  >
                    #DesignSystem
                  </div>
                </a>
              </li>
              <li>
                <a href="#">
                  <div
                    class="rounded-2xl py-1 px-3 border border-gray-200 text-tag leading-tag"
                  >
                    #Agile
                  </div>
                </a>
              </li>
              <li>
                <a href="#">
                  <div
                    class="rounded-2xl py-1 px-3 border border-gray-200 text-tag leading-tag"
                  >
                    #CI/CD
                  </div>
                </a>
              </li>
              <li>
                <a href="#">
                  <div
                    class="rounded-2xl py-1 px-3 border border-gray-200 text-tag leading-tag"
                  >
                    #DesignSystem
                  </div>
                </a>
              </li>
              <li>
                <a href="#">
                  <div
                    class="rounded-2xl py-1 px-3 border border-gray-200 text-tag leading-tag"
                  >
                    #Agile
                  </div>
                </a>
              </li>
              <li>
                <a href="#">
                  <div
                    class="rounded-2xl py-1 px-3 border border-gray-200 text-tag leading-tag"
                  >
                    #CI/CD
                  </div>
                </a>
              </li>
            </ul>
          </div>
        </li>
        <li class="item py-8 border-t border-gray-100">
          <div>
            <h3 class="font-sans text-base font-medium text-primary">Design</h3>
            <h2
              class="font-sans text-2xl font-bold text-black line-clamp-3 md:line-clamp-2"
            >
              <a href="#">숨고 디자인 시스템 제작 스토리</a>
            </h2>
            <p>
              <span class="date text-sm text-gray-400">2021.11.20</span>
              <span class="author text-sm text-gray-400"
                ><a href="#">Ken</a></span
              >
            </p>
            <ul class="tag flex flex-wrap mt-8 gap-2">
              <li>
                <a href="#">
                  <div
                    class="rounded-2xl py-1 px-3 border border-gray-200 text-tag leading-tag"
                  >
                    #DesignSystem
                  </div>
                </a>
              </li>
              <li>
                <a href="#">
                  <div
                    class="rounded-2xl py-1 px-3 border border-gray-200 text-tag leading-tag"
                  >
                    #Agile
                  </div>
                </a>
              </li>
              <li>
                <a href="#">
                  <div
                    class="rounded-2xl py-1 px-3 border border-gray-200 text-tag leading-tag"
                  >
                    #Platform
                  </div>
                </a>
              </li>
            </ul>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";

export default {
  name: "App",
  components: {
    HelloWorld,
  },
};
</script>

<style lang="scss" scoped>
@import "./assets/index.css";
.posts {
  .item {
    .date {
      &::after {
        content: "ㅣ";
        color: #e2e2e2;
      }
    }
  }
}
</style>
