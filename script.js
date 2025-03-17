// 검색 기능 구현
const searchInput = document.getElementById("search");
const listItems = document.querySelectorAll("#topics li");

searchInput.addEventListener("input", function() {
    const query = searchInput.value.toLowerCase();

    // 각 항목을 반복하면서 필터링
    listItems.forEach(item => {
        const text = item.textContent.toLowerCase();

        // 텍스트가 검색어와 일치하는지 확인
        if (text.includes(query)) {
            item.style.display = "block"; // 일치하면 표시
        } else {
            item.style.display = "none"; // 일치하지 않으면 숨김
        }
    });
});

// 주제 클릭 시 오른쪽에 내용 표시
listItems.forEach(item => {
    item.addEventListener('click', function() {
        const content = document.querySelector('.content');
        const topicContent = item.getAttribute('data-content');
        switch(topicContent) {
            case 'c':
                content.innerHTML = '<h1>C 프로그래밍 언어</h1><p>C는 절차적 프로그래밍 언어로, 시스템 소프트웨어 및 응용 프로그램을 개발하는 데 널리 사용됩니다.</p>';
                break;
            case 'java':
                content.innerHTML = '<h1>Java 프로그래밍 언어</h1><p>Java는 객체 지향 프로그래밍 언어로, 다양한 플랫폼에서 실행되는 프로그램을 작성할 수 있습니다.</p>';
                break;
            case 'python':
                content.innerHTML = '<h1>Python 프로그래밍 언어</h1><p>Python은 고급 프로그래밍 언어로, 웹 개발, 데이터 과학, 인공지능 등에 사용됩니다.</p>';
                break;
            case 'tensorflow':
                content.innerHTML = '<h1>TensorFlow</h1><p>TensorFlow는 오픈소스 머신러닝 라이브러리로, 딥러닝 모델을 구축하고 학습시키는 데 사용됩니다.</p>';
                break;
            case 'pytorch':
                content.innerHTML = '<h1>PyTorch</h1><p>PyTorch는 딥러닝 프레임워크로, Python에서 연구와 프로덕션을 위한 모델을 만들 수 있도록 지원합니다.</p>';
                break;
            case 'ml-basics':
                content.innerHTML = '<h1>ML Basics</h1><p>기계학습의 기초에 대해 배우고, 데이터 분석 및 예측 모델링을 시작할 수 있습니다.</p>';
                break;
            default:
                content.innerHTML = '<h1>내용</h1><p>검색된 주제를 클릭하여 내용을 확인하세요!</p>';
                break;
        }
    });
});
