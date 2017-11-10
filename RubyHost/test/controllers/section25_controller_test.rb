require 'test_helper'

class Section25ControllerTest < ActionDispatch::IntegrationTest
  test "should get Index" do
    get section25_Index_url
    assert_response :success
  end

end
