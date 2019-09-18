// 函数式组件
export default {
  functional: true,
  props: {
    name: String,
    renderFunc: Function
  },
  render: (h, ctx) => {
    // ctx 指代实例，当前对象
    return ctx.props.renderFunc(h, ctx.props.name)
  }
}
