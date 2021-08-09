export default {
  methods: {
    // https://lab.syncer.jp/Web/JavaScript/Snippet/67/
    hsv2rgb (hsv) {
      const h = hsv[0] / 60
      const s = hsv[1]
      const v = hsv[2]
      if (s === 0) {
        return [v * 255, v * 255, v * 255]
      }
      let rgb
      const i = parseInt(h)
      const f = h - i
      const v1 = v * (1 - s)
      const v2 = v * (1 - s * f)
      const v3 = v * (1 - s * (1 - f))

      switch (i) {
        case 0:
        case 6:
          rgb = [v, v3, v1]
          break

        case 1:
          rgb = [v2, v, v1]
          break

        case 2:
          rgb = [v1, v, v3]
          break

        case 3:
          rgb = [v1, v2, v]
          break

        case 4:
          rgb = [v3, v1, v]
          break

        case 5:
          rgb = [v, v1, v2]
          break
      }

      return rgb.map((value) => {
        return value * 255
      })
    }
  }
}
