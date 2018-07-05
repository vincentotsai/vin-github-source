<template>
  <footer class="foot">
    <div class="top">
      <ul class="social">
        <li>
          <a href="https://github.com/vincentotsai" title="Github" target="_blank">
            <i class="fa fa-github trans"></i>
          </a>
        </li>
        <li>
          <a href="mailto:vintotsai@gmail.com" title="Google Mail" target="_blank">
            <i class="fa fa-envelope-o trans"></i>
          </a>
        </li>
      </ul>
    </div>
    <section class="bottom">
      <div class="copyright">@2016 - present Vin - 奇点</div>
    </section>
  </footer>
</template>
<style lang="less" scoped>
.foot {
  .top {
    background: #2c3e50;
    padding: 50px 15px;
    .social {
      padding-left: 0;
      margin: 0;
      text-align: center;
      font-size: 2.2rem;
      li {
        display: inline-block;
        padding: 0 15px;
      }
      li a {
        color: white;
        transition: color 0.3s;
      }
      li a:hover {
        color: #2980b9;
      }
      .trans{
        transition: transform 1s ease-in 0ms;
      }
      .trans:hover {
        transform: rotate(-180deg) scale(1.5,1.5)
      }
    }
  }
  .bottom {
    background: #34495e;
    padding: 30px 15px;
    .copyright {
      font-size: 0.8rem;
      text-align: center;
      color: #95a5a6;
      margin: 0;
    }
  }
}
</style>
