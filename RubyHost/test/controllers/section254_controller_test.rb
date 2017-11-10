require 'test_helper'

class Section254ControllerTest < ActionDispatch::IntegrationTest
  test "should get Index" do
    get section254_Index_url
    assert_response :success
  end

end
