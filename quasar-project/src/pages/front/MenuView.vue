<template>
<q-page>
  <q-sectoin class="banner row">
    <q-img
      src="../../assets/images/banner_menu.jpg"
      style="max-height:35vh; width:100vw;"
    />
    <div class="bg-mask mask-text col-12 column flex-center">
      <p class="col-2 text-h3">MENU</p>
      <p class="col-2 text-h5">門市餐點</p>
    </div>
  </q-sectoin>
  <section class="section_1 q-px-xl q-pa-md row justify-center">
    <div style="max-width: 1000px" class="q-px-md">
      <q-tabs
        v-model="tab"
        dense
        class="text-grey"
        active-color="accent"
        active-bg-color="primary"
        align="justify"
        indicator-color="accent"
      >
        <q-tab class="main_tab" name="drinks">
          <div class="bg-transparent q-py-md" flat>
            <div class="col-sm-8">
              <q-img
                src="../../assets/images/menu/cafe_4.png"
              />
            </div>
            <div class="col-sm-2">
              <div class="text-h5 q-mt-sm q-mb-xs">飲品</div>
              <div class="text-caption text-grey">
                DRINKS
              </div>
            </div>
          </div>
        </q-tab>
        <q-tab class="main_tab" name="dessert">
          <div class="bg-transparent q-py-md" flat>
            <div class="col-sm-8">
              <q-img
                src="../../assets/images/menu/pancake.png"
              />
            </div>
            <div class="col-sm-2">
              <div class="text-h5 q-mt-sm q-mb-xs">甜點</div>
              <div class="text-caption text-grey">
                DESSERT
              </div>
            </div>
          </div>
        </q-tab>
        <q-tab class="main_tab" name="main">
          <div class="bg-transparent q-py-md" flat>
            <div class="col-sm-8">
              <q-img
                src="../../assets/images/menu/pasta_1.png"
              />
            </div>
            <div class="col-sm-2">
              <div class="text-h5 q-mt-sm q-mb-xs">主餐</div>
              <div class="text-caption text-grey">
                MAIN
              </div>
            </div>
          </div>
        </q-tab>
      </q-tabs>

      <div class="q-gutter-y-sm q-mt-xl">
        <q-tab-panels
          v-model="tab"
          animated
          transition-prev="scale"
          transition-next="scale"
          class="bg-transparent text-primary text-center"
        >

          <q-tab-panel class="row justify-center" name="drinks">
            <q-card dense class="col-5 col-sm-3 q-px-sm bg-transparent shadow-0">
              <div>
                <q-img :ratio="4/3" src="https://res.cloudinary.com/dwcwzhv3w/image/upload/v1677699001/MENU/%E9%BB%91%E5%92%96%E5%95%A1_ofxoxd.jpg">
                </q-img>
              </div>
              <q-card-section>
                <div class="text-h6">經典美式</div>
                <div class="text-caption text-grey">AMERICANO</div>
              </q-card-section>
            </q-card>
            <q-card dense class="col-5 col-sm-3 q-px-sm bg-transparent shadow-0">
              <div>
                <q-img :ratio="4/3" src="https://res.cloudinary.com/dwcwzhv3w/image/upload/v1677670502/MENU/americano_ztqjkp.jpg">
                </q-img>
              </div>
              <q-card-section>
                <div class="text-h6">拿鐵咖啡</div>
                <div class="text-caption text-grey">LATTE</div>
              </q-card-section>
            </q-card>
            <q-card dense class="col-5 col-sm-3 q-px-sm bg-transparent shadow-0">
              <div>
                <q-img :ratio="4/3" src="https://res.cloudinary.com/dwcwzhv3w/image/upload/v1677700105/MENU/Capuccino.jpg_shugah.jpg">
                </q-img>
              </div>
              <q-card-section>
                <div class="text-h6">卡布奇諾</div>
                <div class="text-caption text-grey">CAPPUCCINO</div>
              </q-card-section>
            </q-card>
            <q-card dense class="col-5 col-sm-3 q-px-sm bg-transparent shadow-0">
              <div>
                <q-img :ratio="4/3" src="https://res.cloudinary.com/dwcwzhv3w/image/upload/v1677699275/MENU/Mocha-1fc71f7_vaynnz.png">
                </q-img>
              </div>
              <q-card-section>
                <div class="text-h6">摩卡</div>
                <div class="text-caption text-grey">MOCHA</div>
              </q-card-section>
            </q-card>
            <q-card dense class="col-5 col-sm-3 q-px-sm bg-transparent shadow-0">
              <div>
                <q-img :ratio="4/3" src="https://res.cloudinary.com/dwcwzhv3w/image/upload/v1677717532/MENU/andres-vera-BewKTZMv7V0-unsplash_1_ddofre.jpg">
                </q-img>
              </div>
              <q-card-section>
                <div class="text-h6">義式濃縮</div>
                <div class="text-caption text-grey">ESPRESSO</div>
              </q-card-section>
            </q-card>
            <q-card dense class="col-5 col-sm-3 q-px-sm bg-transparent shadow-0">
              <div>
                <q-img :ratio="4/3" src="https://res.cloudinary.com/dwcwzhv3w/image/upload/v1677699608/MENU/Milk_Tea_hnytwc.jpg">
                </q-img>
              </div>
              <q-card-section>
                <div class="text-h6">蜂蜜檸檬牛奶</div>
                <div class="text-caption text-grey">HONEY LEMON MILK</div>
              </q-card-section>
            </q-card>
            <q-card dense class="col-5 col-sm-3 q-px-sm bg-transparent shadow-0">
              <div>
                <q-img :ratio="4/3" src="https://res.cloudinary.com/dwcwzhv3w/image/upload/v1677699913/MENU/Matcha-Tea-640-1-640x360_qesad3.jpg">
                </q-img>
              </div>
              <q-card-section>
                <div class="text-h6">靜岡抹茶鮮奶</div>
                <div class="text-caption text-grey">SHIZUOKA MATCHA MILK</div>
              </q-card-section>
            </q-card>
            <q-card dense class="col-5 col-sm-3 q-px-sm bg-transparent shadow-0">
              <div>
                <q-img :ratio="4/3" src="https://res.cloudinary.com/dwcwzhv3w/image/upload/v1677670701/MENU/rosetea_xzz4he.jpg">
                </q-img>
              </div>
              <q-card-section>
                <div class="text-h6">玫瑰花茶</div>
                <div class="text-caption text-grey">ROSE TEA</div>
              </q-card-section>
            </q-card>
          </q-tab-panel>

          <q-tab-panel class="row justify-center" name="dessert">
            <q-card dense class="col-5 col-sm-3 q-px-sm bg-transparent shadow-0">
              <div>
                <q-img :ratio="4/3" src="https://res.cloudinary.com/dwcwzhv3w/image/upload/v1677701193/MENU/chad-montano-gf9777gaYjs-unsplash_1_abcqa8.jpg">
                </q-img>
              </div>
              <q-card-section>
                <div class="text-h6">季節限定-草莓櫻桃鬆餅</div>
                <div class="text-caption text-grey">STRAWBERRY CHERRY PANCAKE</div>
              </q-card-section>
            </q-card>
            <q-card dense class="col-5 col-sm-3 q-px-sm bg-transparent shadow-0">
              <div>
                <q-img :ratio="4/3" src="https://res.cloudinary.com/dwcwzhv3w/image/upload/v1677701432/MENU/monika-grabkowska-oeTBNwtIgDY-unsplash_iez3uv.jpg">
                </q-img>
              </div>
              <q-card-section>
                <div class="text-h6">季節限定-草莓塔</div>
                <div class="text-caption text-grey">STRAWBERRY TART</div>
              </q-card-section>
            </q-card>
            <q-card dense class="col-5 col-sm-3 q-px-sm bg-transparent shadow-0">
              <div>
                <q-img :ratio="4/3" src="https://res.cloudinary.com/dwcwzhv3w/image/upload/v1677701577/MENU/e4be661f33bf92f7a0060004e9a0bf85_fkstj5.jpg">
                </q-img>
              </div>
              <q-card-section>
                <div class="text-h6">經典莓果</div>
                <div class="text-caption text-grey">BERRY CAKE</div>
              </q-card-section>
            </q-card>
            <q-card dense class="col-5 col-sm-3 q-px-sm bg-transparent shadow-0">
              <div>
                <q-img :ratio="4/3" src="https://res.cloudinary.com/dwcwzhv3w/image/upload/v1677700727/MENU/%E6%B3%A2%E5%A3%AB%E9%A0%93%E6%B4%BE_v5qmyq.jpg">
                </q-img>
              </div>
              <q-card-section>
                <div class="text-h6">波士頓派</div>
                <div class="text-caption text-grey">BOSTON CREAM PIE</div>
              </q-card-section>
            </q-card>
            <q-card dense class="col-5 col-sm-3 q-px-sm bg-transparent shadow-0">
              <div>
                <q-img :ratio="4/3" src="https://res.cloudinary.com/dwcwzhv3w/image/upload/v1677700828/MENU/%E8%98%8B%E6%9E%9C%E8%9B%8B%E7%B3%95_ujjx7p.jpg">
                </q-img>
              </div>
              <q-card-section>
                <div class="text-h6">蘋果派</div>
                <div class="text-caption text-grey">APPLE PIE</div>
              </q-card-section>
            </q-card>
            <q-card dense class="col-5 col-sm-3 q-px-sm bg-transparent shadow-0">
              <div>
                <q-img :ratio="4/3" src="https://res.cloudinary.com/dwcwzhv3w/image/upload/v1677700963/MENU/%E6%8F%90%E6%8B%89%E7%B1%B3%E8%98%87_lrl9d7.jpg">
                </q-img>
              </div>
              <q-card-section>
                <div class="text-h6">提拉米蘇</div>
                <div class="text-caption text-grey">TIRAMISU</div>
              </q-card-section>
            </q-card>
            <q-card dense class="col-5 col-sm-3 q-px-sm bg-transparent shadow-0">
              <div>
                <q-img :ratio="4/3" src="https://res.cloudinary.com/dwcwzhv3w/image/upload/v1677700407/MENU/%E5%92%96%E5%95%A1%E5%B7%A7%E5%85%8B%E5%8A%9B%E8%9B%8B%E7%B3%95_uh4pup.jpg">
                </q-img>
              </div>
              <q-card-section>
                <div class="text-h6">咖啡巧克力蛋糕</div>
                <div class="text-caption text-grey">COFFEE CHOAOLATE CAKE</div>
              </q-card-section>
            </q-card>
            <q-card dense class="col-5 col-sm-3 q-px-sm bg-transparent shadow-0">
              <div>
                <q-img :ratio="4/3" src="https://res.cloudinary.com/dwcwzhv3w/image/upload/v1677701788/MENU/c2ca2234cd7db34deb74b1c355cc3eb5_j5aacm.jpg">
                </q-img>
              </div>
              <q-card-section>
                <div class="text-h6">法式可頌</div>
                <div class="text-caption text-grey">CROISSANT</div>
              </q-card-section>
            </q-card>
          </q-tab-panel>

          <q-tab-panel class="row justify-center" name="main">
            <q-card dense class="col-5 col-sm-3 q-px-sm bg-transparent shadow-0">
              <div>
                <q-img :ratio="4/3" src="https://res.cloudinary.com/dwcwzhv3w/image/upload/v1677702558/MENU/pasta_ogitcf.jpg">
                </q-img>
              </div>
              <q-card-section>
                <div class="text-h6">香辣番茄義大利麵</div>
                <div class="text-caption text-grey">SPICY TOMATO SPAGHETTI</div>
              </q-card-section>
            </q-card>
            <q-card dense class="col-5 col-sm-3 q-px-sm bg-transparent shadow-0">
              <div>
                <q-img :ratio="4/3" src="https://res.cloudinary.com/dwcwzhv3w/image/upload/v1677702279/MENU/artem-beliaikin-IpxzngYooAw-unsplash_hgy0td.jpg">
                </q-img>
              </div>
              <q-card-section>
                <div class="text-h6">野菇番茄螺旋麵</div>
                <div class="text-caption text-grey">MUSHROOM TOMATO ROTINI</div>
              </q-card-section>
            </q-card>
            <q-card dense class="col-5 col-sm-3 q-px-sm bg-transparent shadow-0">
              <div>
                <q-img :ratio="4/3" src="https://res.cloudinary.com/dwcwzhv3w/image/upload/v1677703305/MENU/bruna-branco-t8hTmte4O_g-unsplash_1_eda4my.jpg">
                </q-img>
              </div>
              <q-card-section>
                <div class="text-h6">奶油蘑菇義大利麵</div>
                <div class="text-caption text-grey">CREAMY MUSHROOM SPAGHETTI</div>
              </q-card-section>
            </q-card>
            <q-card dense class="col-5 col-sm-3 q-px-sm bg-transparent shadow-0">
              <div>
                <q-img :ratio="4/3" src="https://res.cloudinary.com/dwcwzhv3w/image/upload/v1677703475/MENU/d2555521_1_pr8tyy.jpg">
                </q-img>
              </div>
              <q-card-section>
                <div class="text-h6">炭烤牛排義大利麵</div>
                <div class="text-caption text-grey">GRILLED STEAK SPAGHETTI</div>
              </q-card-section>
            </q-card>
          </q-tab-panel>
        </q-tab-panels>
      </div>
    </div>
  </section>
  <!-- footer -->
  <section class="footer">
    <div class="row justify-between footer_container q-px-xl">
      <div class="footer_map row items-center col-3">
        <div class="row">
          <div class="row col-6">
            <p class="col-12">網站導覽</p>
            <router-link class="col-6" to="/">回首頁</router-link>
            <router-link class="col-6" to="/menu">餐飲介紹</router-link>
            <router-link class="col-6" to="/about">品牌故事</router-link>
            <router-link class="col-6" to="/" >線上MENU</router-link>
            <router-link class="col-6" to="/products">講座活動</router-link>
            <router-link class="col-6" to="/about/location">門市位址</router-link>
            <router-link class="col-6" to="/articles">專欄好文</router-link>
            <router-link to="/myaccount/orders">會員專區</router-link>
          </div>
          <div class="col-6 q-pl-md">
            <p>支援服務</p>
            <router-link to="/myaccount/orders">報名查詢</router-link>
            <router-link to="/service">常見問題</router-link>
            <router-link to="/service/contactus">聯絡我們</router-link>
            <router-link to="/">隱私權政策</router-link>
          </div>
        </div>
      </div>
      <div class="footer_center q-pa-md" style="width: 170px">
        <img style="width:100%" src="../../assets/images/logo/logo_1-1-text.png">
        <div style="width:100%" class="text-center">
          <q-icon name="fa-brands fa-instagram" size="1rem" class="q-mr-sm"></q-icon>
          <q-icon name="fa-brands fa-facebook" size="1rem" class="q-mr-sm"></q-icon>
          <q-icon name="fa-brands fa-twitter" size="1rem"></q-icon>
        </div>
      </div>
      <div class="subscribe column justify-center col-3" style="max-width: 300px;">
        <p>訂閱電子報即時掌握活動消息</p>
        <q-input dense v-model="text" placeholder="your Email" type="email" bg-color="black" color="accent" :input-style="{ color: '#E1BF77' }">
          <template v-slot:prepend>
            <q-icon name="mail" class="q-px-sm"/>
          </template>
          <template v-slot:append>
            <q-icon name="send" class="cursor-pointer q-px-sm" />
          </template>
        </q-input>
      </div>
    </div>
  </section>
  <section class="copyright row flex-center">
    泰山職訓前端網頁專題(僅作學術使用) by SU-YU-ZHEN
  </section>
</q-page>
</template>

<script setup>

import { ref } from 'vue'

const tab = ref('drinks')

</script>

<style lang="scss">

.main_tab{
  background: white;
  width:150px;
  // width: calc(100% / 3);
  @media(min-width:576px){
    flex-direction: row;
    width: 500px;
  }
}
</style>
