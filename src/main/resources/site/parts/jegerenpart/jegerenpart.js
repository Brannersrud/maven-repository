var libs = {
    portal: require('/lib/xp/portal'),
    thymeleaf: require('/lib/thymeleaf'),
    content: require('/lib/xp/content')
};

exports.get = function(req) {
    var view = resolve('jegerenpart.html');
    var component = libs.portal.getComponent();
	var config = component.config;

    var model = {
        config:config
    }    
    var body = libs.thymeleaf.render(view, model);

    return {
      body: body,
      contentType: 'text/html',
    };
  
  };



