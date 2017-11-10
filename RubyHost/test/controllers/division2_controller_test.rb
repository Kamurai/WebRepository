require 'test_helper'

class Division2ControllerTest < ActionDispatch::IntegrationTest
  test "should get Index" do
    get division2_Index_url
    assert_response :success
  end

end
