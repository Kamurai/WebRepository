require 'test_helper'

class Division3ControllerTest < ActionDispatch::IntegrationTest
  test "should get Index" do
    get division3_Index_url
    assert_response :success
  end

end
