import type { NextApiRequest, NextApiResponse } from 'next'

function HelloWorld(req: NextApiRequest, res: NextApiResponse) {
  res.status(200).send('hello world')
}

export default HelloWorld

type Answer = {
  id: string
  name: string // 척도 이름
  value: number // 척도 변경값
}

export type Question = {
  id: string
  question: string
  onYes: Answer[] // '네' 클릭 시 수행할 계산
  onNo: Answer[] // '아니요' 클릭 시 수행할 계산
}

export type Result = {
  id: string
  title: string
  condition: (answers: Record<string, number>) => boolean
  imageUrl: string
  contents: {
    id: string
    content: string
    tag?: string // HTML 태그 종류. 기본값은 <p>
  }[]
}

type Test = {
  id: string
  name: string
  imageUrl: string
  description: string
  questions: Question[]
  results: Result[]
}

export const tests: Test[] = [
  {
    id: '1',
    name: '일 중독',
    imageUrl: '/workaholic.jpg',
    description: '일 중독 TEST',
    questions: [
      {
        id: '1',
        question: '나는 중독자다. 일 중독자.',
        onYes: [
          { id: '1', name: '중독', value: 30 },
          { id: '2', name: '게으름', value: -10 },
        ],
        onNo: [
          { id: '1', name: '중독', value: -10 },
          { id: '2', name: '게으름', value: 10 },
        ],
      },
      {
        id: '2',
        question:
          '일은 곧 나요. 나는 곧 일이다. 일과 나는 하나다. 정조대왕 말씀하시길 일즉나 나즉일(?).',
        onYes: [
          { id: '1', name: '중독', value: 50 },
          { id: '2', name: '게으름', value: -10 },
        ],
        onNo: [
          { id: '1', name: '중독', value: -50 },
          { id: '2', name: '게으름', value: 10 },
        ],
      },
      {
        id: '3',
        question: '"일용할 양식을 주옵시고"는 "일을 주옵시고"다.',
        onYes: [
          { id: '1', name: '중독', value: 50 },
          { id: '2', name: '게으름', value: -10 },
        ],
        onNo: [
          { id: '1', name: '중독', value: -50 },
          { id: '2', name: '게으름', value: 10 },
        ],
      },
      {
        id: '4',
        question: '쉰다는 것. 그것은 곧 나에게 죽음이다. 일이 아니면 죽음을 달라.',
        onYes: [
          { id: '1', name: '중독', value: 50 },
          { id: '2', name: '게으름', value: -10 },
        ],
        onNo: [
          { id: '1', name: '중독', value: -50 },
          { id: '2', name: '게으름', value: 10 },
        ],
      },
      {
        id: '5',
        question: '당신의 친구가 주말 여행을 가자고 조른다. 당신은 그와 여행을 갈 것인가?',
        onYes: [
          { id: '1', name: '중독', value: -30 },
          { id: '2', name: '게으름', value: -10 },
        ],
        onNo: [
          { id: '1', name: '중독', value: 30 },
          { id: '2', name: '게으름', value: 10 },
        ],
      },
      {
        id: '6',
        question: '오늘의 일은 휴식의 니코틴보다 향기롭다!',
        onYes: [
          { id: '1', name: '중독', value: 20 },
          { id: '2', name: '게으름', value: -10 },
        ],
        onNo: [
          { id: '1', name: '중독', value: -20 },
          { id: '2', name: '게으름', value: 10 },
        ],
      },
      {
        id: '7',
        question: '나는 알코올보다 일에 취하는 편이다.',
        onYes: [
          { id: '1', name: '중독', value: 20 },
          { id: '2', name: '게으름', value: -10 },
        ],
        onNo: [
          { id: '1', name: '중독', value: -20 },
          { id: '2', name: '게으름', value: 10 },
        ],
      },
      {
        id: '8',
        question: '나는 일주일 중 월요일이 가장 설렌다.',
        onYes: [
          { id: '1', name: '중독', value: 20 },
          { id: '2', name: '게으름', value: -10 },
        ],
        onNo: [
          { id: '1', name: '중독', value: -10 },
          { id: '2', name: '게으름', value: 10 },
        ],
      },
      {
        id: '9',
        question: '나는 출근길에 개미는 뚠뚠 노래를 부른다.',
        onYes: [
          { id: '1', name: '중독', value: 20 },
          { id: '2', name: '게으름', value: -10 },
        ],
        onNo: [
          { id: '1', name: '중독', value: -10 },
          { id: '2', name: '게으름', value: 10 },
        ],
      },
      {
        id: '10',
        question: '나는 길을 가다 베짱이를 보면 즈려밟는다.',
        onYes: [
          { id: '1', name: '중독', value: 20 },
          { id: '2', name: '게으름', value: -10 },
        ],
        onNo: [
          { id: '1', name: '중독', value: -10 },
          { id: '2', name: '게으름', value: 10 },
        ],
      },
    ],
    results: [
      {
        id: '1',
        title: '일에 미친 당신',
        condition: (answers) => {
          const overdose = answers['중독']
          return overdose >= 100
        },
        imageUrl: '/result-workerholic-1.jpg',
        contents: [{ id: '1', content: '손모가지 절단만이 답입니다.' }],
      },
      {
        id: '2',
        title: '열심히 일한 당신',
        condition: (answers) => {
          const overdose = answers['중독']
          return overdose >= 50 && overdose < 100
        },
        imageUrl: '/result-workerholic-2.jpg',
        contents: [{ id: '1', content: '당신은 일꾼입니다. 미네랄을 캐세요.' }],
      },
      {
        id: '3',
        title: '자유로운 영혼의 소유자',
        condition: (answers) => {
          const overdose = answers['중독']
          const laziness = answers['게으름']
          return overdose < 50 && laziness > 40
        },
        imageUrl: '/result-workerholic-3.jpg',
        contents: [{ id: '1', content: '자유로운 정신을 가졌군요! 다음 심리테스트도 해보세요!' }],
      },
    ],
  },
  {
    id: '2',
    name: '조선시대 신분',
    imageUrl: '/joseon.jpg',
    description: '당신의 조선시대 신분은?',
    questions: [
      {
        id: '1',
        question: '나는 조선의 선비다.',
        onYes: [
          { id: '1', name: '선비 정신', value: 10 },
          { id: '2', name: '힙 정신', value: -10 },
        ],
        onNo: [
          { id: '1', name: '선비 정신', value: -10 },
          { id: '2', name: '힙 정신', value: 10 },
        ],
      },
      {
        id: '2',
        question:
          '위층에 새로운 노비가 이사를 왔다. 그는 조선의 덕을 알지 못한다. 그와 이웃이 될 것인가?',
        onYes: [
          { id: '1', name: '선비 정신', value: -10 },
          { id: '2', name: '힙 정신', value: 10 },
        ],
        onNo: [
          { id: '1', name: '선비 정신', value: 10 },
          { id: '2', name: '힙 정신', value: -10 },
        ],
      },
      {
        id: '3',
        question: '나는 배가 고플 때 의식을 셧다운 한다.',
        onYes: [
          { id: '1', name: '평온', value: 10 },
          { id: '2', name: '짜증', value: -10 },
          { id: '1', name: '선비 정신', value: 10 },
          { id: '2', name: '힙 정신', value: -10 },
        ],
        onNo: [
          { id: '1', name: '평온', value: -10 },
          { id: '2', name: '짜증', value: 10 },
          { id: '1', name: '선비 정신', value: -10 },
          { id: '2', name: '힙 정신', value: 10 },
        ],
      },
      {
        id: '4',
        question: '맞춤법 따위는 개나 줘버려. 나는 킹 세종의 뜻을 헤아리기엔 덕이 부족하다.',
        onYes: [
          { id: '1', name: '선비 정신', value: -10 },
          { id: '2', name: '힙 정신', value: 15 },
        ],
        onNo: [
          { id: '1', name: '선비 정신', value: 10 },
          { id: '2', name: '힙 정신', value: -10 },
        ],
      },
      {
        id: '5',
        question: '좀비는 인간과 친구가 될 수 있다.',
        onYes: [
          { id: '1', name: '선비 정신', value: -10 },
          { id: '2', name: '힙 정신', value: 10 },
        ],
        onNo: [
          { id: '1', name: '선비 정신', value: 10 },
          { id: '2', name: '힙 정신', value: -10 },
        ],
      },
      {
        id: '6',
        question: '나는 외제차를 타는 미제 앞잡이들과 상종할 수 없다.',
        onYes: [
          { id: '1', name: '선비 정신', value: 10 },
          { id: '2', name: '힙 정신', value: -10 },
        ],
        onNo: [
          { id: '1', name: '선비 정신', value: -10 },
          { id: '2', name: '힙 정신', value: 10 },
        ],
      },
      {
        id: '7',
        question: '위대하신 령도자! 우리 민족끼리 단합하자!',
        onYes: [
          { id: '1', name: '선비 정신', value: 10 },
          { id: '2', name: '힙 정신', value: -10 },
        ],
        onNo: [
          { id: '1', name: '선비 정신', value: -10 },
          { id: '2', name: '힙 정신', value: 10 },
        ],
      },
      {
        id: '8',
        question: '나는 이성을 돌부처 보듯이 한다.',
        onYes: [
          { id: '1', name: '선비 정신', value: 20 },
          { id: '2', name: '힙 정신', value: -10 },
        ],
        onNo: [
          { id: '1', name: '선비 정신', value: -10 },
          { id: '2', name: '힙 정신', value: 10 },
        ],
      },
      {
        id: '9',
        question: '로맨스가 왠 말이냐. 남녀칠세부동석.',
        onYes: [
          { id: '1', name: '선비 정신', value: 20 },
          { id: '2', name: '힙 정신', value: -10 },
        ],
        onNo: [
          { id: '1', name: '선비 정신', value: -10 },
          { id: '2', name: '힙 정신', value: 10 },
        ],
      },
      {
        id: '10',
        question:
          '중고물품을 거래하러 교대역 1번 출구로 나왔다. 저기 수상쩍은 남자가 당신에게 "당근이세요?"라고 물어볼 때 당신은 "오이인데요."라고 대답한다.',
        onYes: [
          { id: '1', name: '선비 정신', value: 10 },
          { id: '2', name: '힙 정신', value: -10 },
        ],
        onNo: [
          { id: '1', name: '선비 정신', value: -10 },
          { id: '2', name: '힙 정신', value: 10 },
        ],
      },
    ],
    results: [
      {
        id: '1',
        title: '당신은 조선의 추노입니다.',
        condition: (answers) => {
          const seonbi = answers['선비 정신']
          return seonbi <= -30
        },
        imageUrl: '/result-sunbi-1.jpg',
        contents: [{ id: '1', content: '도망쳐...' }],
      },
      {
        id: '2',
        title: '당신은 조선의 노비입니다.',
        condition: (answers) => {
          const seonbi = answers['선비 정신']
          return seonbi >= 0 && seonbi < 30
        },
        imageUrl: '/result-sunbi-2.jpg',
        contents: [{ id: '1', content: '총각..옷 좀 사주까?...' }],
      },
      {
        id: '3',
        title: '당신은 조선의 선비입니다.',
        condition: (answers) => {
          const seonbi = answers['선비 정신']
          return seonbi >= 30
        },
        imageUrl: '/result-sunbi-3.jpg',
        contents: [{ id: '1', content: '기분 좋으세요?' }],
      },
    ],
  },
  {
    id: '3',
    name: '호구',
    imageUrl: '/hogu.jpg',
    description: '나는 호구인가?',
    questions: [
      {
        id: '1',
        question: '조별과제에서 팀원들과 의견이 다를 경우 이를 말한다.',
        onYes: [
          { id: '1', name: '자신감', value: 10 },
          { id: '2', name: '배려심', value: 0 },
          { id: '3', name: '호구력', value: -10 },
          { id: '4', name: '호구력(인간)', value: -30 },
          { id: '5', name: '호구력(돈)', value: 0 },
        ],
        onNo: [
          { id: '1', name: '자신감', value: 0 },
          { id: '2', name: '배려심', value: 10 },
          { id: '3', name: '호구력', value: 10 },
          { id: '4', name: '호구력(인간)', value: 30 },
          { id: '5', name: '호구력(돈)', value: 0 },
        ],
      },
      {
        id: '2',
        question: '친구가 돈을 빌려가고 기한안에 안갚을 때 나는 3일 안에 돈을 갚으라고 요구한다',
        onYes: [
          { id: '1', name: '자신감', value: 10 },
          { id: '2', name: '호구력', value: -10 },
          { id: '3', name: '호구력(돈)', value: -30 },
        ],
        onNo: [
          { id: '1', name: '배려심', value: 10 },
          { id: '2', name: '호구력', value: 10 },
          { id: '3', name: '호구력(돈)', value: 30 },
        ],
      },
      {
        id: '3',
        question: '최신 전자기기를 산 후 미세한 불량이 발생했을 경우 즉각 환불한다.',
        onYes: [
          { id: '1', name: '자신감', value: 10 },
          { id: '2', name: '호구력', value: -10 },
          { id: '3', name: '호구력(돈)', value: -10 },
        ],
        onNo: [
          { id: '1', name: '배려심', value: 10 },
          { id: '2', name: '호구력', value: 10 },
          { id: '3', name: '호구력(돈)', value: 30 },
        ],
      },
      {
        id: '4',
        question:
          '맛있게 저녁을 먹고 집에 왔는데 음료수 하나가 추가 계산된 사실을 알게 되었을 경우 바로 결제취소를 요구한다.',
        onYes: [
          { id: '1', name: '자신감', value: 10 },
          { id: '2', name: '호구력', value: 10 },
          { id: '3', name: '호구력(돈)', value: -30 },
        ],
        onNo: [
          { id: '1', name: '배려심', value: 10 },
          { id: '2', name: '호구력', value: 10 },
          { id: '3', name: '호구력(돈)', value: 30 },
        ],
      },
      {
        id: '5',
        question:
          '친구들과의 모임에서 식사할 때 원치 않은 메뉴로 결정되면 먹기 싫다고 강하게 주장한다.',
        onYes: [
          { id: '1', name: '자신감', value: 10 },
          { id: '2', name: '호구력', value: -10 },
          { id: '3', name: '호구력(인간)', value: -30 },
        ],
        onNo: [
          { id: '1', name: '배려심', value: 10 },
          { id: '2', name: '호구력', value: 10 },
          { id: '3', name: '호구력(인간)', value: 30 },
        ],
      },
      {
        id: '6',
        question: '친구가 2주 연속 하루전에 아르바이트를 대신해달라고 한다. 해주시겠습니가?',
        onYes: [
          { id: '1', name: '배려심', value: 10 },
          { id: '2', name: '호구력', value: 10 },
          { id: '3', name: '호구력(인간)', value: 30 },
        ],
        onNo: [
          { id: '1', name: '자신감', value: 10 },
          { id: '2', name: '호구력', value: -10 },
          { id: '3', name: '호구력(인간)', value: -30 },
        ],
      },
      {
        id: '7',
        question: '길에서 누군가 도를 아시냐고 물어왔다 응답해주시나요?',
        onYes: [
          { id: '1', name: '배려심', value: 10 },
          { id: '2', name: '호구력', value: 10 },
        ],
        onNo: [
          { id: '1', name: '자신감', value: 10 },
          { id: '2', name: '호구력', value: -10 },
        ],
      },
      {
        id: '8',
        question: '지하철을 타고 있는데 누군가 볼펜을 사라고 권유하면 산다.',
        onYes: [
          { id: '1', name: '배려심', value: 10 },
          { id: '2', name: '호구력', value: 10 },
        ],
        onNo: [
          { id: '1', name: '자신감', value: 10 },
          { id: '2', name: '호구력', value: -10 },
        ],
      },
      {
        id: '9',
        question:
          '버스에서 누군가 당신의 새로산 신발을 밟았다. 상대방이 미안함의 표시를 안할 경우 따진다.',
        onYes: [
          { id: '1', name: '자신감', value: 10 },
          { id: '2', name: '호구력', value: -10 },
        ],
        onNo: [
          { id: '1', name: '배려심', value: 10 },
          { id: '2', name: '호구력', value: 10 },
        ],
      },
      {
        id: '10',
        question: '음식점에서 음식을 먹다 머리카락이 나왔을 경우 바꿔달라고 요청한다.',
        onYes: [
          { id: '1', name: '자신감', value: 10 },
          { id: '2', name: '호구력', value: -10 },
        ],
        onNo: [
          { id: '1', name: '배려심', value: 10 },
          { id: '2', name: '호구력', value: 10 },
        ],
      },
    ],
    results: [
      {
        id: '1',
        title: '날개 없는 천사 , 티 없는 흑우!!!',
        condition: (answers) => {
          const hogu = answers['호구력']
          const hoguM = answers['호구력(돈)']
          const hoguH = answers['호구력(인간)']
          return hogu >= 80 && hoguM >= 80 && hoguH >= 80
        },
        imageUrl: '/angel.jpg',
        contents: [
          { id: '1', content: '모든 것을 양보하고 배려해주는 당신 이 시대의 진정한 인격자' },
        ],
      },
      {
        id: '2',
        title: '경주 최 부잣집 마인드 돈에 있어서 만큼은 나도 호구!!!',
        condition: (answers) => {
          const hoguM = answers['호구력(돈)']
          return hoguM >= 80
        },
        imageUrl: '/choi.jpg',
        contents: [
          {
            id: '1',
            content: '가격비교를 거부하는 당신 푼돈에 연연하지 않는 대범함을 지니셨군요!',
          },
        ],
      },
      {
        id: '3',
        title: '마더 테레사 있는 것은 아낌없이 양보하고 나눠주고 싶은 호구양!!!!',
        condition: (answers) => {
          const hoguH = answers['호구력(인간)']
          return hoguH >= 80
        },
        imageUrl: '/teresa.jpg',
        contents: [
          {
            id: '1',
            content:
              '인간관계에 있어서 늘 남을 먼저 생각하는 당신 그룹에 있어서 꼭 한명쯤은 필요한 사람이신군요! ',
          },
        ],
      },
      {
        id: '4',
        title: '개가 짖어도 기차는 간다 원리원칙을 중요시하는 NO 호구!!! ',
        condition: (answers) => {
          const hogu = answers['호구력']
          const hoguM = answers['호구력(돈)']
          const hoguH = answers['호구력(인간)']
          return hogu < 80 && hoguM < 80 && hoguH < 80
        },
        imageUrl: '/me.jpg',
        contents: [
          {
            id: '1',
            content: '남은 남 나는 나 아무리 친한사이라도 개인간의 존중을 중요시하는 사람이시군요!',
          },
        ],
      },
    ],
  },
  {
    id: '4',
    name: '자아도취',
    imageUrl: '/narcissism.jpg',
    description: '자아도취 TEST',
    questions: [
      {
        id: '1',
        question: '오늘 하루도 거울을 보면서 행복을 느꼈나요?.',
        onYes: [
          { id: '1', name: '자아도취감', value: 20 },
          { id: '2', name: '셀프디스', value: 0 },
          { id: '3', name: '자신감', value: 40 },
          { id: '4', name: '자괴감', value: 0 },
        ],
        onNo: [
          { id: '1', name: '자아도취감', value: 0 },
          { id: '2', name: '셀프디스', value: 20 },
          { id: '3', name: '자신감', value: 0 },
          { id: '4', name: '자괴감', value: 40 },
        ],
      },
      {
        id: '2',
        question: '길거리를 지나다니면서 다른 사람의 경외감어린 시선을 느껴본적 있나요?',
        onYes: [{ id: '1', name: '자아도취감', value: 20 }],
        onNo: [{ id: '2', name: '셀프디스', value: 20 }],
      },
      {
        id: '3',
        question: '어떤 일을 할 때 나는 반드시 해낸다고 했다가 실패한 경험이 있나요?',
        onYes: [{ id: '2', name: '셀프디스', value: 20 }],
        onNo: [{ id: '1', name: '자아도취감', value: 20 }],
      },
      {
        id: '4',
        question: '잠자리에 들때 오늘도 내가 무언가 해냈다는 생각이 드나요?',
        onYes: [
          { id: '1', name: '자아도취감', value: 20 },
          { id: '3', name: '자신감', value: 40 },
        ],
        onNo: [
          { id: '2', name: '셀프디스', value: 20 },
          { id: '4', name: '자괴감', value: 40 },
        ],
      },
      {
        id: '5',
        question: '누군가 당신을 쳐다볼때 오늘도 나의 외모가 빛나고 있다고 느끼나요?',
        onYes: [{ id: '1', name: '자아도취감', value: 20 }],
        onNo: [{ id: '2', name: '셀프디스', value: 20 }],
      },
      {
        id: '6',
        question: '상대방이 나에 대해 비난을 해도 그저 비웃음으로 응수하시나요?',
        onYes: [{ id: '1', name: '자아도취감', value: 20 }],
        onNo: [{ id: '2', name: '셀프디스', value: 20 }],
      },
      {
        id: '7',
        question:
          '어떤 대결에서 이겼을 때 "이것이 너와 나 와의 눈높이다" 대사를 치고 싶은 적이 있었나요?',
        onYes: [{ id: '1', name: '자아도취감', value: 20 }],
        onNo: [{ id: '2', name: '셀프디스', value: 20 }],
      },
      {
        id: '8',
        question: '누군가 당신의 단점을 물었을 때 도저히 찾지 못해 당황한 적 있었나요?!',
        onYes: [
          { id: '1', name: '자아도취감', value: 20 },
          { id: '3', name: '자신감', value: 40 },
        ],
        onNo: [
          { id: '2', name: '셀프디스', value: 20 },
          { id: '4', name: '자괴감', value: 40 },
        ],
      },
      {
        id: '9',
        question: '당신을 사랑하는 사람이 수도없이 많을 것이라 생각하나요?',
        onYes: [
          { id: '1', name: '자아도취감', value: 20 },
          { id: '3', name: '자신감', value: 40 },
        ],
        onNo: [
          { id: '2', name: '셀프디스', value: 20 },
          { id: '4', name: '자괴감', value: 40 },
        ],
      },
      {
        id: '10',
        question: '어떤 일을 처음 시작해도 조금만 시간이 있다면 충분히 해낼 것이라 생각하나요?',
        onYes: [
          { id: '1', name: '자아도취감', value: 20 },
          { id: '3', name: '자신감', value: 40 },
        ],
        onNo: [
          { id: '2', name: '셀프디스', value: 20 },
          { id: '4', name: '자괴감', value: 40 },
        ],
      },
    ],
    results: [
      {
        id: '1',
        title: '당신은 심각한 자아도취증이시군요.',
        condition: (answers) => {
          const narcissism = answers['자아도취감']
          const selfConfidence = answers['자신감']
          return narcissism >= 100 && selfConfidence < 120
        },
        imageUrl: '/result-narcissism-1.jpg',
        contents: [
          {
            id: '1',
            content:
              '나르시시즘이란 단어를 당신의 이름으로 바꿔야 할 정도의 엄청난 자아도취 상태입니다',
          },
        ],
      },
      {
        id: '2',
        title: '당신은 넘치는 자신감으로 자아도취증 상태로 진행중이군요!',
        condition: (answers) => {
          const narcissism = answers['자아도취감']
          const selfConfidence = answers['자신감']
          return narcissism >= 100 && selfConfidence >= 120
        },
        imageUrl: '/result-narcissism-2.jpg',
        contents: [
          {
            id: '1',
            content:
              '주변 사람들의 시선을 신경쓰지 않고 당당한 당신! 꾸준한 노력과 약간의 겸손이 더해진다면 훌륭한 인재가 될것입니다',
          },
        ],
      },
      {
        id: '3',
        title: '당신은 평범합니다. 당신에겐 자아도취는 과도한 수식어!.',
        condition: (answers) => {
          const narcissism = answers['자아도취감']
          const selfConfidence = answers['자신감']
          return narcissism < 100 && selfConfidence >= 120
        },
        imageUrl: '/result-narcissism-3.jpg',
        contents: [
          {
            id: '1',
            content:
              '누구나 자아도취 해본적 있지않나요? 적어도 화장실 앞에선 내 모습이 한결 빛난다던지?',
          },
        ],
      },
      {
        id: '4',
        title: '자아도취는 커녕 자신감마저 부족한 상태네요',
        condition: (answers) => {
          const narcissism = answers['자아도취감']
          const selfConfidence = answers['자신감']
          return narcissism < 100 && selfConfidence < 120
        },
        imageUrl: '/result-narcissism-4.jpg',
        contents: [
          {
            id: '1',
            content:
              '당신에겐 근거없는 자신감이라도 필요합니다! 자신에 대한 부정적인 생각은 털어버리세요',
          },
        ],
      },
    ],
  },
]
