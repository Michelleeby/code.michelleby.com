require 'nokogiri'
img = "assets/img/icons/cloud.svg"

doc = File.open(img) { |f| Nokogiri::XML(f) }

puts doc.at_css("svg")["width"].to_f