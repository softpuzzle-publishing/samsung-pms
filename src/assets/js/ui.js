let Common = {
    init: function () {
        this.event();
    },
    event: function () {
        $('[data-toggle="right-card"]').on('click', function (e) {
            e.preventDefault();
            $("#right-card").toggleClass("d-none");
        });

        // 버튼 active
        $('[data-toggle="btn-select"]').on('click', function (e) {
            e.preventDefault();
            $(this).toggleClass("active");
        });

        // 가격데이터 이미지 등록
        if ($('[multiple="multiple"]').length > 0) {
            $('[multiple="multiple"]').each(function () {
                let ph = $(this).attr('placeholder')
                $(this).bsMultiSelect({
                    cssPatch: {
                        choice: 'p-1',
                        choices: {
                            columnCount: "2",
                        },
                    },
                    css: {
                        pick: "",
                        pickButton: "btn-close ms-1",
                        choiceContent: 'form-check mb-0'
                    },
                    placeholder: ph,
                });
            });
        }


        // 데이트피커
        $( "#before-datepicker, #after-datepicker" ).datepicker();
        //
        function readImage(input) {
            // 인풋 태그에 파일이 있는 경우
            if(input.files && input.files[0]) {
                // 이미지 파일인지 검사 (생략)
                // FileReader 인스턴스 생성
                const reader = new FileReader()
                // 이미지가 로드가 된 경우
                reader.onload = e => {
                    const previewImage = document.getElementById("preview-image")
                    previewImage.src = e.target.result
                }
                // reader가 이미지 읽도록 하기
                reader.readAsDataURL(input.files[0])
            }
        }
        // input file에 change 이벤트 부여
        const inputImage = document.getElementById("input-image")
        if (inputImage !== null) {
            inputImage.addEventListener("change", e => {
                readImage(e.target)
            });
        }
    }
}

Common.init();