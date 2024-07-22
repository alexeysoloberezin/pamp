<template>
<section class="legal-container">
<h3>
  Юридические документы
</h3>
<div class="legal-documents">
  <ul>
    <li><a href="https://docs.google.com/document/d/1M9-nRbmTFUu6OXX-xOiYc2LdXMiIRegS/edit">Правила платформы</a></li>
    <li><a href="https://docs.google.com/document/d/17PnoqonnOTeU6fVyfT5lmioboKaT2IPO/edit">Политика конфиденциальности</a></li>
    <li><a href="https://docs.google.com/document/d/1WU8_9KGYem9OS3mPoHbb3S2PmnkMEC5g/edit">Договор оферты для физ. лиц</a></li>
    <li><a href="https://docs.google.com/document/d/1dI9Xr47Wg6SDR9D-oMm1uV1VvuVxtgmeQo1XLEo2dgM/edit">Договор оферты для юр. лиц</a></li>
  </ul>
  <img :src="img" class="legal-documents__img" alt="legal">
</div>

</section>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator"
@Component({})
export default class LegalDoc extends Vue {
  img = require('images/legal.svg')
}
</script>

<style lang="scss">
.legal {
  &-container{
    >h3{
      font-family: 'Montserrat';
      font-style: normal;
      font-weight: 700;
      font-size: 35px;
      line-height: 45px;
      padding-bottom: 23px;
    }
  }
  &-documents{
    height: 286px;
    background-color: #F2F5FF;
    border-radius: 9px;
    position: relative;
    >ul{
      padding: 47px 0 59px 65px;
      position: inherit;
      z-index: 2;

      >li {
        list-style-type: none;
        background: url("@/assets/images/osago/howItWorks/triangle.svg") no-repeat left top;
        padding-left: 28px;
        background-position: left 16px;
        >a{
          font-size: 20px;
          line-height: 45px;
          color: #4578FF !important;
        }
      }
    }
    &__img{
      position: absolute;
      right: -6px;
      top: 17px;
      z-index: 1;
      width: 212px;
      height: 252px;
    }
  }
}

@media (max-width: $w-sm){
  .legal  {
    >h3{
      font-size: 25px;
      line-height: 30px;
      padding-bottom: 15px;
    }
    &-documents{
      height: 233px;
      align-items: center;display: flex;
      >ul{
        padding: 27px 20px 38px 20px;
        >li{
          background-position: left 6px;
          >a{
            font-size: 15px;
           line-height: 18px;
          }
        }

      }
      &__img{
        width: 168px;
        height: 197px;
      }
    }
  }
}
</style>
