import Vue from "vue"
import VueI18n from 'vue-i18n'
import App from "./App.vue"

Vue.use(VueI18n)
Vue.config.productionTip = false

const messages = {
  en: {
    homeMessages: {
      title: 'Game Developer',
      name: 'Eden Jin'
    },
    aboutMessages: {
      strengthList: [
        { image: require('@/assets/Fast.png'), text: 'Fast', explan: 'I learn and apply new things quickly. It\'s the biggest strength I\'ve ever had.'},
        { image: require('@/assets/Responsive.png'), text: 'Responsive', explan: 'My Games will work on any device, Mobile, Tablet, PC even with the same code.'},
        { image: require('@/assets/Intuitive.png'), text: 'Intuitive', explan: 'Coding with Unity Editor facilitates collaboration with others.'},
        { image: require('@/assets/Diversity.png'), text: 'Diversity', explan: 'I have developed games in various development fields such as VR, AR, 2D, and 3D.'},],
      antecedentList: [
        { date: '2017.02 ~ 2021.02', organization: 'KOREATECH', link: 'http://www.koreatech.ac.kr/kor/Main.do', detail: 'Computer Engineering And Science'},
        { date: '2020.06 ~ 2020.08', organization: 'Ducogen', link: 'https://www.ducogen.net/', detail: 'Short-term Internship'},],
      introName: 'Developer Eden Jin',
      introFirstLine: 'I\'m Game Developer in',
      introLocate: 'South Korea',
      introMakeFun: 'Let\'s Make Something Fun!',
      introTextList: ['I have a great passion for games, efficient-development and user experience never experienced.',
                    'I\'m a challenger.', 'Because I am not afraid of the new environment.']
    },
    skillMessages: {
      skillList: [
        { image: require('@/assets/Unity_logo.png'), text: 'Unity', proficiency: 'Intermediate'},
        { image: require('@/assets/Unreal_logo.png'), text: 'Unreal', proficiency: 'Basic'},
        { image: require('@/assets/CSharp_logo.png'), text: 'C#', proficiency: 'Intermediate'},
        { image: require('@/assets/C++_logo.png'), text: 'C++', proficiency: 'Intermediate'},],
      proficiency: 'Proficiency'
    },    
    projectMessages: {
      projectList: [
        {image: require('@/assets/finger.png'), link: 'https://github.com/EDEN1109', title: 'BioLab', content: '손가락을 이용하여 진행하는 게임으로 지능발달에 도움이 된다.', tag:'#Unity #CS #VR #PC', date: '2020. 07. ~ 2020. 08.'},
        {image: require('@/assets/eyetracking.png'), link: 'https://github.com/EDEN1109', title: 'VR Camera', content: '안구인식을 통해 진행하는 게임으로 안구운동에 도움이 된다.', tag:'#Unity #CS #PC #Mobile #Tablet #Web', date: '2020. 08.'}, 
        {image: require('@/assets/mosquito.png'), link: 'https://github.com/EDEN1109', title: 'Seconds', content: '모기가 되어 야생에서 살아남는 게임으로 제작중에 있다.', tag:'#Unity #CS #Mobile', date: '2021. 01. ~'}]
    }    
  },
  ko: {
    home: {
      title: '게임 개발자',
      name: '진이든'
    },
    aboutMessages: {
      strengthList: [
        { image: require('@/assets/Fast.png'), text: '학습가', explan: '제 가장 큰 강점은 새로운 것을 빠르게 배운다는 것입니다.'},
        { image: require('@/assets/Responsive.png'), text: '반응성', explan: '제 게임은 하나의 코드로 모바일, 태블렛, PC 등 많은 디바이스에 작동할 수 있습니다.'},
        { image: require('@/assets/Intuitive.png'), text: '직관적', explan: 'Unity Editor를 활용한 코딩스타일은 개발자 뿐만이 아니라 다른 분야의 다양한 사람과 협업하는 데에 유리합니다.'},
        { image: require('@/assets/Diversity.png'), text: '다양성', explan: '저는 VR, AR, 2D, 그리고 3D 등 많은 분야에서 개발해 보았습니다.'},],
      antecedentList: [
        { date: '2017.02 ~ 2021.02', organization: '한국기술교육대학교', link: 'http://www.koreatech.ac.kr/kor/Main.do', detail: '컴퓨터공학부'},
        { date: '2020.06 ~ 2020.08', organization: '(주) 듀코젠)', link: 'https://www.ducogen.net/', detail: '단기 인턴쉽'},],
      introName: '개발자 진이든',
      introFirstLine: '게임 개발자로 일하고 있는 진이든입니다. 위치 : ',
      introLocate: '대한민국',
      introMakeFun: '함께 시작해 볼까요?',
      introTextList: ['효율적인 개발과 유저들이 경험해 보지 못한 게임을 개발하는 것에 열정을 가지고 있습니다.',
                    '저는 도전을 즐깁니다.', '새로운 환경에서 일하는 것을 좋아합니다.']
    },
    skillMessages: {
      skillList: [
        { image: require('@/assets/Unity_logo.png'), text: 'Unity', proficiency: '중급'},
        { image: require('@/assets/Unreal_logo.png'), text: 'Unreal', proficiency: '기본'},
        { image: require('@/assets/CSharp_logo.png'), text: 'C#', proficiency: '중급'},
        { image: require('@/assets/C++_logo.png'), text: 'C++', proficiency: '중급'},],
      proficiency: '숙련도'
    },    
    projectMessages: {
      projectList: [
        {image: require('@/assets/finger.png'), link: 'https://github.com/EDEN1109', title: 'BioLab', content: '손가락을 이용하여 진행하는 게임으로 지능발달에 도움이 된다.', tag:'#Unity #CS #VR #PC', date: '2020. 07. ~ 2020. 08.'},
        {image: require('@/assets/eyetracking.png'), link: 'https://github.com/EDEN1109', title: 'VR Camera', content: '안구인식을 통해 진행하는 게임으로 안구운동에 도움이 된다.', tag:'#Unity #CS #PC #Mobile #Tablet #Web', date: '2020. 08.'}, 
        {image: require('@/assets/mosquito.png'), link: 'https://github.com/EDEN1109', title: 'Seconds', content: '모기가 되어 야생에서 살아남는 게임으로 제작중에 있다.', tag:'#Unity #CS #Mobile', date: '2021. 01. ~'}]
    }
  }
}

const i18n = new VueI18n(
  {
    locale: 'ko',
    messages
  }
)

new Vue({
  i18n,
  el: '#app',
  render: h => h(App),
  components: {App},
  template: '<App/>',
}).$mount('#app')
