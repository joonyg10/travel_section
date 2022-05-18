# 개요

<p align="center">
  <img src="./public/demo.png" alt="demo image" />
</p>

- 위 데모와 같은 특정 섹션을 만드는 프로젝트로 추가적으로 특정 애니메이션 효과까지 추가

<br />
<br />

# 시행 방법

1. git clone을 통해 local에 저장합니다.
2. npm install OR yarn add을 통해 필요한 dependency를 다운로드 받습니다.
3. npm run start OR yarn start를 시행 시켜 프로젝트를 시행합니다.
4. npm run lint:es 및 npm run lint:etc를 통하여, eslint, prettier 규칙에 맞게 되었는지 테스트 할 수 있습니다.

<br />
<br />

# 기술 스택

[![Styled Components](https://camo.githubusercontent.com/41326de293d3848e2ab0f29bf1680427128757fe6b586ceddf1097cb4eeb5ff7/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f7374796c65642d2d636f6d706f6e656e74732d4442373039333f7374796c653d666f722d7468652d6261646765266c6f676f3d7374796c65642d636f6d706f6e656e7473266c6f676f436f6c6f723d7768697465)](https://camo.githubusercontent.com/41326de293d3848e2ab0f29bf1680427128757fe6b586ceddf1097cb4eeb5ff7/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f7374796c65642d2d636f6d706f6e656e74732d4442373039333f7374796c653d666f722d7468652d6261646765266c6f676f3d7374796c65642d636f6d706f6e656e7473266c6f676f436f6c6f723d7768697465)

- 기존의 css, scss를 이용하는 경우 상태에 따라 조건문으로 className을 바꾸어 주어야 하기에 번거롭고 가독성이 떨어집니다. 하여, 스타일을 컴포넌트로 분리하여 관리하고자 styled-components를 사용하게 되었습니다.

- css를 reset하기 위해 , styled-reset를 같이 사용하였습니다.

<br />

![Typescript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)

- 여러 개의 컴포넌트, 커스텀 훅, 함수를 구현할 때, 구조를 조금 더 쉽게 파악할 수 있기에 타입스크립트를 사용하는 것을 선호하여 사용했습니다.

<br />
<br />

# 구현 사항

- 데모와 같은 Promotion Section에 대한 컴포넌트를 제작 및 설계
- 아래의 2개의 애니메이션 효과를 구현

  > - 이미지, 지표, 수상에 해당하는 내역이 FadeIn하는 효과
  > - 숫자가 올라가는 애니메이션 효과

<br />
<br />

# 컴포넌트 구조

# src

- [components/](./src/components)
  - [Award/](./src/components/Award)
    - [index.tsx](./src/components/Award/index.tsx)
    - [styles.ts](./src/components/Award/styles.ts)
  - [FadeIn/](./src/components/FadeIn)
    - [index.tsx](./src/components/FadeIn/index.tsx)
    - [styles.ts](./src/components/FadeIn/styles.ts)
  - [Image/](./src/components/Image)
    - [index.tsx](./src/components/Image/index.tsx)
    - [styles.ts](./src/components/Image/styles.ts)
  - [Promotion/](./src/components/Promotion)
    - [index.tsx](./src/components/Promotion/index.tsx)
    - [styles.ts](./src/components/Promotion/styles.ts)
  - [Statistic/](./src/components/Statistic)
    - [index.tsx](./src/components/Statistic/index.tsx)
    - [styles.ts](./src/components/Statistic/styles.ts)
  - [index.tsx](./src/components/index.tsx)
- [hooks/](./src/hooks)
  - [useAnimation.ts](./src/hooks/useAnimation.ts)
- [style/](./src/style)
  - [GlobalStyle.ts](./src/style/GlobalStyle.ts)
  - [styled.d.ts](./src/style/styled.d.ts)
  - [theme.ts](./src/style/theme.ts)
- [App.tsx](./src/App.tsx)
- [index.tsx](./src/index.tsx)
- [react-app-env.d.ts](./src/react-app-env.d.ts)
- [setupTests.ts](./src/setupTests.ts)

<br />
<br />

| Component | 역할                                                                                        |
| --------- | ------------------------------------------------------------------------------------------- |
| Promotion | 구현하는 데모 섹션에 대한 컴포넌트                                                          |
| Image     | 이미지에 대한 스타일이 적용 되어있으며, props로 size를 넘겨주어 크기 조절이 가능한 컴포넌트 |
| Statistic | 지표 문구를 나타내는 컴포넌트                                                               |
| Award     | 수상 내역을 나타내는 컴포넌트로 Image와 문구들로 구성                                       |
| FadeIn    | FadeIn 되는 애니메이션 효과를 추가해주는 Wrapper형태의 컴포넌트                             |

<br />
<br />

# Animation 구현

- [구현사항](#구현-사항)에서 언급한 것과 같이 FadeIn, 숫자가 올라가는 Counter 애니메이션을 구현

<br />

## Fadein 애니메이션

> animation: ${boxFadeIn} 700ms ease-in

- FadeIn 컴포넌트를 생성하여, `boxFadeIn`이라는 애니메이션이 시행되도록 구현
- from, to를 지정하여 opacity와 transform: translateY() 의 값을 애니메이션 되도록 설계
- props로 나타나는 순번을 받아, 순번 \* 100ms만큼 animation-delay를 설정

<br />
<br />

## Counter 애니메이션

- 2초 동안 숫자가 증가하는 애니메이션 효과를 구현
- EaseIn 함수를 적절히 할당하여, 증가속도가 느려지는 효과 추가
- 애니메이션을 담당하는 부분은 커스텀 훅으로 분리

<br />

### <span style="color:lightgray">useAnimation 커스텀 훅</span>

- 애니메이션에 해당 되는 로직을 커스텀 훅으로 분리
- requestAnimationFrame을 통하여 상태로 관리되는 counter변수가 변경되는 onAnimate함수를 시행시키도록 설계
- 애니메이션 시작 시간, 현재 시간을 timeStamp로 받아온 후, 진행률을 (현재 - 시작) / 2000 (2초)로 진행률을 구한뒤, onAnimate로 넘겨주도록 구현

<br />

### <span style="color:lightgray">Statistic 컴포넌트에서의 활용</span>

- onAnimate 함수로는 counter의 변수를 업데이트 하는 로직을 시행하도록 구현
- 상단에 서술한 useAnimation 커스텀 훅을 통해 구한 진행률을 넘겨 받아 표시되어야 할, 현재의 counter 상태를 계산
- Easing 함수의 경우 https://easings.net/en#easeOutCubic 의 Function을 참조하여 시간이 지날수록 속도가 느려지도록 구현

<br />
<br />

<p align='center'>
  <img src="https://media.giphy.com/media/S4mDkzMdxoSEbJ2XB3/giphy.gif" 
    alt="Fixed Case"
  />
</p>

<br />

- 위와 같이 구현을 하였으나, 카운트 애니메이션이 진행되는 때에, 숫자의 길이에 따라 전체 길이가 무분별하게 줄었다 길어졌다 반복하여 사용자의 측면에서 좋지 않다고 판단했습니다.
- 카운트 되는 숫자에 min-width 속성을 주어 최소한의 영역을 설정해 위와 같은 현상을 수정하였습니다.

<br />
<br />
<br />

# 최종 결과

<p align='center'>
  <img src="https://media.giphy.com/media/9nTvp8jxoBvCAVbT3h/giphy.gif" alt="Final Result GIF here" />
</p>
