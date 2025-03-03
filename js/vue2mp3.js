setTimeout(() => {
  let ele = document.createElement("div");
  ele.id = "myapp";
  document.body.appendChild(ele);
  new Vue({
    el: "#myapp",
    hide: true,
    props: {
      list: {
        type: Array,
        default: () => {
          return [
            { id: 1, text: 11 },
            { id: 2, text: 22 },
          ];
        },
      },
    },
    data() {
      return {
        params: {
          text: 1,
          record: {
            id: 2,
          },
          row: {
            index: 0,
          },
        },
      };
    },

    render(createElement) {
      let that = this;
      if (this.qq) {
        return createElement(
          "ul",
          this.list.map((item, index) => {
            return createElement("li", [
              createElement(
                "h2",
                {
                  on: {
                    click: () => {
                      this.clickHandler(4444, item);
                    },
                  },
                },
                "slot传参方式"
              ),
              "slot传参",
              createElement(
                "h3",
                this.$scopedSlots.test(item.text, item, index)
              ),
              createElement(
                "h4",
                {
                  class: "h4-container",
                  on: {
                    click: function () {
                      that.clickHandler(index, item);
                    },
                  },
                },
                "测试h4"
              ),
              createElement(
                "a-divider",
                {
                  props: {
                    type: "horizontal",
                  },
                  class: "qq-container",
                  style: { background: "#ccc" },
                  on: {
                    click: () => {
                      console.log("🚀", 12321);
                    },
                  },
                },
                "测试"
              ),
              createElement(
                "a-button",
                {
                  props: {
                    type: "primary",
                  },
                  style: { margin: "10px 0" },
                  class: "qq-container",
                  on: {
                    click: () => {
                      console.log("🚀测试button🚀", index, item);
                    },
                  },
                },
                "测试button"
              ),
            ]);
          })
        );
      } else {
        return createElement("p", "No Lists Found.");
      }
    },
    methods: {
      clickHandler(index, item) {
        console.log("🚀 ~ clickHandler ~ index,item:", index, item);
        this.$message.info(`Click ${index}`);
      },
    },
    mounted() {
      // console.log("🚀", this);
    },
  });
}, 1000);
