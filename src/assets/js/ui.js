let Common = {
    init: function () {
        this.event();
    },
    event: function () {
        $('[data-toggle="right-card"]').on('click', function (e) {
            e.preventDefault();
            $("#right-card").toggleClass("d-none");
        });

        //var $bsMultiSelects = $('[multiple="multiple"]');
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
        })

    }
}

Common.init();