<template>
  <p class="colours">天气因你逆转，世界因你天晴。</p>
</template>

<script>
export default {
  name: "Animation",
  data() {
    return {};
  },
  methods: {}
};
</script>

<style scoped>
@keyframes typing {
  from {
    width: 0;
  }
}

@keyframes caret {
  50% {
    border-color: transparent;
  }
}

.colours {
  width: 16em;
  overflow: hidden;
  white-space: nowrap;
  border-right: 0.1em solid;
  animation: color_change 26s steps(16), caret 1.2s steps(1) infinite;
  animation-iteration-count: infinite;
  position: fixed;
  left: 82%;
  bottom: 35px;
  font-size: 1.2em;
}

@keyframes color_change {
  from {
    width: 0;
  }
  0% {
    color: rgba(255, 0, 0, 0.6);
  }
  5% {
    color: rgba(255, 64, 0, 0.6);
  }
  10% {
    color: rgba(255, 128, 0, 0.6);
  }
  15% {
    color: rgba(255, 192, 0, 0.6);
  }
  20% {
    color: rgba(255, 255, 0, 0.6);
  }
  25% {
    color: rgba(192, 255, 0, 0.6);
  }
  30% {
    color: rgba(128, 255, 0, 0.6);
  }
  35% {
    color: rgba(64, 255, 0, 0.6);
  }
  40% {
    color: rgba(0, 255, 0, 0.6);
  }
  45% {
    color: rgba(0, 255, 64, 0.6);
  }
  50% {
    color: rgba(0, 255, 128, 0.6);
  }
  55% {
    color: rgba(0, 255, 192, 0.6);
  }
  60% {
    color: rgba(0, 255, 255, 0.6);
  }
  65% {
    color: rgba(0, 192, 255, 0.6);
  }
  70% {
    color: rgba(0, 128, 255, 0.6);
  }
  75% {
    color: rgba(0, 64, 255, 0.6);
  }
  80% {
    color: rgba(0, 0, 255, 0.6);
  }
  85% {
    color: rgba(0, 0, 192, 0.6);
  }
  90% {
    color: rgba(0, 0, 128, 0.6);
  }
  95% {
    color: rgba(0, 0, 64, 0.6);
  }
  100% {
    color: rgba(0, 0, 0, 0.6);
  }
}
</style>