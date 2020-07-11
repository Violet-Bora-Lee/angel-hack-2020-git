new Vue({
    el: "#app",
    data: {
        todos: [
            { text: "참가 신청", done: true },
            { text: "슬랙 초대 수락", done: true },
            { text: "팀 빌딩 및 확정", done: true },
            { text: "온라인 해커톤 시작", done: true },
            { text: "데모 영상 제출", done: false },
            { text: "프리젠테이션 발표 자료 제출", done: false },
            { text: "피링 녹화 영상 제출", done: false },
            { text: "기타 개발 관련 문서 제출", done: false }
        ]
    },
    methods: {
        toggle: function(todo){
            todo.done = !todo.done
        }
    }
})