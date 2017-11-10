require 'test_helper'

class Section253ControllerTest < ActionDispatch::IntegrationTest
  test "should get Index" do
    get section253_Index_url
    assert_response :success
  end

end
