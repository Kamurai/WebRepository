require 'test_helper'

class Section252ControllerTest < ActionDispatch::IntegrationTest
  test "should get Index" do
    get section252_Index_url
    assert_response :success
  end

end
