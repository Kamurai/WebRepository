require 'test_helper'

class Section251ControllerTest < ActionDispatch::IntegrationTest
  test "should get Index" do
    get section251_Index_url
    assert_response :success
  end

end
