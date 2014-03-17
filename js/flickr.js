(function($) {

    var CatCollection = Backbone.Collection.extend({
        url: 'http://api.flickr.com/services/feeds/photos_public.gne?tags=cat&tagmode=any&format=json&jsoncallback=?',
        parse: function(response) {
            return response.items;
        }
    });

    var CatView = Backbone.View.extend({
        el: $('body'),
        initialize: function() {
            _.bindAll(this, 'render');
            carCollectionInstance.fetch({
                success: function(response, xhr) {
                    catView.render();
                }
            });
        },
        render: function() {
            $(this.el).append("<ul class='grid'></ul>");
            for (var i = 0; i < carCollectionInstance.length; i++) {
                $('ul', this.el).append("<li class='box'>"+ carCollectionInstance.models[i].get("description") + "</li>");
            }
        }
    });

    var carCollectionInstance = new CatCollection();
    var catView = new CatView();

})(jQuery);