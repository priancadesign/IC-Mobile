var app = function(app) {

    app.makeController = function(stage, p, pages) {

        // pages.on("page", function(e) {
        pages.on("pagetransitioned", function(e) {
            zog(pages.page.name);
        })

        var hotSpots = new zim.HotSpots([
        	{page:p.page1, rect:p.page1.tabs.buttons[1], call:function(){pages.go(p.page2, "down");}},
			{page:p.page2, rect:p.page2.logo, call:function(){pages.go(p.page1, "up");}}
          ]);

        p.page1.tabs.on("change", function() {
            zog("button = " + p.page1.tabs.text);
            pages.go(p.page2, "down");
        });
        // p.page2.logo.on("mousedown", function(){
        //     pages.go(p.page1, "up");
        // })



    }
    return app;
}(app || {});
