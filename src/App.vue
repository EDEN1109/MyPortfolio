<template>
  <div id="app">
    <MenuBar ref="menubar" @move="move"></MenuBar>
    <Home ref="home" @start="start"></Home>
    <About ref="about"></About>
    <Skill ref="skill"></Skill>
    <Project ref="project"></Project>
    <Contact ref="contact"></Contact>
    <Footer ref="footer"></Footer>
  </div>
</template>

<script>
import MenuBar from "./components/MenuBar";
import Home from "./components/Home";
import About from "./components/About";
import Skill from "./components/Skill";
import Project from "./components/Project";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default {
  name: "App",
  components: {
    MenuBar,
    Home,
    About,
    Skill,
    Project,
    Contact,
    Footer
  },
  methods: {
    move(menu) {
      let pos;

      switch(menu) {
        case "HOME":
          pos = 0;
          break;
        case "ABOUT":
          pos = this.$refs.home.$el.clientHeight;
          break;
        case "SKILL":
          pos = this.$refs.home.$el.clientHeight + this.$refs.about.$el.clientHeight;
          break;
        case "PROJECT":
          pos = this.$refs.home.$el.clientHeight + this.$refs.about.$el.clientHeight + this.$refs.skill.$el.clientHeight;
          break;
        case "CONTACT":
          pos = this.$refs.home.$el.clientHeight + this.$refs.about.$el.clientHeight + this.$refs.skill.$el.clientHeight + this.$refs.project.$el.clientHeight;
          break;
      }
      window.scroll({ top: pos, left: 0, behavior: 'smooth'})
    },
    start() {
      window.scroll({ top: this.$refs.home.$el.clientHeight, left: 0, behavior: 'smooth'})
    }
  }
};
</script>

<style lang="scss">
#app {
  width: 100%;
  height: 100%;
  font-family: 'GmarketSansMedium';
}
.defaultBold_font {
  font-family: 'GmarketSansBold';
}
.defaultLight_font {
  font-family: 'GmarketSansLight';
}
.title_font {
  color: var(--title-color);
  -webkit-text-stroke: 2px var(--neon-color);
  font-family: 'BOKEH';
}
</style>