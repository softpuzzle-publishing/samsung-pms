let Common = {
    init: function () {
        this.event();
    },
    event: function () {
        $('[data-toggle="right-card"]').on('click', function (e) {
            e.preventDefault();
            $("#right-card").toggleClass("d-none");
        })
    }
}

Common.init();