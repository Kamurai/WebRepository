require 'test_helper'

class Section11ControllerTest < ActionDispatch::IntegrationTest
  test "should get Index" do
    get section11_Index_url
    assert_response :success
  end

end
