let Common = {
    init: function () {
        this.event();
    },
    event: function () {
        // $('[data-toggle="right-card"]').on('click', function (e) {
        //     e.preventDefault();
        //     $("#right-card").toggleClass("d-none");
        // });

        // 테이블 tr 효과
        $(".table-hover").on("click", "tr", function () {
            $(this).toggleClass("tr-active");
            if ($(this).hasClass("tr-active")) {
                $(".table-hover tr").not(this).removeClass("tr-active");
                $("#right-card").removeClass("d-none");
            } else {
                $("#right-card").addClass("d-none");
            }
        });

        $('.tab-close').on('click', function(){
            $("#right-card").addClass("d-none");
        })      
         // 버튼 active
         $('[data-toggle="right-card"]').on('click', function (e) {
            $("#right-card").toggleClass("d-none");
        });

        // 버튼 active
        $('[data-toggle="btn-select"]').on('click', function (e) {
            e.preventDefault();
            $(this).toggleClass("active");
        });

        // 가격데이터 셀렉박스 옵션선택
        if ($('[multiple="multiple"]').length > 0) {
            $('[multiple="multiple"]').each(function () {
                let ph = $(this).attr('placeholder')
                $(this).bsMultiSelect({
                    cssPatch: {
                        choice: 'p-1',
                        choices: {
                            columnCount: "1",
                        },
                    },
                    css: {
                        pick: "selected",
                        pickButton: "btn-close ms-1",
                        choiceContent: 'form-check mb-0'
                    }
                    // placeholder: ph,
                });
                $(".form-select.custom[placeholder='" + ph + "']").next().find('ul.form-control').prepend(`<li class="placeholder-wrap">` + ph + `</li>`);
            });
        }


        // 데이트피커
        // $("#before-datepicker, #after-datepicker").datepicker({
        //     dateFormat: "yy.mm.dd",
        //     showButtonPanel: true,
        //     currentText: "Now",
        // }).datepicker('setDate', 'today');
        $("#before-datepicker, #after-datepicker").datetimepicker({
			format: "yyyy-mm-dd",
			minDate: '+7',
			closeText: "닫기",
			prevText: "이전달",
			nextText: "다음달",
			currentText: "오늘",
			monthNames: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"],
			monthNamesShort: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"],
			dayNames: ["일요일", "월요일", "화요일", "수요일", "목요일", "금요일", "토요일"],
			dayNamesShort: ["(일)", "(월)", "(화)", "(수)", "(목)", "(금)", "(토)"],
			dayNamesMin: ["일", "월", "화", "수", "목", "금", "토"],
			weekHeader: "주",
			dateFormat: "yy-mm-dd",
			firstDay: 0,
			isRTL: false,
			showMonthAfterYear: true,
			showOtherMonths: true,
			changeMonth: true,
			changeYear: true,
			beforeShow: function (input, inst) {
				$('#ui-datepicker-div').addClass('datepicker-wrapper');
			}
		});

        //
        function readImage(input) {
            // 인풋 태그에 파일이 있는 경우
            if (input.files && input.files[0]) {
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
                //이미지 삭제 버튼
                $(".image-delete-btn").show();
            });
        }
        // input file에 이미지 삭제
        $('.upload-image-wrap').on('click', '.image-delete-btn', function () {
            $("#preview-image").attr("src", "/assets/images/default-image.png");
            $("#input-image").val("");
            $(".image-delete-btn").hide();
        });
        // 
        $('.has-treeview > a').click( function(){
            $(this).parent().toggleClass('hide');
        })

        $('.daterangepickers').dateRangePicker({
            inline: true,
            alwaysOpen: true,
            container: ".modal-body",
            format: 'YYYY.MD.DD',
            language: 'ko',
            monthSelect: true,
            yearSelect: true,
            stickyMonths: true
        });
        
      

    }
}
// search select-box
$(document).ready(function () {
    $(".search-select").select2();
    $("select.form-select").not('[multiple="multiple"], .search-select').select2(
        {
            minimumResultsForSearch: Infinity
        }
    );
});


Common.init();
