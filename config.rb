Slim::Engine.set_default_options pretty: true

helpers do
  def nl
    "\n"
  end
end

page '/404.html', layout: false

set :css_dir, 'stylesheets'
set :js_dir, 'javascripts'
set :images_dir, 'images'

# Build-specific configuration
configure :build do
  activate :minify_css
  activate :minify_javascript
end
