"use strict";

var Common = {
  init: function init() {
    this.event();
  },
  event: function event() {
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
    }); // 버튼 active

    $('[data-toggle="btn-select"]').on('click', function (e) {
      e.preventDefault();
      $(this).toggleClass("active");
    }); // 가격데이터 셀렉박스 옵션선택

    if ($('[multiple="multiple"]').length > 0) {
      $('[multiple="multiple"]').each(function () {
        var ph = $(this).attr('placeholder');
        $(this).bsMultiSelect({
          cssPatch: {
            choice: 'p-1',
            choices: {
              columnCount: "2"
            }
          },
          css: {
            pick: "",
            pickButton: "btn-close ms-1",
            choiceContent: 'form-check mb-0'
          },
          placeholder: ph
        });
      });
    } // 데이트피커


    $("#before-datepicker, #after-datepicker").datepicker(); //

    function readImage(input) {
      // 인풋 태그에 파일이 있는 경우
      if (input.files && input.files[0]) {
        // 이미지 파일인지 검사 (생략)
        // FileReader 인스턴스 생성
        var reader = new FileReader(); // 이미지가 로드가 된 경우

        reader.onload = function (e) {
          var previewImage = document.getElementById("preview-image");
          previewImage.src = e.target.result;
        }; // reader가 이미지 읽도록 하기


        reader.readAsDataURL(input.files[0]);
      }
    } // input file에 change 이벤트 부여


    var inputImage = document.getElementById("input-image");

    if (inputImage !== null) {
      inputImage.addEventListener("change", function (e) {
        readImage(e.target); //이미지 삭제 버튼

        $(".image-delete-btn").show();
      });
    } // input file에 이미지 삭제


    $('.upload-image-wrap').on('click', '.image-delete-btn', function () {
      $("#preview-image").attr("src", "/assets/images/default-image.png");
      $("#input-image").val("");
      $(".image-delete-btn").hide();
    }); // 

    $('.has-treeview > a').click(function () {
      $(this).parent().toggleClass('hide'); // console.log('ads');
    });
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
};
Common.init();