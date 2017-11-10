require 'test_helper'

class Section21ControllerTest < ActionDispatch::IntegrationTest
  test "should get Index" do
    get section21_Index_url
    assert_response :success
  end

end
