require 'test_helper'

class Section24ControllerTest < ActionDispatch::IntegrationTest
  test "should get Index" do
    get section24_Index_url
    assert_response :success
  end

end
